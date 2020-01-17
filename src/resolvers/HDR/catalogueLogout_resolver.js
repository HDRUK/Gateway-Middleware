const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrCatalogueLogout: () => {
            return fetch(`${API_REF.API_BASE_URL}${API_REF.API_LOGOUT}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
                // body: JSON.stringify({
                //     username: "trevor.ward-cic-uk@ibm.com",
                //     password: "Development002!"
                // })
            })
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    return `ERROR ${err}`;
                });
        }
    }
};
