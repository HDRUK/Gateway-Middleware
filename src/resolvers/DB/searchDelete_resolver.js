const dbConnect = require("../../db/db");

const deleteSearchSavedQueryString = searchSavedId => `
    DELETE FROM searchsaved
    WHERE searchsaved_id='${searchSavedId}'`;

module.exports = {
    Mutation: {
        searchDelete: async (_, { searchSavedId }) => {
            try {
                const deleteSearchSavedSQL = deleteSearchSavedQueryString(searchSavedId);
                await dbConnect.query(deleteSearchSavedSQL);

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
