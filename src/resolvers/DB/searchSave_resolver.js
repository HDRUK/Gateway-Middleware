const dbConnect = require("../../db/db");

const searchSavedQueryString = (searchAuditId, userId, name) => `
    INSERT INTO searchsaved (searchsaved_searchaudit_id, searchsaved_user_id${name ? ", searchsaved_name" : ""})
    VALUES ('${searchAuditId}', '${userId}'${name ? `, '${name}'` : ""})`;

const searchNameCheckQueryString = (userId, name) => `
    SELECT searchsaved_searchaudit_id
    FROM searchsaved
    WHERE searchsaved_user_id='${userId}' AND searchsaved_name='${name}'`;

module.exports = {
    Mutation: {
        searchSave: async (_, { searchAuditId, userId, name }) => {
            try {
                if (name) {
                    const searchNameCheckSQL = searchNameCheckQueryString(userId, name);
                    const searchNameCheckData = await dbConnect.query(searchNameCheckSQL);
                    if (searchNameCheckData && searchNameCheckData.rows.length > 0)
                        return {
                            status: 403,
                            message: "Unable to save: name already exists"
                        };
                }

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
