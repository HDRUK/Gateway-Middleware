const dbConnect = require("../db/db");

module.exports = {
    Query: {
        searchAuditLog: async () => {
            try {
                const result = await dbConnect.query('SELECT * from "searchAudit_log"');
                return result.rows;
            } catch (err) {
                throw new Error(`Database searchAudit_log ERROR -  ${err}`);
            }
        }
    }
};
