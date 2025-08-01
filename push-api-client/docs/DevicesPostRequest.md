# DevicesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_token** | **string** | Unique device token | [default to undefined]
**platform** | **string** | Platform of the device | [default to undefined]
**user_id** | **string** | User identifier | [optional] [default to undefined]
**email** | **string** | User email | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the device | [optional] [default to undefined]

## Example

```typescript
import { DevicesPostRequest } from './api';

const instance: DevicesPostRequest = {
    device_token,
    platform,
    user_id,
    email,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
