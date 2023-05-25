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
/**
 * 
 * @export
 * @interface MedicineCategoryDTO
 */
export interface MedicineCategoryDTO {
    /**
     * 
     * @type {string}
     * @memberof MedicineCategoryDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MedicineCategoryDTO
     */
    categoryName?: string | null;
}

/**
 * Check if a given object implements the MedicineCategoryDTO interface.
 */
export function instanceOfMedicineCategoryDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MedicineCategoryDTOFromJSON(json: any): MedicineCategoryDTO {
    return MedicineCategoryDTOFromJSONTyped(json, false);
}

export function MedicineCategoryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedicineCategoryDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'categoryName': !exists(json, 'categoryName') ? undefined : json['categoryName'],
    };
}

export function MedicineCategoryDTOToJSON(value?: MedicineCategoryDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'categoryName': value.categoryName,
    };
}

