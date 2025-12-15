# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a CRUD API service built with TypeScript and ExpressJS, using PostgreSQL for data persistence and JWT for authentication. The application is containerized with Docker Compose.

## Tech Stack

- **Backend**: TypeScript, ExpressJS
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Infrastructure**: Docker Compose
- **API Documentation**: Swagger (accessible at `/swagger`)

## Project Structure

```
crud-expressjs/
├── src/
│   ├── v1/
│   │   ├── controllers/ # Version 1 HTTP request handlers
│   │   └── routes/      # Version 1 API route definitions (e.g., /v1/products)
│   ├── models/          # Database models/entities
│   ├── services/        # Business logic layer
│   ├── middlewares/     # Authentication, validation, error handling
│   ├── config/          # Configuration files (database, JWT, Swagger, etc.)
│   ├── migrations/      # Database migration files
│   ├── seeds/           # Database seed data
│   └── index.ts         # Application entry point
├── docker-compose.yml   # Docker services configuration
├── Dockerfile           # Application container definition
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

**Versioning**: Routes and controllers are organized under version folders (e.g., `src/v1/`) to support API versioning. All endpoints are prefixed with the version number (e.g., `/v1/products`).

## Development Commands

### Starting the Application

```bash
# Start all services and dependencies
# Database migrations and seed data run automatically on startup
docker-compose up -d
```

### Accessing the Application

- API server runs on `http://localhost:8080`
- Swagger documentation available at `http://localhost:8080/swagger`

## API Architecture

### Versioning Strategy

All API endpoints are prefixed with `/v1` for version control.

### Authentication Flow

1. Users must register via `/register` endpoint
2. Login via `/login` to receive an `access_token`
3. The `access_token` must be attached to all protected endpoints (products APIs)
4. Logout via `/logout` invalidates the token

### Resource Endpoints

**Authentication (Public)**:

- `POST /register` - User registration
- `POST /login` - User authentication, returns JWT token
- `POST /logout` - Token invalidation

**Products (Protected - Requires JWT)**:

- `POST /products` - Create new product
- `GET /products/:id` - Retrieve single product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product (idempotent)
- `GET /products?page=1&size=10&filter={}&sort=created_at&order=asc` - List products with pagination

### Important Implementation Notes

**Delete Operation Idempotency**: The DELETE `/products/:id` endpoint must be idempotent - calling it multiple times with the same ID should return the same result without error.

### Data Models

**User**:

- id: UUID version 7 (auto-generated)
- username: string
- password: string (hashed)
- salt: string (auto-generated md5 string)

**Product**:

- id: UUID version 7 (auto-generated)
- name: string
- price: string
- created_by: UUID version 7 (link to user_id)
- created_at: ISO Date (auto-generated)
- updated_by: UUID version 7 (link to user_id)
- updated_at: ISO Date (auto-generated)

## Database

PostgreSQL is used for persistent storage. Database migrations and seed data are executed automatically when the application starts up via Docker Compose.
