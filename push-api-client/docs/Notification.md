# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Unique identifier for the notification | [default to undefined]
**device_id** | **string** | Identifier of the device to which the notification was sent | [default to undefined]
**campaign_id** | **string** | Identifier of the campaign associated with the notification | [default to undefined]
**title** | **string** | Title of the notification | [default to undefined]
**body** | **string** | Body text of the notification | [default to undefined]
**click_url** | **string** | URL to open when the notification is clicked | [optional] [default to undefined]
**status** | **string** | Status of the notification | [default to undefined]
**attempt** | **number** | Number of attempts made to send the notification | [optional] [default to 0]
**next_attempt** | **string** | Timestamp for the next attempt to send the notification | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { Notification } from './api';

const instance: Notification = {
    _id,
    device_id,
    campaign_id,
    title,
    body,
    click_url,
    status,
    attempt,
    next_attempt,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
