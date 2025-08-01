# CampaignsApi

All URIs are relative to *https://push-api-staging.mssg.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**campaignsGet**](#campaignsget) | **GET** /campaigns | Get list of campaigns|
|[**campaignsIdClonePost**](#campaignsidclonepost) | **POST** /campaigns/{_id}/clone | Clone a campaign|
|[**campaignsIdDelete**](#campaignsiddelete) | **DELETE** /campaigns/{_id} | Delete a campaign|
|[**campaignsIdGet**](#campaignsidget) | **GET** /campaigns/{_id} | Get a campaign by ID|
|[**campaignsIdPut**](#campaignsidput) | **PUT** /campaigns/{_id} | Update a campaign|
|[**campaignsIdRunPost**](#campaignsidrunpost) | **POST** /campaigns/{_id}/run | Run a campaign|
|[**campaignsPost**](#campaignspost) | **POST** /campaigns | Create a campaign|

# **campaignsGet**
> CampaignsGet200Response campaignsGet()

Get a list of campaigns with optional filters

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let limit: number; //Maximum number of items to return (optional) (default to 40)
let offset: number; //Number of items to skip before starting to collect the result set (optional) (default to 0)
let tags: Array<string>; //Tags to filter campaigns (optional) (default to undefined)
let name: string; //Name to filter campaigns (optional) (default to undefined)

const { status, data } = await apiInstance.campaignsGet(
    limit,
    offset,
    tags,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of items to return | (optional) defaults to 40|
| **offset** | [**number**] | Number of items to skip before starting to collect the result set | (optional) defaults to 0|
| **tags** | **Array&lt;string&gt;** | Tags to filter campaigns | (optional) defaults to undefined|
| **name** | [**string**] | Name to filter campaigns | (optional) defaults to undefined|


### Return type

**CampaignsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of campaigns |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaignsIdClonePost**
> CampaignsGet200ResponseItemsInner campaignsIdClonePost()


### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.campaignsIdClonePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**CampaignsGet200ResponseItemsInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaignsIdDelete**
> campaignsIdDelete()


### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.campaignsIdDelete(
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

# **campaignsIdGet**
> CampaignsGet200ResponseItemsInner campaignsIdGet()


### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.campaignsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**CampaignsGet200ResponseItemsInner**

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

# **campaignsIdPut**
> CampaignsGet200ResponseItemsInner campaignsIdPut(campaignsPostRequest)


### Example

```typescript
import {
    CampaignsApi,
    Configuration,
    CampaignsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: string; //Unique identifier (default to undefined)
let campaignsPostRequest: CampaignsPostRequest; //

const { status, data } = await apiInstance.campaignsIdPut(
    id,
    campaignsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignsPostRequest** | **CampaignsPostRequest**|  | |
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**CampaignsGet200ResponseItemsInner**

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

# **campaignsIdRunPost**
> CampaignsGet200ResponseItemsInner campaignsIdRunPost()

Run a campaign immediately or schedule it for later execution

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let id: string; //Unique identifier (default to undefined)

const { status, data } = await apiInstance.campaignsIdRunPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier | defaults to undefined|


### Return type

**CampaignsGet200ResponseItemsInner**

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

# **campaignsPost**
> CampaignsGet200ResponseItemsInner campaignsPost(campaignsPostRequest)


### Example

```typescript
import {
    CampaignsApi,
    Configuration,
    CampaignsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let campaignsPostRequest: CampaignsPostRequest; //

const { status, data } = await apiInstance.campaignsPost(
    campaignsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignsPostRequest** | **CampaignsPostRequest**|  | |


### Return type

**CampaignsGet200ResponseItemsInner**

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

