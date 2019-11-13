FROM node:8 
WORKDIR /src/index.js 
 
# Install app dependencies 
COPY package*.json ./ 
RUN npm install 

# Add environment variables
ENV DATABASE = HDR_GATEWAY_DB
ENV DATABASE_USER =
ENV DATABASE_PASSWORD =
ENV DATABASE_HOST =
ENV DATABASE_PORT = 5432 
ENV PORT = 5001
ENV NODE_ENV = local
ENV API_BASE_URL = https://metadata-catalogue.org/hdruk/api/
ENV API_LOGIN = authentication/login
ENV API_LOGOUT = authentication/logout
ENV API_ALL_SEARCH = dataModels
ENV API_DOMAINTYPES = DataElement, DataModel
ENV API_DATAMODELTYPES = Data Asset
 
# Copy app contents 
COPY . . 
 
# App runs on port 8080 
EXPOSE 8080 
 
# Start the app 
CMD [ "npm", "start"] 