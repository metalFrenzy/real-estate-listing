# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the application
COPY . .

# 5. Expose port for the application
EXPOSE 4000

# 6. Default command to start the app
CMD ["npm", "run", "start:dev"]