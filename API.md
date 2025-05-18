# Shared Voices API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

### POST /api/auth/login
Authenticate a user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  },
  "token": "string"
}
```

## Profile Endpoints

### GET /api/profile
Get the current user's profile.

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "image": "string",
  "bio": "string",
  "location": "string",
  "interests": "string[]",
  "website": "string",
  "socialLinks": {
    "twitter": "string",
    "linkedin": "string",
    "github": "string"
  },
  "preferences": {
    "emailNotifications": "boolean",
    "newsletter": "boolean"
  }
}
```

### PATCH /api/profile
Update the current user's profile.

**Request Body:**
```json
{
  "name": "string",
  "bio": "string",
  "location": "string",
  "interests": "string[]",
  "website": "string",
  "socialLinks": {
    "twitter": "string",
    "linkedin": "string",
    "github": "string"
  },
  "preferences": {
    "emailNotifications": "boolean",
    "newsletter": "boolean"
  }
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "image": "string",
  "bio": "string",
  "location": "string",
  "interests": "string[]",
  "website": "string",
  "socialLinks": {
    "twitter": "string",
    "linkedin": "string",
    "github": "string"
  },
  "preferences": {
    "emailNotifications": "boolean",
    "newsletter": "boolean"
  }
}
```

## Story Endpoints

### GET /api/stories
Get a list of stories with pagination and filtering.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `category` (optional): Filter by category slug
- `tag` (optional): Filter by tag slug
- `author` (optional): Filter by author ID

**Response:**
```json
{
  "stories": [
    {
      "id": "string",
      "title": "string",
      "slug": "string",
      "excerpt": "string",
      "coverImage": "string",
      "status": "DRAFT | PUBLISHED | ARCHIVED",
      "publishedAt": "string",
      "author": {
        "id": "string",
        "name": "string",
        "image": "string"
      },
      "categories": [
        {
          "id": "string",
          "name": "string",
          "slug": "string"
        }
      ],
      "tags": [
        {
          "id": "string",
          "name": "string",
          "slug": "string"
        }
      ]
    }
  ],
  "pagination": {
    "total": "number",
    "pages": "number",
    "page": "number",
    "limit": "number"
  }
}
```

### POST /api/stories
Create a new story.

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "excerpt": "string",
  "coverImage": "string",
  "status": "DRAFT | PUBLISHED | ARCHIVED",
  "categories": "string[]",
  "tags": "string[]"
}
```

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "slug": "string",
  "content": "string",
  "excerpt": "string",
  "coverImage": "string",
  "status": "DRAFT | PUBLISHED | ARCHIVED",
  "publishedAt": "string",
  "author": {
    "id": "string",
    "name": "string",
    "image": "string"
  },
  "categories": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ],
  "tags": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

### GET /api/stories/[storyId]
Get a single story by ID.

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "slug": "string",
  "content": "string",
  "excerpt": "string",
  "coverImage": "string",
  "status": "DRAFT | PUBLISHED | ARCHIVED",
  "publishedAt": "string",
  "author": {
    "id": "string",
    "name": "string",
    "image": "string"
  },
  "categories": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ],
  "tags": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

### PATCH /api/stories/[storyId]
Update a story.

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "excerpt": "string",
  "coverImage": "string",
  "status": "DRAFT | PUBLISHED | ARCHIVED",
  "categories": "string[]",
  "tags": "string[]"
}
```

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "slug": "string",
  "content": "string",
  "excerpt": "string",
  "coverImage": "string",
  "status": "DRAFT | PUBLISHED | ARCHIVED",
  "publishedAt": "string",
  "author": {
    "id": "string",
    "name": "string",
    "image": "string"
  },
  "categories": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ],
  "tags": [
    {
      "id": "string",
      "name": "string",
      "slug": "string"
    }
  ]
}
```

### DELETE /api/stories/[storyId]
Delete a story.

**Response:**
- Status: 204 No Content

## Application Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/stories` - Stories listing page
- `/stories/[slug]` - Individual story page
- `/login` - Login page
- `/register` - Registration page

### Protected Routes
- `/dashboard` - User dashboard
- `/profile` - User profile page
- `/stories/editor` - Story editor page
- `/stories/editor/[storyId]` - Edit existing story
- `/admin` - Admin dashboard (admin only)

## Authentication

All protected routes and API endpoints require authentication using NextAuth.js. The authentication flow includes:

1. Email/Password authentication
2. Social authentication (GitHub, Google, etc.)
3. JWT-based session management

## Error Responses

All API endpoints follow a consistent error response format:

```json
{
  "error": "string",
  "message": "string",
  "statusCode": "number"
}
```

Common status codes:
- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## CORS

CORS is enabled for the following origins:
- `http://localhost:3000`
- `https://sharedvoices.org`
- `https://*.sharedvoices.org` 