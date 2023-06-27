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
import { PostSavingsAccountBulkReversalTransactionsRequest } from '../model/postSavingsAccountBulkReversalTransactionsRequest';
// @ts-ignore
import { PostSavingsAccountTransactionsRequest } from '../model/postSavingsAccountTransactionsRequest';
// @ts-ignore
import { PostSavingsAccountTransactionsResponse } from '../model/postSavingsAccountTransactionsResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class SavingsAccountTransactionsService {

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
     * Undo/Reverse/Modify/Release Amount transaction API
     * Undo/Reverse/Modify/Release Amount transaction API  Example Requests:   savingsaccounts/{savingsId}/transactions/{transactionId}?command&#x3D;reverse  Accepted command &#x3D; undo, reverse, modify, releaseAmount
     * @param savingsId 
     * @param transactionId 
     * @param postSavingsAccountBulkReversalTransactionsRequest 
     * @param command 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public adjustTransaction1(savingsId: number, transactionId: number, postSavingsAccountBulkReversalTransactionsRequest: PostSavingsAccountBulkReversalTransactionsRequest, command?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<Array<PostSavingsAccountBulkReversalTransactionsRequest>>;
    public adjustTransaction1(savingsId: number, transactionId: number, postSavingsAccountBulkReversalTransactionsRequest: PostSavingsAccountBulkReversalTransactionsRequest, command?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<Array<PostSavingsAccountBulkReversalTransactionsRequest>>>;
    public adjustTransaction1(savingsId: number, transactionId: number, postSavingsAccountBulkReversalTransactionsRequest: PostSavingsAccountBulkReversalTransactionsRequest, command?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<Array<PostSavingsAccountBulkReversalTransactionsRequest>>>;
    public adjustTransaction1(savingsId: number, transactionId: number, postSavingsAccountBulkReversalTransactionsRequest: PostSavingsAccountBulkReversalTransactionsRequest, command?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (savingsId === null || savingsId === undefined) {
            throw new Error('Required parameter savingsId was null or undefined when calling adjustTransaction1.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling adjustTransaction1.');
        }
        if (postSavingsAccountBulkReversalTransactionsRequest === null || postSavingsAccountBulkReversalTransactionsRequest === undefined) {
            throw new Error('Required parameter postSavingsAccountBulkReversalTransactionsRequest was null or undefined when calling adjustTransaction1.');
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

        let localVarPath = `/savingsaccounts/${this.configuration.encodeParam({name: "savingsId", value: savingsId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/transactions/${this.configuration.encodeParam({name: "transactionId", value: transactionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<Array<PostSavingsAccountBulkReversalTransactionsRequest>>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: postSavingsAccountBulkReversalTransactionsRequest,
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
     * @param savingsId 
     * @param transactionId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveOne24(savingsId: number, transactionId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<string>;
    public retrieveOne24(savingsId: number, transactionId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<string>>;
    public retrieveOne24(savingsId: number, transactionId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<string>>;
    public retrieveOne24(savingsId: number, transactionId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (savingsId === null || savingsId === undefined) {
            throw new Error('Required parameter savingsId was null or undefined when calling retrieveOne24.');
        }
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling retrieveOne24.');
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

        let localVarPath = `/savingsaccounts/${this.configuration.encodeParam({name: "savingsId", value: savingsId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/transactions/${this.configuration.encodeParam({name: "transactionId", value: transactionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}`;
        return this.httpClient.request<string>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param savingsId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public retrieveTemplate19(savingsId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<string>;
    public retrieveTemplate19(savingsId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<string>>;
    public retrieveTemplate19(savingsId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<string>>;
    public retrieveTemplate19(savingsId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (savingsId === null || savingsId === undefined) {
            throw new Error('Required parameter savingsId was null or undefined when calling retrieveTemplate19.');
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

        let localVarPath = `/savingsaccounts/${this.configuration.encodeParam({name: "savingsId", value: savingsId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/transactions/template`;
        return this.httpClient.request<string>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param savingsId 
     * @param postSavingsAccountTransactionsRequest 
     * @param command 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public transaction2(savingsId: number, postSavingsAccountTransactionsRequest: PostSavingsAccountTransactionsRequest, command?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<PostSavingsAccountTransactionsResponse>;
    public transaction2(savingsId: number, postSavingsAccountTransactionsRequest: PostSavingsAccountTransactionsRequest, command?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<PostSavingsAccountTransactionsResponse>>;
    public transaction2(savingsId: number, postSavingsAccountTransactionsRequest: PostSavingsAccountTransactionsRequest, command?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<PostSavingsAccountTransactionsResponse>>;
    public transaction2(savingsId: number, postSavingsAccountTransactionsRequest: PostSavingsAccountTransactionsRequest, command?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (savingsId === null || savingsId === undefined) {
            throw new Error('Required parameter savingsId was null or undefined when calling transaction2.');
        }
        if (postSavingsAccountTransactionsRequest === null || postSavingsAccountTransactionsRequest === undefined) {
            throw new Error('Required parameter postSavingsAccountTransactionsRequest was null or undefined when calling transaction2.');
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

        let localVarPath = `/savingsaccounts/${this.configuration.encodeParam({name: "savingsId", value: savingsId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/transactions`;
        return this.httpClient.request<PostSavingsAccountTransactionsResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: postSavingsAccountTransactionsRequest,
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
