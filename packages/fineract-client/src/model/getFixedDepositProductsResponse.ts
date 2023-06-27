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
import { GetFixedDepositProductsInterestCalculationType } from './getFixedDepositProductsInterestCalculationType';
import { GetFixedDepositProductsMaxDepositTermType } from './getFixedDepositProductsMaxDepositTermType';
import { GetFixedDepositProductsInterestCompoundingPeriodType } from './getFixedDepositProductsInterestCompoundingPeriodType';
import { GetFixedDepositProductsAccountingRule } from './getFixedDepositProductsAccountingRule';
import { GetFixedDepositProductsCurrency } from './getFixedDepositProductsCurrency';
import { GetFixedDepositProductsInterestCalculationDaysInYearType } from './getFixedDepositProductsInterestCalculationDaysInYearType';
import { GetFixedDepositProductsMinDepositTermType } from './getFixedDepositProductsMinDepositTermType';
import { GetFixedDepositProductsInterestPostingPeriodType } from './getFixedDepositProductsInterestPostingPeriodType';


/**
 * GetFixedDepositProductsResponse
 */
export interface GetFixedDepositProductsResponse { 
    accountingRule?: GetFixedDepositProductsAccountingRule;
    currency?: GetFixedDepositProductsCurrency;
    description?: string;
    id?: number;
    interestCalculationDaysInYearType?: GetFixedDepositProductsInterestCalculationDaysInYearType;
    interestCalculationType?: GetFixedDepositProductsInterestCalculationType;
    interestCompoundingPeriodType?: GetFixedDepositProductsInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetFixedDepositProductsInterestPostingPeriodType;
    maxDepositTerm?: number;
    maxDepositTermType?: GetFixedDepositProductsMaxDepositTermType;
    minDepositTerm?: number;
    minDepositTermType?: GetFixedDepositProductsMinDepositTermType;
    name?: string;
    nominalAnnualInterestRate?: number;
    preClosurePenalApplicable?: boolean;
    shortName?: string;
}

