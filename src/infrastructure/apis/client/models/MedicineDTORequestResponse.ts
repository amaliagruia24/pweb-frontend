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
import type { MedicineDTO } from './MedicineDTO';
import {
    MedicineDTOFromJSON,
    MedicineDTOFromJSONTyped,
    MedicineDTOToJSON,
} from './MedicineDTO';

/**
 * 
 * @export
 * @interface MedicineDTORequestResponse
 */
export interface MedicineDTORequestResponse {
    /**
     * 
     * @type {MedicineDTO}
     * @memberof MedicineDTORequestResponse
     */
    response?: MedicineDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof MedicineDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the MedicineDTORequestResponse interface.
 */
export function instanceOfMedicineDTORequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MedicineDTORequestResponseFromJSON(json: any): MedicineDTORequestResponse {
    return MedicineDTORequestResponseFromJSONTyped(json, false);
}

export function MedicineDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedicineDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': !exists(json, 'response') ? undefined : MedicineDTOFromJSON(json['response']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function MedicineDTORequestResponseToJSON(value?: MedicineDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': MedicineDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

