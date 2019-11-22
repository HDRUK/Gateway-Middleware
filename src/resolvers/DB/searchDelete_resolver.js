const dbConnect = require("../../db/db");

// const searchAuditLogQueryString = id => `
//     DELETE FROM searchaudit_log
//     WHERE searchaudit_id = ;

const deleteSearchFilterQueryString = searchAuditId => `
    DELETE FROM searchfilters
    WHERE searchfilters_searchaudit_id=${searchAuditId}`;

const deleteSearchSortQueryString = searchAuditId => `
    DELETE FROM searchsort
    WHERE searchsort_searchaudit_id=${searchAuditId}`;

const searchSavedQueryString = searchSavedId => `
    SELECT searchsaved_searchaudit_id
    FROM searchsaved
    WHERE searchsaved_id='${searchSavedId}'`;

const deleteSearchSavedQueryString = searchSavedId => `
    DELETE FROM searchsaved
    WHERE searchsaved_id='${searchSavedId}'`;

module.exports = {
    Mutation: {
        searchDelete: async (_, { searchSavedId }) => {
            // 1: Retrieve searchsaved_searchaudit_id from searchsaved
            // 2: Use searchsaved_searchaudit_id to delete filters and sort
            // 3: Delete saved search from searchsaved

            try {
                const searchSavedSQL = searchSavedQueryString(searchSavedId);
                const searchSaved = await dbConnect.query(searchSavedSQL);

                const searchAuditId = searchSaved.rows[0].searchsaved_searchaudit_id;

                const deleteSearchFilterSQL = deleteSearchFilterQueryString(searchAuditId);
                await dbConnect.query(deleteSearchFilterSQL);

                const deleteSearchSortSQL = deleteSearchSortQueryString(searchAuditId);
                await dbConnect.query(deleteSearchSortSQL);

                const deleteSearchSavedSQL = deleteSearchSavedQueryString(searchSavedId);
                await dbConnect.query(deleteSearchSavedSQL);

                // TODO: Decide whether we should also delete the auditLog or not
                // const searchAuditLogSQL = searchAuditLogQueryString(id);
                // const searchAudit = await dbConnect.query(searchAuditLogSQL);
                // const searchAuditId = searchAudit.rows[0].searchaudit_id;

                return {
                    status: 200,
                    message: "Search deleted successfully"
                };
            } catch (err) {
                throw new Error(`Database save search ERROR -  ${err}`);
            }
        }
    }
};
