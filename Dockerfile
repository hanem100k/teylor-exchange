FROM node:12

# Add package file
COPY package*.json ./

# Install deps
RUN npm ci

# Copy source
COPY . .

# Build dist
RUN npm run build

# After compilation phase, copy non ts files to distribution
RUN npm run copyFx

# Expose port 8080
EXPOSE 8080

CMD npm run start
