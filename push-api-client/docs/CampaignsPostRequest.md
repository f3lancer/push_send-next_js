# CampaignsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the campaign | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the campaign | [optional] [default to undefined]
**title** | **string** | Title of the notifications | [default to undefined]
**body** | **string** | Body text of the notifications | [default to undefined]
**click_url** | **string** | URL to open when the notification is clicked | [optional] [default to undefined]

## Example

```typescript
import { CampaignsPostRequest } from './api';

const instance: CampaignsPostRequest = {
    name,
    tags,
    title,
    body,
    click_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
