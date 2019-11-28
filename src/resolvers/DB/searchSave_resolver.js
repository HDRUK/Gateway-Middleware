const dbConnect = require("../../db/db");

const searchAuditLogQueryString = (userId, searchTerm, endPoint, offSet, recordLimit) => `
    INSERT INTO searchaudit_log (searchaudit_user_id, searchaudit_detail, searchaudit_end_point, searchaudit_record_offset, searchaudit_record_limit)
    VALUES ('${userId}', '${searchTerm}', '${endPoint}', '${offSet}', '${recordLimit}')
    RETURNING searchaudit_id`;

const filterValuesString = (searchAuditId, value, type) => `('${searchAuditId}', '${value}', '${type}')`;

const searchFilterQueryString = (searchAuditId, filters) => `
    INSERT INTO searchfilters (searchfilters_searchaudit_id, searchfilters_value, searchfilters_type)
    VALUES ${filters.map(filter => filterValuesString(searchAuditId, filter.value, filter.type)).join(", ")}`;

const searchSortQueryString = (searchAuditId, applied, value) => `
    INSERT INTO searchsort (searchsort_searchaudit_id, searchsort_applied, searchsort_value)
    VALUES ('${searchAuditId}', '${applied}', '${value}')`;

const searchSavedQueryString = (searchAuditId, userId, name) => `
    INSERT INTO searchsaved (searchsaved_searchaudit_id, searchsaved_user_id${name && ", searchsaved_name"})
    VALUES ('${searchAuditId}', '${userId}'${name && `, '${name}'`})`;

module.exports = {
    Mutation: {
        searchSave: async (_, { userId, searchTerm, endPoint, offSet, recordLimit, filters, sort, name }) => {
            try {
                const searchAuditLogSQL = searchAuditLogQueryString(userId, searchTerm, endPoint, offSet, recordLimit);
                const searchAudit = await dbConnect.query(searchAuditLogSQL);
                const searchAuditId = searchAudit.rows[0].searchaudit_id;

                if (filters && filters.length > 0) {
                    const searchFilterSQL = searchFilterQueryString(searchAuditId, filters);
                    await dbConnect.query(searchFilterSQL);
                }

                const searchSortSQL = searchSortQueryString(searchAuditId, sort.applied, sort.value);
                await dbConnect.query(searchSortSQL);

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
