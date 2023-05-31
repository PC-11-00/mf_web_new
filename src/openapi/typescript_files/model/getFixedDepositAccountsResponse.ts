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
import { GetFixedDepositAccountsInterestCompoundingPeriodType } from './getFixedDepositAccountsInterestCompoundingPeriodType';
import { GetFixedDepositAccountsInterestCalculationDaysInYearType } from './getFixedDepositAccountsInterestCalculationDaysInYearType';
import { GetFixedDepositAccountsMaxDepositTermType } from './getFixedDepositAccountsMaxDepositTermType';
import { GetFixedDepositAccountsSummary } from './getFixedDepositAccountsSummary';
import { GetFixedDepositAccountsDepositPeriodFrequency } from './getFixedDepositAccountsDepositPeriodFrequency';
import { GetFixedDepositAccountsInterestCalculationType } from './getFixedDepositAccountsInterestCalculationType';
import { GetFixedDepositAccountsInterestPostingPeriodType } from './getFixedDepositAccountsInterestPostingPeriodType';
import { GetFixedDepositAccountsStatus } from './getFixedDepositAccountsStatus';
import { GetFixedDepositAccountsMinDepositTermType } from './getFixedDepositAccountsMinDepositTermType';
import { GetFixedDepositAccountsCurrency } from './getFixedDepositAccountsCurrency';
import { GetFixedDepositAccountsTimeline } from './getFixedDepositAccountsTimeline';


/**
 * GetFixedDepositAccountsResponse
 */
export interface GetFixedDepositAccountsResponse { 
    accountNo?: number;
    clientId?: number;
    clientName?: string;
    currency?: GetFixedDepositAccountsCurrency;
    depositAmount?: number;
    depositPeriod?: number;
    depositPeriodFrequency?: GetFixedDepositAccountsDepositPeriodFrequency;
    fieldOfficerId?: number;
    id?: number;
    interestCalculationDaysInYearType?: GetFixedDepositAccountsInterestCalculationDaysInYearType;
    interestCalculationType?: GetFixedDepositAccountsInterestCalculationType;
    interestCompoundingPeriodType?: GetFixedDepositAccountsInterestCompoundingPeriodType;
    interestFreePeriodApplicable?: boolean;
    interestPostingPeriodType?: GetFixedDepositAccountsInterestPostingPeriodType;
    maturityAmount?: number;
    maturityDate?: string;
    maxDepositTerm?: number;
    maxDepositTermType?: GetFixedDepositAccountsMaxDepositTermType;
    minDepositTerm?: number;
    minDepositTermType?: GetFixedDepositAccountsMinDepositTermType;
    preClosurePenalApplicable?: boolean;
    savingsProductId?: number;
    savingsProductName?: string;
    status?: GetFixedDepositAccountsStatus;
    summary?: GetFixedDepositAccountsSummary;
    timeline?: GetFixedDepositAccountsTimeline;
}

