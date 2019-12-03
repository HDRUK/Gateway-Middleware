const fetch = require("node-fetch");

module.exports = {
    Query: {
        hdrFilterValues: async () => {
            try {
                const apiData = await fetch(
                    `${process.env.API_BASE_URL}${process.env.API_FILTER_VALUES}${process.env.API_FILTER_FILTERS}`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                );
                const apiDataJSON = await apiData.json();
                const dataO = Object.keys(apiDataJSON).map(inData => ({
                    fieldName: inData,
                    fieldValues: apiDataJSON[inData]
                }));
                return {
                    status: apiData.status,
                    message: apiData.statusText,
                    data: dataO
                };
            } catch (e) {
                return "ERROR", e;
            }
        }
    }
};
