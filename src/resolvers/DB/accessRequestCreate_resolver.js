const dbConnect = require("../../db/db");
const logger = require("../../utils/logger");

const accessRequestedQueryString = (
    userId,
    dataModelId,
    aim,
    linkedDatasets,
    requirements,
    startDate,
    ico,
    benefits,
    evidence,
    number,
    recipient
) => `
    INSERT INTO accessrequest (accessrequest_user_id, accessrequest_datamodel_id, accessrequest_aim, accessrequest_linked_datasets, accessrequest_requirements${
        startDate ? ", accessrequest_project_startdate" : ""
    }${ico ? ", accessrequest_ico_registration" : ""}${benefits ? ", accessrequest_benefits" : ""}${
    evidence ? ", accessrequest_evidence" : ""
}${number ? ", accessrequest_contact_number" : ""}${recipient ? ", accessrequest_recipient" : ""})
    VALUES ('${userId}', '${dataModelId}', '${aim}', '${linkedDatasets}', '${requirements}'${
    startDate ? `, '${startDate}'` : ""
}${ico ? `, '${ico}'` : ""}${benefits ? `, '${benefits}'` : ""}${evidence ? `, '${evidence}'` : ""}${
    number ? `, '${number}'` : ""
}${recipient ? `, '${recipient}'` : ""})`;

module.exports = {
    Mutation: {
        requestAccess: async (
            _,
            {
                userId,
                dataModelId,
                aim,
                linkedDatasets,
                requirements,
                startDate,
                ico,
                benefits,
                evidence,
                number,
                recipient
            },
            context
        ) => {
            if (context.user.eduPersonTargetedID !== userId) {
                logger.log("error", "User can't be authenticated");
            }
            try {
                const accessRequestedSQL = accessRequestedQueryString(
                    userId,
                    dataModelId,
                    aim,
                    linkedDatasets,
                    requirements,
                    startDate,
                    ico,
                    benefits,
                    evidence,
                    number,
                    recipient
                );
                await dbConnect.query(accessRequestedSQL);

                return {
                    status: 200,
                    message: "Access request saved successfully"
                };
            } catch (err) {
                throw new Error(`Database save access request ERROR -  ${err}`);
            }
        }
    }
};
