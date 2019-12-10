const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrCatalogueLogin: () => {
            return fetch(`${API_REF.API_BASE_URL}${API_REF.API_LOGIN}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "trevor.ward-cic-uk@ibm.com",
                    password: "xxxxxxxxxx!"
                })
            })
                .then(res => {
                    console.log(res);
                    return res;
                    // Build the response
                    // const dataBack = {
                    //     status: res.status,
                    //     url: res.url,
                    //     result: res.JSON()
                    // };
                    // return dataBack;
                })
                .catch(err => {
                    return "ERROR", err;
                });
        }
    }
};
