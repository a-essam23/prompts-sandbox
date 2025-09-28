# Architecture Reference

**Last Updated**: 2025-01-21  
**Version**: 1.0.0

## Technology Stack
**Language**: [e.g., TypeScript 5.3]  
**Runtime**: [e.g., Node.js 20.x]  
**Framework**: [e.g., Express.js 4.18]  
**Database**: [e.g., PostgreSQL 15]  
**Testing**: [e.g., Jest + Supertest]

## Project Structure
```
src/
├── models/          # Data models and schemas
├── services/        # Business logic layer
├── controllers/     # API route handlers
├── middleware/      # Request/response processing
├── utils/           # Shared utilities
└── types/           # TypeScript type definitions

tests/
├── unit/           # Unit tests for individual functions
├── integration/    # API and service integration tests
└── fixtures/       # Test data and mocks
```

## Established Patterns

### Error Handling
```typescript
// Standard error response format
interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  };
}

// Service layer error handling
const safeApiCall = async <T>(
  operation: () => Promise<T>
): Promise<Result<T>> => {
  try {
    const data = await operation();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

### Data Validation
```typescript
// Input validation using Zod
const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  age: z.number().int().min(18).max(120)
});
```

### API Response Format
```typescript
// Consistent API responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorResponse;
  meta?: {
    timestamp: string;
    requestId: string;
  };
}
```

## Core Decisions

### Database Strategy
- **ORM**: [e.g., Prisma for type safety]
- **Migrations**: [Version controlled, automated]
- **Relationships**: [Explicit foreign keys, no cascading deletes]

### Authentication
- **Method**: [e.g., JWT with refresh tokens]
- **Storage**: [httpOnly cookies for web, localStorage for SPA]
- **Expiration**: [Access: 15min, Refresh: 7 days]

### API Design
- **Style**: RESTful with resource-based URLs
- **Versioning**: URL path versioning (/api/v1/)
- **Pagination**: Cursor-based for large datasets
- **Rate Limiting**: Per-user, per-endpoint limits

## Performance Targets
- **API Response**: p95 < 200ms
- **Database Queries**: < 50ms average
- **Memory Usage**: < 512MB baseline
- **Concurrent Users**: Support 1000+ active

## Security Constraints
- **Input Validation**: All inputs validated and sanitized
- **SQL Injection**: ORM prevents direct SQL construction
- **XSS Protection**: Headers and output encoding
- **CORS**: Restrictive origin policies

## Anti-Patterns to Avoid
- **Fat Controllers**: Keep route handlers thin, logic in services
- **Direct DB Access**: Always go through service layer
- **Synchronous File I/O**: Use async/await for all I/O operations
- **Hardcoded Secrets**: All sensitive data in environment variables
- **Global State**: Prefer dependency injection and explicit parameters
