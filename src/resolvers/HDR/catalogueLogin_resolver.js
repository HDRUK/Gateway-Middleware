const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrCatalogueLogin: () => {
            return fetch(`${process.env.API_BASE_URL}${process.env.API_LOGIN}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "trevor.ward-cic-uk@ibm.com",
                    password: "Development002!"
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
