const dbConnect = require("../db/db");

const queryString = `SELECT "searchAudit_ID", "search_user_ID", "search_Detail", "search_end_point", created_on::text, last_updated::text from "searchAudit_log"`;

module.exports = {
    Query: {
        getSearchAuditLog: async () => {
            try {
                const result = await dbConnect.query(queryString);
                return result.rows;
            } catch (err) {
                throw new Error(`Database searchAudit_log ERROR -  ${err}`);
            }
        }
    }
};
