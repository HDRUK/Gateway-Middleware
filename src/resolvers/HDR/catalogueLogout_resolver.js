const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrCatalogueLogout: () => {
            return fetch(`${process.env.API_BASE_URL}${process.env.API_LOGOUT}`, {
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
                    return "ERROR", err;
                });
        }
    }
};
