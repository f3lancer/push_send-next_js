# CampaignsGet200ResponseItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Unique identifier for the campaign | [default to undefined]
**name** | **string** | Name of the campaign | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the campaign | [optional] [default to undefined]
**title** | **string** | Title of the notifications | [default to undefined]
**body** | **string** | Body text of the notifications | [default to undefined]
**click_url** | **string** | URL to open when the notification is clicked | [optional] [default to undefined]
**schedule_at** | **string** | Scheduled time for the campaign | [optional] [default to undefined]
**status** | **string** | Status of the campaign | [optional] [default to StatusEnum_New]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { CampaignsGet200ResponseItemsInner } from './api';

const instance: CampaignsGet200ResponseItemsInner = {
    _id,
    name,
    tags,
    title,
    body,
    click_url,
    schedule_at,
    status,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
