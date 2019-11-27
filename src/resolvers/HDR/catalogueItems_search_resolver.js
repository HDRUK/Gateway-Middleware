const fetch = require("node-fetch");

module.exports = {
    Query: {
        // Reporting obj variable not used
        /* eslint-disable */
        hdrCatalogueItemsSearch: (obj, params) => {
            /* eslint-enable */
            return fetch(`${process.env.API_BASE_URL}${process.env.API_SEARCH}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify({
                    searchTerm: params.searchTerm,
                    limit: parseInt(params.recordLimit, 10),
                    offset: parseInt(params.recordOffset, 10),
                    domainTypes: [process.env.API_DOMAINTYPES2],
                    dataModelTypes: [process.env.API_DATAMODELTYPES2],
                    labelOnly: false,
                    classifiers: [],
                    classifierFilter: null,
                    lastUpdatedAfter: null,
                    lastUpdatedBefore: null,
                    createdAfter: null,
                    createdBefore: null
                })
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
