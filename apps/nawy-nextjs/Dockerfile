# 1. Base image
FROM node:18-alpine

# 2. Install curl
RUN apk add --no-cache curl

# 3. Set working directory
WORKDIR /app

# 4. Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 5. Copy the rest of the application
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port for the application
EXPOSE 3000

# 8. Default command to start the app
CMD ["npm", "run", "start"]