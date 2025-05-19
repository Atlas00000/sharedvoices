# Docker Setup Guide for Shared Voices

This guide provides step-by-step instructions for containerizing the Shared Voices application using Docker. The setup includes three main components: the Next.js application (client and server), PostgreSQL database, and any additional services.

## Prerequisites

- Docker Desktop installed on your machine
- Docker Compose installed
- Git (for cloning the repository)
- Basic understanding of Docker concepts

## Project Structure

```
shared-voices/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── .dockerignore
└── ... (other project files)
```

## 1. Dockerfile Setup

Create a `Dockerfile` in the `docker` directory:

```dockerfile
# Base image
FROM node:18-alpine

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

# Build the application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
```

## 2. Docker Compose Configuration

Create a `docker-compose.yml` file in the `docker` directory:

```yaml
version: '3.8'

services:
  app:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/shared_voices
      - NEXTAUTH_URL=http://localhost:3000
      - NEXTAUTH_SECRET=your-secret-key
      - GOOGLE_CLIENT_ID=your-google-client-id
      - GOOGLE_CLIENT_SECRET=your-google-client-secret
    depends_on:
      - db
    volumes:
      - ../:/app
      - /app/node_modules
      - /app/.next

  db:
    image: postgres:14-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=shared_voices
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 3. .dockerignore Configuration

Create a `.dockerignore` file in the root directory:

```
.git
.gitignore
.next
node_modules
npm-debug.log
README.md
.env
.env.*
coverage
.vscode
.idea
*.log
```

## 4. Environment Variables

Create a `.env` file in the root directory (if not already present):

```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/shared_voices
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 5. Building and Running

### Development Mode

1. Build the containers:
```bash
docker-compose -f docker/docker-compose.yml build
```

2. Start the services:
```bash
docker-compose -f docker/docker-compose.yml up
```

3. Run database migrations:
```bash
docker-compose -f docker/docker-compose.yml exec app pnpm prisma migrate deploy
```

### Production Mode

For production, create a separate `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  app:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/shared_voices
      - NEXTAUTH_URL=https://your-domain.com
      - NEXTAUTH_SECRET=your-secret-key
      - GOOGLE_CLIENT_ID=your-google-client-id
      - GOOGLE_CLIENT_SECRET=your-google-client-secret
    depends_on:
      - db

  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=shared_voices
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 6. Useful Docker Commands

### View logs
```bash
docker-compose -f docker/docker-compose.yml logs -f
```

### Stop services
```bash
docker-compose -f docker/docker-compose.yml down
```

### Rebuild and restart
```bash
docker-compose -f docker/docker-compose.yml up --build
```

### Access database
```bash
docker-compose -f docker/docker-compose.yml exec db psql -U postgres -d shared_voices
```

## 7. Development Workflow

1. Start the development environment:
```bash
docker-compose -f docker/docker-compose.yml up
```

2. Access the application at `http://localhost:3000`

3. Make changes to the code - the application will automatically rebuild

4. Run database migrations when needed:
```bash
docker-compose -f docker/docker-compose.yml exec app pnpm prisma migrate dev
```

## 8. Production Deployment

1. Build production images:
```bash
docker-compose -f docker/docker-compose.prod.yml build
```

2. Start production services:
```bash
docker-compose -f docker/docker-compose.prod.yml up -d
```

3. Run production migrations:
```bash
docker-compose -f docker/docker-compose.prod.yml exec app pnpm prisma migrate deploy
```

## 9. Security Considerations

1. Never commit sensitive environment variables
2. Use Docker secrets for production credentials
3. Regularly update base images
4. Implement proper network security
5. Use non-root users in containers
6. Implement proper backup strategies

## 10. Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Check if the database container is running
   - Verify environment variables
   - Check network connectivity

2. **Build Failures**
   - Clear Docker cache: `docker system prune -a`
   - Check for syntax errors in Dockerfile
   - Verify all required files are present

3. **Permission Issues**
   - Check file permissions in mounted volumes
   - Verify user permissions in containers

### Debugging Commands

```bash
# View container logs
docker-compose -f docker/docker-compose.yml logs -f app

# Access container shell
docker-compose -f docker/docker-compose.yml exec app sh

# Check container status
docker-compose -f docker/docker-compose.yml ps
```

## 11. Best Practices

1. Use specific version tags for base images
2. Implement health checks
3. Use multi-stage builds for smaller images
4. Implement proper logging
5. Use Docker networks for service isolation
6. Implement proper backup strategies
7. Monitor container resources
8. Use Docker Compose for development and production

## 12. Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment#docker-image)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)

## Default Admin Login

- **Email:** admin@sharedvoices.com
- **Password:** Admin@123

> ⚠️ For security, change the admin password after first login. 