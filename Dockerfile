# Base stage with dependencies
FROM node:25-slim AS base

WORKDIR /app

COPY package*.json ./

# Development stage
FROM base AS development

# Install all dependencies (including devDependencies)
RUN npm install

# Copy source code
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build

# Install all dependencies for build
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:25-slim AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built files from build stage
COPY --from=build /app/dist ./

EXPOSE 8080

CMD ["node", "index.js"]
