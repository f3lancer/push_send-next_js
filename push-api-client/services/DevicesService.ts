/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DevicesService {
    /**
     * Get list of devices with filters
     * Name to filter entities
     * @param limit Maximum number of items to return
     * @param offset Number of items to skip before starting to collect the result set
     * @param tags Tags to filter entities
     * @param email Email to filter entities
     * @param deviceToken Device token to filter entities
     * @param platform Platform to filter entities
     * @param userId User ID to filter entities
     * @returns any Paginated list of devices
     * @throws ApiError
     */
    public static getDevices(
        limit: number = 40,
        offset?: number,
        tags?: Array<string>,
        email?: string,
        deviceToken?: string,
        platform?: 'ios' | 'android' | 'web',
        userId?: string,
    ): CancelablePromise<{
        /**
         * Total number of devices
         */
        total?: number;
        /**
         * Number of devices returned
         */
        limit?: number;
        /**
         * Offset for pagination
         */
        offset?: number;
        /**
         * List of devices
         */
        items?: Array<{
            /**
             * Unique identifier for the device
             */
            _id: string;
            /**
             * Unique device token
             */
            device_token: string;
            /**
             * Platform of the device
             */
            platform: 'ios' | 'android' | 'web';
            /**
             * User identifier
             */
            user_id?: string;
            /**
             * User email
             */
            email?: string;
            /**
             * Tags associated with the device
             */
            tags?: Array<string>;
            /**
             * Indicates if the device has undelivered notifications
             */
            undelivered?: boolean;
            /**
             * Creation timestamp
             */
            created_at?: string;
            /**
             * Last update timestamp
             */
            updated_at?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices',
            query: {
                'limit': limit,
                'offset': offset,
                'tags': tags,
                'email': email,
                'device_token': deviceToken,
                'platform': platform,
                'user_id': userId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a device
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public static postDevices(
        requestBody: {
            /**
             * Unique device token
             */
            device_token: string;
            /**
             * Platform of the device
             */
            platform: 'ios' | 'android' | 'web';
            /**
             * User identifier
             */
            user_id?: string;
            /**
             * User email
             */
            email?: string;
            /**
             * Tags associated with the device
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * Unique identifier for the device
         */
        _id: string;
        /**
         * Unique device token
         */
        device_token: string;
        /**
         * Platform of the device
         */
        platform: 'ios' | 'android' | 'web';
        /**
         * User identifier
         */
        user_id?: string;
        /**
         * User email
         */
        email?: string;
        /**
         * Tags associated with the device
         */
        tags?: Array<string>;
        /**
         * Indicates if the device has undelivered notifications
         */
        undelivered?: boolean;
        /**
         * Creation timestamp
         */
        created_at?: string;
        /**
         * Last update timestamp
         */
        updated_at?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a device by ID
     * @param id Unique identifier
     * @returns any Default Response
     * @throws ApiError
     */
    public static getDevices1(
        id: string,
    ): CancelablePromise<{
        /**
         * Unique identifier for the device
         */
        _id: string;
        /**
         * Unique device token
         */
        device_token: string;
        /**
         * Platform of the device
         */
        platform: 'ios' | 'android' | 'web';
        /**
         * User identifier
         */
        user_id?: string;
        /**
         * User email
         */
        email?: string;
        /**
         * Tags associated with the device
         */
        tags?: Array<string>;
        /**
         * Indicates if the device has undelivered notifications
         */
        undelivered?: boolean;
        /**
         * Creation timestamp
         */
        created_at?: string;
        /**
         * Last update timestamp
         */
        updated_at?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/devices/{_id}',
            path: {
                '_id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a device
     * @param id Unique identifier
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public static putDevices(
        id: string,
        requestBody: {
            /**
             * Unique device token
             */
            device_token: string;
            /**
             * Platform of the device
             */
            platform: 'ios' | 'android' | 'web';
            /**
             * User identifier
             */
            user_id?: string;
            /**
             * User email
             */
            email?: string;
            /**
             * Tags associated with the device
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * Unique identifier for the device
         */
        _id: string;
        /**
         * Unique device token
         */
        device_token: string;
        /**
         * Platform of the device
         */
        platform: 'ios' | 'android' | 'web';
        /**
         * User identifier
         */
        user_id?: string;
        /**
         * User email
         */
        email?: string;
        /**
         * Tags associated with the device
         */
        tags?: Array<string>;
        /**
         * Indicates if the device has undelivered notifications
         */
        undelivered?: boolean;
        /**
         * Creation timestamp
         */
        created_at?: string;
        /**
         * Last update timestamp
         */
        updated_at?: string;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/devices/{_id}',
            path: {
                '_id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a device
     * @param id Unique identifier
     * @returns void
     * @throws ApiError
     */
    public static deleteDevices(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/devices/{_id}',
            path: {
                '_id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Import devices via CSV file
     * Import devices from a CSV file. The file should contain device tokens, platforms, and optional user IDs and tags.
     * Example CSV format:
     * ```
     * device_token,platform,user_id,tags
     * token1,ios,user1,tag1
     * token2,android,user2,"tag2,tag3"
     * ```
     * @returns void
     * @throws ApiError
     */
    public static postDevicesImport(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/devices/import',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
