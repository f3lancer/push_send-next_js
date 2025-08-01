# DevicesGet200ResponseItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Unique identifier for the device | [default to undefined]
**device_token** | **string** | Unique device token | [default to undefined]
**platform** | **string** | Platform of the device | [default to undefined]
**user_id** | **string** | User identifier | [optional] [default to undefined]
**email** | **string** | User email | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the device | [optional] [default to undefined]
**undelivered** | **boolean** | Indicates if the device has undelivered notifications | [optional] [default to false]
**created_at** | **string** | Creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { DevicesGet200ResponseItemsInner } from './api';

const instance: DevicesGet200ResponseItemsInner = {
    _id,
    device_token,
    platform,
    user_id,
    email,
    tags,
    undelivered,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
