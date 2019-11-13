const dbConnect = require("../../db/db");

const queryString = `SELECT "searchsort_id", "searchsort_applied", "searchsort_value", "searchsort_searchaudit_id", searchsort_created_on::text, searchsort_updated_on::text from "searchsort"`;

module.exports = {
    Query: {
        getSearchSort: async () => {
            try {
                const result = await dbConnect.query(queryString);
                return result.rows;
            } catch (err) {
                throw new Error(`Database search Sort ERROR -  ${err}`);
            }
        }
    }
};
