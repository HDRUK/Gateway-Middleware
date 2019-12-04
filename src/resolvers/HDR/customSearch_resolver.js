const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrCustomSearch: async (obj, params) => {
            try {
                const apiData = await fetch(
                    `${process.env.API_BASE_URL}${process.env.API_CUSTOM_SEARCH}${params.filterItems}`,
                    {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            searchTerm: params.searchTerm,
                            limit: parseInt(params.recordLimit, 10),
                            offset: parseInt(params.recordOffset, 10),
                            domainTypes: [process.env.API_DOMAINTYPES],
                            sort: params.sortField
                        })
                    }
                );
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
