const typeDefs = require("./schema");

describe("Check that the correct resolvers are included and defined", () => {
    beforeEach(() => {});

    it("should test that the Queries are all defined", () => {
        expect(typeDefs.definitions[0].name.value).toEqual("Query");

        expect(typeDefs.definitions[0].fields.length).toEqual(9);
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

    it("Should check that the hdrDataModelSearch Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[4].name.value).toEqual("hdrDataModelSearch");
        expect(typeDefs.definitions[0].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[4].type.name.value).toEqual("HDR_MetaData");
    });
    it("Should check that the hdrDataModelID Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[5].name.value).toEqual("hdrDataModelID");
        expect(typeDefs.definitions[0].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[5].type.name.value).toEqual("HDR_MetaData_ID");
    });

    it("Should check that the hdrCatalogueLogin Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[6].name.value).toEqual("hdrCatalogueLogin");
        expect(typeDefs.definitions[0].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[6].type.name.value).toEqual("HDR_CatalogueLogin");
    });

    it("Should check that the hdrCatalogueLogout Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[7].name.value).toEqual("hdrCatalogueLogout");
        expect(typeDefs.definitions[0].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[7].type.name.value).toEqual("HDR_CatalogueLogout");
    });

    it("Should check that the hdrCatalogueItemsSearch Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[8].name.value).toEqual("hdrCatalogueItemsSearch");
        expect(typeDefs.definitions[0].fields[8].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[8].type.name.value).toEqual("HDR_MetaData");
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

describe("The Metdata Catalogue API's are configured correctly", () => {
    beforeEach(() => {});

    it("Should test the HDR_MetaData Field Definition", () => {
        expect(typeDefs.definitions[5].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[5].name.value).toEqual("HDR_MetaData");
        expect(typeDefs.definitions[5].fields).toHaveLength(4);

        // The field definitions
        expect(typeDefs.definitions[5].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[5].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[5].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[5].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[5].fields[2].name.value).toEqual("count");
        expect(typeDefs.definitions[5].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[5].fields[3].name.value).toEqual("data");
        expect(typeDefs.definitions[5].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[5].fields[3].type.type.name.value).toEqual("HDR_MetaData_Result");
    });

    it("Should test the HDR_MetaData_ID Field Definition", () => {
        expect(typeDefs.definitions[6].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[6].name.value).toEqual("HDR_MetaData_ID");
        expect(typeDefs.definitions[6].fields).toHaveLength(4);

        // The field definitions
        expect(typeDefs.definitions[6].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[6].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[6].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[2].name.value).toEqual("count");
        expect(typeDefs.definitions[6].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[3].name.value).toEqual("data");
        expect(typeDefs.definitions[6].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[3].type.name.value).toEqual("HDR_MetaData_Result");
    });

    it("Should test the HDR_MetaData_Result Field Definition", () => {
        expect(typeDefs.definitions[7].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[7].name.value).toEqual("HDR_MetaData_Result");
        expect(typeDefs.definitions[7].fields).toHaveLength(13);

        // The field definitions
        expect(typeDefs.definitions[7].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[7].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[1].name.value).toEqual("domainType");
        expect(typeDefs.definitions[7].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[2].name.value).toEqual("label");
        expect(typeDefs.definitions[7].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[3].name.value).toEqual("aliases");
        expect(typeDefs.definitions[7].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[7].fields[3].type.type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[4].name.value).toEqual("description");
        expect(typeDefs.definitions[7].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[5].name.value).toEqual("author");
        expect(typeDefs.definitions[7].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[5].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[6].name.value).toEqual("organisation");
        expect(typeDefs.definitions[7].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[7].name.value).toEqual("editable");
        expect(typeDefs.definitions[7].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[7].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[8].name.value).toEqual("documentationVersion");
        expect(typeDefs.definitions[7].fields[8].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[8].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[9].name.value).toEqual("lastUpdated");
        expect(typeDefs.definitions[7].fields[9].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[9].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[10].name.value).toEqual("classifiers");
        expect(typeDefs.definitions[7].fields[10].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[7].fields[10].type.type.name.value).toEqual("HDR_Classifier_Record");

        expect(typeDefs.definitions[7].fields[11].name.value).toEqual("type");
        expect(typeDefs.definitions[7].fields[11].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[11].type.name.value).toEqual("String");

        expect(typeDefs.definitions[7].fields[12].name.value).toEqual("finalised");
        expect(typeDefs.definitions[7].fields[12].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[12].type.name.value).toEqual("String");
    });

    it("Should test the HDR_MetaData_Result HDR_Classifier_Record Field Definition", () => {
        expect(typeDefs.definitions[8].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[8].name.value).toEqual("HDR_Classifier_Record");
        expect(typeDefs.definitions[8].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[8].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[8].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[8].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[8].fields[1].name.value).toEqual("label");
        expect(typeDefs.definitions[8].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[8].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[8].fields[2].name.value).toEqual("lastUpdated");
        expect(typeDefs.definitions[8].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[8].fields[2].type.name.value).toEqual("String");
    });

    it("Should test the HDR_CatalogueLogin Field Definition", () => {
        expect(typeDefs.definitions[9].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[9].name.value).toEqual("HDR_CatalogueLogin");
        expect(typeDefs.definitions[9].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[9].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[9].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[9].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[9].fields[1].name.value).toEqual("url");
        expect(typeDefs.definitions[9].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[9].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[9].fields[2].name.value).toEqual("result");
        expect(typeDefs.definitions[9].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[9].fields[2].type.name.value).toEqual("HDR_Login_Result");
    });

    it("Should test the HDR_Login_Result Field Definition", () => {
        expect(typeDefs.definitions[10].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[10].name.value).toEqual("HDR_Login_Result");
        expect(typeDefs.definitions[10].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[10].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[10].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[10].fields[1].name.value).toEqual("emailAddress");
        expect(typeDefs.definitions[10].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[10].fields[2].name.value).toEqual("firstName");
        expect(typeDefs.definitions[10].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[10].fields[3].name.value).toEqual("lastName");
        expect(typeDefs.definitions[10].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[10].fields[4].name.value).toEqual("userRole");
        expect(typeDefs.definitions[10].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[10].fields[5].name.value).toEqual("disabled");
        expect(typeDefs.definitions[10].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[10].fields[5].type.name.value).toEqual("Boolean");
    });

    it("Should test the HDR_CatalogueLogout Field Definition", () => {
        expect(typeDefs.definitions[11].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[11].name.value).toEqual("HDR_CatalogueLogout");
        expect(typeDefs.definitions[11].fields).toHaveLength(1);

        // The field definitions
        expect(typeDefs.definitions[11].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[11].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[11].fields[0].type.name.value).toEqual("String");
    });
});
