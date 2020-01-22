# HDR GATEWAY

## Node GraphQL Data Handler Server

## Licence

Apache 2

## Author(s)

[IBM UK](https://www.ibm.com/uk-en)  
[Health Data Research UK](https://www.hdruk.ac.uk/)  
[University of Oxford, Department of Computer Science](http://www.cs.ox.ac.uk/)  
[Parity](https://www.parity.net/)  
[METADATAWORKS](https://metadataworks.co.uk/)  
​

## Contributors

To be added
​

## Relevant Repositories

React Front End Application [Repository](https://github.com/HDRUK/Gateway-Frontend)  
Node Web and Authentication Server [Repository](https://github.com/HDRUK/Gateway-Auth-Server)  
Node Graphql Data Handler [Repository](https://github.com/HDRUK/Gateway-Middleware)  
Postgres Database Creation and update [Repository](https://github.com/HDRUK/Gateway-DB)  
​

## Overview

This appliaction, is the data handling layer of the Gateway. It is a standalone GraphQL server, which talks to the database and the Meta Data Catalogue API's

### Installation / Running Instructions

This is a node application, all node modules are installed locally.

Download or clone from Code Repsitory

[Middleware Repository](https://github.com/HDRUK/Gateway-Middleware)

from the downloaded directory run

npm install

This will install the application on port 5001 by default.

### .env file

Create an environment file with the following options:

> DATABASE=
> DATABASE_USER=
> DATABASE_PASSWORD=
> DATABASE_HOST=
> DATABASE_PORT=
> PORT=5001
> NODE_ENV=local

> FRONTEND_APP=http://localhost:5003
>
> > this is to the port of the running Web Auth Server or if developing locally without the Auth server to 3000 for the React App.

> USER_INFO=
>
> > Open Athens URL to the user info

### Example .env file

DATABASE=HDR_DB
DATABASE_USER=postgres
DATABASE_PASSWORD=admin
DATABASE_HOST=localhost
DATABASE_PORT=5432
PORT=5001
NODE_ENV=local

FRONTEND_APP=http://localhost:5003
USER_INFO=https://open_athens/userinfo

### Useful sites:

[Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)

[Apollo Tutorial](https://www.apollographql.com/docs/tutorial/)

## Running the Application

`npm run dev`

> Runs the application in node watch mode

`npm start`

> runs the application without monitoring

## Other commands

`npm run lint`

> runs the Lint checker against the code base

`npm run test:coverage`

> runs the unit tests

`npm run sonarQube`

> runs the sonarQube code validator. You will need to either have a local copy running or configure a web service.

## Deployment

This is a node application, and requires deploying as such.

It needs to have the React Web front end built into its path and the environment variables configured accordingly.
