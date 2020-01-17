const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrDataModelID: async (obj, params) => {
            return fetch(`${API_REF.API_BASE_URL}facets/${params.ID}/${API_REF.API_MODEL_BY_ID}`, {
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
                    return `ERROR ${err}`;
                });
        }
    }
};
