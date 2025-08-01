/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Device = {
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
    platform: Device.platform;
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
};
export namespace Device {
    /**
     * Platform of the device
     */
    export enum platform {
        IOS = 'ios',
        ANDROID = 'android',
        WEB = 'web',
    }
}

