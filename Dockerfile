# Build stage
FROM node:25-slim AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Runtime stage
FROM node:25-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built files from build stage
COPY --from=build /app/dist ./

EXPOSE 8080

CMD ["node", "index.js"]
