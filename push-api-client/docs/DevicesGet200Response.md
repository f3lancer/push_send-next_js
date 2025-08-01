# DevicesGet200Response

Paginated list of devices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of devices | [optional] [default to undefined]
**limit** | **number** | Number of devices returned | [optional] [default to undefined]
**offset** | **number** | Offset for pagination | [optional] [default to undefined]
**items** | [**Array&lt;DevicesGet200ResponseItemsInner&gt;**](DevicesGet200ResponseItemsInner.md) | List of devices | [optional] [default to undefined]

## Example

```typescript
import { DevicesGet200Response } from './api';

const instance: DevicesGet200Response = {
    total,
    limit,
    offset,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
