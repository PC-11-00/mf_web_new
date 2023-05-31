/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.6.1-ab822f35
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InteropIdentifierRequestData { 
    accountId: string;
    idType: InteropIdentifierRequestData.IdTypeEnum;
    idValue: string;
    subIdOrType?: string;
}
export namespace InteropIdentifierRequestData {
    export type IdTypeEnum = 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS';
    export const IdTypeEnum = {
        Msisdn: 'MSISDN' as IdTypeEnum,
        Email: 'EMAIL' as IdTypeEnum,
        PersonalId: 'PERSONAL_ID' as IdTypeEnum,
        Business: 'BUSINESS' as IdTypeEnum,
        Device: 'DEVICE' as IdTypeEnum,
        AccountId: 'ACCOUNT_ID' as IdTypeEnum,
        Iban: 'IBAN' as IdTypeEnum,
        Alias: 'ALIAS' as IdTypeEnum
    };
}


