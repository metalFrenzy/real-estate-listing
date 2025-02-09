# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the application
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose port for the application
EXPOSE 3000

# 7. Default command to start the app
CMD ["npm", "run", "start"]