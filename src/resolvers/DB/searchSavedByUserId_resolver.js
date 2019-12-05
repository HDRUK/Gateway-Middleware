const dbConnect = require("../../db/db");
const moment = require("moment");

const getSearchSavedQueryString = userId => `
    SELECT searchsaved_id, searchsaved_searchaudit_id, searchsaved_created_on, searchsaved_name
    FROM searchsaved 
    WHERE searchsaved_user_id='${userId}'`;

const getSearchAuditLogQueryString = searchAuditId => `
    SELECT searchaudit_detail, searchaudit_end_point, searchaudit_record_offset, searchaudit_record_limit, searchaudit_created_on
    FROM searchaudit_log
    WHERE searchaudit_id='${searchAuditId}'`;

const getSearchFilterQueryString = searchAuditId => `
    SELECT searchfilters_value, searchfilters_type
    FROM searchfilters
    WHERE searchfilters_searchaudit_id='${searchAuditId}'`;

const getSearchSortQueryString = searchAuditId => `
    SELECT searchsort_applied, searchsort_value 
    FROM searchsort
    WHERE searchsort_searchaudit_id='${searchAuditId}'`;

module.exports = {
    Query: {
        getSearchSavedByUserID: async (_, { userId }) => {
            try {
                const searchSavedSQL = getSearchSavedQueryString(userId);
                const searchSaved = await dbConnect.query(searchSavedSQL);

                const searches = await Promise.all(
                    searchSaved.rows.map(async search => {
                        const searchAuditId = search.searchsaved_searchaudit_id;
                        const searchAuditLogSQL = getSearchAuditLogQueryString(searchAuditId);
                        const searchAudit = await dbConnect.query(searchAuditLogSQL);
                        const searchAuditRow = searchAudit.rows[0];

                        const searchFilterSQL = getSearchFilterQueryString(searchAuditId);
                        const searchFilters = await dbConnect.query(searchFilterSQL);

                        let filters = [];

                        if (searchFilters.rows && searchFilters.rows.length > 0) {
                            filters = searchFilters.rows.map(filter => {
                                return {
                                    type: filter.searchfilters_type,
                                    value: filter.searchfilters_value
                                };
                            });
                        }

                        const searchSortSQL = getSearchSortQueryString(searchAuditId);
                        const searchSort = await dbConnect.query(searchSortSQL);
                        const searchSortData = searchSort.rows[0];

                        const sortObject = {
                            applied: searchSortData.searchsort_applied,
                            value: searchSortData.searchsort_value
                        };

                        const createdOn = moment(searchAuditRow.searchaudit_created_on).format("DD MMM YYYY");

                        let combinedResult = {
                            id: search.searchsaved_id,
                            auditId: searchAuditId,
                            detail: searchAuditRow.searchaudit_detail.trim(),
                            endPoint: searchAuditRow.searchaudit_end_point.trim(),
                            recordOffset: searchAuditRow.searchaudit_record_offset,
                            recordLimit: searchAuditRow.searchaudit_record_limit,
                            createdOn,
                            sort: sortObject
                        };

                        search.searchsaved_name && (combinedResult.name = search.searchsaved_name);
                        filters && filters.length > 0 && (combinedResult.filters = filters);

                        return combinedResult;
                    })
                );

                return {
                    status: 200,
                    message: "Search saved data",
                    data: searches
                };
            } catch (err) {
                throw new Error(`Database save search ERROR -  ${err}`);
            }
        }
    }
};
