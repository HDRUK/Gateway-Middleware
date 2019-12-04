const dbConnect = require("../../db/db");

const searchSavedQueryString = (searchAuditId, userId, name) => `
    INSERT INTO searchsaved (searchsaved_searchaudit_id, searchsaved_user_id${name ? ", searchsaved_name" : ""})
    VALUES ('${searchAuditId}', '${userId}'${name ? `, '${name}'` : ""})`;

module.exports = {
    Mutation: {
        searchSave: async (_, { searchAuditId, userId, name }) => {
            try {
                const searchSavedSQL = searchSavedQueryString(searchAuditId, userId, name);
                await dbConnect.query(searchSavedSQL);

                return {
                    status: 200,
                    message: "Search saved successfully"
                };
            } catch (err) {
                throw new Error(`Database save search ERROR -  ${err}`);
            }
        }
    }
};
