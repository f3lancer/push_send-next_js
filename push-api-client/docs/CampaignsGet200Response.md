# CampaignsGet200Response

Paginated list of campaigns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of campaigns | [optional] [default to undefined]
**limit** | **number** | Number of campaigns returned | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to undefined]
**items** | [**Array&lt;CampaignsGet200ResponseItemsInner&gt;**](CampaignsGet200ResponseItemsInner.md) | List of campaigns | [optional] [default to undefined]

## Example

```typescript
import { CampaignsGet200Response } from './api';

const instance: CampaignsGet200Response = {
    total,
    limit,
    offset,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
