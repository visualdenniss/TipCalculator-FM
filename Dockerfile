# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (cache optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of project
COPY . .

# Expose Vite port
EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev", "--", "--host"]
