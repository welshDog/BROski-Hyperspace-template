# API Documentation

This document describes the API endpoints and data structures used by the Social AI Assistant.

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 📖 Overview

The Social AI Assistant API provides endpoints for:

- Social media content management
- AI-powered content suggestions
- User preferences and settings
- Analytics and reporting

### Base URL

```
https://api.socialaiassistant.com/v1
```

### Content Type

All requests should use JSON content type:

```
Content-Type: application/json
```

## 🔐 Authentication

Currently, the API does not require authentication as it's designed for local use. Future versions may include authentication for cloud features.

### Future Authentication (Planned)

```http
Authorization: Bearer <token>
```

## 🌐 Endpoints

### Health Check

Get the health status of the API.

```http
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2025-09-08T12:00:00Z"
}
```

### Social Posts

#### Get Posts

Retrieve social media posts with optional filtering.

```http
GET /posts
```

**Query Parameters:**

- `platform` (optional): Filter by platform (twitter, linkedin, facebook, instagram, discord)
- `priority` (optional): Filter by priority (today, week, fyi)
- `limit` (optional): Number of posts to return (default: 20, max: 100)
- `offset` (optional): Pagination offset (default: 0)

**Response:**

```json
{
  "posts": [
    {
      "id": "string",
      "platform": "twitter",
      "author": "string",
      "content": "string",
      "timestamp": "2025-09-08T12:00:00Z",
      "priority": "today",
      "engagement": {
        "likes": 0,
        "shares": 0,
        "comments": 0
      }
    }
  ],
  "total": 47,
  "limit": 20,
  "offset": 0
}
```

#### Create Post

Create a new social media post.

```http
POST /posts
```

**Request Body:**

```json
{
  "platform": "twitter",
  "content": "string",
  "priority": "today",
  "scheduledFor": "2025-09-08T12:00:00Z"
}
```

**Response:**

```json
{
  "id": "string",
  "platform": "twitter",
  "content": "string",
  "priority": "today",
  "status": "draft",
  "createdAt": "2025-09-08T12:00:00Z"
}
```

#### Update Post

Update an existing post.

```http
PUT /posts/{id}
```

**Request Body:**

```json
{
  "content": "Updated content",
  "priority": "week"
}
```

#### Delete Post

Delete a post.

```http
DELETE /posts/{id}
```

### AI Features

#### Get Content Suggestions

Get AI-powered content suggestions.

```http
GET /ai/suggestions
```

**Query Parameters:**

- `topic` (optional): Topic for suggestions
- `platform` (optional): Target platform
- `tone` (optional): Desired tone (professional, casual, friendly)

**Response:**

```json
{
  "suggestions": [
    {
      "id": "string",
      "content": "Suggested content...",
      "platform": "twitter",
      "tone": "professional",
      "score": 0.85
    }
  ]
}
```

#### Analyze Content

Analyze content for readability and engagement potential.

```http
POST /ai/analyze
```

**Request Body:**

```json
{
  "content": "Content to analyze",
  "platform": "twitter"
}
```

**Response:**

```json
{
  "readability": {
    "score": 85,
    "level": "good",
    "suggestions": ["Consider shortening sentences", "Use more active voice"]
  },
  "engagement": {
    "potential": 0.75,
    "hashtags": ["#AI", "#Tech"],
    "optimalLength": 120
  }
}
```

### Analytics

#### Get Dashboard Stats

Get dashboard statistics.

```http
GET /analytics/dashboard
```

**Response:**

```json
{
  "totalPosts": 47,
  "unreadPosts": 12,
  "highPriority": 5,
  "platforms": {
    "twitter": 15,
    "linkedin": 8,
    "facebook": 12,
    "instagram": 7,
    "discord": 5
  },
  "engagement": {
    "totalLikes": 1250,
    "totalShares": 89,
    "totalComments": 234
  }
}
```

#### Get Platform Analytics

Get analytics for a specific platform.

```http
GET /analytics/platforms/{platform}
```

**Response:**

```json
{
  "platform": "twitter",
  "posts": 15,
  "engagement": {
    "likes": 450,
    "shares": 23,
    "comments": 67
  },
  "growth": {
    "followers": 1200,
    "growthRate": 0.05
  }
}
```

## 📊 Data Models

### Post

```typescript
interface Post {
  id: string;
  platform: "twitter" | "linkedin" | "facebook" | "instagram" | "discord";
  author: string;
  content: string;
  timestamp: string;
  priority: "today" | "week" | "fyi";
  engagement?: {
    likes: number;
    shares: number;
    comments: number;
  };
  status?: "draft" | "published" | "scheduled";
}
```

### ContentSuggestion

```typescript
interface ContentSuggestion {
  id: string;
  content: string;
  platform: string;
  tone: string;
  score: number;
  tags?: string[];
}
```

### ContentAnalysis

```typescript
interface ContentAnalysis {
  readability: {
    score: number;
    level: "poor" | "fair" | "good" | "excellent";
    suggestions: string[];
  };
  engagement: {
    potential: number;
    hashtags: string[];
    optimalLength: number;
  };
}
```

## ❌ Error Handling

All API errors follow a consistent format:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "field": "content",
      "reason": "Content cannot be empty"
    }
  }
}
```

### Error Codes

- `VALIDATION_ERROR`: Invalid request parameters
- `NOT_FOUND`: Resource not found
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Insufficient permissions
- `RATE_LIMITED`: Too many requests
- `INTERNAL_ERROR`: Server error

## 🚦 Rate Limiting

API requests are rate limited to prevent abuse:

- **Authenticated Requests**: 1000 requests per hour
- **Anonymous Requests**: 100 requests per hour
- **AI Features**: 50 requests per hour

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1638360000
```

## 🔄 Webhooks (Future)

When social media integrations are added, webhooks will be available for:

- New post notifications
- Engagement updates
- Platform connection status
- AI suggestion triggers

## 📝 SDKs and Libraries

### JavaScript/TypeScript

```javascript
import { SocialAIClient } from "@social-ai-assistant/sdk";

const client = new SocialAIClient({
  apiKey: "your-api-key",
});

// Get posts
const posts = await client.posts.list();

// Create a post
const post = await client.posts.create({
  platform: "twitter",
  content: "Hello, world!",
  priority: "today",
});
```

## 🔒 Privacy and Security

- All data is encrypted in transit and at rest
- No personal data is stored without explicit consent
- API keys are encrypted and never logged
- Regular security audits are performed

## 📞 Support

For API support:

- **Documentation**: This document
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

**Last Updated**: September 8, 2025
**API Version**: v1.0.0
