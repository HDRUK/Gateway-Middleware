describe("index.js", () => {
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
    it("Should test the Database connection configuration", () => {
        const dbConnect = require("./db");

        expect(dbConnect.options.user).toEqual("theuser");
        expect(dbConnect.options.password).toEqual("thepassword");
        expect(dbConnect.options.host).toEqual("localhost");
        expect(dbConnect.options.port).toEqual("5432");
        expect(dbConnect.options.database).toEqual("thedatabase");
    });
});
