const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrCustomSearch: async (obj, params) => {
            try {
                const filterItems = params.filterItems ? params.filterItems : "";
                const sortField = params.sortField ? params.sortField : API_REF.API_DEFAULT_SEARCH;

                const apiData = await fetch(`${API_REF.API_BASE_URL}${API_REF.API_CUSTOM_SEARCH}${filterItems}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        searchTerm: params.searchTerm,
                        limit: parseInt(params.recordLimit, 10),
                        offset: parseInt(params.recordOffset, 10),
                        domainTypes: [API_REF.API_DOMAINTYPES],
                        sort: sortField
                    })
                });
                const apiDataJSON = await apiData.json();
                return {
                    status: apiData.status,
                    message: apiData.statusText,
                    count: apiDataJSON.count,
                    data: apiDataJSON.results
                };
            } catch (e) {
                return "ERROR", e;
            }
        }
    }
};
