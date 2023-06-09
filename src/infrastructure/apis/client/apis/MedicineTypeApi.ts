/* tslint:disable */
/* eslint-disable */
/**
 * MobyLab Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  MedicineTypeAddDTO,
  MedicineTypeDTO,
  MedicineTypeDTORequestResponse,
  RequestResponse,
} from '../models';
import {
    MedicineTypeAddDTOFromJSON,
    MedicineTypeAddDTOToJSON,
    MedicineTypeDTOFromJSON,
    MedicineTypeDTOToJSON,
    MedicineTypeDTORequestResponseFromJSON,
    MedicineTypeDTORequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiMedicineTypeAddPostRequest {
    medicineTypeAddDTO?: MedicineTypeAddDTO;
}

export interface ApiMedicineTypeDeleteIdDeleteRequest {
    id: string;
}

export interface ApiMedicineTypeGetByIdIdGetRequest {
    id: string;
}

export interface ApiMedicineTypeUpdatePutRequest {
    medicineTypeDTO?: MedicineTypeDTO;
}

/**
 * 
 */
export class MedicineTypeApi extends runtime.BaseAPI {

    /**
     */
    async apiMedicineTypeAddPostRaw(requestParameters: ApiMedicineTypeAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MedicineType/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MedicineTypeAddDTOToJSON(requestParameters.medicineTypeAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMedicineTypeAddPost(requestParameters: ApiMedicineTypeAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiMedicineTypeAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMedicineTypeDeleteIdDeleteRaw(requestParameters: ApiMedicineTypeDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiMedicineTypeDeleteIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MedicineType/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMedicineTypeDeleteIdDelete(requestParameters: ApiMedicineTypeDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiMedicineTypeDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMedicineTypeGetByIdIdGetRaw(requestParameters: ApiMedicineTypeGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MedicineTypeDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiMedicineTypeGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MedicineType/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MedicineTypeDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMedicineTypeGetByIdIdGet(requestParameters: ApiMedicineTypeGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MedicineTypeDTORequestResponse> {
        const response = await this.apiMedicineTypeGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMedicineTypeUpdatePutRaw(requestParameters: ApiMedicineTypeUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/MedicineType/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MedicineTypeDTOToJSON(requestParameters.medicineTypeDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiMedicineTypeUpdatePut(requestParameters: ApiMedicineTypeUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiMedicineTypeUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
