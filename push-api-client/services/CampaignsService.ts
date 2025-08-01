/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CampaignsService {
    /**
     * Get list of campaigns
     * Get a list of campaigns with optional filters
     * @param limit Maximum number of items to return
     * @param offset Number of items to skip before starting to collect the result set
     * @param tags Tags to filter campaigns
     * @param name Name to filter campaigns
     * @returns any Paginated list of campaigns
     * @throws ApiError
     */
    public static getCampaigns(
        limit: number = 40,
        offset?: number,
        tags?: Array<string>,
        name?: string,
    ): CancelablePromise<{
        /**
         * Total number of campaigns
         */
        total?: number;
        /**
         * Number of campaigns returned
         */
        limit?: number;
        /**
         * Offset for pagination
         */
        offset?: number;
        /**
         * List of campaigns
         */
        items?: Array<{
            /**
             * Unique identifier for the campaign
             */
            _id: string;
            /**
             * Name of the campaign
             */
            name: string;
            /**
             * Tags associated with the campaign
             */
            tags?: Array<string>;
            /**
             * Title of the notifications
             */
            title: string;
            /**
             * Body text of the notifications
             */
            body: string;
            /**
             * URL to open when the notification is clicked
             */
            click_url?: string;
            /**
             * Scheduled time for the campaign
             */
            schedule_at?: string;
            /**
             * Status of the campaign
             */
            status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns',
            query: {
                'limit': limit,
                'offset': offset,
                'tags': tags,
                'name': name,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a campaign
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public static postCampaigns(
        requestBody: {
            /**
             * Name of the campaign
             */
            name: string;
            /**
             * Tags associated with the campaign
             */
            tags?: Array<string>;
            /**
             * Title of the notifications
             */
            title: string;
            /**
             * Body text of the notifications
             */
            body: string;
            /**
             * URL to open when the notification is clicked
             */
            click_url?: string;
        },
    ): CancelablePromise<{
        /**
         * Unique identifier for the campaign
         */
        _id: string;
        /**
         * Name of the campaign
         */
        name: string;
        /**
         * Tags associated with the campaign
         */
        tags?: Array<string>;
        /**
         * Title of the notifications
         */
        title: string;
        /**
         * Body text of the notifications
         */
        body: string;
        /**
         * URL to open when the notification is clicked
         */
        click_url?: string;
        /**
         * Scheduled time for the campaign
         */
        schedule_at?: string;
        /**
         * Status of the campaign
         */
        status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a campaign by ID
     * @param id Unique identifier
     * @returns any Default Response
     * @throws ApiError
     */
    public static getCampaigns1(
        id: string,
    ): CancelablePromise<{
        /**
         * Unique identifier for the campaign
         */
        _id: string;
        /**
         * Name of the campaign
         */
        name: string;
        /**
         * Tags associated with the campaign
         */
        tags?: Array<string>;
        /**
         * Title of the notifications
         */
        title: string;
        /**
         * Body text of the notifications
         */
        body: string;
        /**
         * URL to open when the notification is clicked
         */
        click_url?: string;
        /**
         * Scheduled time for the campaign
         */
        schedule_at?: string;
        /**
         * Status of the campaign
         */
        status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns/{_id}',
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
     * Update a campaign
     * @param id Unique identifier
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public static putCampaigns(
        id: string,
        requestBody: {
            /**
             * Name of the campaign
             */
            name: string;
            /**
             * Tags associated with the campaign
             */
            tags?: Array<string>;
            /**
             * Title of the notifications
             */
            title: string;
            /**
             * Body text of the notifications
             */
            body: string;
            /**
             * URL to open when the notification is clicked
             */
            click_url?: string;
        },
    ): CancelablePromise<{
        /**
         * Unique identifier for the campaign
         */
        _id: string;
        /**
         * Name of the campaign
         */
        name: string;
        /**
         * Tags associated with the campaign
         */
        tags?: Array<string>;
        /**
         * Title of the notifications
         */
        title: string;
        /**
         * Body text of the notifications
         */
        body: string;
        /**
         * URL to open when the notification is clicked
         */
        click_url?: string;
        /**
         * Scheduled time for the campaign
         */
        schedule_at?: string;
        /**
         * Status of the campaign
         */
        status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns/{_id}',
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
     * Delete a campaign
     * @param id Unique identifier
     * @returns void
     * @throws ApiError
     */
    public static deleteCampaigns(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/campaigns/{_id}',
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
     * Run a campaign
     * Run a campaign immediately or schedule it for later execution
     * @param id Unique identifier
     * @returns any Default Response
     * @throws ApiError
     */
    public static postCampaignsRun(
        id: string,
    ): CancelablePromise<{
        /**
         * Unique identifier for the campaign
         */
        _id: string;
        /**
         * Name of the campaign
         */
        name: string;
        /**
         * Tags associated with the campaign
         */
        tags?: Array<string>;
        /**
         * Title of the notifications
         */
        title: string;
        /**
         * Body text of the notifications
         */
        body: string;
        /**
         * URL to open when the notification is clicked
         */
        click_url?: string;
        /**
         * Scheduled time for the campaign
         */
        schedule_at?: string;
        /**
         * Status of the campaign
         */
        status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns/{_id}/run',
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
     * Clone a campaign
     * @param id Unique identifier
     * @returns any Default Response
     * @throws ApiError
     */
    public static postCampaignsClone(
        id: string,
    ): CancelablePromise<{
        /**
         * Unique identifier for the campaign
         */
        _id: string;
        /**
         * Name of the campaign
         */
        name: string;
        /**
         * Tags associated with the campaign
         */
        tags?: Array<string>;
        /**
         * Title of the notifications
         */
        title: string;
        /**
         * Body text of the notifications
         */
        body: string;
        /**
         * URL to open when the notification is clicked
         */
        click_url?: string;
        /**
         * Scheduled time for the campaign
         */
        schedule_at?: string;
        /**
         * Status of the campaign
         */
        status?: 'new' | 'running' | 'completed' | 'failed';
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
            url: '/campaigns/{_id}/clone',
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
}
