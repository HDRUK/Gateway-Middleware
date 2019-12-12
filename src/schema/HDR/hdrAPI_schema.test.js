const typeDefs = require("./hdrAPI_schema");

describe("Check that the correct HDR API's defined", () => {
    beforeEach(() => {});

    it("should test that the Queries are all defined", () => {
        expect(typeDefs.definitions[0].name.value).toEqual("Query");
        expect(typeDefs.definitions[0].fields.length).toEqual(7);
    });

    it("Should check that the hdrDataModelSearch Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[0].name.value).toEqual("hdrDataModelSearch");
        expect(typeDefs.definitions[0].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[0].type.name.value).toEqual("HDR_MetaData");
    });
    it("Should check that the hdrDataModelID Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[1].name.value).toEqual("hdrDataModelID");
        expect(typeDefs.definitions[0].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[1].type.name.value).toEqual("HDR_MetaData_ID");
    });

    it("Should check that the hdrCatalogueLogin Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[2].name.value).toEqual("hdrCatalogueLogin");
        expect(typeDefs.definitions[0].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[2].type.name.value).toEqual("HDR_CatalogueLogin");
    });

    it("Should check that the hdrCatalogueLogout Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[3].name.value).toEqual("hdrCatalogueLogout");
        expect(typeDefs.definitions[0].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[3].type.name.value).toEqual("HDR_CatalogueLogout");
    });

    it("Should check that the hdrCatalogueItemsSearch Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[4].name.value).toEqual("hdrCatalogueItemsSearch");
        expect(typeDefs.definitions[0].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[4].type.name.value).toEqual("HDR_MetaData");
    });

    it("Should check that the hdrFilterValues Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[5].name.value).toEqual("hdrFilterValues");
        expect(typeDefs.definitions[0].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[5].type.name.value).toEqual("HDR_FilterData");
    });

    it("Should check that the hdrCustomSearch Query is defined correctly", () => {
        expect(typeDefs.definitions[0].fields[6].name.value).toEqual("hdrCustomSearch");
        expect(typeDefs.definitions[0].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[0].fields[6].type.name.value).toEqual("HDR_CustomSearchData");
    });

    it("Should check that the hdrCustomSearch Input Values are defined correctly", () => {
        expect(typeDefs.definitions[0].fields[6].arguments).toHaveLength(5);

        expect(typeDefs.definitions[0].fields[6].arguments[0].kind).toEqual("InputValueDefinition");
        expect(typeDefs.definitions[0].fields[6].arguments[0].name.value).toEqual("searchTerm");
        expect(typeDefs.definitions[0].fields[6].arguments[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[0].fields[6].arguments[1].kind).toEqual("InputValueDefinition");
        expect(typeDefs.definitions[0].fields[6].arguments[1].name.value).toEqual("recordOffset");
        expect(typeDefs.definitions[0].fields[6].arguments[1].type.kind).toEqual("NonNullType");
        expect(typeDefs.definitions[0].fields[6].arguments[1].type.type.name.value).toEqual("Int");

        expect(typeDefs.definitions[0].fields[6].arguments[2].kind).toEqual("InputValueDefinition");
        expect(typeDefs.definitions[0].fields[6].arguments[2].name.value).toEqual("recordLimit");
        expect(typeDefs.definitions[0].fields[6].arguments[2].type.kind).toEqual("NonNullType");
        expect(typeDefs.definitions[0].fields[6].arguments[2].type.type.name.value).toEqual("Int");

        expect(typeDefs.definitions[0].fields[6].arguments[3].kind).toEqual("InputValueDefinition");
        expect(typeDefs.definitions[0].fields[6].arguments[3].name.value).toEqual("sortField");
        expect(typeDefs.definitions[0].fields[6].arguments[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[0].fields[6].arguments[4].kind).toEqual("InputValueDefinition");
        expect(typeDefs.definitions[0].fields[6].arguments[4].name.value).toEqual("filterItems");
        expect(typeDefs.definitions[0].fields[6].arguments[4].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[0].fields[6].arguments[4].type.type.name.value).toEqual("String");
    });
});

