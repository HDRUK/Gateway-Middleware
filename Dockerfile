FROM node:8  
WORKDIR /src/index.js  
  
# Install app dependencies  
COPY package*.json ./  
RUN npm install  
 
# Copy app contents  
COPY . .  
 
# Expose ports needed 
EXPOSE 8080  
EXPOSE 5432  
EXPOSE 5001 
 
# Add environment variables 
ENV DATABASE = HDR_GATEWAY_DB 
ENV DATABASE_USER = HDR_DB_ACCESS 
ENV DATABASE_PASSWORD = abcd 
ENV DATABASE_HOST = mycluster.cluster-123456789012.us-east-1.rds.amazonaws.com 
ENV DATABASE_PORT = 5432  
ENV PORT = 5001 
ENV NODE_ENV = local 
ENV API_BASE_URL = https://metadata-catalogue.org/hdruk/api/ 
ENV API_LOGIN = authentication/login 
ENV API_LOGOUT = authentication/logout 
ENV API_ALL_SEARCH = dataModels 
ENV API_DOMAINTYPES = DataElement, DataModel 
ENV API_DATAMODELTYPES = Data Asset 
  
# Start the app  
CMD [ "npm", "start"]  