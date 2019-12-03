const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrFilterValues: () => {
            return fetch(
                `${process.env.API_BASE_URL}${process.env.API_FILTER_VALUES}${process.env.API_FILTER_FILTERS}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(res => {
                    const status = res.status;
                    const message = res.statusText;

                    return res
                        .json()
                        .then(data => {
                            return Object.keys(data).map(function(inData) {
                                return { fieldName: inData, fieldValues: data[inData] };
                            });
                        })
                        .then(dataO => {
                            return {
                                status: status,
                                message: message,
                                data: dataO
                            };
                        });
                })
                .catch(err => {
                    return "ERROR", err;
                });
        }
    }
};
