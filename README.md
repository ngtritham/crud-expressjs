# crud-expressjs

## Context

Basic CRUD API service

## Tech

- Language & Framework: Typescript, ExpressJS
- Database: PostgreSQL, TypeORM
- Auth: JWT
- Other: Docker, Docker-compose

## Project structure

## How to start

1. Run all services & dependencies

```bash
    docker-compose up -d
```

2. Execute `make init` to run seed data
3. Access `http://localhost:8080/swagger` to use APIs
4. Use login API to get `access_token`
5. Attach `access_token` to products's API section
6. Try products's APIs with sample payload below

## API Spec

### Versioning

Prefix path /v1 for version

### Endpoints

1. User login

- Register
  - Path: /register
  - Payload:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
  - Response:
    - ✅ 201
  ```json
  {
    "status": "string",
    "expired_in": "string"
  }
  ```
- Login
  - Path: /login
  - Payload:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
  - Response:
    - ✅ 200 Login success
    - 🚫 401 Login failed
  ```json
  {
    "access_token": "string",
    "expired_in": "string"
  }
  ```
- Logout
  - Path: /logout
  - Response:
    - ✅ 204 Logout success

2. Products

- Add
  - Path: /products
  - Method: POST
  - Payload:
  ```json
  {
    "name": "string",
    "price": "string"
  }
  ```
  - Response:
    - ✅ 201 Created
    ```json
    {
      "id": "uuid",
      "name": "string",
      "price": "string",
      "created_at": "ISO Date"
    }
    ```
- Update
  - Path: /products/:id
  - Method: PUT
  - Payload:
  ```json
  {
    "name": "string",
    "price": "string"
  }
  ```
  - Response:
    - ✅ 200 Ok
    ```json
    {
      "id": "uuid",
      "name": "string",
      "price": "string",
      "created_at": "ISO Date"
    }
    ```
- Get
  - Path: /products/:id
  - Method: GET
  - Response:
    - ✅ 200 Ok
    ```json
    {
      "id": "uuid",
      "name": "string",
      "price": "string",
      "created_at": "ISO Date"
    }
    ```
- Delete
  - ⚠️ Idenpotency required
  - Path: /products/:id
  - Method: DELETE
  - Response:
    - ✅ 204 No content
- List
  - ⚠️ Depend on volume of actual data need to filter out, URL characters length is limit in browsers. There's 2 alternative:
    - Use POST method and put the filter query to body
    - Use GraphQL, it's using POST method in its nature
  - Path: /products?page=1&size=10&filter={"name":"alan"}&sort=created_at&order=asc
  - Method: GET
  - Response:
    - ✅ 200 Ok
    ```json
    {
      "id": "uuid",
      "name": "string",
      "price": "string",
      "created_at": "ISO Date"
    }
    ```
