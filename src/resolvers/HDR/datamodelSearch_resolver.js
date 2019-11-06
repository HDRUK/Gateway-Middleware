const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrDataModelSearch: async () => {
            return fetch(`${process.env.API_BASE_URL}${process.env.API_ALL_DATAMODELS}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    const status = res.status;
                    const message = res.statusText;

                    return res.json().then(data => {
                        return {
                            status: status,
                            message: message,
                            count: data.count,
                            data: data.items
                        };
                    });
                })
                .catch(err => {
                    console.log("FFFF");
                    return "ERROR", err;
                });
        }
    }
};