describe("The Metdata Catalogue API's are configured correctly", () => {
    beforeEach(() => {});

    it("Should test the HDR_MetaData Field Definition", () => {
        expect(typeDefs.definitions[1].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[1].name.value).toEqual("HDR_MetaData");
        expect(typeDefs.definitions[1].fields).toHaveLength(4);

        // The field definitions
        expect(typeDefs.definitions[1].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[1].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[1].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[2].name.value).toEqual("count");
        expect(typeDefs.definitions[1].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[1].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[1].fields[3].name.value).toEqual("data");
        expect(typeDefs.definitions[1].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[1].fields[3].type.type.name.value).toEqual("HDR_MetaData_Result");
    });

    it("Should test the HDR_MetaData_ID Field Definition", () => {
        expect(typeDefs.definitions[2].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[2].name.value).toEqual("HDR_MetaData_ID");
        expect(typeDefs.definitions[2].fields).toHaveLength(4);

        // The field definitions
        expect(typeDefs.definitions[2].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[2].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[2].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[2].name.value).toEqual("count");
        expect(typeDefs.definitions[2].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[2].fields[3].name.value).toEqual("data");
        expect(typeDefs.definitions[2].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[2].fields[3].type.name.value).toEqual("HDR_CustomSearchData_Results");
    });

    it("Should test the HDR_MetaData_Result Field Definition", () => {
        expect(typeDefs.definitions[3].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[3].name.value).toEqual("HDR_MetaData_Result");
        expect(typeDefs.definitions[3].fields).toHaveLength(13);

        // The field definitions
        expect(typeDefs.definitions[3].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[3].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[1].name.value).toEqual("domainType");
        expect(typeDefs.definitions[3].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[2].name.value).toEqual("label");
        expect(typeDefs.definitions[3].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[3].name.value).toEqual("aliases");
        expect(typeDefs.definitions[3].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[3].fields[3].type.type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[4].name.value).toEqual("description");
        expect(typeDefs.definitions[3].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[5].name.value).toEqual("author");
        expect(typeDefs.definitions[3].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[5].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[6].name.value).toEqual("organisation");
        expect(typeDefs.definitions[3].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[7].name.value).toEqual("editable");
        expect(typeDefs.definitions[3].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[7].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[8].name.value).toEqual("documentationVersion");
        expect(typeDefs.definitions[3].fields[8].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[8].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[9].name.value).toEqual("lastUpdated");
        expect(typeDefs.definitions[3].fields[9].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[9].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[10].name.value).toEqual("classifiers");
        expect(typeDefs.definitions[3].fields[10].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[3].fields[10].type.type.name.value).toEqual("HDR_Classifier_Record");

        expect(typeDefs.definitions[3].fields[11].name.value).toEqual("type");
        expect(typeDefs.definitions[3].fields[11].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[11].type.name.value).toEqual("String");

        expect(typeDefs.definitions[3].fields[12].name.value).toEqual("finalised");
        expect(typeDefs.definitions[3].fields[12].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[3].fields[12].type.name.value).toEqual("String");
    });

    it("Should test the HDR_MetaData_Result HDR_Classifier_Record Field Definition", () => {
        expect(typeDefs.definitions[4].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[4].name.value).toEqual("HDR_Classifier_Record");
        expect(typeDefs.definitions[4].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[4].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[4].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[4].fields[1].name.value).toEqual("label");
        expect(typeDefs.definitions[4].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[4].fields[2].name.value).toEqual("lastUpdated");
        expect(typeDefs.definitions[4].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[4].fields[2].type.name.value).toEqual("String");
    });

    it("Should test the HDR_CatalogueLogin Field Definition", () => {
        expect(typeDefs.definitions[5].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[5].name.value).toEqual("HDR_CatalogueLogin");
        expect(typeDefs.definitions[5].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[5].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[5].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[5].fields[1].name.value).toEqual("url");
        expect(typeDefs.definitions[5].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[5].fields[2].name.value).toEqual("result");
        expect(typeDefs.definitions[5].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[5].fields[2].type.name.value).toEqual("HDR_Login_Result");
    });

    it("Should test the HDR_Login_Result Field Definition", () => {
        expect(typeDefs.definitions[6].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[6].name.value).toEqual("HDR_Login_Result");
        expect(typeDefs.definitions[6].fields).toHaveLength(6);

        // The field definitions
        expect(typeDefs.definitions[6].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[6].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[0].type.name.value).toEqual("ID");

        expect(typeDefs.definitions[6].fields[1].name.value).toEqual("emailAddress");
        expect(typeDefs.definitions[6].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[2].name.value).toEqual("firstName");
        expect(typeDefs.definitions[6].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[3].name.value).toEqual("lastName");
        expect(typeDefs.definitions[6].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[4].name.value).toEqual("userRole");
        expect(typeDefs.definitions[6].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[6].fields[5].name.value).toEqual("disabled");
        expect(typeDefs.definitions[6].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[6].fields[5].type.name.value).toEqual("Boolean");
    });

    it("Should test the HDR_CatalogueLogout Field Definition", () => {
        expect(typeDefs.definitions[7].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[7].name.value).toEqual("HDR_CatalogueLogout");
        expect(typeDefs.definitions[7].fields).toHaveLength(1);

        // The field definitions
        expect(typeDefs.definitions[7].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[7].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[7].fields[0].type.name.value).toEqual("String");
    });

    it("Should test the HDR_FilterData Field Definition", () => {
        expect(typeDefs.definitions[8].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[8].name.value).toEqual("HDR_FilterData");
        expect(typeDefs.definitions[8].fields).toHaveLength(3);

        // The field definitions
        expect(typeDefs.definitions[8].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[8].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[8].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[8].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[8].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[8].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[8].fields[2].name.value).toEqual("data");
        expect(typeDefs.definitions[8].fields[2].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[8].fields[2].type.type.name.value).toEqual("HDR_FilterData_Values");
    });

    it("Should test the HDR_FilterData_Values Field Definition", () => {
        expect(typeDefs.definitions[9].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[9].name.value).toEqual("HDR_FilterData_Values");
        expect(typeDefs.definitions[9].fields).toHaveLength(2);

        // The field definitions
        expect(typeDefs.definitions[9].fields[0].name.value).toEqual("fieldName");
        expect(typeDefs.definitions[9].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[9].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[9].fields[1].name.value).toEqual("fieldValues");
        expect(typeDefs.definitions[9].fields[1].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[9].fields[1].type.type.name.value).toEqual("String");
    });

    it("Should test the HDR_CustomSearchData Field Definition", () => {
        const nextNum = 10;

        expect(typeDefs.definitions[nextNum].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[nextNum].name.value).toEqual("HDR_CustomSearchData");
        expect(typeDefs.definitions[nextNum].fields).toHaveLength(4);

        // The field definitions
        expect(typeDefs.definitions[nextNum].fields[0].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[0].name.value).toEqual("status");
        expect(typeDefs.definitions[nextNum].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[1].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[1].name.value).toEqual("message");
        expect(typeDefs.definitions[nextNum].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[2].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[2].name.value).toEqual("count");
        expect(typeDefs.definitions[nextNum].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[3].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[3].name.value).toEqual("data");
        expect(typeDefs.definitions[nextNum].fields[3].type.kind).toEqual("ListType");
        expect(typeDefs.definitions[nextNum].fields[3].type.type.name.value).toEqual("HDR_CustomSearchData_Results");
    });

    it("Should test the HDR_CustomSearchData_Results Field Definition", () => {
        const nextNum = 11;

        expect(typeDefs.definitions[nextNum].kind).toEqual("ObjectTypeDefinition");
        expect(typeDefs.definitions[nextNum].name.value).toEqual("HDR_CustomSearchData_Results");
        expect(typeDefs.definitions[nextNum].fields).toHaveLength(36);

        // The field definitions
        expect(typeDefs.definitions[nextNum].fields[0].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[0].name.value).toEqual("id");
        expect(typeDefs.definitions[nextNum].fields[0].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[0].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[1].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[1].name.value).toEqual("identifier");
        expect(typeDefs.definitions[nextNum].fields[1].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[1].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[2].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[2].name.value).toEqual("license");
        expect(typeDefs.definitions[nextNum].fields[2].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[2].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[3].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[3].name.value).toEqual("title");
        expect(typeDefs.definitions[nextNum].fields[3].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[3].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[4].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[4].name.value).toEqual("publisher");
        expect(typeDefs.definitions[nextNum].fields[4].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[4].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[5].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[5].name.value).toEqual("creator");
        expect(typeDefs.definitions[nextNum].fields[5].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[5].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[6].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[6].name.value).toEqual("description");
        expect(typeDefs.definitions[nextNum].fields[6].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[6].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[7].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[7].name.value).toEqual("keywords");
        expect(typeDefs.definitions[nextNum].fields[7].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[7].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[8].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[8].name.value).toEqual("language");
        expect(typeDefs.definitions[nextNum].fields[8].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[8].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[9].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[9].name.value).toEqual("dataProcessor");
        expect(typeDefs.definitions[nextNum].fields[9].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[9].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[10].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[10].name.value).toEqual("contactPoint");
        expect(typeDefs.definitions[nextNum].fields[10].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[10].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[11].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[11].name.value).toEqual("dataController");
        expect(typeDefs.definitions[nextNum].fields[11].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[11].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[12].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[12].name.value).toEqual("group");
        expect(typeDefs.definitions[nextNum].fields[12].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[12].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[13].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[13].name.value).toEqual("abstract");
        expect(typeDefs.definitions[nextNum].fields[13].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[13].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[14].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[14].name.value).toEqual("accessRights");
        expect(typeDefs.definitions[nextNum].fields[14].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[14].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[15].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[15].name.value).toEqual("accessRequestCost");
        expect(typeDefs.definitions[nextNum].fields[15].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[15].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[16].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[16].name.value).toEqual("accessRequestDuration");
        expect(typeDefs.definitions[nextNum].fields[16].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[16].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[17].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[17].name.value).toEqual("datasetEndDate");
        expect(typeDefs.definitions[nextNum].fields[17].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[17].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[18].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[18].name.value).toEqual("datasetStartDate");
        expect(typeDefs.definitions[nextNum].fields[18].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[18].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[19].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[19].name.value).toEqual("releaseDate");
        expect(typeDefs.definitions[nextNum].fields[19].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[19].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[20].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[20].name.value).toEqual("periodicity");
        expect(typeDefs.definitions[nextNum].fields[20].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[20].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[21].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[21].name.value).toEqual("physicalSampleAvailability");
        expect(typeDefs.definitions[nextNum].fields[21].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[21].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[22].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[22].name.value).toEqual("statisticalPopulation");
        expect(typeDefs.definitions[nextNum].fields[22].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[22].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[23].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[23].name.value).toEqual("ageBand");
        expect(typeDefs.definitions[nextNum].fields[23].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[23].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[24].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[24].name.value).toEqual("geographicCoverage");
        expect(typeDefs.definitions[nextNum].fields[24].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[24].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[25].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[25].name.value).toEqual("conformsTo");
        expect(typeDefs.definitions[nextNum].fields[25].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[25].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[26].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[26].name.value).toEqual("derivedDatasets");
        expect(typeDefs.definitions[nextNum].fields[26].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[26].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[27].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[27].name.value).toEqual("format");
        expect(typeDefs.definitions[nextNum].fields[27].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[27].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[28].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[28].name.value).toEqual("populationType");
        expect(typeDefs.definitions[nextNum].fields[28].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[28].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[29].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[29].name.value).toEqual("citations");
        expect(typeDefs.definitions[nextNum].fields[29].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[29].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[30].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[30].name.value).toEqual("linkedDataset");
        expect(typeDefs.definitions[nextNum].fields[30].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[30].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[31].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[31].name.value).toEqual("jurisdiction");
        expect(typeDefs.definitions[nextNum].fields[31].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[31].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[32].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[32].name.value).toEqual("doi");
        expect(typeDefs.definitions[nextNum].fields[32].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[32].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[33].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[33].name.value).toEqual("fileSize");
        expect(typeDefs.definitions[nextNum].fields[33].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[33].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[34].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[34].name.value).toEqual("label");
        expect(typeDefs.definitions[nextNum].fields[34].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[34].type.name.value).toEqual("String");

        expect(typeDefs.definitions[nextNum].fields[35].kind).toEqual("FieldDefinition");
        expect(typeDefs.definitions[nextNum].fields[35].name.value).toEqual("lastUpdated");
        expect(typeDefs.definitions[nextNum].fields[35].type.kind).toEqual("NamedType");
        expect(typeDefs.definitions[nextNum].fields[35].type.name.value).toEqual("String");
    });
});
