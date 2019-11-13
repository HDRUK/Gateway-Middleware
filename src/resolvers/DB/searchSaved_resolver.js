const dbConnect = require("../../db/db");

const queryString = `SELECT "searchsaved_id", "searchsaved_user_id", "searchsaved_searchaudit_id", searchsaved_created_on::text, searchsaved_updated_on::text from "searchsaved"`;

module.exports = {
    Query: {
        getSearchSaved: async () => {
            try {
                const result = await dbConnect.query(queryString);
                return result.rows;
            } catch (err) {
                throw new Error(`Database search Saved ERROR -  ${err}`);
            }
        }
    }
};
