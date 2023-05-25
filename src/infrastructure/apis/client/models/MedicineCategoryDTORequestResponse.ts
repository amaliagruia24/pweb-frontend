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

import { exists, mapValues } from '../runtime';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';
import type { MedicineCategoryDTO } from './MedicineCategoryDTO';
import {
    MedicineCategoryDTOFromJSON,
    MedicineCategoryDTOFromJSONTyped,
    MedicineCategoryDTOToJSON,
} from './MedicineCategoryDTO';

/**
 * 
 * @export
 * @interface MedicineCategoryDTORequestResponse
 */
export interface MedicineCategoryDTORequestResponse {
    /**
     * 
     * @type {MedicineCategoryDTO}
     * @memberof MedicineCategoryDTORequestResponse
     */
    response?: MedicineCategoryDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof MedicineCategoryDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the MedicineCategoryDTORequestResponse interface.
 */
export function instanceOfMedicineCategoryDTORequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MedicineCategoryDTORequestResponseFromJSON(json: any): MedicineCategoryDTORequestResponse {
    return MedicineCategoryDTORequestResponseFromJSONTyped(json, false);
}

export function MedicineCategoryDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedicineCategoryDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : MedicineCategoryDTOFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function MedicineCategoryDTORequestResponseToJSON(value?: MedicineCategoryDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': MedicineCategoryDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

