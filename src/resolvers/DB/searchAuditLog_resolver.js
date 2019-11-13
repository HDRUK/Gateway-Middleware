const dbConnect = require("../../db/db");

const queryString = `SELECT "searchaudit_id", "searchaudit_user_id", "searchaudit_detail", "searchaudit_end_point", "searchaudit_record_offset", "searchaudit_record_limit", searchaudit_created_on::text, searchaudit_updated_on::text from "searchaudit_log"`;

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
