const dbConnect = require("../../db/db");
const logger = require("../../utils/logger");

const searchSavedQueryString = (searchAuditId, userId, name) => `
    INSERT INTO searchsaved (searchsaved_searchaudit_id, searchsaved_user_id${name ? ", searchsaved_name" : ""})
    VALUES ('${searchAuditId}', '${userId}'${name ? `, '${name}'` : ""})`;

const searchNameCheckQueryString = (userId, name) => `
    SELECT searchsaved_searchaudit_id
    FROM searchsaved
    WHERE searchsaved_user_id='${userId}' AND searchsaved_name='${name}'`;

const searchCountCheckQueryString = userId => `
    SELECT count(searchsaved_id)::int
    FROM searchsaved
    WHERE searchsaved_user_id='${userId}'`;

const maxSavedSearches = 25;

module.exports = {
    Mutation: {
        searchSave: async (_, { searchAuditId, userId, name }, context) => {
            if (context.user.eduPersonTargetedID !== userId) {
                logger.log("error", "User can't be authenticated");
            }
            try {
                const searchCountCheckSQL = searchCountCheckQueryString(userId);
                const searchCountCheckData = await dbConnect.query(searchCountCheckSQL);
                if (searchCountCheckData && searchCountCheckData.rows[0].count >= maxSavedSearches)
                    return {
                        status: 403,
                        message: `Unable to save - no more than ${maxSavedSearches} saved searches allowed`
                    };

                if (name) {
                    const searchNameCheckSQL = searchNameCheckQueryString(userId, name);
                    const searchNameCheckData = await dbConnect.query(searchNameCheckSQL);
                    if (searchNameCheckData && searchNameCheckData.rows.length > 0)
                        return {
                            status: 403,
                            message: "Unable to save - name already exists"
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
