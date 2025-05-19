# Shared Voices Documentation

## Project Overview
Shared Voices is a platform for sharing and amplifying diverse stories and experiences. This documentation provides comprehensive information about the project's architecture, setup, and development guidelines.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Security](#security)
4. [Testing](#testing)
5. [API Documentation](#api-documentation)
6. [Deployment](#deployment)

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- pnpm 8.x or higher
- PostgreSQL 14.x or higher

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Initialize the database:
   ```bash
   pnpm prisma:push
   ```

### Development
Start the development server:
```bash
pnpm dev
```

## Project Structure
```
shared-voices/
├── app/                 # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and shared code
├── prisma/            # Database schema and migrations
├── public/            # Static assets
├── styles/            # Global styles
└── tests/             # Test files
```

## Security
The application implements several security measures:

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security

### Authentication
- NextAuth.js for authentication
- JWT-based session management
- Role-based access control

### Data Protection
- Input validation using Zod
- SQL injection prevention with Prisma
- XSS protection with React's built-in escaping

## Testing
The project uses Jest and React Testing Library for testing.

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Test Structure
- Unit tests: `__tests__` directories
- Integration tests: `tests/integration`
- E2E tests: `tests/e2e`

## API Documentation
API endpoints are documented in `API.md`. Key endpoints include:

- Authentication: `/api/auth/*`
- Stories: `/api/stories/*`
- Users: `/api/users/*`
- Admin: `/api/admin/*`

## Deployment
The application is configured for deployment on Vercel.

### Deployment Steps
1. Push to main branch
2. Vercel automatically deploys
3. Run database migrations
4. Verify deployment

### Environment Variables
Required environment variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## Contributing
1. Create a feature branch
2. Make changes
3. Write tests
4. Submit PR

## License
MIT License 