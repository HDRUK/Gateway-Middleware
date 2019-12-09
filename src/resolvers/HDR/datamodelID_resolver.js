const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrDataModelID: async (obj, params) => {
            return fetch(`${process.env.API_BASE_URL}facets/${params.ID}/${process.env.API_MODEL_BY_ID}`, {
                method: "GET",
                headers: {
                    Accept: "*/*",
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
                            count: 1,
                            data: data
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
