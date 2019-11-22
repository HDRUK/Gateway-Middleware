FROM node:8 
WORKDIR /src/index.js 
 
# Install app dependencies 
COPY package*.json ./ 
RUN npm install 
 
# Copy app contents 
COPY . . 
 
# Middleware runs on port 5001 
EXPOSE 5001 

#Environmental Variables
ENV DATABASE=${database}
ENV DATABASE_USER=${dbuser}
ENV DATABASE_PASSWORD=${dbpassword} 
ENV DATABASE_HOST=${dbhost} 
ENV DATABASE_PORT=${dbport}
#ENV PORT=${middlewareport} 
#ENV NODE_ENV=${middlewareenv} 
ENV PORT=5001
ENV NODE_ENV=local
ENV API_BASE_URL=${apiurl}
ENV API_LOGIN=${apilogin}
ENV API_LOGOUT=${apilogout}
ENV API_SEARCH=${apisearch}
ENV API_ALL_DATAMODELS=${datamodels}
ENV API_DOMAINTYPES=${domaintypes} 
ENV API_DATAMODELTYPES=${datamodeltypes} 
 
# Start the app 
CMD [ "npm", "start"] 