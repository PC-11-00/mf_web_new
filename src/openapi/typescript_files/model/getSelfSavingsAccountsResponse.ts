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
import { GetSelfSavingsStatus } from './getSelfSavingsStatus';
import { GetSelfSavingsTimeline } from './getSelfSavingsTimeline';
import { GetSelfSavingsCurrency } from './getSelfSavingsCurrency';
import { GetSelfSavingsSummary } from './getSelfSavingsSummary';
import { GetSelfSavingsInterestPostingPeriodType } from './getSelfSavingsInterestPostingPeriodType';
import { GetSelfSavingsInterestCalculationType } from './getSelfSavingsInterestCalculationType';
import { GetSelfSavingsInterestCalculationDaysInYearType } from './getSelfSavingsInterestCalculationDaysInYearType';
import { GetSelfSavingsInterestCompoundingPeriodType } from './getSelfSavingsInterestCompoundingPeriodType';


/**
 * GetSelfSavingsAccountsResponse
 */
export interface GetSelfSavingsAccountsResponse { 
    accountNo?: number;
    clientId?: number;
    clientName?: string;
    currency?: GetSelfSavingsCurrency;
    fieldOfficerId?: number;
    id?: number;
    interestCalculationDaysInYearType?: GetSelfSavingsInterestCalculationDaysInYearType;
    interestCalculationType?: GetSelfSavingsInterestCalculationType;
    interestCompoundingPeriodType?: GetSelfSavingsInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetSelfSavingsInterestPostingPeriodType;
    nominalAnnualInterestRate?: number;
    savingsProductId?: number;
    savingsProductName?: string;
    status?: GetSelfSavingsStatus;
    summary?: GetSelfSavingsSummary;
    timeline?: GetSelfSavingsTimeline;
}

