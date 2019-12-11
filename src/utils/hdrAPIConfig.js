const API_REF = {
    API_BASE_URL: "https://metadata-catalogue.org/hdruk/api/",
    API_LOGIN: "authentication/login",
    API_LOGOUT: "authentication/logout",
    API_SEARCH: "catalogueItems/search",
    API_CUSTOM_SEARCH: "profiles/uk.ac.hdrukgateway/HdrUkProfilePluginService/customSearch",
    API_ALL_DATAMODELS: "dataModels",
    API_FILTER_VALUES: "dataModels/profile/values/uk.ac.hdrukgateway/HdrUkProfilePluginService",
    API_FILTER_FILTERS: "?filter=publisher",
    API_MODEL_BY_ID: "profile/uk.ac.hdrukgateway/HdrUkProfilePluginService",

    API_DOMAINTYPES: "DataModel",
    API_DATAMODELTYPES: "Data Asset"
};
module.exports = API_REF;
