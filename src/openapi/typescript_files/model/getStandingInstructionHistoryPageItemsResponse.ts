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
import { GetStandingInstructionHistoryPageItemsFromClient } from './getStandingInstructionHistoryPageItemsFromClient';
import { GetStandingInstructionHistoryToAccount } from './getStandingInstructionHistoryToAccount';
import { GetFromOfficeStandingInstructionSwagger } from './getFromOfficeStandingInstructionSwagger';
import { GetToAccountTypeStandingInstructionSwagger } from './getToAccountTypeStandingInstructionSwagger';
import { GetFromAccountTypeStandingInstructionSwagger } from './getFromAccountTypeStandingInstructionSwagger';
import { GetToOfficeStandingInstructionSwagger } from './getToOfficeStandingInstructionSwagger';
import { GetStandingInstructionHistoryToClient } from './getStandingInstructionHistoryToClient';
import { GetStandingInstructionHistoryFromAccount } from './getStandingInstructionHistoryFromAccount';


export interface GetStandingInstructionHistoryPageItemsResponse { 
    amount?: number;
    errorLog?: string;
    executionTime?: string;
    fromAccount?: GetStandingInstructionHistoryFromAccount;
    fromAccountType?: GetFromAccountTypeStandingInstructionSwagger;
    fromClient?: GetStandingInstructionHistoryPageItemsFromClient;
    fromOffice?: GetFromOfficeStandingInstructionSwagger;
    name?: string;
    standingInstructionId?: number;
    status?: string;
    toAccount?: GetStandingInstructionHistoryToAccount;
    toAccountType?: GetToAccountTypeStandingInstructionSwagger;
    toClient?: GetStandingInstructionHistoryToClient;
    toOffice?: GetToOfficeStandingInstructionSwagger;
}

