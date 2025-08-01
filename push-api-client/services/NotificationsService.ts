/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Get list of notifications
     * @param limit Maximum number of items to return
     * @param offset Number of items to skip before starting to collect the result set
     * @param campaignId Filter notifications by campaign ID
     * @param status Filter notifications by status
     * @param deviceId Filter notifications by device ID
     * @returns any Paginated list of notifications
     * @throws ApiError
     */
    public static getNotifications(
        limit: number = 40,
        offset?: number,
        campaignId?: string,
        status?: 'new' | 'sent' | 'failed' | 'delivered' | 'undelivered',
        deviceId?: string,
    ): CancelablePromise<{
        /**
         * Total number of notifications
         */
        total?: number;
        /**
         * Number of notifications returned
         */
        limit?: number;
        /**
         * Offset for pagination
         */
        offset?: number;
        /**
         * List of notifications
         */
        items?: Array<{
            /**
             * Unique identifier for the notification
             */
            _id: string;
            /**
             * Identifier of the device to which the notification was sent
             */
            device_id: string;
            /**
             * Identifier of the campaign associated with the notification
             */
            campaign_id: string;
            /**
             * Title of the notification
             */
            title: string;
            /**
             * Body text of the notification
             */
            body: string;
            /**
             * URL to open when the notification is clicked
             */
            click_url?: string;
            /**
             * Status of the notification
             */
            status: 'new' | 'sent' | 'failed' | 'delivered' | 'undelivered';
            /**
             * Number of attempts made to send the notification
             */
            attempt?: number;
            /**
             * Timestamp for the next attempt to send the notification
             */
            next_attempt?: string;
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
            url: '/notifications',
            query: {
                'limit': limit,
                'offset': offset,
                'campaign_id': campaignId,
                'status': status,
                'device_id': deviceId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
}
