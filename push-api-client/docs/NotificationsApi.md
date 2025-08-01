# NotificationsApi

All URIs are relative to *https://push-api-staging.mssg.dev/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**notificationsGet**](#notificationsget) | **GET** /notifications | Get list of notifications|

# **notificationsGet**
> NotificationsGet200Response notificationsGet()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let limit: number; //Maximum number of items to return (optional) (default to 40)
let offset: number; //Number of items to skip before starting to collect the result set (optional) (default to 0)
let campaignId: string; //Filter notifications by campaign ID (optional) (default to undefined)
let status: 'new' | 'sent' | 'failed' | 'delivered' | 'undelivered'; //Filter notifications by status (optional) (default to undefined)
let deviceId: string; //Filter notifications by device ID (optional) (default to undefined)

const { status, data } = await apiInstance.notificationsGet(
    limit,
    offset,
    campaignId,
    status,
    deviceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of items to return | (optional) defaults to 40|
| **offset** | [**number**] | Number of items to skip before starting to collect the result set | (optional) defaults to 0|
| **campaignId** | [**string**] | Filter notifications by campaign ID | (optional) defaults to undefined|
| **status** | [**&#39;new&#39; | &#39;sent&#39; | &#39;failed&#39; | &#39;delivered&#39; | &#39;undelivered&#39;**]**Array<&#39;new&#39; &#124; &#39;sent&#39; &#124; &#39;failed&#39; &#124; &#39;delivered&#39; &#124; &#39;undelivered&#39;>** | Filter notifications by status | (optional) defaults to undefined|
| **deviceId** | [**string**] | Filter notifications by device ID | (optional) defaults to undefined|


### Return type

**NotificationsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of notifications |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

