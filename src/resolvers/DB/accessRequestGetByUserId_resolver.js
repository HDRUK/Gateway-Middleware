const dbConnect = require("../../db/db");
const moment = require("moment");
const logger = require("../../utils/logger");

const getAccessRequestsQueryString = (userId, sort) => `
    SELECT accessrequest_id, accessrequest_datamodel_id, accessrequest_aim, accessrequest_linked_datasets, accessrequest_requirements, accessrequest_project_startdate, accessrequest_ico_registration, accessrequest_benefits, accessrequest_evidence, accessrequest_contact_number, accessrequest_recipient, accessrequest_created_on
    FROM accessrequest 
    WHERE accessrequest_user_id='${userId}'
    ORDER BY accessrequest_${sort.applied} ${sort.value}`;

module.exports = {
    Query: {
        getAccessRequestsByUserID: async (_, { userId, sortField }, context) => {
            if (context.user.eduPersonTargetedID !== userId) {
                logger.log("error", "User can't be authenticated");
            }
            try {
                const sort = sortField || {
                    applied: "requested_on",
                    value: "ASC"
                };
                const accessRequestsSQL = getAccessRequestsQueryString(userId, sort);
                const accessRequested = await dbConnect.query(accessRequestsSQL);

                const requests = accessRequested.rows.map(request => {
                    const createdOn = moment(request.created_on).format("DD MMM YYYY");
                    const startDate = moment(request.accessrequest_project_startdate).format("DD MMM YYYY");
                    let result = {
                        id: request.accessrequest_id,
                        dataModelId: request.accessrequest_datamodel_id,
                        aim: request.accessrequest_aim,
                        linkedDatasets: request.accessrequest_linked_datasets,
                        requirements: request.accessrequest_requirements,
                        startDate,
                        ico: request.accessrequest_ico_registration,
                        benefits: request.accessrequest_benefits,
                        evidence: request.accessrequest_evidence,
                        contactNumber: request.accessrequest_contact_number,
                        recipient: request.accessrequest_recipient,
                        createdOn
                    };
                    return result;
                });

                return {
                    status: 200,
                    message: "Access request data",
                    data: requests
                };
            } catch (err) {
                throw new Error(`Database access request ERROR -  ${err}`);
            }
        }
    }
};
