const typeDefs = require("./search_schema");

describe("Check that the Search Schema is defined", () => {
    beforeEach(() => {});

    it("should test that the Queries are all defined", () => {
        expect(typeDefs.definitions[0].name.value).toEqual("Query");
        expect(typeDefs.definitions[0].fields.length).toEqual(5);
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

    it("Should check that the getSearchSavedByUserID Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[4].name.value).toEqual("getSearchSavedByUserID");
        expect(typeDefs.definitions[0].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[4].type.name.value).toEqual("SearchSavedResult");
    });

    it("Should check the getSearchSavedByUserID input parameters", () => {
        const inputs = typeDefs.definitions[0].fields[4].arguments;
        expect(inputs.length).toEqual(1);
        expect(inputs[0].name.value).toEqual("userId");
        expect(inputs[0].type.kind).toEqual("NonNullType");
        expect(inputs[0].type.type.name.value).toEqual("String");
    });

    it("Should test that the Mutations are all defined", () => {
        expect(typeDefs.definitions[1].name.value).toEqual("Mutation");
        expect(typeDefs.definitions[1].fields.length).toEqual(3);
    });

    it("Should check that the searchAuditLogSave Mutation is defined correctly", () => {
        expect(typeDefs.definitions[1].fields[0].name.value).toEqual("searchAuditLogSave");
        expect(typeDefs.definitions[1].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[0].type.name.value).toEqual("SearchAuditLogResult");
    });

    it("Should check the searchAuditLogSave input parameters", () => {
        const i = 1;
        const inputs = typeDefs.definitions[i].fields[0].arguments;
        expect(inputs.length).toEqual(7);
        expect(inputs[0].name.value).toEqual("userId");
        expect(inputs[0].type.kind).toEqual("NonNullType");
        expect(inputs[0].type.type.name.value).toEqual("String");

        expect(inputs[1].name.value).toEqual("searchTerm");
        expect(inputs[1].type.kind).toEqual("NonNullType");
        expect(inputs[1].type.type.name.value).toEqual("String");

        expect(inputs[2].name.value).toEqual("endPoint");
        expect(inputs[2].type.kind).toEqual("NonNullType");
        expect(inputs[2].type.type.name.value).toEqual("String");

        expect(inputs[3].name.value).toEqual("offSet");
        expect(inputs[3].type.kind).toEqual("NonNullType");
        expect(inputs[3].type.type.name.value).toEqual("Int");

        expect(inputs[4].name.value).toEqual("recordLimit");
        expect(inputs[4].type.kind).toEqual("NonNullType");
        expect(inputs[4].type.type.name.value).toEqual("Int");

        expect(inputs[5].name.value).toEqual("filters");
        expect(inputs[5].type.kind).toEqual("ListType");
        expect(inputs[5].type.type.name.value).toEqual("FilterInput");

        expect(inputs[6].name.value).toEqual("sort");
        expect(inputs[6].type.kind).toEqual("NonNullType");
        expect(inputs[6].type.type.name.value).toEqual("SortInput");
    });

    it("Should check that the searchSave Mutation is defined correctly", () => {
        expect(typeDefs.definitions[1].fields[1].name.value).toEqual("searchSave");
        expect(typeDefs.definitions[1].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[1].type.name.value).toEqual("GenericQueryResult");
    });

    it("Should check the searchSave input parameters", () => {
        const i = 1;
        const inputs = typeDefs.definitions[i].fields[1].arguments;
        expect(inputs.length).toEqual(3);
        expect(inputs[0].name.value).toEqual("searchAuditId");
        expect(inputs[0].type.kind).toEqual("NonNullType");
        expect(inputs[0].type.type.name.value).toEqual("String");

        expect(inputs[1].name.value).toEqual("userId");
        expect(inputs[1].type.kind).toEqual("NonNullType");
        expect(inputs[1].type.type.name.value).toEqual("String");

        expect(inputs[2].name.value).toEqual("name");
        expect(inputs[2].type.kind).toEqual("NamedType");
        expect(inputs[2].type.name.value).toEqual("String");
    });

    it("Should check that the searchDelete Mutation is defined correctly", () => {
        expect(typeDefs.definitions[1].fields[2].name.value).toEqual("searchDelete");
        expect(typeDefs.definitions[1].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[2].type.name.value).toEqual("GenericQueryResult");
    });

    it("Should check the searchDelete input parameters", () => {
        const inputs = typeDefs.definitions[1].fields[2].arguments;
        expect(inputs.length).toEqual(1);
        expect(inputs[0].name.value).toEqual("searchSavedId");
        expect(inputs[0].type.kind).toEqual("NonNullType");
        expect(inputs[0].type.type.name.value).toEqual("String");
    });

    it("Should test the GenericQueryResult defintition", () => {
        const i = 8;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("GenericQueryResult");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });
});

describe("Check that the correct inputs are included and defined", () => {
    beforeEach(() => {});

    it("Should check that the Filter input is defined correctly", () => {
        const i = 2;
        expect(typeDefs.definitions[i].kind).toEqual("InputObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("FilterInput");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("type");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("value");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });

    it("Should check that the Sort input is defined correctly", () => {
        const i = 3;
        expect(typeDefs.definitions[i].kind).toEqual("InputObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SortInput");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("applied");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("value");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });
});

describe("The DB Search is configured correctly", () => {
    beforeEach(() => {});

    it("Should test the getSearchAuditLog Field Definition", () => {
        const i = 4;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchAudit_log");
        expect(typeDefs.definitions[i].fields).toHaveLength(8);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("searchaudit_id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("searchaudit_user_id");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("searchaudit_detail");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[3].name.value).toEqual("searchaudit_end_point");
        expect(typeDefs.definitions[i].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[4].name.value).toEqual("searchaudit_record_offset");
        expect(typeDefs.definitions[i].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[4].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[i].fields[5].name.value).toEqual("searchaudit_record_limit");
        expect(typeDefs.definitions[i].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[5].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[i].fields[6].name.value).toEqual("searchaudit_created_on");
        expect(typeDefs.definitions[i].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[7].name.value).toEqual("searchaudit_updated_on");
        expect(typeDefs.definitions[i].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[7].type.name.value).toEqual("String");
    });

    it("Should test the getSearchFilters Field Definition", () => {
        const i = 5;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchFilters");
        expect(typeDefs.definitions[i].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("searchfilters_id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("searchfilters_value");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("searchfilters_type");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[3].name.value).toEqual("searchfilters_searchaudit_id");
        expect(typeDefs.definitions[i].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[3].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[4].name.value).toEqual("searchfilters_created_on");
        expect(typeDefs.definitions[i].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[5].name.value).toEqual("searchfilters_updated_on");
        expect(typeDefs.definitions[i].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[5].type.name.value).toEqual("String");
    });

    it("Should test the getSearchSaved Field Definition", () => {
        const i = 6;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchSaved");
        expect(typeDefs.definitions[i].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("searchsaved_id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("searchsaved_user_id");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("searchsaved_searchaudit_id");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[3].name.value).toEqual("searchsaved_name");
        expect(typeDefs.definitions[i].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[4].name.value).toEqual("searchsaved_created_on");
        expect(typeDefs.definitions[i].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[5].name.value).toEqual("searchsaved_updated_on");
        expect(typeDefs.definitions[i].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[5].type.name.value).toEqual("String");
    });

    it("Should test the getSearchSort Field Definition", () => {
        const i = 7;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchSort");
        expect(typeDefs.definitions[i].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("searchsort_id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("searchsort_applied");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("searchsort_value");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[3].name.value).toEqual("searchsort_searchaudit_id");
        expect(typeDefs.definitions[i].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[3].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[4].name.value).toEqual("searchsort_created_on");
        expect(typeDefs.definitions[i].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[5].name.value).toEqual("searchsort_updated_on");
        expect(typeDefs.definitions[i].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[5].type.name.value).toEqual("String");
    });
});

describe("The results fields are configured correctly", () => {
    beforeEach(() => {});

    it("Should test the GenericQueryResult Field Definition", () => {
        const i = 8;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("GenericQueryResult");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });

    it("Should test the SearchAuditLogResult Field Definition", () => {
        const i = 9;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchAuditLogResult");
        expect(typeDefs.definitions[i].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("data");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("DataId");
    });

    it("Should test the SearchSavedResult Field Definition", () => {
        const i = 10;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SearchSavedResult");
        expect(typeDefs.definitions[i].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("data");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[i].fields[2].type.type.name.value).toEqual("SavedSearch");
    });

    it("Should test the SavedSearch Field Definition", () => {
        const i = 11;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("SavedSearch");
        expect(typeDefs.definitions[i].fields).toHaveLength(9);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("detail");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[2].name.value).toEqual("endPoint");
        expect(typeDefs.definitions[i].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[3].name.value).toEqual("recordOffset");
        expect(typeDefs.definitions[i].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[3].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[i].fields[4].name.value).toEqual("recordLimit");
        expect(typeDefs.definitions[i].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[4].type.name.value).toEqual("Int");

        expect(typeDefs.definitions[i].fields[5].name.value).toEqual("createdOn");
        expect(typeDefs.definitions[i].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[5].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[6].name.value).toEqual("name");
        expect(typeDefs.definitions[i].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[7].name.value).toEqual("filters");
        expect(typeDefs.definitions[i].fields[7].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[i].fields[7].type.type.name.value).toEqual("Filter");

        expect(typeDefs.definitions[i].fields[8].name.value).toEqual("sort");
        expect(typeDefs.definitions[i].fields[8].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[8].type.name.value).toEqual("Sort");
    });

    it("Should test the Filter Field Definition", () => {
        const i = 12;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("Filter");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("type");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("value");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });

    it("Should test the Sort Field Definition", () => {
        const i = 13;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("Sort");
        expect(typeDefs.definitions[i].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("applied");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[i].fields[1].name.value).toEqual("value");
        expect(typeDefs.definitions[i].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[1].type.name.value).toEqual("String");
    });

    it("Should test the DataId Field Definition", () => {
        const i = 14;
        expect(typeDefs.definitions[i].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[i].name.value).toEqual("DataId");
        expect(typeDefs.definitions[i].fields).toHaveLength(1);

        // The field definitions
        expect(typeDefs.definitions[i].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[i].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[i].fields[0].type.name.value).toEqual("String");
    });
});
