# HDR_MVP_Gateway_Middleware

---

### Pre Instalation requirements

> The postgreSQL Database.
>
> [Bitbucket Repository](https://bitbucket.org/hdr_mvp_gateway/hdr_gateway_postgresql_db)

### Installation / Running Instructions

> Clone the bitbucket repsoitory
>
> `git clone https://TrevorWardCIC@bitbucket.org/hdr_mvp_gateway/hdr_mvp_gateway_middleware.git`
>
> From a command prompt (Optional to use VS Code), in the cloned directory
>
> `npm install` To install all dependencies
>
> `npm run dev` To run in node monitor mode. `npm start` Will run without monitor

### Setup the .env file

The following values need to be configured (There is a .env-example)

DATABASE=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE_PORT=
PORT=5001
NODE_ENV=local

API_BASE_URL=https://metadata-catalogue.org/hdruk/api/
API_LOGIN=authentication/login
API_LOGOUT=authentication/logout
API_ALL_SEARCH=dataModels

API_DOMAINTYPES=DataElement, DataModel
API_DATAMODELTYPES=Data Asset

### The GraphQL Queries / Mutations

The main Query available is

> hdrCatalogueItemsSearch(searchTerm: String, recordOffset: Int!, recordLimit: Int!)  
> The recordOffset and recordLimit are required.

### Useful sites:

[Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)

[Apollo Tutorial](https://www.apollographql.com/docs/tutorial/)

---

```

```
