const query = require("./searchAuditLog_resolver");

// Currently working on tests so code left in until resolved.

// const getSearchAuditLogMock = {
//     getSearchAuditLog: [
//         {
//             searchAudit_ID: "1",
//             search_user_ID: "ANON ",
//             search_Detail: "https://theapi/thesearch?param1=1 ",
//             search_end_point: "theapi ",
//             created_on: "2019-10-17 14:38:57.459205+01",
//             last_updated: "2019-10-17 14:38:57.459205+01"
//         },
//         {
//             searchAudit_ID: "2",
//             search_user_ID: "ANON ",
//             search_Detail: "https://theapi/thesearch?param1=1 ",
//             search_end_point: "theapi ",
//             created_on: "2019-10-17 14:39:33.76316+01",
//             last_updated: "2019-10-17 14:39:33.76316+01"
//         }
//     ]
// };

// const obj = { getSearchAuditLog: getSearchAuditLogMock };
// const args = {};

describe("searchAuditLog_resolver.js", () => {
    beforeAll(() => {
        process.env = Object.assign(process.env, {
            NODE_ENV: "local",
            DATABASE: "thedatabase",
            DATABASE_USER: "theuser",
            DATABASE_PASSWORD: "thepassword",
            DATABASE_HOST: "localhost",
            DATABASE_PORT: 5432
        });
    });
    // beforeEach(() => {});
    it("Should test the Database connection configuration", async () => {
        console.log(query.Query.getSearchAuditLog);
        // const output = await query.Query.getSearchAuditLog(obj, args);
        // expect(output).toEqual(obj.getSearchAuditLog);
    });
});
