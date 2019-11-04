const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrNoSearch: async () => {
            return fetch(`${process.env.API_BASE_URL}${process.env.API_ALL_SEARCH}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
                // body: JSON.stringify({
                //     searchTerm: "stress",
                //     limit: 20,
                //     offset: 0,`
                //     domainTypes: [],
                //     labelOnly: false,
                //     dataModelTypes: null,
                //     classifiers: [],
                //     classifierFilter: null,
                //     lastUpdatedAfter: null,
                //     lastUpdatedBefore: null,
                //     createdAfter: null,
                //     createdBefore: null
                // })
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
