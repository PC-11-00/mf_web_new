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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { GetStandingInstructionsResponse } from '../model/getStandingInstructionsResponse';
// @ts-ignore
import { GetStandingInstructionsStandingInstructionIdResponse } from '../model/getStandingInstructionsStandingInstructionIdResponse';
// @ts-ignore
import { GetStandingInstructionsTemplateResponse } from '../model/getStandingInstructionsTemplateResponse';
// @ts-ignore
import { PostStandingInstructionsRequest } from '../model/postStandingInstructionsRequest';
// @ts-ignore
import { PostStandingInstructionsResponse } from '../model/postStandingInstructionsResponse';
// @ts-ignore
import { PutStandingInstructionsStandingInstructionIdRequest } from '../model/putStandingInstructionsStandingInstructionIdRequest';
// @ts-ignore
import { PutStandingInstructionsStandingInstructionIdResponse } from '../model/putStandingInstructionsStandingInstructionIdResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class StandingInstructionsService {

    protected basePath = 'http://localhost/fineract-provider/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create new Standing Instruction
     * Ability to create new instruction for transfer of monetary funds from one account to another
     * @param postStandingInstructionsRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public create5(postStandingInstructionsRequest: PostStandingInstructionsRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<PostStandingInstructionsResponse>;
    public create5(postStandingInstructionsRequest: PostStandingInstructionsRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<PostStandingInstructionsResponse>>;
    public create5(postStandingInstructionsRequest: PostStandingInstructionsRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<PostStandingInstructionsResponse>>;
    public create5(postStandingInstructionsRequest: PostStandingInstructionsRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (postStandingInstructionsRequest === null || postStandingInstructionsRequest === undefined) {
            throw new Error('Required parameter postStandingInstructionsRequest was null or undefined when calling create5.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/standinginstructions`;
        return this.httpClient.request<PostStandingInstructionsResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: postStandingInstructionsRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List Standing Instructions
     * Example Requests:  standinginstructions
     * @param sqlSearch sqlSearch
     * @param externalId externalId
     * @param offset offset
     * @param limit limit
     * @param orderBy orderBy
     * @param sortOrder sortOrder
     * @param transferType transferType
     * @param clientName clientName
     * @param clientId clientId
     * @param fromAccountId fromAccountId
     * @param fromAccountType fromAccountType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveAll19(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GetStandingInstructionsResponse>;
    public retrieveAll19(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GetStandingInstructionsResponse>>;
    public retrieveAll19(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GetStandingInstructionsResponse>>;
    public retrieveAll19(sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, transferType?: number, clientName?: string, clientId?: number, fromAccountId?: number, fromAccountType?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (sqlSearch !== undefined && sqlSearch !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sqlSearch, 'sqlSearch');
        }
        if (externalId !== undefined && externalId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>externalId, 'externalId');
        }
        if (offset !== undefined && offset !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>offset, 'offset');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (orderBy !== undefined && orderBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>orderBy, 'orderBy');
        }
        if (sortOrder !== undefined && sortOrder !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sortOrder, 'sortOrder');
        }
        if (transferType !== undefined && transferType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>transferType, 'transferType');
        }
        if (clientName !== undefined && clientName !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>clientName, 'clientName');
        }
        if (clientId !== undefined && clientId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>clientId, 'clientId');
        }
        if (fromAccountId !== undefined && fromAccountId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountId, 'fromAccountId');
        }
        if (fromAccountType !== undefined && fromAccountType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountType, 'fromAccountType');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/standinginstructions`;
        return this.httpClient.request<GetStandingInstructionsResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve Standing Instruction
     * Example Requests :  standinginstructions/1
     * @param standingInstructionId standingInstructionId
     * @param sqlSearch sqlSearch
     * @param externalId externalId
     * @param offset offset
     * @param limit limit
     * @param orderBy orderBy
     * @param sortOrder sortOrder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveOne10(standingInstructionId: number, sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GetStandingInstructionsStandingInstructionIdResponse>;
    public retrieveOne10(standingInstructionId: number, sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GetStandingInstructionsStandingInstructionIdResponse>>;
    public retrieveOne10(standingInstructionId: number, sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GetStandingInstructionsStandingInstructionIdResponse>>;
    public retrieveOne10(standingInstructionId: number, sqlSearch?: string, externalId?: string, offset?: number, limit?: number, orderBy?: string, sortOrder?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (standingInstructionId === null || standingInstructionId === undefined) {
            throw new Error('Required parameter standingInstructionId was null or undefined when calling retrieveOne10.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (sqlSearch !== undefined && sqlSearch !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sqlSearch, 'sqlSearch');
        }
        if (externalId !== undefined && externalId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>externalId, 'externalId');
        }
        if (offset !== undefined && offset !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>offset, 'offset');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (orderBy !== undefined && orderBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>orderBy, 'orderBy');
        }
        if (sortOrder !== undefined && sortOrder !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sortOrder, 'sortOrder');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/standinginstructions/${this.configuration.encodeParam({name: "standingInstructionId", value: standingInstructionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<GetStandingInstructionsStandingInstructionIdResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve Standing Instruction Template
     * This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  standinginstructions/template?fromAccountType&#x3D;2&amp;fromOfficeId&#x3D;1  standinginstructions/template?fromAccountType&#x3D;2&amp;fromOfficeId&#x3D;1&amp;fromClientId&#x3D;1&amp;transferType&#x3D;1  standinginstructions/template?fromClientId&#x3D;1&amp;fromAccountType&#x3D;2&amp;fromAccountId&#x3D;1&amp;transferType&#x3D;1
     * @param fromOfficeId fromOfficeId
     * @param fromClientId fromClientId
     * @param fromAccountId fromAccountId
     * @param fromAccountType fromAccountType
     * @param toOfficeId toOfficeId
     * @param toClientId toClientId
     * @param toAccountId toAccountId
     * @param toAccountType toAccountType
     * @param transferType transferType
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public template6(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, transferType?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GetStandingInstructionsTemplateResponse>;
    public template6(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, transferType?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GetStandingInstructionsTemplateResponse>>;
    public template6(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, transferType?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GetStandingInstructionsTemplateResponse>>;
    public template6(fromOfficeId?: number, fromClientId?: number, fromAccountId?: number, fromAccountType?: number, toOfficeId?: number, toClientId?: number, toAccountId?: number, toAccountType?: number, transferType?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (fromOfficeId !== undefined && fromOfficeId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromOfficeId, 'fromOfficeId');
        }
        if (fromClientId !== undefined && fromClientId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromClientId, 'fromClientId');
        }
        if (fromAccountId !== undefined && fromAccountId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountId, 'fromAccountId');
        }
        if (fromAccountType !== undefined && fromAccountType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>fromAccountType, 'fromAccountType');
        }
        if (toOfficeId !== undefined && toOfficeId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>toOfficeId, 'toOfficeId');
        }
        if (toClientId !== undefined && toClientId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>toClientId, 'toClientId');
        }
        if (toAccountId !== undefined && toAccountId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>toAccountId, 'toAccountId');
        }
        if (toAccountType !== undefined && toAccountType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>toAccountType, 'toAccountType');
        }
        if (transferType !== undefined && transferType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>transferType, 'transferType');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/standinginstructions/template`;
        return this.httpClient.request<GetStandingInstructionsTemplateResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update Standing Instruction | Delete Standing Instruction
     * Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command&#x3D;update   Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command&#x3D;delete
     * @param standingInstructionId standingInstructionId
     * @param command command
     * @param putStandingInstructionsStandingInstructionIdRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public update9(standingInstructionId: number, command?: string, putStandingInstructionsStandingInstructionIdRequest?: PutStandingInstructionsStandingInstructionIdRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<PutStandingInstructionsStandingInstructionIdResponse>;
    public update9(standingInstructionId: number, command?: string, putStandingInstructionsStandingInstructionIdRequest?: PutStandingInstructionsStandingInstructionIdRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<PutStandingInstructionsStandingInstructionIdResponse>>;
    public update9(standingInstructionId: number, command?: string, putStandingInstructionsStandingInstructionIdRequest?: PutStandingInstructionsStandingInstructionIdRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<PutStandingInstructionsStandingInstructionIdResponse>>;
    public update9(standingInstructionId: number, command?: string, putStandingInstructionsStandingInstructionIdRequest?: PutStandingInstructionsStandingInstructionIdRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (standingInstructionId === null || standingInstructionId === undefined) {
            throw new Error('Required parameter standingInstructionId was null or undefined when calling update9.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (command !== undefined && command !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>command, 'command');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (basicAuth) required
        localVarCredential = this.configuration.lookupCredential('basicAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        // authentication (tenantid) required
        localVarCredential = this.configuration.lookupCredential('tenantid');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('fineract-platform-tenantid', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/standinginstructions/${this.configuration.encodeParam({name: "standingInstructionId", value: standingInstructionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<PutStandingInstructionsStandingInstructionIdResponse>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: putStandingInstructionsStandingInstructionIdRequest,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
