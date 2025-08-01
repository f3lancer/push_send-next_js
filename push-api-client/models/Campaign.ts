/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Campaign = {
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
    status?: Campaign.status;
    /**
     * Creation timestamp
     */
    created_at?: string;
    /**
     * Last update timestamp
     */
    updated_at?: string;
};
export namespace Campaign {
    /**
     * Status of the campaign
     */
    export enum status {
        NEW = 'new',
        RUNNING = 'running',
        COMPLETED = 'completed',
        FAILED = 'failed',
    }
}

