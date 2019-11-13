const dbConnect = require("../../db/db");

const queryString = `SELECT "searchfilters_id", "searchfilters_value", "searchfilters_type", "searchfilters_searchaudit_id", searchfilters_created_on::text, searchfilters_updated_on::text from "searchfilters"`;

module.exports = {
    Query: {
        getSearchFilters: async () => {
            try {
                const result = await dbConnect.query(queryString);
                return result.rows;
            } catch (err) {
                throw new Error(`Database search Filters ERROR -  ${err}`);
            }
        }
    }
};
