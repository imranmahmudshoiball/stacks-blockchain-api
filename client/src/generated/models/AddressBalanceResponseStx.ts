/* tslint:disable */
/* eslint-disable */
/**
 * Stacks 2.0 Blockchain API
 * This is the documentation for the Stacks 2.0 Blockchain API.  It is comprised of two parts; the Stacks Blockchain API and the Stacks Core API.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/614feab5c108d292bffa#?env%5BStacks%20Blockchain%20API%5D=W3sia2V5Ijoic3R4X2FkZHJlc3MiLCJ2YWx1ZSI6IlNUMlRKUkhESE1ZQlE0MTdIRkIwQkRYNDMwVFFBNVBYUlg2NDk1RzFWIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJibG9ja19pZCIsInZhbHVlIjoiMHgiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im9mZnNldCIsInZhbHVlIjoiMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfdHgiLCJ2YWx1ZSI6IjIwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfYmxvY2siLCJ2YWx1ZSI6IjMwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0eF9pZCIsInZhbHVlIjoiMHg1NDA5MGMxNmE3MDJiNzUzYjQzMTE0ZTg4NGJjMTlhODBhNzk2MzhmZDQ0OWE0MGY4MDY4Y2RmMDAzY2RlNmUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9pZCIsInZhbHVlIjoiU1RKVFhFSlBKUFBWRE5BOUIwNTJOU1JSQkdRQ0ZOS1ZTMTc4VkdIMS5oZWxsb193b3JsZFxuIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidGNfYWRkcmVzcyIsInZhbHVlIjoiYWJjIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9hZGRyZXNzIiwidmFsdWUiOiJTVEpUWEVKUEpQUFZETkE5QjA1Mk5TUlJCR1FDRk5LVlMxNzhWR0gxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9uYW1lIiwidmFsdWUiOiJoZWxsb193b3JsZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWFwIiwidmFsdWUiOiJzdG9yZSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWV0aG9kIiwidmFsdWUiOiJnZXQtdmFsdWUiLCJlbmFibGVkIjp0cnVlfV0=) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * StxBalance
 * @export
 * @interface AddressBalanceResponseStx
 */
export interface AddressBalanceResponseStx {
    /**
     * 
     * @type {string}
     * @memberof AddressBalanceResponseStx
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBalanceResponseStx
     */
    locked: string;
    /**
     * 
     * @type {number}
     * @memberof AddressBalanceResponseStx
     */
    unlock_height: number;
    /**
     * 
     * @type {string}
     * @memberof AddressBalanceResponseStx
     */
    total_sent: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBalanceResponseStx
     */
    total_received: string;
}

export function AddressBalanceResponseStxFromJSON(json: any): AddressBalanceResponseStx {
    return AddressBalanceResponseStxFromJSONTyped(json, false);
}

export function AddressBalanceResponseStxFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBalanceResponseStx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'locked': json['locked'],
        'unlock_height': json['unlock_height'],
        'total_sent': json['total_sent'],
        'total_received': json['total_received'],
    };
}

export function AddressBalanceResponseStxToJSON(value?: AddressBalanceResponseStx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'locked': value.locked,
        'unlock_height': value.unlock_height,
        'total_sent': value.total_sent,
        'total_received': value.total_received,
    };
}


