FROM node:12

# Add package file
COPY package*.json ./

# Install deps
RUN npm ci

# Copy source
COPY . .

# Build dist
RUN npm run build

# Expose port 8080
EXPOSE 8080

CMD npm run start
