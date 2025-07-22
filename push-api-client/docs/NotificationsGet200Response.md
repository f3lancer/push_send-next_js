# NotificationsGet200Response

Paginated list of notifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of notifications | [optional] [default to undefined]
**limit** | **number** | Number of notifications returned | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to undefined]
**items** | [**Array&lt;NotificationsGet200ResponseItemsInner&gt;**](NotificationsGet200ResponseItemsInner.md) | List of notifications | [optional] [default to undefined]

## Example

```typescript
import { NotificationsGet200Response } from './api';

const instance: NotificationsGet200Response = {
    total,
    limit,
    offset,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
