import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

interface OptimizeImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp';
}

export async function optimizeImage(
  inputPath: string,
  outputPath: string,
  options: OptimizeImageOptions = {}
) {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  try {
    // Ensure output directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Process image
    let pipeline = sharp(inputPath);

    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }

    // Convert to specified format
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp({ quality });
        break;
      case 'jpeg':
        pipeline = pipeline.jpeg({ quality });
        break;
      case 'png':
        pipeline = pipeline.png({ quality });
        break;
    }

    // Save optimized image
    await pipeline.toFile(outputPath);

    return {
      success: true,
      path: outputPath
    };
  } catch (error) {
    console.error('Error optimizing image:', error);
    return {
      success: false,
      error
    };
  }
}

export async function generateResponsiveImages(
  inputPath: string,
  outputDir: string,
  sizes: number[] = [640, 768, 1024, 1280, 1536]
) {
  const results = [];

  for (const size of sizes) {
    const outputPath = path.join(
      outputDir,
      `${path.basename(inputPath, path.extname(inputPath))}-${size}.webp`
    );

    const result = await optimizeImage(inputPath, outputPath, {
      width: size,
      format: 'webp'
    });

    if (result.success) {
      results.push({
        size,
        path: result.path
      });
    }
  }

  return results;
} 