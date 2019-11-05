const hdrNoSearchMockData = {
    status: "200",
    message: "OK",
    count: "32",
    data: [
        {
            id: "9b49b4d8-28b6-47d4-be8c-d5d3091ecd36",
            domainType: "DataModel",
            label: "NNRD: National Neonatal Research Database",
            aliases: null,
            description: "Electronic health records for all neonatal unit admissions",
            author: "ICL",
            organisation: "ICL",
            editable: null,
            documentationVersion: "3.0.0",
            lastUpdated: null,
            classifiers: null,
            type: "Data Asset",
            finalised: null
        },
        {
            id: "e77315bc-a16f-496a-bef5-80eac06f2cff",
            domainType: "DataModel",
            label: "CPRD Pregnancy Register",
            aliases: null,
            description: "Lists all pregnancies identified in the CPRD and includes details of each one.",
            author:
                "Clinical Practice Research Datalink (CPRD) and London School of Hygiene and Tropical Medicine (LSHTM)",
            organisation: "Clinical Practice Research Datalink (CPRD)",
            editable: null,
            documentationVersion: "1.0.0",
            lastUpdated: null,
            classifiers: null,
            type: "Data Asset",
            finalised: null
        }
    ]
};

module.exports = [hdrNoSearchMockData];
