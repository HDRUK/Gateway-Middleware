const dbConnect = require("../../db/db");

const queryString = userId => `INSERT INTO searchsaved (searchsaved_user_id) VALUES ('${userId}')`;

module.exports = {
    Mutation: {
        searchSave: async (_, { userId }) => {
            try {
                console.log("helllo", userId);
                const modifiedQueryString = queryString(userId);
                const result = await dbConnect.query(modifiedQueryString);
                console.log("result", result);
                return {
                    status: 200,
                    message: "Test"
                };
            } catch (err) {
                throw new Error(`Database save search ERROR -  ${err}`);
            }
        }
    }
};
