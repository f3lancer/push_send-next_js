# DevicesApi

All URIs are relative to *https://push-api-staging.mssg.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**devicesGet**](#devicesget) | **GET** /devices | Get list of devices with filters|
|[**devicesIdDelete**](#devicesiddelete) | **DELETE** /devices/{_id} | Delete a device|
|[**devicesIdGet**](#devicesidget) | **GET** /devices/{_id} | Get a device by ID|
|[**devicesIdPut**](#devicesidput) | **PUT** /devices/{_id} | Update a device|
|[**devicesImportPost**](#devicesimportpost) | **POST** /devices/import | Import devices via CSV file|
|[**devicesPost**](#devicespost) | **POST** /devices | Create a device|

# **devicesGet**
> DevicesGet200Response devicesGet()

Name to filter entities

### Example

```typescript
import {
    DevicesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

let limit: number; //Maximum number of items to return (optional) (default to 40)
let offset: number; //Number of items to skip before starting to collect the result set (optional) (default to 0)
let tags: Array<string>; //Tags to filter entities (optional) (default to undefined)
let email: string; //Email to filter entities (optional) (default to undefined)
let deviceToken: string; //Device token to filter entities (optional) (default to undefined)
let platform: 'ios' | 'android' | 'web'; //Platform to filter entities (optional) (default to undefined)
let userId: string; //User ID to filter entities (optional) (default to undefined)

const { status, data } = await apiInstance.devicesGet(
    limit,
    offset,
    tags,
    email,
    deviceToken,
    platform,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of items to return | (optional) defaults to 40|
| **offset** | [**number**] | Number of items to skip before starting to collect the result set | (optional) defaults to 0|
| **tags** | **Array&lt;string&gt;** | Tags to filter entities | (optional) defaults to undefined|
| **email** | [**string**] | Email to filter entities | (optional) defaults to undefined|
| **deviceToken** | [**string**] | Device token to filter entities | (optional) defaults to undefined|
| **platform** | [**&#39;ios&#39; | &#39;android&#39; | &#39;web&#39;**]**Array<&#39;ios&#39; &#124; &#39;android&#39; &#124; &#39;web&#39;>** | Platform to filter entities | (optional) defaults to undefined|
| **userId** | [**string**] | User ID to filter entities | (optional) defaults to undefined|


### Return type

**DevicesGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of devices |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesIdDelete**
> devicesIdDelete()


### Example

```typescript
import {
    DevicesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.devicesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesIdGet**
> DevicesGet200ResponseItemsInner devicesIdGet()


### Example

```typescript
import {
    DevicesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.devicesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**DevicesGet200ResponseItemsInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesIdPut**
> DevicesGet200ResponseItemsInner devicesIdPut(devicesPostRequest)


### Example

```typescript
import {
    DevicesApi,
    Configuration,
    DevicesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

let id: string; //Unique identifier (default to undefined)
let devicesPostRequest: DevicesPostRequest; //

const { status, data } = await apiInstance.devicesIdPut(
    id,
    devicesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **devicesPostRequest** | **DevicesPostRequest**|  | |
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**DevicesGet200ResponseItemsInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesImportPost**
> devicesImportPost()

Import devices from a CSV file. The file should contain device tokens, platforms, and optional user IDs and tags. Example CSV format: ``` device_token,platform,user_id,tags token1,ios,user1,tag1 token2,android,user2,\"tag2,tag3\" ```

### Example

```typescript
import {
    DevicesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

const { status, data } = await apiInstance.devicesImportPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devicesPost**
> DevicesGet200ResponseItemsInner devicesPost(devicesPostRequest)


### Example

```typescript
import {
    DevicesApi,
    Configuration,
    DevicesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DevicesApi(configuration);

let devicesPostRequest: DevicesPostRequest; //

const { status, data } = await apiInstance.devicesPost(
    devicesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **devicesPostRequest** | **DevicesPostRequest**|  | |


### Return type

**DevicesGet200ResponseItemsInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

