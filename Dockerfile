# Stage 1: Uses Node.js to create the optimized React production build.
FROM node:24-alpine AS build

# Creates and selects the required working directory inside Docker.
WORKDIR /divino_paolo_ui_garden

# Copies the package files first so Docker can install dependencies.
COPY package.json package-lock.json ./

# Installs the exact dependency versions from package-lock.json.
RUN npm ci

# Copies the remaining project files into the Docker image.
COPY . .

# Creates the optimized React files in the build folder.
RUN npm run build


# Stage 2: Uses Nginx to serve the completed production files.
FROM nginx:1.27-alpine

# Uses the required directory for the hosted site files.
WORKDIR /divino_paolo_ui_garden

# Copies the React build from Stage 1 into the hosting directory.
COPY --from=build /divino_paolo_ui_garden/build .

# Copies our Nginx settings into the server.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Documents that the web server listens on port 8083.
EXPOSE 8083

# Starts Nginx and keeps it running as the main container process.
CMD ["nginx", "-g", "daemon off;"]