const typeDefs = require("./search_schema");

describe("Check that the Search Schema is defined", () => {
    beforeEach(() => {});

    it("should test that the Queries are all defined", () => {
        expect(typeDefs.definitions[0].name.value).toEqual("Query");

        expect(typeDefs.definitions[0].fields.length).toEqual(4);
    });

    it("Should check that the getSearchAuditLog Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[0].name.value).toEqual("getSearchAuditLog");
        expect(typeDefs.definitions[0].fields[0].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[0].fields[0].type.type.name.value).toEqual("SearchAudit_log");
    });

    it("Should check that the getSearchFilters Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[1].name.value).toEqual("getSearchFilters");
        expect(typeDefs.definitions[0].fields[1].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[0].fields[1].type.type.name.value).toEqual("SearchFilters");
    });

    it("Should check that the getSearchSaved Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[2].name.value).toEqual("getSearchSaved");
        expect(typeDefs.definitions[0].fields[2].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[0].fields[2].type.type.name.value).toEqual("SearchSaved");
    });

    it("Should check that the getSearchSort Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[3].name.value).toEqual("getSearchSort");
        expect(typeDefs.definitions[0].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[0].fields[3].type.type.name.value).toEqual("SearchSort");
    });
});

describe("The DB Search is configured correctly", () => {
    beforeEach(() => {});

    it("Should test the getSearchAuditLog Field Definition", () => {
        expect(typeDefs.definitions[1].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[1].name.value).toEqual("SearchAudit_log");
        expect(typeDefs.definitions[1].fields).toHaveLength(8);

        // The field definitions
        expect(typeDefs.definitions[1].fields[0].name.value).toEqual("searchaudit_id");
        expect(typeDefs.definitions[1].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[1].fields[1].name.value).toEqual("searchaudit_user_id");
        expect(typeDefs.definitions[1].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[2].name.value).toEqual("searchaudit_detail");
        expect(typeDefs.definitions[1].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[3].name.value).toEqual("searchaudit_end_point");
        expect(typeDefs.definitions[1].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[4].name.value).toEqual("searchaudit_record_offset");
        expect(typeDefs.definitions[1].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[4].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[1].fields[5].name.value).toEqual("searchaudit_record_limit");
        expect(typeDefs.definitions[1].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[5].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[1].fields[6].name.value).toEqual("searchaudit_created_on");
        expect(typeDefs.definitions[1].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[7].name.value).toEqual("searchaudit_updated_on");
        expect(typeDefs.definitions[1].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[7].type.name.value).toEqual("String");
    });

    it("Should test the getSearchFilters Field Definition", () => {
        expect(typeDefs.definitions[2].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[2].name.value).toEqual("SearchFilters");
        expect(typeDefs.definitions[2].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[2].fields[0].name.value).toEqual("searchfilters_id");
        expect(typeDefs.definitions[2].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[2].fields[1].name.value).toEqual("searchfilters_value");
        expect(typeDefs.definitions[2].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[2].name.value).toEqual("searchfilters_type");
        expect(typeDefs.definitions[2].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[3].name.value).toEqual("searchfilters_searchaudit_id");
        expect(typeDefs.definitions[2].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[3].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[2].fields[4].name.value).toEqual("searchfilters_created_on");
        expect(typeDefs.definitions[2].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[5].name.value).toEqual("searchfilters_updated_on");
        expect(typeDefs.definitions[2].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[5].type.name.value).toEqual("String");
    });

    it("Should test the getSearchSaved Field Definition", () => {
        expect(typeDefs.definitions[3].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[3].name.value).toEqual("SearchSaved");
        expect(typeDefs.definitions[3].fields).toHaveLength(5);

        // The field definitions
        expect(typeDefs.definitions[3].fields[0].name.value).toEqual("searchsaved_id");
        expect(typeDefs.definitions[3].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[3].fields[1].name.value).toEqual("searchsaved_user_id");
        expect(typeDefs.definitions[3].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[2].name.value).toEqual("searchsaved_searchaudit_id");
        expect(typeDefs.definitions[3].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[2].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[3].fields[3].name.value).toEqual("searchsaved_created_on");
        expect(typeDefs.definitions[3].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[4].name.value).toEqual("searchsaved_updated_on");
        expect(typeDefs.definitions[3].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[4].type.name.value).toEqual("String");
    });

    it("Should test the getSearchSort Field Definition", () => {
        expect(typeDefs.definitions[4].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[4].name.value).toEqual("SearchSort");
        expect(typeDefs.definitions[4].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[4].fields[0].name.value).toEqual("searchsort_id");
        expect(typeDefs.definitions[4].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[4].fields[1].name.value).toEqual("searchsort_applied");
        expect(typeDefs.definitions[4].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[4].fields[2].name.value).toEqual("searchsort_value");
        expect(typeDefs.definitions[4].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[4].fields[3].name.value).toEqual("searchsort_searchaudit_id");
        expect(typeDefs.definitions[4].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[3].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[4].fields[4].name.value).toEqual("searchsort_created_on");
        expect(typeDefs.definitions[4].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[4].fields[5].name.value).toEqual("searchsort_updated_on");
        expect(typeDefs.definitions[4].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[5].type.name.value).toEqual("String");
    });
});
