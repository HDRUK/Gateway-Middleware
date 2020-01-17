const fetch = require("node-fetch");

const API_REF = require("../../utils/hdrAPIConfig");

module.exports = {
    Query: {
        hdrFilterValues: async () => {
            try {
                const apiData = await fetch(
                    `${API_REF.API_BASE_URL}${API_REF.API_FILTER_VALUES}${API_REF.API_FILTER_FILTERS}`,
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
            } catch (err) {
                return `ERROR ${err}`;
            }
        }
    }
};
