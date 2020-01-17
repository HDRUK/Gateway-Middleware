const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrDataModelSearch: async () => {
            return fetch(`${API_REF.API_BASE_URL}${API_REF.API_ALL_DATAMODELS}`, {
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
                    return `ERROR ${err}`;
                });
        }
    }
};
