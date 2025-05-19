# Base image
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy project files
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build the application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"] 