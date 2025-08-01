/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Notification = {
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
    status: Notification.status;
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
};
export namespace Notification {
    /**
     * Status of the notification
     */
    export enum status {
        NEW = 'new',
        SENT = 'sent',
        FAILED = 'failed',
        DELIVERED = 'delivered',
        UNDELIVERED = 'undelivered',
    }
}

