const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        // Reporting obj variable not used
        /* eslint-disable */
        hdrCatalogueItemsSearch: (obj, params) => {
            /* eslint-enable */
            return fetch(`${API_REF.API_BASE_URL}${API_REF.API_SEARCH}`, {
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
                    domainTypes: [API_REF.API_DOMAINTYPES],
                    dataModelTypes: [API_REF.API_DATAMODELTYPES],
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
                    return `ERROR ${err}`;
                });
        }
    }
};
