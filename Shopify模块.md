# JeecgBoot 后台服务API接口文档


**简介**:JeecgBoot 后台服务API接口文档


**HOST**:http://www-api.h94b53add.nyat.app/yueran


**联系人**:北京国炬信息技术有限公司


**Version**:3.9.3


**接口路径**:/yueran/v3/api-docs/Shopify模块


[TOC]






# Shopify客户账号登录


## Shopify客户账号登录-跳转授权页


**接口地址**:`/yueran/sys/thirdLogin/shopify/render`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|client|客户端类型，web 表示后台 Web，app 表示 UniApp/移动端|query|false|string||
|redirect|登录完成后的前端回跳地址，移动端通常传 loginOauth2 页面地址|query|false|string||
|tenantId|Jeecg 租户ID，不传时使用默认租户|query|false|integer(int32)||
|forceLogin||query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized|ResultObject|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户账号登录-退出跳转


**接口地址**:`/yueran/sys/thirdLogin/shopify/logout`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ticket|Shopify退出一次性跳转票据|query|false|string||
|redirect|ticket失效时的前端回跳地址|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized|ResultObject|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户账号登录-获取退出地址


**接口地址**:`/yueran/sys/thirdLogin/shopify/logoutUrl`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|redirect|Shopify 退出完成后的前端回跳地址|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户账号登录-授权回调


**接口地址**:`/yueran/sys/thirdLogin/shopify/callback`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|Shopify Customer Account OAuth 回调授权码|query|false|string||
|state|登录发起时生成的 state，用于校验回调来源并恢复客户端上下文|query|false|string||
|error|Shopify 授权失败时返回的错误信息|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized|ResultObject|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户账号登录-获取授权地址


**接口地址**:`/yueran/sys/thirdLogin/shopify/authorizeUrl`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|client|客户端类型，web 表示后台 Web，app 表示 UniApp/移动端|query|false|string||
|redirect|登录完成后的前端回跳地址，移动端通常传 loginOauth2 页面地址|query|false|string||
|tenantId|Jeecg 租户ID，不传时使用默认租户|query|false|integer(int32)||
|forceLogin||query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify客户订阅配置


## Shopify客户订阅配置-编辑


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "sysUserId": "",
  "username": "",
  "shopifySub": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "configKey": "",
  "configName": "",
  "configSource": "",
  "localStatus": "",
  "localOptInLevel": "",
  "remoteStatus": "",
  "remoteOptInLevel": "",
  "remoteUpdatedAt": "",
  "syncStatus": "",
  "lastSyncTime": "",
  "lastRefreshTime": "",
  "lastError": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyCustomerSubscriptionConfig|Shopify客户订阅配置|body|true|ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID||false|string||
|&emsp;&emsp;username|Jeecg账号||false|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;customerName|客户名称||false|string||
|&emsp;&emsp;customerEmail|客户邮箱||false|string||
|&emsp;&emsp;configKey|配置编码||false|string||
|&emsp;&emsp;configName|配置名称||false|string||
|&emsp;&emsp;configSource|配置来源||false|string||
|&emsp;&emsp;localStatus|本地订阅状态||false|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别||false|string||
|&emsp;&emsp;remoteStatus|远程订阅状态||false|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别||false|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间||false|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-编辑


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "sysUserId": "",
  "username": "",
  "shopifySub": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "configKey": "",
  "configName": "",
  "configSource": "",
  "localStatus": "",
  "localOptInLevel": "",
  "remoteStatus": "",
  "remoteOptInLevel": "",
  "remoteUpdatedAt": "",
  "syncStatus": "",
  "lastSyncTime": "",
  "lastRefreshTime": "",
  "lastError": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyCustomerSubscriptionConfig|Shopify客户订阅配置|body|true|ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID||false|string||
|&emsp;&emsp;username|Jeecg账号||false|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;customerName|客户名称||false|string||
|&emsp;&emsp;customerEmail|客户邮箱||false|string||
|&emsp;&emsp;configKey|配置编码||false|string||
|&emsp;&emsp;configName|配置名称||false|string||
|&emsp;&emsp;configSource|配置来源||false|string||
|&emsp;&emsp;localStatus|本地订阅状态||false|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别||false|string||
|&emsp;&emsp;remoteStatus|远程订阅状态||false|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别||false|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间||false|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-快捷取消订阅Shopify


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/unsubscribeRemote`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:syncRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"sysUserId": "",
		"username": "",
		"shopifySub": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"configKey": "",
		"configName": "",
		"configSource": "",
		"localStatus": "",
		"localOptInLevel": "",
		"remoteStatus": "",
		"remoteOptInLevel": "",
		"remoteUpdatedAt": "",
		"syncStatus": "",
		"lastSyncTime": "",
		"lastRefreshTime": "",
		"lastError": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-同步Shopify


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/syncRemote`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:syncRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"sysUserId": "",
		"username": "",
		"shopifySub": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"configKey": "",
		"configName": "",
		"configSource": "",
		"localStatus": "",
		"localOptInLevel": "",
		"remoteStatus": "",
		"remoteOptInLevel": "",
		"remoteUpdatedAt": "",
		"syncStatus": "",
		"lastSyncTime": "",
		"lastRefreshTime": "",
		"lastError": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-快捷订阅Shopify


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/subscribeRemote`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:syncRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"sysUserId": "",
		"username": "",
		"shopifySub": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"configKey": "",
		"configName": "",
		"configSource": "",
		"localStatus": "",
		"localOptInLevel": "",
		"remoteStatus": "",
		"remoteOptInLevel": "",
		"remoteUpdatedAt": "",
		"syncStatus": "",
		"lastSyncTime": "",
		"lastRefreshTime": "",
		"lastError": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-保存并同步Shopify


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/saveAndSyncRemote`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:syncRemote</p>



**请求示例**:


```javascript
{
  "id": "",
  "sysUserId": "",
  "username": "",
  "shopifySub": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "configKey": "",
  "configName": "",
  "configSource": "",
  "localStatus": "",
  "localOptInLevel": "",
  "remoteStatus": "",
  "remoteOptInLevel": "",
  "remoteUpdatedAt": "",
  "syncStatus": "",
  "lastSyncTime": "",
  "lastRefreshTime": "",
  "lastError": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyCustomerSubscriptionConfig|Shopify客户订阅配置|body|true|ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID||false|string||
|&emsp;&emsp;username|Jeecg账号||false|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;customerName|客户名称||false|string||
|&emsp;&emsp;customerEmail|客户邮箱||false|string||
|&emsp;&emsp;configKey|配置编码||false|string||
|&emsp;&emsp;configName|配置名称||false|string||
|&emsp;&emsp;configSource|配置来源||false|string||
|&emsp;&emsp;localStatus|本地订阅状态||false|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别||false|string||
|&emsp;&emsp;remoteStatus|远程订阅状态||false|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别||false|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间||false|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"sysUserId": "",
		"username": "",
		"shopifySub": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"configKey": "",
		"configName": "",
		"configSource": "",
		"localStatus": "",
		"localOptInLevel": "",
		"remoteStatus": "",
		"remoteOptInLevel": "",
		"remoteUpdatedAt": "",
		"syncStatus": "",
		"lastSyncTime": "",
		"lastRefreshTime": "",
		"lastError": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-添加


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "sysUserId": "",
  "username": "",
  "shopifySub": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "configKey": "",
  "configName": "",
  "configSource": "",
  "localStatus": "",
  "localOptInLevel": "",
  "remoteStatus": "",
  "remoteOptInLevel": "",
  "remoteUpdatedAt": "",
  "syncStatus": "",
  "lastSyncTime": "",
  "lastRefreshTime": "",
  "lastError": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyCustomerSubscriptionConfig|Shopify客户订阅配置|body|true|ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID||false|string||
|&emsp;&emsp;username|Jeecg账号||false|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;customerName|客户名称||false|string||
|&emsp;&emsp;customerEmail|客户邮箱||false|string||
|&emsp;&emsp;configKey|配置编码||false|string||
|&emsp;&emsp;configName|配置名称||false|string||
|&emsp;&emsp;configSource|配置来源||false|string||
|&emsp;&emsp;localStatus|本地订阅状态||false|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别||false|string||
|&emsp;&emsp;remoteStatus|远程订阅状态||false|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别||false|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间||false|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-通过id查询


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"sysUserId": "",
		"username": "",
		"shopifySub": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"configKey": "",
		"configName": "",
		"configSource": "",
		"localStatus": "",
		"localOptInLevel": "",
		"remoteStatus": "",
		"remoteOptInLevel": "",
		"remoteUpdatedAt": "",
		"syncStatus": "",
		"lastSyncTime": "",
		"lastRefreshTime": "",
		"lastError": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-分页列表查询


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|config|Shopify客户订阅配置|query|true|ShopifyCustomerSubscriptionConfig|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;sysUserId|Jeecg用户ID||false|string||
|&emsp;&emsp;username|Jeecg账号||false|string||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;customerName|客户名称||false|string||
|&emsp;&emsp;customerEmail|客户邮箱||false|string||
|&emsp;&emsp;configKey|配置编码||false|string||
|&emsp;&emsp;configName|配置名称||false|string||
|&emsp;&emsp;configSource|配置来源||false|string||
|&emsp;&emsp;localStatus|本地订阅状态||false|string||
|&emsp;&emsp;localOptInLevel|本地订阅级别||false|string||
|&emsp;&emsp;remoteStatus|远程订阅状态||false|string||
|&emsp;&emsp;remoteOptInLevel|远程订阅级别||false|string||
|&emsp;&emsp;remoteUpdatedAt|远程更新时间||false|string(date-time)||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastRefreshTime|最后刷新时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyCustomerSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyCustomerSubscriptionConfig|IPageShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyCustomerSubscriptionConfig|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;&emsp;&emsp;configKey|配置编码|string||
|&emsp;&emsp;&emsp;&emsp;configName|配置名称|string||
|&emsp;&emsp;&emsp;&emsp;configSource|配置来源|string||
|&emsp;&emsp;&emsp;&emsp;localStatus|本地订阅状态|string||
|&emsp;&emsp;&emsp;&emsp;localOptInLevel|本地订阅级别|string||
|&emsp;&emsp;&emsp;&emsp;remoteStatus|远程订阅状态|string||
|&emsp;&emsp;&emsp;&emsp;remoteOptInLevel|远程订阅级别|string||
|&emsp;&emsp;&emsp;&emsp;remoteUpdatedAt|远程更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastRefreshTime|最后刷新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"sysUserId": "",
				"username": "",
				"shopifySub": "",
				"customerId": "",
				"customerName": "",
				"customerEmail": "",
				"configKey": "",
				"configName": "",
				"configSource": "",
				"localStatus": "",
				"localOptInLevel": "",
				"remoteStatus": "",
				"remoteOptInLevel": "",
				"remoteUpdatedAt": "",
				"syncStatus": "",
				"lastSyncTime": "",
				"lastRefreshTime": "",
				"lastError": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 查询当前登录用户的订阅状态列表


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/currentList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListShopifyCustomerSubscriptionStatusVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|array|ShopifyCustomerSubscriptionStatusVO|
|&emsp;&emsp;id||string||
|&emsp;&emsp;configKey||string||
|&emsp;&emsp;configNameText||string||
|&emsp;&emsp;configSource||string||
|&emsp;&emsp;configSourceText||string||
|&emsp;&emsp;localStatus||string||
|&emsp;&emsp;localStatusText||string||
|&emsp;&emsp;localOptInLevel||string||
|&emsp;&emsp;localOptInLevelText||string||
|&emsp;&emsp;remoteStatus||string||
|&emsp;&emsp;remoteStatusText||string||
|&emsp;&emsp;remoteOptInLevel||string||
|&emsp;&emsp;remoteOptInLevelText||string||
|&emsp;&emsp;syncStatus||string||
|&emsp;&emsp;syncStatusText||string||
|&emsp;&emsp;lastRefreshTime||string(date-time)||
|&emsp;&emsp;lastSyncTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": [
		{
			"id": "",
			"configKey": "",
			"configNameText": "",
			"configSource": "",
			"configSourceText": "",
			"localStatus": "",
			"localStatusText": "",
			"localOptInLevel": "",
			"localOptInLevelText": "",
			"remoteStatus": "",
			"remoteStatusText": "",
			"remoteOptInLevel": "",
			"remoteOptInLevelText": "",
			"syncStatus": "",
			"syncStatusText": "",
			"lastRefreshTime": "",
			"lastSyncTime": ""
		}
	],
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-通过id删除


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户订阅配置-批量删除


**接口地址**:`/yueran/shopify/subscription/shopifyCustomerSubscriptionConfig/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_subscription_config:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify门店预约管理


## Shopify门店预约管理-编辑


**接口地址**:`/yueran/shopify/shopifyStoreReservation/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "storeRef": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "remark": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreReservation|门店预约信息|body|true|ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-编辑


**接口地址**:`/yueran/shopify/shopifyStoreReservation/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "storeRef": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "remark": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreReservation|门店预约信息|body|true|ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-网页按钮核销


**接口地址**:`/yueran/shopify/shopifyStoreReservation/verify`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:verify</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"storeRef": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"remark": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-二维码验签核销


**接口地址**:`/yueran/shopify/shopifyStoreReservation/verifyQrcode`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:verifyQrcode</p>



**请求示例**:


```javascript
{
  "payload": "",
  "storeRef": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationQrVerifyParam|Shopify预约二维码验签核销参数|body|true|ShopifyReservationQrVerifyParam|ShopifyReservationQrVerifyParam|
|&emsp;&emsp;payload|扫码得到的二维码内容||false|string||
|&emsp;&emsp;storeRef|当前核销门店ID||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"storeRef": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"remark": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-取消预约


**接口地址**:`/yueran/shopify/shopifyStoreReservation/cancel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:cancel</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"storeRef": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"remark": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-添加


**接口地址**:`/yueran/shopify/shopifyStoreReservation/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "storeRef": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "remark": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreReservation|门店预约信息|body|true|ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-通过id查询


**接口地址**:`/yueran/shopify/shopifyStoreReservation/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"storeRef": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"remark": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-生成验签二维码


**接口地址**:`/yueran/shopify/shopifyStoreReservation/qrcode`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:qrcode</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID，用于生成后端验签二维码|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservationQrCodeVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservationQrCodeVO|ShopifyReservationQrCodeVO|
|&emsp;&emsp;reservationId|预约ID|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;payload|二维码内容|string||
|&emsp;&emsp;imageDataUrl|二维码PNG DataURL|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"reservationId": "",
		"code": "",
		"storeRef": "",
		"reservedAt": "",
		"expiresAt": "",
		"payload": "",
		"imageDataUrl": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-分页列表查询


**接口地址**:`/yueran/shopify/shopifyStoreReservation/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreReservation|门店预约信息|query|true|ShopifyStoreReservation|ShopifyStoreReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStoreReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStoreReservation|IPageShopifyStoreReservation|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStoreReservation|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;keyword|列表搜索关键字：客户名，地址，时间，手机号|string||
|&emsp;&emsp;&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;&emsp;&emsp;customerPhone|客户手机号|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"code": "",
				"customerId": "",
				"customerName": "",
				"customerEmail": "",
				"storeRef": "",
				"status": "",
				"reservedAt": "",
				"expiresAt": "",
				"remark": "",
				"keyword": "",
				"statusGroup": "",
				"storeName": "",
				"storeAddress": "",
				"customerPhone": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-检查预约时间是否可预约


**接口地址**:`/yueran/shopify/shopifyStoreReservation/checkAvailability`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:add</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||
|reservedAt|预约时间，格式 yyyy-MM-dd HH:mm:ss|query|true|string||
|customerId|Shopify客户ID，用于检查每天每店一条限制|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-通过id删除


**接口地址**:`/yueran/shopify/shopifyStoreReservation/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店预约管理-批量删除


**接口地址**:`/yueran/shopify/shopifyStoreReservation/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_reservation:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|预约记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 门店多语言内容


## 门店多语言内容-编辑


**接口地址**:`/yueran/shopify/shopifyStoreI18n/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "language": "",
  "storeName": "",
  "storeAddress": "",
  "storeMatters": "",
  "reservationNotice": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreI18n|门店多语言内容|body|true|ShopifyStoreI18n|ShopifyStoreI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|门店 ID||false|string||
|&emsp;&emsp;language|语言编码，支持 zh、en、ja||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;storeMatters|门店事项富文本||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-编辑


**接口地址**:`/yueran/shopify/shopifyStoreI18n/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "language": "",
  "storeName": "",
  "storeAddress": "",
  "storeMatters": "",
  "reservationNotice": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreI18n|门店多语言内容|body|true|ShopifyStoreI18n|ShopifyStoreI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|门店 ID||false|string||
|&emsp;&emsp;language|语言编码，支持 zh、en、ja||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;storeMatters|门店事项富文本||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-添加


**接口地址**:`/yueran/shopify/shopifyStoreI18n/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "language": "",
  "storeName": "",
  "storeAddress": "",
  "storeMatters": "",
  "reservationNotice": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreI18n|门店多语言内容|body|true|ShopifyStoreI18n|ShopifyStoreI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|门店 ID||false|string||
|&emsp;&emsp;language|语言编码，支持 zh、en、ja||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;storeMatters|门店事项富文本||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-通过id查询


**接口地址**:`/yueran/shopify/shopifyStoreI18n/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店多语言内容ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreI18n|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreI18n|ShopifyStoreI18n|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;storeId|门店 ID|string||
|&emsp;&emsp;language|语言编码，支持 zh、en、ja|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;storeMatters|门店事项富文本|string||
|&emsp;&emsp;reservationNotice|预约公告富文本|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"storeId": "",
		"language": "",
		"storeName": "",
		"storeAddress": "",
		"storeMatters": "",
		"reservationNotice": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-分页列表查询


**接口地址**:`/yueran/shopify/shopifyStoreI18n/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreI18n|门店多语言内容|query|true|ShopifyStoreI18n|ShopifyStoreI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|门店 ID||false|string||
|&emsp;&emsp;language|语言编码，支持 zh、en、ja||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;storeMatters|门店事项富文本||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStoreI18n|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStoreI18n|IPageShopifyStoreI18n|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStoreI18n|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;storeId|门店 ID|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码，支持 zh、en、ja|string||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;&emsp;&emsp;storeMatters|门店事项富文本|string||
|&emsp;&emsp;&emsp;&emsp;reservationNotice|预约公告富文本|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"storeId": "",
				"language": "",
				"storeName": "",
				"storeAddress": "",
				"storeMatters": "",
				"reservationNotice": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-通过id删除


**接口地址**:`/yueran/shopify/shopifyStoreI18n/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店多语言内容ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 门店多语言内容-批量删除


**接口地址**:`/yueran/shopify/shopifyStoreI18n/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_i18n:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|门店多语言内容ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify营业日历


## Shopify营业日历-编辑


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_calendar:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "storeRef": "",
  "calendarDate": "",
  "ruleType": "",
  "openTime": "",
  "closeTime": "",
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreCalendar|店铺开业特殊时间设定表|body|true|ShopifyStoreCalendar|ShopifyStoreCalendar|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;calendarDate|日期||false|string||
|&emsp;&emsp;ruleType|规则类型||false|string||
|&emsp;&emsp;openTime|开始时间||false|string||
|&emsp;&emsp;closeTime|结束时间||false|string||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-编辑


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_calendar:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "storeRef": "",
  "calendarDate": "",
  "ruleType": "",
  "openTime": "",
  "closeTime": "",
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreCalendar|店铺开业特殊时间设定表|body|true|ShopifyStoreCalendar|ShopifyStoreCalendar|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;calendarDate|日期||false|string||
|&emsp;&emsp;ruleType|规则类型||false|string||
|&emsp;&emsp;openTime|开始时间||false|string||
|&emsp;&emsp;closeTime|结束时间||false|string||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-添加


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_calendar:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "storeRef": "",
  "calendarDate": "",
  "ruleType": "",
  "openTime": "",
  "closeTime": "",
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreCalendar|店铺开业特殊时间设定表|body|true|ShopifyStoreCalendar|ShopifyStoreCalendar|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;calendarDate|日期||false|string||
|&emsp;&emsp;ruleType|规则类型||false|string||
|&emsp;&emsp;openTime|开始时间||false|string||
|&emsp;&emsp;closeTime|结束时间||false|string||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-通过id查询


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|营业日历记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStoreCalendar|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStoreCalendar|ShopifyStoreCalendar|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;calendarDate|日期|string||
|&emsp;&emsp;ruleType|规则类型|string||
|&emsp;&emsp;openTime|开始时间|string||
|&emsp;&emsp;closeTime|结束时间|string||
|&emsp;&emsp;remark|备注|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"storeRef": "",
		"calendarDate": "",
		"ruleType": "",
		"openTime": "",
		"closeTime": "",
		"remark": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-分页列表查询


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStoreCalendar|店铺开业特殊时间设定表|query|true|ShopifyStoreCalendar|ShopifyStoreCalendar|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;calendarDate|日期||false|string||
|&emsp;&emsp;ruleType|规则类型||false|string||
|&emsp;&emsp;openTime|开始时间||false|string||
|&emsp;&emsp;closeTime|结束时间||false|string||
|&emsp;&emsp;remark|备注||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStoreCalendar|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStoreCalendar|IPageShopifyStoreCalendar|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStoreCalendar|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;&emsp;&emsp;calendarDate|日期|string||
|&emsp;&emsp;&emsp;&emsp;ruleType|规则类型|string||
|&emsp;&emsp;&emsp;&emsp;openTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;closeTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"storeRef": "",
				"calendarDate": "",
				"ruleType": "",
				"openTime": "",
				"closeTime": "",
				"remark": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-通过id删除


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_calendar:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|营业日历记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify营业日历-批量删除


**接口地址**:`/yueran/shopify/shopifyStoreCalendar/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store_calendar:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|营业日历记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify门店管理


## Shopify门店管理-编辑


**接口地址**:`/yueran/shopify/shopifyStore/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "storeName": "",
  "code": "",
  "storeAddress": "",
  "businessDays": "",
  "openTime": "",
  "closeTime": "",
  "reservableDays": 0,
  "reservableNumber": 0,
  "dailyReservableNumber": 0,
  "salesclerkIds": "",
  "storeManagerId": "",
  "deputyManagerIds": "",
  "phone": "",
  "storeMatters": "",
  "remark": "",
  "publishStatus": "",
  "hasReservableProducts": "",
  "reservationNotice": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|body|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-编辑


**接口地址**:`/yueran/shopify/shopifyStore/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "storeName": "",
  "code": "",
  "storeAddress": "",
  "businessDays": "",
  "openTime": "",
  "closeTime": "",
  "reservableDays": 0,
  "reservableNumber": 0,
  "dailyReservableNumber": 0,
  "salesclerkIds": "",
  "storeManagerId": "",
  "deputyManagerIds": "",
  "phone": "",
  "storeMatters": "",
  "remark": "",
  "publishStatus": "",
  "hasReservableProducts": "",
  "reservationNotice": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|body|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-恢复门店


**接口地址**:`/yueran/shopify/shopifyStore/recycle/restore`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:recycleRestore</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-添加


**接口地址**:`/yueran/shopify/shopifyStore/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "storeName": "",
  "code": "",
  "storeAddress": "",
  "businessDays": "",
  "openTime": "",
  "closeTime": "",
  "reservableDays": 0,
  "reservableNumber": 0,
  "dailyReservableNumber": 0,
  "salesclerkIds": "",
  "storeManagerId": "",
  "deputyManagerIds": "",
  "phone": "",
  "storeMatters": "",
  "remark": "",
  "publishStatus": "",
  "hasReservableProducts": "",
  "reservationNotice": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|body|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-店员门店列表


**接口地址**:`/yueran/shopify/shopifyStore/salesclerkList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|query|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStore|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStore|IPageShopifyStore|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStore|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;storeName|实际店铺名|string||
|&emsp;&emsp;&emsp;&emsp;code|店铺代码|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|实际店铺地址|string||
|&emsp;&emsp;&emsp;&emsp;businessDays|工作日|string||
|&emsp;&emsp;&emsp;&emsp;openTime|实际店铺开店时间|string||
|&emsp;&emsp;&emsp;&emsp;closeTime|实际店铺打烊时间|string||
|&emsp;&emsp;&emsp;&emsp;reservableDays|可预约周期|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reservableNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;dailyReservableNumber|每人当天可预约次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;salesclerkIds|店员|string||
|&emsp;&emsp;&emsp;&emsp;storeManagerId|店长|string||
|&emsp;&emsp;&emsp;&emsp;deputyManagerIds|副店长|string||
|&emsp;&emsp;&emsp;&emsp;phone|实际店铺电话|string||
|&emsp;&emsp;&emsp;&emsp;storeMatters|门店事项|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;publishStatus|发布状态|string||
|&emsp;&emsp;&emsp;&emsp;hasReservableProducts|是否可预约|string||
|&emsp;&emsp;&emsp;&emsp;reservationNotice|预约公告富文本|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"storeName": "",
				"code": "",
				"storeAddress": "",
				"businessDays": "",
				"openTime": "",
				"closeTime": "",
				"reservableDays": 0,
				"reservableNumber": 0,
				"dailyReservableNumber": 0,
				"salesclerkIds": "",
				"storeManagerId": "",
				"deputyManagerIds": "",
				"phone": "",
				"storeMatters": "",
				"remark": "",
				"publishStatus": "",
				"hasReservableProducts": "",
				"reservationNotice": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-回收站详情


**接口地址**:`/yueran/shopify/shopifyStore/recycle/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:recycleList</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStore|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;storeName|实际店铺名|string||
|&emsp;&emsp;code|店铺代码|string||
|&emsp;&emsp;storeAddress|实际店铺地址|string||
|&emsp;&emsp;businessDays|工作日|string||
|&emsp;&emsp;openTime|实际店铺开店时间|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间|string||
|&emsp;&emsp;reservableDays|可预约周期|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员|string||
|&emsp;&emsp;storeManagerId|店长|string||
|&emsp;&emsp;deputyManagerIds|副店长|string||
|&emsp;&emsp;phone|实际店铺电话|string||
|&emsp;&emsp;storeMatters|门店事项|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;publishStatus|发布状态|string||
|&emsp;&emsp;hasReservableProducts|是否可预约|string||
|&emsp;&emsp;reservationNotice|预约公告富文本|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"storeName": "",
		"code": "",
		"storeAddress": "",
		"businessDays": "",
		"openTime": "",
		"closeTime": "",
		"reservableDays": 0,
		"reservableNumber": 0,
		"dailyReservableNumber": 0,
		"salesclerkIds": "",
		"storeManagerId": "",
		"deputyManagerIds": "",
		"phone": "",
		"storeMatters": "",
		"remark": "",
		"publishStatus": "",
		"hasReservableProducts": "",
		"reservationNotice": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-回收站列表


**接口地址**:`/yueran/shopify/shopifyStore/recycle/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:recycleList</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|query|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStore|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStore|IPageShopifyStore|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStore|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;storeName|实际店铺名|string||
|&emsp;&emsp;&emsp;&emsp;code|店铺代码|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|实际店铺地址|string||
|&emsp;&emsp;&emsp;&emsp;businessDays|工作日|string||
|&emsp;&emsp;&emsp;&emsp;openTime|实际店铺开店时间|string||
|&emsp;&emsp;&emsp;&emsp;closeTime|实际店铺打烊时间|string||
|&emsp;&emsp;&emsp;&emsp;reservableDays|可预约周期|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reservableNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;dailyReservableNumber|每人当天可预约次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;salesclerkIds|店员|string||
|&emsp;&emsp;&emsp;&emsp;storeManagerId|店长|string||
|&emsp;&emsp;&emsp;&emsp;deputyManagerIds|副店长|string||
|&emsp;&emsp;&emsp;&emsp;phone|实际店铺电话|string||
|&emsp;&emsp;&emsp;&emsp;storeMatters|门店事项|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;publishStatus|发布状态|string||
|&emsp;&emsp;&emsp;&emsp;hasReservableProducts|是否可预约|string||
|&emsp;&emsp;&emsp;&emsp;reservationNotice|预约公告富文本|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"storeName": "",
				"code": "",
				"storeAddress": "",
				"businessDays": "",
				"openTime": "",
				"closeTime": "",
				"reservableDays": 0,
				"reservableNumber": 0,
				"dailyReservableNumber": 0,
				"salesclerkIds": "",
				"storeManagerId": "",
				"deputyManagerIds": "",
				"phone": "",
				"storeMatters": "",
				"remark": "",
				"publishStatus": "",
				"hasReservableProducts": "",
				"reservationNotice": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-通过id查询


**接口地址**:`/yueran/shopify/shopifyStore/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyStore|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;storeName|实际店铺名|string||
|&emsp;&emsp;code|店铺代码|string||
|&emsp;&emsp;storeAddress|实际店铺地址|string||
|&emsp;&emsp;businessDays|工作日|string||
|&emsp;&emsp;openTime|实际店铺开店时间|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间|string||
|&emsp;&emsp;reservableDays|可预约周期|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员|string||
|&emsp;&emsp;storeManagerId|店长|string||
|&emsp;&emsp;deputyManagerIds|副店长|string||
|&emsp;&emsp;phone|实际店铺电话|string||
|&emsp;&emsp;storeMatters|门店事项|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;publishStatus|发布状态|string||
|&emsp;&emsp;hasReservableProducts|是否可预约|string||
|&emsp;&emsp;reservationNotice|预约公告富文本|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"storeName": "",
		"code": "",
		"storeAddress": "",
		"businessDays": "",
		"openTime": "",
		"closeTime": "",
		"reservableDays": 0,
		"reservableNumber": 0,
		"dailyReservableNumber": 0,
		"salesclerkIds": "",
		"storeManagerId": "",
		"deputyManagerIds": "",
		"phone": "",
		"storeMatters": "",
		"remark": "",
		"publishStatus": "",
		"hasReservableProducts": "",
		"reservationNotice": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-分页列表查询


**接口地址**:`/yueran/shopify/shopifyStore/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyStore|门店信息|query|true|ShopifyStore|ShopifyStore|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeName|实际店铺名||false|string||
|&emsp;&emsp;code|店铺代码||false|string||
|&emsp;&emsp;storeAddress|实际店铺地址||false|string||
|&emsp;&emsp;businessDays|工作日||false|string||
|&emsp;&emsp;openTime|实际店铺开店时间||false|string||
|&emsp;&emsp;closeTime|实际店铺打烊时间||false|string||
|&emsp;&emsp;reservableDays|可预约周期||false|integer(int32)||
|&emsp;&emsp;reservableNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;dailyReservableNumber|每人当天可预约次数||false|integer(int32)||
|&emsp;&emsp;salesclerkIds|店员||false|string||
|&emsp;&emsp;storeManagerId|店长||false|string||
|&emsp;&emsp;deputyManagerIds|副店长||false|string||
|&emsp;&emsp;phone|实际店铺电话||false|string||
|&emsp;&emsp;storeMatters|门店事项||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;publishStatus|发布状态||false|string||
|&emsp;&emsp;hasReservableProducts|是否可预约||false|string||
|&emsp;&emsp;reservationNotice|预约公告富文本||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyStore|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyStore|IPageShopifyStore|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyStore|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;storeName|实际店铺名|string||
|&emsp;&emsp;&emsp;&emsp;code|店铺代码|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|实际店铺地址|string||
|&emsp;&emsp;&emsp;&emsp;businessDays|工作日|string||
|&emsp;&emsp;&emsp;&emsp;openTime|实际店铺开店时间|string||
|&emsp;&emsp;&emsp;&emsp;closeTime|实际店铺打烊时间|string||
|&emsp;&emsp;&emsp;&emsp;reservableDays|可预约周期|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reservableNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;dailyReservableNumber|每人当天可预约次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;salesclerkIds|店员|string||
|&emsp;&emsp;&emsp;&emsp;storeManagerId|店长|string||
|&emsp;&emsp;&emsp;&emsp;deputyManagerIds|副店长|string||
|&emsp;&emsp;&emsp;&emsp;phone|实际店铺电话|string||
|&emsp;&emsp;&emsp;&emsp;storeMatters|门店事项|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;publishStatus|发布状态|string||
|&emsp;&emsp;&emsp;&emsp;hasReservableProducts|是否可预约|string||
|&emsp;&emsp;&emsp;&emsp;reservationNotice|预约公告富文本|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"storeName": "",
				"code": "",
				"storeAddress": "",
				"businessDays": "",
				"openTime": "",
				"closeTime": "",
				"reservableDays": 0,
				"reservableNumber": 0,
				"dailyReservableNumber": 0,
				"salesclerkIds": "",
				"storeManagerId": "",
				"deputyManagerIds": "",
				"phone": "",
				"storeMatters": "",
				"remark": "",
				"publishStatus": "",
				"hasReservableProducts": "",
				"reservationNotice": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-永久删除


**接口地址**:`/yueran/shopify/shopifyStore/recycle/physicalDelete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:recyclePhysicalDelete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-通过id删除


**接口地址**:`/yueran/shopify/shopifyStore/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|门店记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify门店管理-批量删除


**接口地址**:`/yueran/shopify/shopifyStore/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|门店记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify商品预约管理


## Shopify商品预约管理-编辑


**接口地址**:`/yueran/shopify/shopifyReservation/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "productRef": "",
  "storeRef": "",
  "productTitle": "",
  "productImageUrl": "",
  "productDescription": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservation|预约信息|body|true|ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;productRef|商品id||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;productTitle|商品名称||false|string||
|&emsp;&emsp;productImageUrl|商品图片||false|string||
|&emsp;&emsp;productDescription|商品描述||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;keyword|列表搜索关键字||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-编辑


**接口地址**:`/yueran/shopify/shopifyReservation/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "productRef": "",
  "storeRef": "",
  "productTitle": "",
  "productImageUrl": "",
  "productDescription": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservation|预约信息|body|true|ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;productRef|商品id||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;productTitle|商品名称||false|string||
|&emsp;&emsp;productImageUrl|商品图片||false|string||
|&emsp;&emsp;productDescription|商品描述||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;keyword|列表搜索关键字||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-网页按钮核销


**接口地址**:`/yueran/shopify/shopifyReservation/verify`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:verify</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;productRef|商品id|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;productTitle|商品名称|string||
|&emsp;&emsp;productImageUrl|商品图片|string||
|&emsp;&emsp;productDescription|商品描述|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;keyword|列表搜索关键字|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"productRef": "",
		"storeRef": "",
		"productTitle": "",
		"productImageUrl": "",
		"productDescription": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-二维码验签核销


**接口地址**:`/yueran/shopify/shopifyReservation/verifyQrcode`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:verifyQrcode</p>



**请求示例**:


```javascript
{
  "payload": "",
  "storeRef": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationQrVerifyParam|Shopify预约二维码验签核销参数|body|true|ShopifyReservationQrVerifyParam|ShopifyReservationQrVerifyParam|
|&emsp;&emsp;payload|扫码得到的二维码内容||false|string||
|&emsp;&emsp;storeRef|当前核销门店ID||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;productRef|商品id|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;productTitle|商品名称|string||
|&emsp;&emsp;productImageUrl|商品图片|string||
|&emsp;&emsp;productDescription|商品描述|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;keyword|列表搜索关键字|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"productRef": "",
		"storeRef": "",
		"productTitle": "",
		"productImageUrl": "",
		"productDescription": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-取消预约


**接口地址**:`/yueran/shopify/shopifyReservation/cancel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:cancel</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;productRef|商品id|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;productTitle|商品名称|string||
|&emsp;&emsp;productImageUrl|商品图片|string||
|&emsp;&emsp;productDescription|商品描述|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;keyword|列表搜索关键字|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"productRef": "",
		"storeRef": "",
		"productTitle": "",
		"productImageUrl": "",
		"productDescription": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-添加


**接口地址**:`/yueran/shopify/shopifyReservation/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "code": "",
  "customerId": "",
  "customerName": "",
  "customerEmail": "",
  "productRef": "",
  "storeRef": "",
  "productTitle": "",
  "productImageUrl": "",
  "productDescription": "",
  "status": "",
  "reservedAt": "",
  "expiresAt": "",
  "keyword": "",
  "statusGroup": "",
  "storeName": "",
  "storeAddress": "",
  "customerPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservation|预约信息|body|true|ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;productRef|商品id||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;productTitle|商品名称||false|string||
|&emsp;&emsp;productImageUrl|商品图片||false|string||
|&emsp;&emsp;productDescription|商品描述||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;keyword|列表搜索关键字||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-通过id查询


**接口地址**:`/yueran/shopify/shopifyReservation/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;productRef|商品id|string||
|&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;productTitle|商品名称|string||
|&emsp;&emsp;productImageUrl|商品图片|string||
|&emsp;&emsp;productDescription|商品描述|string||
|&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;keyword|列表搜索关键字|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;customerPhone|客户手机号|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"code": "",
		"customerId": "",
		"customerName": "",
		"customerEmail": "",
		"productRef": "",
		"storeRef": "",
		"productTitle": "",
		"productImageUrl": "",
		"productDescription": "",
		"status": "",
		"reservedAt": "",
		"expiresAt": "",
		"keyword": "",
		"statusGroup": "",
		"storeName": "",
		"storeAddress": "",
		"customerPhone": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-生成验签二维码


**接口地址**:`/yueran/shopify/shopifyReservation/qrcode`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:qrcode</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID，用于生成后端验签二维码|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservationQrCodeVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservationQrCodeVO|ShopifyReservationQrCodeVO|
|&emsp;&emsp;reservationId|预约ID|string||
|&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;payload|二维码内容|string||
|&emsp;&emsp;imageDataUrl|二维码PNG DataURL|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"reservationId": "",
		"code": "",
		"storeRef": "",
		"reservedAt": "",
		"expiresAt": "",
		"payload": "",
		"imageDataUrl": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-分页列表查询


**接口地址**:`/yueran/shopify/shopifyReservation/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservation|预约信息|query|true|ShopifyReservation|ShopifyReservation|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;code|预约码||false|string||
|&emsp;&emsp;customerId|shopify客户id||false|string||
|&emsp;&emsp;customerName|shopify客户名||false|string||
|&emsp;&emsp;customerEmail|shopify客户邮箱||false|string||
|&emsp;&emsp;productRef|商品id||false|string||
|&emsp;&emsp;storeRef|店铺id||false|string||
|&emsp;&emsp;productTitle|商品名称||false|string||
|&emsp;&emsp;productImageUrl|商品图片||false|string||
|&emsp;&emsp;productDescription|商品描述||false|string||
|&emsp;&emsp;status|预约状态||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;expiresAt|过期时间||false|string||
|&emsp;&emsp;keyword|列表搜索关键字||false|string||
|&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeAddress|门店地址||false|string||
|&emsp;&emsp;customerPhone|客户手机号||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyReservation|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyReservation|IPageShopifyReservation|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyReservation|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;code|预约码|string||
|&emsp;&emsp;&emsp;&emsp;customerId|shopify客户id|string||
|&emsp;&emsp;&emsp;&emsp;customerName|shopify客户名|string||
|&emsp;&emsp;&emsp;&emsp;customerEmail|shopify客户邮箱|string||
|&emsp;&emsp;&emsp;&emsp;productRef|商品id|string||
|&emsp;&emsp;&emsp;&emsp;storeRef|店铺id|string||
|&emsp;&emsp;&emsp;&emsp;productTitle|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productImageUrl|商品图片|string||
|&emsp;&emsp;&emsp;&emsp;productDescription|商品描述|string||
|&emsp;&emsp;&emsp;&emsp;status|预约状态|string||
|&emsp;&emsp;&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;&emsp;&emsp;expiresAt|过期时间|string||
|&emsp;&emsp;&emsp;&emsp;keyword|列表搜索关键字|string||
|&emsp;&emsp;&emsp;&emsp;statusGroup|状态分组：active=预约中，finished=已完成|string||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;storeAddress|门店地址|string||
|&emsp;&emsp;&emsp;&emsp;customerPhone|客户手机号|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"code": "",
				"customerId": "",
				"customerName": "",
				"customerEmail": "",
				"productRef": "",
				"storeRef": "",
				"productTitle": "",
				"productImageUrl": "",
				"productDescription": "",
				"status": "",
				"reservedAt": "",
				"expiresAt": "",
				"keyword": "",
				"statusGroup": "",
				"storeName": "",
				"storeAddress": "",
				"customerPhone": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-检查预约时间是否可预约


**接口地址**:`/yueran/shopify/shopifyReservation/checkAvailability`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:add</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||
|reservedAt|预约时间，格式 yyyy-MM-dd HH:mm:ss|query|true|string||
|customerId|Shopify客户ID，用于检查每天每店一条限制|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-通过id删除


**接口地址**:`/yueran/shopify/shopifyReservation/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品预约管理-批量删除


**接口地址**:`/yueran/shopify/shopifyReservation/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|预约记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员等级多语言内容


## 会员等级多语言内容-编辑


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelId": "",
  "language": "",
  "levelName": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelI18n|会员等级多语言内容|body|true|ShopifyMemberLevelI18n|ShopifyMemberLevelI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelId|会员等级ID||false|string||
|&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;levelName|当前语言下的等级名称||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-编辑


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelId": "",
  "language": "",
  "levelName": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelI18n|会员等级多语言内容|body|true|ShopifyMemberLevelI18n|ShopifyMemberLevelI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelId|会员等级ID||false|string||
|&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;levelName|当前语言下的等级名称||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-添加


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelId": "",
  "language": "",
  "levelName": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelI18n|会员等级多语言内容|body|true|ShopifyMemberLevelI18n|ShopifyMemberLevelI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelId|会员等级ID||false|string||
|&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;levelName|当前语言下的等级名称||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-通过id查询


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberLevelI18n|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberLevelI18n|ShopifyMemberLevelI18n|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;levelId|会员等级ID|string||
|&emsp;&emsp;language|语言编码：zh、en、ja|string||
|&emsp;&emsp;levelName|当前语言下的等级名称|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"levelId": "",
		"language": "",
		"levelName": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-分页列表查询


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|filter|会员等级多语言内容|query|true|ShopifyMemberLevelI18n|ShopifyMemberLevelI18n|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelId|会员等级ID||false|string||
|&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;levelName|当前语言下的等级名称||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|pageNo|页码|query|false|integer(int32)||
|pageSize|每页条数|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberLevelI18n|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberLevelI18n|IPageShopifyMemberLevelI18n|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberLevelI18n|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;levelId|会员等级ID|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码：zh、en、ja|string||
|&emsp;&emsp;&emsp;&emsp;levelName|当前语言下的等级名称|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"levelId": "",
				"language": "",
				"levelName": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-通过id删除


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级多语言内容-批量删除


**接口地址**:`/yueran/shopify/shopifyMemberLevelI18n/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_i18n:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify Webhook推送配置


## Shopify Webhook推送配置-编辑


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "topic": "",
  "callbackUri": "",
  "format": "",
  "includeFields": "",
  "filterRule": "",
  "localStatus": "",
  "syncStatus": "",
  "remoteSubscriptionId": "",
  "remoteTopic": "",
  "remoteUri": "",
  "remoteFormat": "",
  "remoteIncludeFields": "",
  "remoteFilterRule": "",
  "remoteCreatedAt": "",
  "lastSyncTime": "",
  "lastCheckTime": "",
  "lastError": "",
  "syncRetryCount": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyWebhookSubscriptionConfig|Shopify Webhook推送配置|body|true|ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;topic|Webhook主题||false|string||
|&emsp;&emsp;callbackUri|回调地址||false|string||
|&emsp;&emsp;format|推送格式||false|string||
|&emsp;&emsp;includeFields|包含字段||false|string||
|&emsp;&emsp;filterRule|过滤条件||false|string||
|&emsp;&emsp;localStatus|本地启停状态||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID||false|string||
|&emsp;&emsp;remoteTopic|远程主题||false|string||
|&emsp;&emsp;remoteUri|远程地址||false|string||
|&emsp;&emsp;remoteFormat|远程格式||false|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段||false|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件||false|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;syncRetryCount|同步重试次数||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-编辑


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "topic": "",
  "callbackUri": "",
  "format": "",
  "includeFields": "",
  "filterRule": "",
  "localStatus": "",
  "syncStatus": "",
  "remoteSubscriptionId": "",
  "remoteTopic": "",
  "remoteUri": "",
  "remoteFormat": "",
  "remoteIncludeFields": "",
  "remoteFilterRule": "",
  "remoteCreatedAt": "",
  "lastSyncTime": "",
  "lastCheckTime": "",
  "lastError": "",
  "syncRetryCount": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyWebhookSubscriptionConfig|Shopify Webhook推送配置|body|true|ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;topic|Webhook主题||false|string||
|&emsp;&emsp;callbackUri|回调地址||false|string||
|&emsp;&emsp;format|推送格式||false|string||
|&emsp;&emsp;includeFields|包含字段||false|string||
|&emsp;&emsp;filterRule|过滤条件||false|string||
|&emsp;&emsp;localStatus|本地启停状态||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID||false|string||
|&emsp;&emsp;remoteTopic|远程主题||false|string||
|&emsp;&emsp;remoteUri|远程地址||false|string||
|&emsp;&emsp;remoteFormat|远程格式||false|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段||false|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件||false|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;syncRetryCount|同步重试次数||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-同步远程


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/syncRemote`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:syncRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyWebhookSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;topic|Webhook主题|string||
|&emsp;&emsp;callbackUri|回调地址|string||
|&emsp;&emsp;format|推送格式|string||
|&emsp;&emsp;includeFields|包含字段|string||
|&emsp;&emsp;filterRule|过滤条件|string||
|&emsp;&emsp;localStatus|本地启停状态|string||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID|string||
|&emsp;&emsp;remoteTopic|远程主题|string||
|&emsp;&emsp;remoteUri|远程地址|string||
|&emsp;&emsp;remoteFormat|远程格式|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;syncRetryCount|同步重试次数|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"topic": "",
		"callbackUri": "",
		"format": "",
		"includeFields": "",
		"filterRule": "",
		"localStatus": "",
		"syncStatus": "",
		"remoteSubscriptionId": "",
		"remoteTopic": "",
		"remoteUri": "",
		"remoteFormat": "",
		"remoteIncludeFields": "",
		"remoteFilterRule": "",
		"remoteCreatedAt": "",
		"lastSyncTime": "",
		"lastCheckTime": "",
		"lastError": "",
		"syncRetryCount": 0,
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-添加


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "topic": "",
  "callbackUri": "",
  "format": "",
  "includeFields": "",
  "filterRule": "",
  "localStatus": "",
  "syncStatus": "",
  "remoteSubscriptionId": "",
  "remoteTopic": "",
  "remoteUri": "",
  "remoteFormat": "",
  "remoteIncludeFields": "",
  "remoteFilterRule": "",
  "remoteCreatedAt": "",
  "lastSyncTime": "",
  "lastCheckTime": "",
  "lastError": "",
  "syncRetryCount": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyWebhookSubscriptionConfig|Shopify Webhook推送配置|body|true|ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;topic|Webhook主题||false|string||
|&emsp;&emsp;callbackUri|回调地址||false|string||
|&emsp;&emsp;format|推送格式||false|string||
|&emsp;&emsp;includeFields|包含字段||false|string||
|&emsp;&emsp;filterRule|过滤条件||false|string||
|&emsp;&emsp;localStatus|本地启停状态||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID||false|string||
|&emsp;&emsp;remoteTopic|远程主题||false|string||
|&emsp;&emsp;remoteUri|远程地址||false|string||
|&emsp;&emsp;remoteFormat|远程格式||false|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段||false|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件||false|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;syncRetryCount|同步重试次数||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyWebhookSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;topic|Webhook主题|string||
|&emsp;&emsp;callbackUri|回调地址|string||
|&emsp;&emsp;format|推送格式|string||
|&emsp;&emsp;includeFields|包含字段|string||
|&emsp;&emsp;filterRule|过滤条件|string||
|&emsp;&emsp;localStatus|本地启停状态|string||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID|string||
|&emsp;&emsp;remoteTopic|远程主题|string||
|&emsp;&emsp;remoteUri|远程地址|string||
|&emsp;&emsp;remoteFormat|远程格式|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;syncRetryCount|同步重试次数|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"topic": "",
		"callbackUri": "",
		"format": "",
		"includeFields": "",
		"filterRule": "",
		"localStatus": "",
		"syncStatus": "",
		"remoteSubscriptionId": "",
		"remoteTopic": "",
		"remoteUri": "",
		"remoteFormat": "",
		"remoteIncludeFields": "",
		"remoteFilterRule": "",
		"remoteCreatedAt": "",
		"lastSyncTime": "",
		"lastCheckTime": "",
		"lastError": "",
		"syncRetryCount": 0,
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|config|Shopify Webhook推送配置|query|true|ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;topic|Webhook主题||false|string||
|&emsp;&emsp;callbackUri|回调地址||false|string||
|&emsp;&emsp;format|推送格式||false|string||
|&emsp;&emsp;includeFields|包含字段||false|string||
|&emsp;&emsp;filterRule|过滤条件||false|string||
|&emsp;&emsp;localStatus|本地启停状态||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID||false|string||
|&emsp;&emsp;remoteTopic|远程主题||false|string||
|&emsp;&emsp;remoteUri|远程地址||false|string||
|&emsp;&emsp;remoteFormat|远程格式||false|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段||false|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件||false|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间||false|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间||false|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息||false|string||
|&emsp;&emsp;syncRetryCount|同步重试次数||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|integer(int32)||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyWebhookSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyWebhookSubscriptionConfig|IPageShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;topic|Webhook主题|string||
|&emsp;&emsp;&emsp;&emsp;callbackUri|回调地址|string||
|&emsp;&emsp;&emsp;&emsp;format|推送格式|string||
|&emsp;&emsp;&emsp;&emsp;includeFields|包含字段|string||
|&emsp;&emsp;&emsp;&emsp;filterRule|过滤条件|string||
|&emsp;&emsp;&emsp;&emsp;localStatus|本地启停状态|string||
|&emsp;&emsp;&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;&emsp;&emsp;remoteSubscriptionId|远程订阅ID|string||
|&emsp;&emsp;&emsp;&emsp;remoteTopic|远程主题|string||
|&emsp;&emsp;&emsp;&emsp;remoteUri|远程地址|string||
|&emsp;&emsp;&emsp;&emsp;remoteFormat|远程格式|string||
|&emsp;&emsp;&emsp;&emsp;remoteIncludeFields|远程包含字段|string||
|&emsp;&emsp;&emsp;&emsp;remoteFilterRule|远程过滤条件|string||
|&emsp;&emsp;&emsp;&emsp;remoteCreatedAt|远程创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastCheckTime|最后校验时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;&emsp;&emsp;syncRetryCount|同步重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|integer(int32)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"topic": "",
				"callbackUri": "",
				"format": "",
				"includeFields": "",
				"filterRule": "",
				"localStatus": "",
				"syncStatus": "",
				"remoteSubscriptionId": "",
				"remoteTopic": "",
				"remoteUri": "",
				"remoteFormat": "",
				"remoteIncludeFields": "",
				"remoteFilterRule": "",
				"remoteCreatedAt": "",
				"lastSyncTime": "",
				"lastCheckTime": "",
				"lastError": "",
				"syncRetryCount": 0,
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": 0
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-校验远程


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/checkRemote`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:checkRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyWebhookSubscriptionConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyWebhookSubscriptionConfig|ShopifyWebhookSubscriptionConfig|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;topic|Webhook主题|string||
|&emsp;&emsp;callbackUri|回调地址|string||
|&emsp;&emsp;format|推送格式|string||
|&emsp;&emsp;includeFields|包含字段|string||
|&emsp;&emsp;filterRule|过滤条件|string||
|&emsp;&emsp;localStatus|本地启停状态|string||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;remoteSubscriptionId|远程订阅ID|string||
|&emsp;&emsp;remoteTopic|远程主题|string||
|&emsp;&emsp;remoteUri|远程地址|string||
|&emsp;&emsp;remoteFormat|远程格式|string||
|&emsp;&emsp;remoteIncludeFields|远程包含字段|string||
|&emsp;&emsp;remoteFilterRule|远程过滤条件|string||
|&emsp;&emsp;remoteCreatedAt|远程创建时间|string(date-time)||
|&emsp;&emsp;lastSyncTime|最后同步时间|string(date-time)||
|&emsp;&emsp;lastCheckTime|最后校验时间|string(date-time)||
|&emsp;&emsp;lastError|最后错误信息|string||
|&emsp;&emsp;syncRetryCount|同步重试次数|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"topic": "",
		"callbackUri": "",
		"format": "",
		"includeFields": "",
		"filterRule": "",
		"localStatus": "",
		"syncStatus": "",
		"remoteSubscriptionId": "",
		"remoteTopic": "",
		"remoteUri": "",
		"remoteFormat": "",
		"remoteIncludeFields": "",
		"remoteFilterRule": "",
		"remoteCreatedAt": "",
		"lastSyncTime": "",
		"lastCheckTime": "",
		"lastError": "",
		"syncRetryCount": 0,
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify Webhook推送配置-批量删除


**接口地址**:`/yueran/shopify/member/shopifyWebhookSubscriptionConfig/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_webhook_subscription_config:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Smaregi终端映射


## Smaregi终端映射-编辑


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "storeName": "",
  "smaregiStoreId": "",
  "smaregiStoreCode": "",
  "terminalId": "",
  "terminalName": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiTerminalMapping|Smaregi终端映射|body|true|ShopifySmaregiTerminalMapping|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|本地门店ID||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;smaregiStoreId|Smaregi门店ID||false|string||
|&emsp;&emsp;smaregiStoreCode|Smaregi门店编码||false|string||
|&emsp;&emsp;terminalId|终端ID||false|string||
|&emsp;&emsp;terminalName|终端名称||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-编辑


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "storeName": "",
  "smaregiStoreId": "",
  "smaregiStoreCode": "",
  "terminalId": "",
  "terminalName": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiTerminalMapping|Smaregi终端映射|body|true|ShopifySmaregiTerminalMapping|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|本地门店ID||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;smaregiStoreId|Smaregi门店ID||false|string||
|&emsp;&emsp;smaregiStoreCode|Smaregi门店编码||false|string||
|&emsp;&emsp;terminalId|终端ID||false|string||
|&emsp;&emsp;terminalName|终端名称||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-添加


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "storeId": "",
  "storeName": "",
  "smaregiStoreId": "",
  "smaregiStoreCode": "",
  "terminalId": "",
  "terminalName": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiTerminalMapping|Smaregi终端映射|body|true|ShopifySmaregiTerminalMapping|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|本地门店ID||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;smaregiStoreId|Smaregi门店ID||false|string||
|&emsp;&emsp;smaregiStoreCode|Smaregi门店编码||false|string||
|&emsp;&emsp;terminalId|终端ID||false|string||
|&emsp;&emsp;terminalName|终端名称||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-通过id查询


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifySmaregiTerminalMapping|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifySmaregiTerminalMapping|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;storeId|本地门店ID|string||
|&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;smaregiStoreId|Smaregi门店ID|string||
|&emsp;&emsp;smaregiStoreCode|Smaregi门店编码|string||
|&emsp;&emsp;terminalId|终端ID|string||
|&emsp;&emsp;terminalName|终端名称|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"storeId": "",
		"storeName": "",
		"smaregiStoreId": "",
		"smaregiStoreCode": "",
		"terminalId": "",
		"terminalName": "",
		"status": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiTerminalMapping|Smaregi终端映射|query|true|ShopifySmaregiTerminalMapping|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;storeId|本地门店ID||false|string||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;smaregiStoreId|Smaregi门店ID||false|string||
|&emsp;&emsp;smaregiStoreCode|Smaregi门店编码||false|string||
|&emsp;&emsp;terminalId|终端ID||false|string||
|&emsp;&emsp;terminalName|终端名称||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifySmaregiTerminalMapping|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifySmaregiTerminalMapping|IPageShopifySmaregiTerminalMapping|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifySmaregiTerminalMapping|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;storeId|本地门店ID|string||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称|string||
|&emsp;&emsp;&emsp;&emsp;smaregiStoreId|Smaregi门店ID|string||
|&emsp;&emsp;&emsp;&emsp;smaregiStoreCode|Smaregi门店编码|string||
|&emsp;&emsp;&emsp;&emsp;terminalId|终端ID|string||
|&emsp;&emsp;&emsp;&emsp;terminalName|终端名称|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"storeId": "",
				"storeName": "",
				"smaregiStoreId": "",
				"smaregiStoreCode": "",
				"terminalId": "",
				"terminalName": "",
				"status": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-删除


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi终端映射-批量删除


**接口地址**:`/yueran/shopify/member/shopifySmaregiTerminalMapping/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_terminal_mapping:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Smaregi会员同步任务


## Smaregi会员同步任务-编辑


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "memberId": "",
  "memberCode": "",
  "customerName": "",
  "customerEmail": "",
  "customerPhone": "",
  "smaregiCustomerId": "",
  "smaregiCustomerCode": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastError": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiCustomerSync|Smaregi会员同步任务|body|true|ShopifySmaregiCustomerSync|ShopifySmaregiCustomerSync|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|&emsp;&emsp;memberId|||false|string||
|&emsp;&emsp;memberCode|||false|string||
|&emsp;&emsp;customerName|||false|string||
|&emsp;&emsp;customerEmail|||false|string||
|&emsp;&emsp;customerPhone|||false|string||
|&emsp;&emsp;smaregiCustomerId|||false|string||
|&emsp;&emsp;smaregiCustomerCode|||false|string||
|&emsp;&emsp;syncStatus|||false|string||
|&emsp;&emsp;retryCount|||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|||false|string(date-time)||
|&emsp;&emsp;lastError|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-编辑


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "memberId": "",
  "memberCode": "",
  "customerName": "",
  "customerEmail": "",
  "customerPhone": "",
  "smaregiCustomerId": "",
  "smaregiCustomerCode": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastError": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiCustomerSync|Smaregi会员同步任务|body|true|ShopifySmaregiCustomerSync|ShopifySmaregiCustomerSync|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|&emsp;&emsp;memberId|||false|string||
|&emsp;&emsp;memberCode|||false|string||
|&emsp;&emsp;customerName|||false|string||
|&emsp;&emsp;customerEmail|||false|string||
|&emsp;&emsp;customerPhone|||false|string||
|&emsp;&emsp;smaregiCustomerId|||false|string||
|&emsp;&emsp;smaregiCustomerCode|||false|string||
|&emsp;&emsp;syncStatus|||false|string||
|&emsp;&emsp;retryCount|||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|||false|string(date-time)||
|&emsp;&emsp;lastError|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-重试


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/{id}/retry`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:retry</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-批量重试


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/retryBatch`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:retryBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-添加


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "memberId": "",
  "memberCode": "",
  "customerName": "",
  "customerEmail": "",
  "customerPhone": "",
  "smaregiCustomerId": "",
  "smaregiCustomerCode": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastError": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiCustomerSync|Smaregi会员同步任务|body|true|ShopifySmaregiCustomerSync|ShopifySmaregiCustomerSync|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|&emsp;&emsp;memberId|||false|string||
|&emsp;&emsp;memberCode|||false|string||
|&emsp;&emsp;customerName|||false|string||
|&emsp;&emsp;customerEmail|||false|string||
|&emsp;&emsp;customerPhone|||false|string||
|&emsp;&emsp;smaregiCustomerId|||false|string||
|&emsp;&emsp;smaregiCustomerCode|||false|string||
|&emsp;&emsp;syncStatus|||false|string||
|&emsp;&emsp;retryCount|||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|||false|string(date-time)||
|&emsp;&emsp;lastError|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-通过id查询


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifySmaregiCustomerSync|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifySmaregiCustomerSync|ShopifySmaregiCustomerSync|
|&emsp;&emsp;id||string||
|&emsp;&emsp;createBy||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateBy||string||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;delFlag||string||
|&emsp;&emsp;memberId||string||
|&emsp;&emsp;memberCode||string||
|&emsp;&emsp;customerName||string||
|&emsp;&emsp;customerEmail||string||
|&emsp;&emsp;customerPhone||string||
|&emsp;&emsp;smaregiCustomerId||string||
|&emsp;&emsp;smaregiCustomerCode||string||
|&emsp;&emsp;syncStatus||string||
|&emsp;&emsp;retryCount||integer(int32)||
|&emsp;&emsp;nextRetryTime||string(date-time)||
|&emsp;&emsp;lastError||string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": "",
		"memberId": "",
		"memberCode": "",
		"customerName": "",
		"customerEmail": "",
		"customerPhone": "",
		"smaregiCustomerId": "",
		"smaregiCustomerCode": "",
		"syncStatus": "",
		"retryCount": 0,
		"nextRetryTime": "",
		"lastError": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifySmaregiCustomerSync|Smaregi会员同步任务|query|true|ShopifySmaregiCustomerSync|ShopifySmaregiCustomerSync|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|&emsp;&emsp;memberId|||false|string||
|&emsp;&emsp;memberCode|||false|string||
|&emsp;&emsp;customerName|||false|string||
|&emsp;&emsp;customerEmail|||false|string||
|&emsp;&emsp;customerPhone|||false|string||
|&emsp;&emsp;smaregiCustomerId|||false|string||
|&emsp;&emsp;smaregiCustomerCode|||false|string||
|&emsp;&emsp;syncStatus|||false|string||
|&emsp;&emsp;retryCount|||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|||false|string(date-time)||
|&emsp;&emsp;lastError|||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifySmaregiCustomerSync|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifySmaregiCustomerSync|IPageShopifySmaregiCustomerSync|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifySmaregiCustomerSync|
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;createBy||string||
|&emsp;&emsp;&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;&emsp;&emsp;delFlag||string||
|&emsp;&emsp;&emsp;&emsp;memberId||string||
|&emsp;&emsp;&emsp;&emsp;memberCode||string||
|&emsp;&emsp;&emsp;&emsp;customerName||string||
|&emsp;&emsp;&emsp;&emsp;customerEmail||string||
|&emsp;&emsp;&emsp;&emsp;customerPhone||string||
|&emsp;&emsp;&emsp;&emsp;smaregiCustomerId||string||
|&emsp;&emsp;&emsp;&emsp;smaregiCustomerCode||string||
|&emsp;&emsp;&emsp;&emsp;syncStatus||string||
|&emsp;&emsp;&emsp;&emsp;retryCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastError||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": "",
				"memberId": "",
				"memberCode": "",
				"customerName": "",
				"customerEmail": "",
				"customerPhone": "",
				"smaregiCustomerId": "",
				"smaregiCustomerCode": "",
				"syncStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"lastError": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-删除


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Smaregi会员同步任务-批量删除


**接口地址**:`/yueran/shopify/member/shopifySmaregiCustomerSync/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_smaregi_customer_sync:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 支付对账


## 支付对账-编辑


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "smaregiTransactionId": "",
  "smaregiTransactionHeadId": "",
  "matchStrategy": "",
  "reconcileStatus": "",
  "localAmount": 0,
  "smaregiAmount": 0,
  "diffAmount": 0,
  "itemMatchStatus": "",
  "timeMatchStatus": "",
  "manualConfirmUser": "",
  "manualConfirmTime": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyPaymentReconcile|支付对账|body|true|ShopifyPaymentReconcile|ShopifyPaymentReconcile|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;smaregiTransactionId|Smaregi交易ID||false|string||
|&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID||false|string||
|&emsp;&emsp;matchStrategy|匹配策略||false|string||
|&emsp;&emsp;reconcileStatus|对账状态||false|string||
|&emsp;&emsp;localAmount|本地金额||false|number||
|&emsp;&emsp;smaregiAmount|Smaregi金额||false|number||
|&emsp;&emsp;diffAmount|差异金额||false|number||
|&emsp;&emsp;itemMatchStatus|商品匹配状态||false|string||
|&emsp;&emsp;timeMatchStatus|时间匹配状态||false|string||
|&emsp;&emsp;manualConfirmUser|人工确认人||false|string||
|&emsp;&emsp;manualConfirmTime|人工确认时间||false|string(date-time)||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-编辑


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "smaregiTransactionId": "",
  "smaregiTransactionHeadId": "",
  "matchStrategy": "",
  "reconcileStatus": "",
  "localAmount": 0,
  "smaregiAmount": 0,
  "diffAmount": 0,
  "itemMatchStatus": "",
  "timeMatchStatus": "",
  "manualConfirmUser": "",
  "manualConfirmTime": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyPaymentReconcile|支付对账|body|true|ShopifyPaymentReconcile|ShopifyPaymentReconcile|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;smaregiTransactionId|Smaregi交易ID||false|string||
|&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID||false|string||
|&emsp;&emsp;matchStrategy|匹配策略||false|string||
|&emsp;&emsp;reconcileStatus|对账状态||false|string||
|&emsp;&emsp;localAmount|本地金额||false|number||
|&emsp;&emsp;smaregiAmount|Smaregi金额||false|number||
|&emsp;&emsp;diffAmount|差异金额||false|number||
|&emsp;&emsp;itemMatchStatus|商品匹配状态||false|string||
|&emsp;&emsp;timeMatchStatus|时间匹配状态||false|string||
|&emsp;&emsp;manualConfirmUser|人工确认人||false|string||
|&emsp;&emsp;manualConfirmTime|人工确认时间||false|string(date-time)||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-添加


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "smaregiTransactionId": "",
  "smaregiTransactionHeadId": "",
  "matchStrategy": "",
  "reconcileStatus": "",
  "localAmount": 0,
  "smaregiAmount": 0,
  "diffAmount": 0,
  "itemMatchStatus": "",
  "timeMatchStatus": "",
  "manualConfirmUser": "",
  "manualConfirmTime": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyPaymentReconcile|支付对账|body|true|ShopifyPaymentReconcile|ShopifyPaymentReconcile|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;smaregiTransactionId|Smaregi交易ID||false|string||
|&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID||false|string||
|&emsp;&emsp;matchStrategy|匹配策略||false|string||
|&emsp;&emsp;reconcileStatus|对账状态||false|string||
|&emsp;&emsp;localAmount|本地金额||false|number||
|&emsp;&emsp;smaregiAmount|Smaregi金额||false|number||
|&emsp;&emsp;diffAmount|差异金额||false|number||
|&emsp;&emsp;itemMatchStatus|商品匹配状态||false|string||
|&emsp;&emsp;timeMatchStatus|时间匹配状态||false|string||
|&emsp;&emsp;manualConfirmUser|人工确认人||false|string||
|&emsp;&emsp;manualConfirmTime|人工确认时间||false|string(date-time)||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-查询Smaregi候选交易


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/smaregiCandidates`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|memberId||query|true|string||
|limit||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyPaymentReconcile|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyPaymentReconcile|ShopifyPaymentReconcile|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;smaregiTransactionId|Smaregi交易ID|string||
|&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID|string||
|&emsp;&emsp;matchStrategy|匹配策略|string||
|&emsp;&emsp;reconcileStatus|对账状态|string||
|&emsp;&emsp;localAmount|本地金额|number||
|&emsp;&emsp;smaregiAmount|Smaregi金额|number||
|&emsp;&emsp;diffAmount|差异金额|number||
|&emsp;&emsp;itemMatchStatus|商品匹配状态|string||
|&emsp;&emsp;timeMatchStatus|时间匹配状态|string||
|&emsp;&emsp;manualConfirmUser|人工确认人|string||
|&emsp;&emsp;manualConfirmTime|人工确认时间|string(date-time)||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"smaregiTransactionId": "",
		"smaregiTransactionHeadId": "",
		"matchStrategy": "",
		"reconcileStatus": "",
		"localAmount": 0,
		"smaregiAmount": 0,
		"diffAmount": 0,
		"itemMatchStatus": "",
		"timeMatchStatus": "",
		"manualConfirmUser": "",
		"manualConfirmTime": "",
		"lastErrorMessage": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyPaymentReconcile|支付对账|query|true|ShopifyPaymentReconcile|ShopifyPaymentReconcile|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;smaregiTransactionId|Smaregi交易ID||false|string||
|&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID||false|string||
|&emsp;&emsp;matchStrategy|匹配策略||false|string||
|&emsp;&emsp;reconcileStatus|对账状态||false|string||
|&emsp;&emsp;localAmount|本地金额||false|number||
|&emsp;&emsp;smaregiAmount|Smaregi金额||false|number||
|&emsp;&emsp;diffAmount|差异金额||false|number||
|&emsp;&emsp;itemMatchStatus|商品匹配状态||false|string||
|&emsp;&emsp;timeMatchStatus|时间匹配状态||false|string||
|&emsp;&emsp;manualConfirmUser|人工确认人||false|string||
|&emsp;&emsp;manualConfirmTime|人工确认时间||false|string(date-time)||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyPaymentReconcile|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyPaymentReconcile|IPageShopifyPaymentReconcile|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyPaymentReconcile|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;smaregiTransactionId|Smaregi交易ID|string||
|&emsp;&emsp;&emsp;&emsp;smaregiTransactionHeadId|Smaregi交易头ID|string||
|&emsp;&emsp;&emsp;&emsp;matchStrategy|匹配策略|string||
|&emsp;&emsp;&emsp;&emsp;reconcileStatus|对账状态|string||
|&emsp;&emsp;&emsp;&emsp;localAmount|本地金额|number||
|&emsp;&emsp;&emsp;&emsp;smaregiAmount|Smaregi金额|number||
|&emsp;&emsp;&emsp;&emsp;diffAmount|差异金额|number||
|&emsp;&emsp;&emsp;&emsp;itemMatchStatus|商品匹配状态|string||
|&emsp;&emsp;&emsp;&emsp;timeMatchStatus|时间匹配状态|string||
|&emsp;&emsp;&emsp;&emsp;manualConfirmUser|人工确认人|string||
|&emsp;&emsp;&emsp;&emsp;manualConfirmTime|人工确认时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"smaregiTransactionId": "",
				"smaregiTransactionHeadId": "",
				"matchStrategy": "",
				"reconcileStatus": "",
				"localAmount": 0,
				"smaregiAmount": 0,
				"diffAmount": 0,
				"itemMatchStatus": "",
				"timeMatchStatus": "",
				"manualConfirmUser": "",
				"manualConfirmTime": "",
				"lastErrorMessage": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 支付对账-批量删除


**接口地址**:`/yueran/shopify/member/shopifyPaymentReconcile/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_payment_reconcile:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify线上订单


## Shopify线上订单-编辑


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "orderStatus": "",
  "paidAt": "",
  "currency": "",
  "totalAmount": 0,
  "refundAmount": 0,
  "sourceType": "",
  "testBatchNo": "",
  "rawOrderJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "shopifyOnlinePaymentOrderItemList": [
    {
      "id": "",
      "onlineOrderId": "",
      "shopifyOrderGid": "",
      "shopifyLineItemGid": "",
      "productGid": "",
      "variantGid": "",
      "sku": "",
      "title": "",
      "productUrl": "",
      "productImageUrl": "",
      "quantity": 0,
      "price": 0,
      "discountAmount": 0,
      "refundQuantity": 0,
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|body|true|ShopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单名称||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;orderStatus|订单状态||false|string||
|&emsp;&emsp;paidAt|支付时间||false|string(date-time)||
|&emsp;&emsp;currency|币种||false|string||
|&emsp;&emsp;totalAmount|订单总金额||false|number||
|&emsp;&emsp;refundAmount|退款金额||false|number||
|&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation||false|string||
|&emsp;&emsp;testBatchNo|内部模拟测试批次号||false|string||
|&emsp;&emsp;rawOrderJson|Shopify订单原始JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|&emsp;&emsp;shopifyOnlinePaymentOrderItemList|||false|array|ShopifyOnlinePaymentOrderItem|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;onlineOrderId|线上订单ID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyLineItemGid|Shopify订单明细GID||false|string||
|&emsp;&emsp;&emsp;&emsp;productGid|商品GID||false|string||
|&emsp;&emsp;&emsp;&emsp;variantGid|商品变体GID||false|string||
|&emsp;&emsp;&emsp;&emsp;sku|SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;title|商品名称||false|string||
|&emsp;&emsp;&emsp;&emsp;productUrl|Shopify商品公开页面链接||false|string||
|&emsp;&emsp;&emsp;&emsp;productImageUrl|Shopify商品图片快照链接||false|string||
|&emsp;&emsp;&emsp;&emsp;quantity|购买数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;price|销售价格||false|number||
|&emsp;&emsp;&emsp;&emsp;discountAmount|折扣金额||false|number||
|&emsp;&emsp;&emsp;&emsp;refundQuantity|退款数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-编辑


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "orderStatus": "",
  "paidAt": "",
  "currency": "",
  "totalAmount": 0,
  "refundAmount": 0,
  "sourceType": "",
  "testBatchNo": "",
  "rawOrderJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "shopifyOnlinePaymentOrderItemList": [
    {
      "id": "",
      "onlineOrderId": "",
      "shopifyOrderGid": "",
      "shopifyLineItemGid": "",
      "productGid": "",
      "variantGid": "",
      "sku": "",
      "title": "",
      "productUrl": "",
      "productImageUrl": "",
      "quantity": 0,
      "price": 0,
      "discountAmount": 0,
      "refundQuantity": 0,
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|body|true|ShopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单名称||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;orderStatus|订单状态||false|string||
|&emsp;&emsp;paidAt|支付时间||false|string(date-time)||
|&emsp;&emsp;currency|币种||false|string||
|&emsp;&emsp;totalAmount|订单总金额||false|number||
|&emsp;&emsp;refundAmount|退款金额||false|number||
|&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation||false|string||
|&emsp;&emsp;testBatchNo|内部模拟测试批次号||false|string||
|&emsp;&emsp;rawOrderJson|Shopify订单原始JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|&emsp;&emsp;shopifyOnlinePaymentOrderItemList|||false|array|ShopifyOnlinePaymentOrderItem|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;onlineOrderId|线上订单ID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyLineItemGid|Shopify订单明细GID||false|string||
|&emsp;&emsp;&emsp;&emsp;productGid|商品GID||false|string||
|&emsp;&emsp;&emsp;&emsp;variantGid|商品变体GID||false|string||
|&emsp;&emsp;&emsp;&emsp;sku|SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;title|商品名称||false|string||
|&emsp;&emsp;&emsp;&emsp;productUrl|Shopify商品公开页面链接||false|string||
|&emsp;&emsp;&emsp;&emsp;productImageUrl|Shopify商品图片快照链接||false|string||
|&emsp;&emsp;&emsp;&emsp;quantity|购买数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;price|销售价格||false|number||
|&emsp;&emsp;&emsp;&emsp;discountAmount|折扣金额||false|number||
|&emsp;&emsp;&emsp;&emsp;refundQuantity|退款数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-添加


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "orderStatus": "",
  "paidAt": "",
  "currency": "",
  "totalAmount": 0,
  "refundAmount": 0,
  "sourceType": "",
  "testBatchNo": "",
  "rawOrderJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": "",
  "shopifyOnlinePaymentOrderItemList": [
    {
      "id": "",
      "onlineOrderId": "",
      "shopifyOrderGid": "",
      "shopifyLineItemGid": "",
      "productGid": "",
      "variantGid": "",
      "sku": "",
      "title": "",
      "productUrl": "",
      "productImageUrl": "",
      "quantity": 0,
      "price": 0,
      "discountAmount": 0,
      "refundQuantity": 0,
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|body|true|ShopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单名称||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;orderStatus|订单状态||false|string||
|&emsp;&emsp;paidAt|支付时间||false|string(date-time)||
|&emsp;&emsp;currency|币种||false|string||
|&emsp;&emsp;totalAmount|订单总金额||false|number||
|&emsp;&emsp;refundAmount|退款金额||false|number||
|&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation||false|string||
|&emsp;&emsp;testBatchNo|内部模拟测试批次号||false|string||
|&emsp;&emsp;rawOrderJson|Shopify订单原始JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|&emsp;&emsp;shopifyOnlinePaymentOrderItemList|||false|array|ShopifyOnlinePaymentOrderItem|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;onlineOrderId|线上订单ID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;&emsp;&emsp;shopifyLineItemGid|Shopify订单明细GID||false|string||
|&emsp;&emsp;&emsp;&emsp;productGid|商品GID||false|string||
|&emsp;&emsp;&emsp;&emsp;variantGid|商品变体GID||false|string||
|&emsp;&emsp;&emsp;&emsp;sku|SKU||false|string||
|&emsp;&emsp;&emsp;&emsp;title|商品名称||false|string||
|&emsp;&emsp;&emsp;&emsp;productUrl|Shopify商品公开页面链接||false|string||
|&emsp;&emsp;&emsp;&emsp;productImageUrl|Shopify商品图片快照链接||false|string||
|&emsp;&emsp;&emsp;&emsp;quantity|购买数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;price|销售价格||false|number||
|&emsp;&emsp;&emsp;&emsp;discountAmount|折扣金额||false|number||
|&emsp;&emsp;&emsp;&emsp;refundQuantity|退款数量||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-查询商品明细


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/queryShopifyOnlinePaymentOrderItemByMainId`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListShopifyOnlinePaymentOrderItem|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|array|ShopifyOnlinePaymentOrderItem|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;onlineOrderId|线上订单ID|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;shopifyLineItemGid|Shopify订单明细GID|string||
|&emsp;&emsp;productGid|商品GID|string||
|&emsp;&emsp;variantGid|商品变体GID|string||
|&emsp;&emsp;sku|SKU|string||
|&emsp;&emsp;title|商品名称|string||
|&emsp;&emsp;productUrl|Shopify商品公开页面链接|string||
|&emsp;&emsp;productImageUrl|Shopify商品图片快照链接|string||
|&emsp;&emsp;quantity|购买数量|integer(int32)||
|&emsp;&emsp;price|销售价格|number||
|&emsp;&emsp;discountAmount|折扣金额|number||
|&emsp;&emsp;refundQuantity|退款数量|integer(int32)||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": [
		{
			"id": "",
			"onlineOrderId": "",
			"shopifyOrderGid": "",
			"shopifyLineItemGid": "",
			"productGid": "",
			"variantGid": "",
			"sku": "",
			"title": "",
			"productUrl": "",
			"productImageUrl": "",
			"quantity": 0,
			"price": 0,
			"discountAmount": 0,
			"refundQuantity": 0,
			"createBy": "",
			"createTime": "",
			"updateBy": "",
			"updateTime": "",
			"sysOrgCode": ""
		}
	],
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-详情查询


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyOnlinePaymentOrderPage|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyOnlinePaymentOrderPage|ShopifyOnlinePaymentOrderPage|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单ID|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单名称|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;orderStatus|订单状态|string||
|&emsp;&emsp;paidAt|支付时间|string(date-time)||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;totalAmount|订单总金额|number||
|&emsp;&emsp;refundAmount|退款金额|number||
|&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation|string||
|&emsp;&emsp;testBatchNo|内部模拟测试批次号|string||
|&emsp;&emsp;rawOrderJson|Shopify订单原始JSON|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;shopifyOnlinePaymentOrderItemList||array|ShopifyOnlinePaymentOrderItem|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;onlineOrderId|线上订单ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyLineItemGid|Shopify订单明细GID|string||
|&emsp;&emsp;&emsp;&emsp;productGid|商品GID|string||
|&emsp;&emsp;&emsp;&emsp;variantGid|商品变体GID|string||
|&emsp;&emsp;&emsp;&emsp;sku|SKU|string||
|&emsp;&emsp;&emsp;&emsp;title|商品名称|string||
|&emsp;&emsp;&emsp;&emsp;productUrl|Shopify商品公开页面链接|string||
|&emsp;&emsp;&emsp;&emsp;productImageUrl|Shopify商品图片快照链接|string||
|&emsp;&emsp;&emsp;&emsp;quantity|购买数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;price|销售价格|number||
|&emsp;&emsp;&emsp;&emsp;discountAmount|折扣金额|number||
|&emsp;&emsp;&emsp;&emsp;refundQuantity|退款数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"shopifyOrderGid": "",
		"shopifyOrderId": "",
		"shopifyOrderName": "",
		"memberId": "",
		"shopifyCustomerGid": "",
		"orderStatus": "",
		"paidAt": "",
		"currency": "",
		"totalAmount": 0,
		"refundAmount": 0,
		"sourceType": "",
		"testBatchNo": "",
		"rawOrderJson": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": "",
		"shopifyOnlinePaymentOrderItemList": [
			{
				"id": "",
				"onlineOrderId": "",
				"shopifyOrderGid": "",
				"shopifyLineItemGid": "",
				"productGid": "",
				"variantGid": "",
				"sku": "",
				"title": "",
				"productUrl": "",
				"productImageUrl": "",
				"quantity": 0,
				"price": 0,
				"discountAmount": 0,
				"refundQuantity": 0,
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		]
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|onlinePaymentOrder|Shopify线上支付订单|query|true|ShopifyOnlinePaymentOrder|ShopifyOnlinePaymentOrder|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单名称||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;orderStatus|订单状态||false|string||
|&emsp;&emsp;paidAt|支付时间||false|string(date-time)||
|&emsp;&emsp;currency|币种||false|string||
|&emsp;&emsp;totalAmount|订单总金额||false|number||
|&emsp;&emsp;refundAmount|退款金额||false|number||
|&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation||false|string||
|&emsp;&emsp;testBatchNo|内部模拟测试批次号||false|string||
|&emsp;&emsp;rawOrderJson|Shopify订单原始JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyOnlinePaymentOrder|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyOnlinePaymentOrder|IPageShopifyOnlinePaymentOrder|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyOnlinePaymentOrder|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderId|Shopify订单ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderName|Shopify订单名称|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;orderStatus|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;paidAt|支付时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAmount|订单总金额|number||
|&emsp;&emsp;&emsp;&emsp;refundAmount|退款金额|number||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据来源：webhook、manual、simulation|string||
|&emsp;&emsp;&emsp;&emsp;testBatchNo|内部模拟测试批次号|string||
|&emsp;&emsp;&emsp;&emsp;rawOrderJson|Shopify订单原始JSON|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"shopifyOrderGid": "",
				"shopifyOrderId": "",
				"shopifyOrderName": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"orderStatus": "",
				"paidAt": "",
				"currency": "",
				"totalAmount": 0,
				"refundAmount": 0,
				"sourceType": "",
				"testBatchNo": "",
				"rawOrderJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单-批量删除


**接口地址**:`/yueran/shopify/member/shopifyOnlinePaymentOrder/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_payment_order:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify线上订单同步事件


## Shopify线上订单同步事件-编辑


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "memberYear": 0,
  "triggerSource": "",
  "webhookTopic": "",
  "webhookId": "",
  "backendSyncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastErrorCode": "",
  "lastErrorMessage": "",
  "rawWebhookJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlineOrderSyncEvent|Shopify线上订单同步事件|body|true|ShopifyOnlineOrderSyncEvent|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单数字ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;triggerSource|触发来源||false|string||
|&emsp;&emsp;webhookTopic|Webhook Topic||false|string||
|&emsp;&emsp;webhookId|Webhook ID||false|string||
|&emsp;&emsp;backendSyncStatus|中台同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastErrorCode|最近错误码||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-编辑


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "memberYear": 0,
  "triggerSource": "",
  "webhookTopic": "",
  "webhookId": "",
  "backendSyncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastErrorCode": "",
  "lastErrorMessage": "",
  "rawWebhookJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlineOrderSyncEvent|Shopify线上订单同步事件|body|true|ShopifyOnlineOrderSyncEvent|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单数字ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;triggerSource|触发来源||false|string||
|&emsp;&emsp;webhookTopic|Webhook Topic||false|string||
|&emsp;&emsp;webhookId|Webhook ID||false|string||
|&emsp;&emsp;backendSyncStatus|中台同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastErrorCode|最近错误码||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-添加


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "shopifyOrderGid": "",
  "shopifyOrderId": "",
  "shopifyOrderName": "",
  "memberId": "",
  "memberYear": 0,
  "triggerSource": "",
  "webhookTopic": "",
  "webhookId": "",
  "backendSyncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastErrorCode": "",
  "lastErrorMessage": "",
  "rawWebhookJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlineOrderSyncEvent|Shopify线上订单同步事件|body|true|ShopifyOnlineOrderSyncEvent|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单数字ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;triggerSource|触发来源||false|string||
|&emsp;&emsp;webhookTopic|Webhook Topic||false|string||
|&emsp;&emsp;webhookId|Webhook ID||false|string||
|&emsp;&emsp;backendSyncStatus|中台同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastErrorCode|最近错误码||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyOnlineOrderSyncEvent|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyOnlineOrderSyncEvent|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单数字ID|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单号|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;webhookTopic|Webhook Topic|string||
|&emsp;&emsp;webhookId|Webhook ID|string||
|&emsp;&emsp;backendSyncStatus|中台同步状态|string||
|&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;lastErrorCode|最近错误码|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"shopifyOrderGid": "",
		"shopifyOrderId": "",
		"shopifyOrderName": "",
		"memberId": "",
		"memberYear": 0,
		"triggerSource": "",
		"webhookTopic": "",
		"webhookId": "",
		"backendSyncStatus": "",
		"retryCount": 0,
		"nextRetryTime": "",
		"lastErrorCode": "",
		"lastErrorMessage": "",
		"rawWebhookJson": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyOnlineOrderSyncEvent|Shopify线上订单同步事件|query|true|ShopifyOnlineOrderSyncEvent|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;shopifyOrderGid|Shopify订单GID||false|string||
|&emsp;&emsp;shopifyOrderId|Shopify订单数字ID||false|string||
|&emsp;&emsp;shopifyOrderName|Shopify订单号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;triggerSource|触发来源||false|string||
|&emsp;&emsp;webhookTopic|Webhook Topic||false|string||
|&emsp;&emsp;webhookId|Webhook ID||false|string||
|&emsp;&emsp;backendSyncStatus|中台同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastErrorCode|最近错误码||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyOnlineOrderSyncEvent|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyOnlineOrderSyncEvent|IPageShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyOnlineOrderSyncEvent|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderGid|Shopify订单GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderId|Shopify订单数字ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyOrderName|Shopify订单号|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;&emsp;&emsp;webhookTopic|Webhook Topic|string||
|&emsp;&emsp;&emsp;&emsp;webhookId|Webhook ID|string||
|&emsp;&emsp;&emsp;&emsp;backendSyncStatus|中台同步状态|string||
|&emsp;&emsp;&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastErrorCode|最近错误码|string||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;&emsp;&emsp;rawWebhookJson|Webhook原始报文|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"shopifyOrderGid": "",
				"shopifyOrderId": "",
				"shopifyOrderName": "",
				"memberId": "",
				"memberYear": 0,
				"triggerSource": "",
				"webhookTopic": "",
				"webhookId": "",
				"backendSyncStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"lastErrorCode": "",
				"lastErrorMessage": "",
				"rawWebhookJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify线上订单同步事件-批量删除


**接口地址**:`/yueran/shopify/member/shopifyOnlineOrderSyncEvent/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_online_order_sync_event:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify同步队列


## Shopify同步队列-编辑


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "targetType": "",
  "targetId": "",
  "targetHandle": "",
  "shopifyGid": "",
  "syncDirection": "",
  "syncAction": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastSyncTime": "",
  "requestJson": "",
  "responseJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectSync|Shopify同步队列|body|true|ShopifyMetaobjectSync|ShopifyMetaobjectSync|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;targetType|目标类型||false|string||
|&emsp;&emsp;targetId|目标本地ID||false|string||
|&emsp;&emsp;targetHandle|目标Handle||false|string||
|&emsp;&emsp;shopifyGid|Shopify GID||false|string||
|&emsp;&emsp;syncDirection|同步方向||false|string||
|&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最近同步时间||false|string(date-time)||
|&emsp;&emsp;requestJson|请求内容||false|string||
|&emsp;&emsp;responseJson|响应内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-编辑


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "targetType": "",
  "targetId": "",
  "targetHandle": "",
  "shopifyGid": "",
  "syncDirection": "",
  "syncAction": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastSyncTime": "",
  "requestJson": "",
  "responseJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectSync|Shopify同步队列|body|true|ShopifyMetaobjectSync|ShopifyMetaobjectSync|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;targetType|目标类型||false|string||
|&emsp;&emsp;targetId|目标本地ID||false|string||
|&emsp;&emsp;targetHandle|目标Handle||false|string||
|&emsp;&emsp;shopifyGid|Shopify GID||false|string||
|&emsp;&emsp;syncDirection|同步方向||false|string||
|&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最近同步时间||false|string(date-time)||
|&emsp;&emsp;requestJson|请求内容||false|string||
|&emsp;&emsp;responseJson|响应内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-添加


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "targetType": "",
  "targetId": "",
  "targetHandle": "",
  "shopifyGid": "",
  "syncDirection": "",
  "syncAction": "",
  "syncStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "lastSyncTime": "",
  "requestJson": "",
  "responseJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectSync|Shopify同步队列|body|true|ShopifyMetaobjectSync|ShopifyMetaobjectSync|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;targetType|目标类型||false|string||
|&emsp;&emsp;targetId|目标本地ID||false|string||
|&emsp;&emsp;targetHandle|目标Handle||false|string||
|&emsp;&emsp;shopifyGid|Shopify GID||false|string||
|&emsp;&emsp;syncDirection|同步方向||false|string||
|&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最近同步时间||false|string(date-time)||
|&emsp;&emsp;requestJson|请求内容||false|string||
|&emsp;&emsp;responseJson|响应内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMetaobjectSync|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMetaobjectSync|ShopifyMetaobjectSync|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;targetType|目标类型|string||
|&emsp;&emsp;targetId|目标本地ID|string||
|&emsp;&emsp;targetHandle|目标Handle|string||
|&emsp;&emsp;shopifyGid|Shopify GID|string||
|&emsp;&emsp;syncDirection|同步方向|string||
|&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除|string||
|&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;lastSyncTime|最近同步时间|string(date-time)||
|&emsp;&emsp;requestJson|请求内容|string||
|&emsp;&emsp;responseJson|响应内容|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"targetType": "",
		"targetId": "",
		"targetHandle": "",
		"shopifyGid": "",
		"syncDirection": "",
		"syncAction": "",
		"syncStatus": "",
		"retryCount": 0,
		"nextRetryTime": "",
		"lastSyncTime": "",
		"requestJson": "",
		"responseJson": "",
		"lastErrorMessage": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectSync|Shopify同步队列|query|true|ShopifyMetaobjectSync|ShopifyMetaobjectSync|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;targetType|目标类型||false|string||
|&emsp;&emsp;targetId|目标本地ID||false|string||
|&emsp;&emsp;targetHandle|目标Handle||false|string||
|&emsp;&emsp;shopifyGid|Shopify GID||false|string||
|&emsp;&emsp;syncDirection|同步方向||false|string||
|&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除||false|string||
|&emsp;&emsp;syncStatus|同步状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;lastSyncTime|最近同步时间||false|string(date-time)||
|&emsp;&emsp;requestJson|请求内容||false|string||
|&emsp;&emsp;responseJson|响应内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMetaobjectSync|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMetaobjectSync|IPageShopifyMetaobjectSync|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMetaobjectSync|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;targetType|目标类型|string||
|&emsp;&emsp;&emsp;&emsp;targetId|目标本地ID|string||
|&emsp;&emsp;&emsp;&emsp;targetHandle|目标Handle|string||
|&emsp;&emsp;&emsp;&emsp;shopifyGid|Shopify GID|string||
|&emsp;&emsp;&emsp;&emsp;syncDirection|同步方向|string||
|&emsp;&emsp;&emsp;&emsp;syncAction|同步操作：upsert写入、delete删除|string||
|&emsp;&emsp;&emsp;&emsp;syncStatus|同步状态|string||
|&emsp;&emsp;&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最近同步时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;requestJson|请求内容|string||
|&emsp;&emsp;&emsp;&emsp;responseJson|响应内容|string||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"targetType": "",
				"targetId": "",
				"targetHandle": "",
				"shopifyGid": "",
				"syncDirection": "",
				"syncAction": "",
				"syncStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"lastSyncTime": "",
				"requestJson": "",
				"responseJson": "",
				"lastErrorMessage": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify同步队列-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMetaobjectSync/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_sync:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 积分流水


## 积分流水-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "changeType": "",
  "points": 0,
  "beforePoints": 0,
  "afterPoints": 0,
  "sourceType": "",
  "sourceId": "",
  "idempotencyKey": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointLedger|积分流水|body|true|ShopifyMemberPointLedger|ShopifyMemberPointLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员主档ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;points|变动积分||false|integer(int32)||
|&emsp;&emsp;beforePoints|变动前积分||false|integer(int32)||
|&emsp;&emsp;afterPoints|变动后积分||false|integer(int32)||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "changeType": "",
  "points": 0,
  "beforePoints": 0,
  "afterPoints": 0,
  "sourceType": "",
  "sourceId": "",
  "idempotencyKey": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointLedger|积分流水|body|true|ShopifyMemberPointLedger|ShopifyMemberPointLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员主档ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;points|变动积分||false|integer(int32)||
|&emsp;&emsp;beforePoints|变动前积分||false|integer(int32)||
|&emsp;&emsp;afterPoints|变动后积分||false|integer(int32)||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "changeType": "",
  "points": 0,
  "beforePoints": 0,
  "afterPoints": 0,
  "sourceType": "",
  "sourceId": "",
  "idempotencyKey": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointLedger|积分流水|body|true|ShopifyMemberPointLedger|ShopifyMemberPointLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员主档ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;points|变动积分||false|integer(int32)||
|&emsp;&emsp;beforePoints|变动前积分||false|integer(int32)||
|&emsp;&emsp;afterPoints|变动后积分||false|integer(int32)||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberPointLedger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberPointLedger|ShopifyMemberPointLedger|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员主档ID|string||
|&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;changeType|变动类型|string||
|&emsp;&emsp;points|变动积分|integer(int32)||
|&emsp;&emsp;beforePoints|变动前积分|integer(int32)||
|&emsp;&emsp;afterPoints|变动后积分|integer(int32)||
|&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;sourceId|来源单据ID|string||
|&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"memberYear": 0,
		"changeType": "",
		"points": 0,
		"beforePoints": 0,
		"afterPoints": 0,
		"sourceType": "",
		"sourceId": "",
		"idempotencyKey": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointLedger|积分流水|query|true|ShopifyMemberPointLedger|ShopifyMemberPointLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员主档ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;points|变动积分||false|integer(int32)||
|&emsp;&emsp;beforePoints|变动前积分||false|integer(int32)||
|&emsp;&emsp;afterPoints|变动后积分||false|integer(int32)||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberPointLedger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberPointLedger|IPageShopifyMemberPointLedger|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberPointLedger|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员主档ID|string||
|&emsp;&emsp;&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;changeType|变动类型|string||
|&emsp;&emsp;&emsp;&emsp;points|变动积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;beforePoints|变动前积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;afterPoints|变动后积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源单据ID|string||
|&emsp;&emsp;&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"memberYear": 0,
				"changeType": "",
				"points": 0,
				"beforePoints": 0,
				"afterPoints": 0,
				"sourceType": "",
				"sourceId": "",
				"idempotencyKey": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 积分流水-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberPointLedger/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_ledger:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员操作日志


## 会员操作日志-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "operationType": "",
  "operatorUser": "",
  "sourceType": "",
  "sourceId": "",
  "beforeJson": "",
  "afterJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberOperationLog|会员操作日志|body|true|ShopifyMemberOperationLog|ShopifyMemberOperationLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;operationType|操作类型||false|string||
|&emsp;&emsp;operatorUser|操作人||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;beforeJson|操作前||false|string||
|&emsp;&emsp;afterJson|操作后||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "operationType": "",
  "operatorUser": "",
  "sourceType": "",
  "sourceId": "",
  "beforeJson": "",
  "afterJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberOperationLog|会员操作日志|body|true|ShopifyMemberOperationLog|ShopifyMemberOperationLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;operationType|操作类型||false|string||
|&emsp;&emsp;operatorUser|操作人||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;beforeJson|操作前||false|string||
|&emsp;&emsp;afterJson|操作后||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "operationType": "",
  "operatorUser": "",
  "sourceType": "",
  "sourceId": "",
  "beforeJson": "",
  "afterJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberOperationLog|会员操作日志|body|true|ShopifyMemberOperationLog|ShopifyMemberOperationLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;operationType|操作类型||false|string||
|&emsp;&emsp;operatorUser|操作人||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;beforeJson|操作前||false|string||
|&emsp;&emsp;afterJson|操作后||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberOperationLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberOperationLog|ShopifyMemberOperationLog|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;operationType|操作类型|string||
|&emsp;&emsp;operatorUser|操作人|string||
|&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;beforeJson|操作前|string||
|&emsp;&emsp;afterJson|操作后|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"operationType": "",
		"operatorUser": "",
		"sourceType": "",
		"sourceId": "",
		"beforeJson": "",
		"afterJson": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberOperationLog|会员操作日志|query|true|ShopifyMemberOperationLog|ShopifyMemberOperationLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;operationType|操作类型||false|string||
|&emsp;&emsp;operatorUser|操作人||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;beforeJson|操作前||false|string||
|&emsp;&emsp;afterJson|操作后||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberOperationLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberOperationLog|IPageShopifyMemberOperationLog|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberOperationLog|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;operationType|操作类型|string||
|&emsp;&emsp;&emsp;&emsp;operatorUser|操作人|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;&emsp;&emsp;beforeJson|操作前|string||
|&emsp;&emsp;&emsp;&emsp;afterJson|操作后|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"operationType": "",
				"operatorUser": "",
				"sourceType": "",
				"sourceId": "",
				"beforeJson": "",
				"afterJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员操作日志-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberOperationLog/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_operation_log:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员消息任务


## 会员消息任务-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "messageType": "",
  "channel": "",
  "sendStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "contentJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberMessageTask|会员消息任务|body|true|ShopifyMemberMessageTask|ShopifyMemberMessageTask|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;messageType|消息类型||false|string||
|&emsp;&emsp;channel|渠道||false|string||
|&emsp;&emsp;sendStatus|发送状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;contentJson|消息内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "messageType": "",
  "channel": "",
  "sendStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "contentJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberMessageTask|会员消息任务|body|true|ShopifyMemberMessageTask|ShopifyMemberMessageTask|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;messageType|消息类型||false|string||
|&emsp;&emsp;channel|渠道||false|string||
|&emsp;&emsp;sendStatus|发送状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;contentJson|消息内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "messageType": "",
  "channel": "",
  "sendStatus": "",
  "retryCount": 0,
  "nextRetryTime": "",
  "contentJson": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberMessageTask|会员消息任务|body|true|ShopifyMemberMessageTask|ShopifyMemberMessageTask|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;messageType|消息类型||false|string||
|&emsp;&emsp;channel|渠道||false|string||
|&emsp;&emsp;sendStatus|发送状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;contentJson|消息内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberMessageTask|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberMessageTask|ShopifyMemberMessageTask|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;eventNo|事件号|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;messageType|消息类型|string||
|&emsp;&emsp;channel|渠道|string||
|&emsp;&emsp;sendStatus|发送状态|string||
|&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;contentJson|消息内容|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"eventNo": "",
		"memberId": "",
		"messageType": "",
		"channel": "",
		"sendStatus": "",
		"retryCount": 0,
		"nextRetryTime": "",
		"contentJson": "",
		"lastErrorMessage": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberMessageTask|会员消息任务|query|true|ShopifyMemberMessageTask|ShopifyMemberMessageTask|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;messageType|消息类型||false|string||
|&emsp;&emsp;channel|渠道||false|string||
|&emsp;&emsp;sendStatus|发送状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;contentJson|消息内容||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberMessageTask|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberMessageTask|IPageShopifyMemberMessageTask|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberMessageTask|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;eventNo|事件号|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;messageType|消息类型|string||
|&emsp;&emsp;&emsp;&emsp;channel|渠道|string||
|&emsp;&emsp;&emsp;&emsp;sendStatus|发送状态|string||
|&emsp;&emsp;&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;contentJson|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"eventNo": "",
				"memberId": "",
				"messageType": "",
				"channel": "",
				"sendStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"contentJson": "",
				"lastErrorMessage": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消息任务-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberMessageTask/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_message_task:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员等级折扣


## 会员等级折扣-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "channel": "",
  "discountType": "",
  "discountValue": 0,
  "productScope": "",
  "scopeRef": "",
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelDiscount|会员等级折扣|body|true|ShopifyMemberLevelDiscount|ShopifyMemberLevelDiscount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;channel|适用渠道||false|string||
|&emsp;&emsp;discountType|折扣类型||false|string||
|&emsp;&emsp;discountValue|折扣值||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "channel": "",
  "discountType": "",
  "discountValue": 0,
  "productScope": "",
  "scopeRef": "",
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelDiscount|会员等级折扣|body|true|ShopifyMemberLevelDiscount|ShopifyMemberLevelDiscount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;channel|适用渠道||false|string||
|&emsp;&emsp;discountType|折扣类型||false|string||
|&emsp;&emsp;discountValue|折扣值||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "channel": "",
  "discountType": "",
  "discountValue": 0,
  "productScope": "",
  "scopeRef": "",
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelDiscount|会员等级折扣|body|true|ShopifyMemberLevelDiscount|ShopifyMemberLevelDiscount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;channel|适用渠道||false|string||
|&emsp;&emsp;discountType|折扣类型||false|string||
|&emsp;&emsp;discountValue|折扣值||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberLevelDiscount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberLevelDiscount|ShopifyMemberLevelDiscount|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;levelCode|等级编码|string||
|&emsp;&emsp;channel|适用渠道|string||
|&emsp;&emsp;discountType|折扣类型|string||
|&emsp;&emsp;discountValue|折扣值|number||
|&emsp;&emsp;productScope|商品范围|string||
|&emsp;&emsp;scopeRef|范围引用|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"levelCode": "",
		"channel": "",
		"discountType": "",
		"discountValue": 0,
		"productScope": "",
		"scopeRef": "",
		"priority": 0,
		"status": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelDiscount|会员等级折扣|query|true|ShopifyMemberLevelDiscount|ShopifyMemberLevelDiscount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;channel|适用渠道||false|string||
|&emsp;&emsp;discountType|折扣类型||false|string||
|&emsp;&emsp;discountValue|折扣值||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberLevelDiscount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberLevelDiscount|IPageShopifyMemberLevelDiscount|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberLevelDiscount|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;levelCode|等级编码|string||
|&emsp;&emsp;&emsp;&emsp;channel|适用渠道|string||
|&emsp;&emsp;&emsp;&emsp;discountType|折扣类型|string||
|&emsp;&emsp;&emsp;&emsp;discountValue|折扣值|number||
|&emsp;&emsp;&emsp;&emsp;productScope|商品范围|string||
|&emsp;&emsp;&emsp;&emsp;scopeRef|范围引用|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"levelCode": "",
				"channel": "",
				"discountType": "",
				"discountValue": 0,
				"productScope": "",
				"scopeRef": "",
				"priority": 0,
				"status": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级折扣-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelDiscount/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_discount:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员等级


## 会员等级-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "levelName": "",
  "shopifyCustomerTag": "",
  "minCumulativeAmount": 0,
  "maxCumulativeAmount": 0,
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevel|会员等级|body|true|ShopifyMemberLevel|ShopifyMemberLevel|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;levelName|等级名称||false|string||
|&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver||false|string||
|&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限||false|number||
|&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限||false|number||
|&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "levelName": "",
  "shopifyCustomerTag": "",
  "minCumulativeAmount": 0,
  "maxCumulativeAmount": 0,
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevel|会员等级|body|true|ShopifyMemberLevel|ShopifyMemberLevel|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;levelName|等级名称||false|string||
|&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver||false|string||
|&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限||false|number||
|&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限||false|number||
|&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "levelCode": "",
  "levelName": "",
  "shopifyCustomerTag": "",
  "minCumulativeAmount": 0,
  "maxCumulativeAmount": 0,
  "priority": 0,
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevel|会员等级|body|true|ShopifyMemberLevel|ShopifyMemberLevel|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;levelName|等级名称||false|string||
|&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver||false|string||
|&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限||false|number||
|&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限||false|number||
|&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberLevel|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberLevel|ShopifyMemberLevel|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;levelCode|等级编码|string||
|&emsp;&emsp;levelName|等级名称|string||
|&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver|string||
|&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限|number||
|&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限|number||
|&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先|integer(int32)||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"levelCode": "",
		"levelName": "",
		"shopifyCustomerTag": "",
		"minCumulativeAmount": 0,
		"maxCumulativeAmount": 0,
		"priority": 0,
		"status": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevel|会员等级|query|true|ShopifyMemberLevel|ShopifyMemberLevel|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;levelCode|等级编码||false|string||
|&emsp;&emsp;levelName|等级名称||false|string||
|&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver||false|string||
|&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限||false|number||
|&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限||false|number||
|&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberLevel|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberLevel|IPageShopifyMemberLevel|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberLevel|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;levelCode|等级编码|string||
|&emsp;&emsp;&emsp;&emsp;levelName|等级名称|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerTag|Shopify客户等级标签，例如 app_rank_silver|string||
|&emsp;&emsp;&emsp;&emsp;minCumulativeAmount|长期累计有效消费下限|number||
|&emsp;&emsp;&emsp;&emsp;maxCumulativeAmount|长期累计有效消费上限；为空或0表示不设上限|number||
|&emsp;&emsp;&emsp;&emsp;priority|等级匹配优先级；消费区间重叠时数值越大越优先，相同优先级按消费下限较高者优先|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"levelCode": "",
				"levelName": "",
				"shopifyCustomerTag": "",
				"minCumulativeAmount": 0,
				"maxCumulativeAmount": 0,
				"priority": 0,
				"status": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员等级-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberLevel/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员事件日志


## 会员事件日志-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "eventType": "",
  "sourceType": "",
  "sourceId": "",
  "eventJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberEventLog|会员事件日志|body|true|ShopifyMemberEventLog|ShopifyMemberEventLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;eventType|事件类型||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;eventJson|事件内容||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "eventType": "",
  "sourceType": "",
  "sourceId": "",
  "eventJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberEventLog|会员事件日志|body|true|ShopifyMemberEventLog|ShopifyMemberEventLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;eventType|事件类型||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;eventJson|事件内容||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "eventNo": "",
  "memberId": "",
  "eventType": "",
  "sourceType": "",
  "sourceId": "",
  "eventJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberEventLog|会员事件日志|body|true|ShopifyMemberEventLog|ShopifyMemberEventLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;eventType|事件类型||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;eventJson|事件内容||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberEventLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberEventLog|ShopifyMemberEventLog|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;eventNo|事件号|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;eventJson|事件内容|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"eventNo": "",
		"memberId": "",
		"eventType": "",
		"sourceType": "",
		"sourceId": "",
		"eventJson": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberEventLog|会员事件日志|query|true|ShopifyMemberEventLog|ShopifyMemberEventLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;eventNo|事件号||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;eventType|事件类型||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;eventJson|事件内容||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberEventLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberEventLog|IPageShopifyMemberEventLog|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberEventLog|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;eventNo|事件号|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;&emsp;&emsp;eventJson|事件内容|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"eventNo": "",
				"memberId": "",
				"eventType": "",
				"sourceType": "",
				"sourceId": "",
				"eventJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员事件日志-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberEventLog/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_event_log:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 折扣计算记录


## 折扣计算记录-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "levelDiscountAmount": 0,
  "benefitDiscountAmount": 0,
  "couponDiscountAmount": 0,
  "pointDeductAmount": 0,
  "calcResultJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberDiscountCalcLog|折扣计算记录|body|true|ShopifyMemberDiscountCalcLog|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;levelDiscountAmount|等级折扣金额||false|number||
|&emsp;&emsp;benefitDiscountAmount|权益折扣金额||false|number||
|&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额||false|number||
|&emsp;&emsp;pointDeductAmount|积分抵扣金额||false|number||
|&emsp;&emsp;calcResultJson|计算结果JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "levelDiscountAmount": 0,
  "benefitDiscountAmount": 0,
  "couponDiscountAmount": 0,
  "pointDeductAmount": 0,
  "calcResultJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberDiscountCalcLog|折扣计算记录|body|true|ShopifyMemberDiscountCalcLog|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;levelDiscountAmount|等级折扣金额||false|number||
|&emsp;&emsp;benefitDiscountAmount|权益折扣金额||false|number||
|&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额||false|number||
|&emsp;&emsp;pointDeductAmount|积分抵扣金额||false|number||
|&emsp;&emsp;calcResultJson|计算结果JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "levelDiscountAmount": 0,
  "benefitDiscountAmount": 0,
  "couponDiscountAmount": 0,
  "pointDeductAmount": 0,
  "calcResultJson": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberDiscountCalcLog|折扣计算记录|body|true|ShopifyMemberDiscountCalcLog|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;levelDiscountAmount|等级折扣金额||false|number||
|&emsp;&emsp;benefitDiscountAmount|权益折扣金额||false|number||
|&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额||false|number||
|&emsp;&emsp;pointDeductAmount|积分抵扣金额||false|number||
|&emsp;&emsp;calcResultJson|计算结果JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberDiscountCalcLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberDiscountCalcLog|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;levelDiscountAmount|等级折扣金额|number||
|&emsp;&emsp;benefitDiscountAmount|权益折扣金额|number||
|&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额|number||
|&emsp;&emsp;pointDeductAmount|积分抵扣金额|number||
|&emsp;&emsp;calcResultJson|计算结果JSON|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"shopifyCustomerGid": "",
		"levelDiscountAmount": 0,
		"benefitDiscountAmount": 0,
		"couponDiscountAmount": 0,
		"pointDeductAmount": 0,
		"calcResultJson": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberDiscountCalcLog|折扣计算记录|query|true|ShopifyMemberDiscountCalcLog|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;levelDiscountAmount|等级折扣金额||false|number||
|&emsp;&emsp;benefitDiscountAmount|权益折扣金额||false|number||
|&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额||false|number||
|&emsp;&emsp;pointDeductAmount|积分抵扣金额||false|number||
|&emsp;&emsp;calcResultJson|计算结果JSON||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberDiscountCalcLog|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberDiscountCalcLog|IPageShopifyMemberDiscountCalcLog|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberDiscountCalcLog|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;levelDiscountAmount|等级折扣金额|number||
|&emsp;&emsp;&emsp;&emsp;benefitDiscountAmount|权益折扣金额|number||
|&emsp;&emsp;&emsp;&emsp;couponDiscountAmount|优惠券抵扣金额|number||
|&emsp;&emsp;&emsp;&emsp;pointDeductAmount|积分抵扣金额|number||
|&emsp;&emsp;&emsp;&emsp;calcResultJson|计算结果JSON|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"levelDiscountAmount": 0,
				"benefitDiscountAmount": 0,
				"couponDiscountAmount": 0,
				"pointDeductAmount": 0,
				"calcResultJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 折扣计算记录-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberDiscountCalcLog/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_discount_calc_log:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员主档


## 会员主档-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberCode": "",
  "sysUserId": "",
  "shopifyCustomerGid": "",
  "shopifyCustomerId": "",
  "customerEmail": "",
  "customerPhone": "",
  "customerName": "",
  "customerFirstName": "",
  "customerLastName": "",
  "customerBirthday": "",
  "customerSex": 0,
  "smaregiCustomerCode": "",
  "smaregiCustomerId": "",
  "status": "",
  "lastSyncTime": "",
  "shopifyUpdatedAt": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCustomer|会员主档|body|true|ShopifyMemberCustomer|ShopifyMemberCustomer|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberCode|会员码||false|string||
|&emsp;&emsp;sysUserId|本地用户ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID||false|string||
|&emsp;&emsp;customerEmail|邮箱||false|string||
|&emsp;&emsp;customerPhone|手机||false|string||
|&emsp;&emsp;customerName|姓名||false|string||
|&emsp;&emsp;customerFirstName|名||false|string||
|&emsp;&emsp;customerLastName|姓||false|string||
|&emsp;&emsp;customerBirthday|客户生日快照||false|string(date-time)||
|&emsp;&emsp;customerSex|客户性别快照：1男、2女||false|integer(int32)||
|&emsp;&emsp;smaregiCustomerCode|Smaregi会员码||false|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi会员ID||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;lastSyncTime|最近同步Shopify时间||false|string(date-time)||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberCode": "",
  "sysUserId": "",
  "shopifyCustomerGid": "",
  "shopifyCustomerId": "",
  "customerEmail": "",
  "customerPhone": "",
  "customerName": "",
  "customerFirstName": "",
  "customerLastName": "",
  "customerBirthday": "",
  "customerSex": 0,
  "smaregiCustomerCode": "",
  "smaregiCustomerId": "",
  "status": "",
  "lastSyncTime": "",
  "shopifyUpdatedAt": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCustomer|会员主档|body|true|ShopifyMemberCustomer|ShopifyMemberCustomer|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberCode|会员码||false|string||
|&emsp;&emsp;sysUserId|本地用户ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID||false|string||
|&emsp;&emsp;customerEmail|邮箱||false|string||
|&emsp;&emsp;customerPhone|手机||false|string||
|&emsp;&emsp;customerName|姓名||false|string||
|&emsp;&emsp;customerFirstName|名||false|string||
|&emsp;&emsp;customerLastName|姓||false|string||
|&emsp;&emsp;customerBirthday|客户生日快照||false|string(date-time)||
|&emsp;&emsp;customerSex|客户性别快照：1男、2女||false|integer(int32)||
|&emsp;&emsp;smaregiCustomerCode|Smaregi会员码||false|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi会员ID||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;lastSyncTime|最近同步Shopify时间||false|string(date-time)||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-同步勾选历史用户


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/syncSelectedUsers`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:list</p>



**请求示例**:


```javascript
{
  "sysUserIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberSyncRequest|勾选历史用户同步会员请求|body|true|ShopifyMemberSyncRequest|ShopifyMemberSyncRequest|
|&emsp;&emsp;sysUserIds|勾选的 Jeecg 用户ID集合||false|array|string|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberSyncResult|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberSyncResult|ShopifyMemberSyncResult|
|&emsp;&emsp;requestedCount|请求同步用户数量|integer(int32)||
|&emsp;&emsp;successCount|成功创建会员数量|integer(int32)||
|&emsp;&emsp;skippedCount|已存在会员而跳过的数量|integer(int32)||
|&emsp;&emsp;failedCount|同步失败数量|integer(int32)||
|&emsp;&emsp;failedMessages|失败用户及原因|array|string|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestedCount": 0,
		"successCount": 0,
		"skippedCount": 0,
		"failedCount": 0,
		"failedMessages": []
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-同步勾选会员长期等级


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/syncSelectedLevelAccounts`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:edit</p>



**请求示例**:


```javascript
{
  "memberIds": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelAccountSyncRequest|勾选会员同步长期等级账户请求|body|true|ShopifyMemberLevelAccountSyncRequest|ShopifyMemberLevelAccountSyncRequest|
|&emsp;&emsp;memberIds|勾选的会员主档ID集合||false|array|string|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberSyncResult|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberSyncResult|ShopifyMemberSyncResult|
|&emsp;&emsp;requestedCount|请求同步用户数量|integer(int32)||
|&emsp;&emsp;successCount|成功创建会员数量|integer(int32)||
|&emsp;&emsp;skippedCount|已存在会员而跳过的数量|integer(int32)||
|&emsp;&emsp;failedCount|同步失败数量|integer(int32)||
|&emsp;&emsp;failedMessages|失败用户及原因|array|string|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestedCount": 0,
		"successCount": 0,
		"skippedCount": 0,
		"failedCount": 0,
		"failedMessages": []
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-同步全部历史用户


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/syncAllPendingUsers`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:list</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberSyncResult|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberSyncResult|ShopifyMemberSyncResult|
|&emsp;&emsp;requestedCount|请求同步用户数量|integer(int32)||
|&emsp;&emsp;successCount|成功创建会员数量|integer(int32)||
|&emsp;&emsp;skippedCount|已存在会员而跳过的数量|integer(int32)||
|&emsp;&emsp;failedCount|同步失败数量|integer(int32)||
|&emsp;&emsp;failedMessages|失败用户及原因|array|string|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestedCount": 0,
		"successCount": 0,
		"skippedCount": 0,
		"failedCount": 0,
		"failedMessages": []
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-同步全部会员长期等级


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/syncAllLevelAccounts`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:edit</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberSyncResult|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberSyncResult|ShopifyMemberSyncResult|
|&emsp;&emsp;requestedCount|请求同步用户数量|integer(int32)||
|&emsp;&emsp;successCount|成功创建会员数量|integer(int32)||
|&emsp;&emsp;skippedCount|已存在会员而跳过的数量|integer(int32)||
|&emsp;&emsp;failedCount|同步失败数量|integer(int32)||
|&emsp;&emsp;failedMessages|失败用户及原因|array|string|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestedCount": 0,
		"successCount": 0,
		"skippedCount": 0,
		"failedCount": 0,
		"failedMessages": []
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberCode": "",
  "sysUserId": "",
  "shopifyCustomerGid": "",
  "shopifyCustomerId": "",
  "customerEmail": "",
  "customerPhone": "",
  "customerName": "",
  "customerFirstName": "",
  "customerLastName": "",
  "customerBirthday": "",
  "customerSex": 0,
  "smaregiCustomerCode": "",
  "smaregiCustomerId": "",
  "status": "",
  "lastSyncTime": "",
  "shopifyUpdatedAt": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCustomer|会员主档|body|true|ShopifyMemberCustomer|ShopifyMemberCustomer|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberCode|会员码||false|string||
|&emsp;&emsp;sysUserId|本地用户ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID||false|string||
|&emsp;&emsp;customerEmail|邮箱||false|string||
|&emsp;&emsp;customerPhone|手机||false|string||
|&emsp;&emsp;customerName|姓名||false|string||
|&emsp;&emsp;customerFirstName|名||false|string||
|&emsp;&emsp;customerLastName|姓||false|string||
|&emsp;&emsp;customerBirthday|客户生日快照||false|string(date-time)||
|&emsp;&emsp;customerSex|客户性别快照：1男、2女||false|integer(int32)||
|&emsp;&emsp;smaregiCustomerCode|Smaregi会员码||false|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi会员ID||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;lastSyncTime|最近同步Shopify时间||false|string(date-time)||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberCustomer|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberCustomer|ShopifyMemberCustomer|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberCode|会员码|string||
|&emsp;&emsp;sysUserId|本地用户ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID|string||
|&emsp;&emsp;customerEmail|邮箱|string||
|&emsp;&emsp;customerPhone|手机|string||
|&emsp;&emsp;customerName|姓名|string||
|&emsp;&emsp;customerFirstName|名|string||
|&emsp;&emsp;customerLastName|姓|string||
|&emsp;&emsp;customerBirthday|客户生日快照|string(date-time)||
|&emsp;&emsp;customerSex|客户性别快照：1男、2女|integer(int32)||
|&emsp;&emsp;smaregiCustomerCode|Smaregi会员码|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi会员ID|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;lastSyncTime|最近同步Shopify时间|string(date-time)||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间|string(date-time)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberCode": "",
		"sysUserId": "",
		"shopifyCustomerGid": "",
		"shopifyCustomerId": "",
		"customerEmail": "",
		"customerPhone": "",
		"customerName": "",
		"customerFirstName": "",
		"customerLastName": "",
		"customerBirthday": "",
		"customerSex": 0,
		"smaregiCustomerCode": "",
		"smaregiCustomerId": "",
		"status": "",
		"lastSyncTime": "",
		"shopifyUpdatedAt": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-查询待同步历史用户


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/pendingSyncUsers`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||
|keyword||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberSyncUserVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberSyncUserVO|IPageShopifyMemberSyncUserVO|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberSyncUserVO|
|&emsp;&emsp;&emsp;&emsp;sysUserId|Jeecg 用户ID|string||
|&emsp;&emsp;&emsp;&emsp;username|Jeecg 登录账号|string||
|&emsp;&emsp;&emsp;&emsp;realname|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;email|用户邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|用户手机号|string||
|&emsp;&emsp;&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"sysUserId": "",
				"username": "",
				"realname": "",
				"email": "",
				"phone": "",
				"shopifySub": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCustomer|会员主档|query|true|ShopifyMemberCustomer|ShopifyMemberCustomer|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberCode|会员码||false|string||
|&emsp;&emsp;sysUserId|本地用户ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID||false|string||
|&emsp;&emsp;customerEmail|邮箱||false|string||
|&emsp;&emsp;customerPhone|手机||false|string||
|&emsp;&emsp;customerName|姓名||false|string||
|&emsp;&emsp;customerFirstName|名||false|string||
|&emsp;&emsp;customerLastName|姓||false|string||
|&emsp;&emsp;customerBirthday|客户生日快照||false|string(date-time)||
|&emsp;&emsp;customerSex|客户性别快照：1男、2女||false|integer(int32)||
|&emsp;&emsp;smaregiCustomerCode|Smaregi会员码||false|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi会员ID||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;lastSyncTime|最近同步Shopify时间||false|string(date-time)||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberCustomer|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberCustomer|IPageShopifyMemberCustomer|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberCustomer|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberCode|会员码|string||
|&emsp;&emsp;&emsp;&emsp;sysUserId|本地用户ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID|string||
|&emsp;&emsp;&emsp;&emsp;customerEmail|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;customerPhone|手机|string||
|&emsp;&emsp;&emsp;&emsp;customerName|姓名|string||
|&emsp;&emsp;&emsp;&emsp;customerFirstName|名|string||
|&emsp;&emsp;&emsp;&emsp;customerLastName|姓|string||
|&emsp;&emsp;&emsp;&emsp;customerBirthday|客户生日快照|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;customerSex|客户性别快照：1男、2女|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;smaregiCustomerCode|Smaregi会员码|string||
|&emsp;&emsp;&emsp;&emsp;smaregiCustomerId|Smaregi会员ID|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最近同步Shopify时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberCode": "",
				"sysUserId": "",
				"shopifyCustomerGid": "",
				"shopifyCustomerId": "",
				"customerEmail": "",
				"customerPhone": "",
				"customerName": "",
				"customerFirstName": "",
				"customerLastName": "",
				"customerBirthday": "",
				"customerSex": 0,
				"smaregiCustomerCode": "",
				"smaregiCustomerId": "",
				"status": "",
				"lastSyncTime": "",
				"shopifyUpdatedAt": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员主档-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCustomer/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_customer:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 优惠券模板


## 优惠券模板-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponCode": "",
  "couponName": "",
  "couponType": "",
  "discountValue": 0,
  "minAmount": 0,
  "productScope": "",
  "scopeRef": "",
  "memberLevelLimit": "",
  "validDays": 0,
  "validFrom": "",
  "validTo": "",
  "stackable": "",
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponTemplate|优惠券模板|body|true|ShopifyMemberCouponTemplate|ShopifyMemberCouponTemplate|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponCode|优惠券模板编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;couponType|优惠券类型||false|string||
|&emsp;&emsp;discountValue|优惠值||false|number||
|&emsp;&emsp;minAmount|最低消费金额||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;memberLevelLimit|会员等级限制||false|string||
|&emsp;&emsp;validDays|领取后有效天数||false|integer(int32)||
|&emsp;&emsp;validFrom|固定有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|固定有效期结束||false|string(date-time)||
|&emsp;&emsp;stackable|是否可叠加||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponCode": "",
  "couponName": "",
  "couponType": "",
  "discountValue": 0,
  "minAmount": 0,
  "productScope": "",
  "scopeRef": "",
  "memberLevelLimit": "",
  "validDays": 0,
  "validFrom": "",
  "validTo": "",
  "stackable": "",
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponTemplate|优惠券模板|body|true|ShopifyMemberCouponTemplate|ShopifyMemberCouponTemplate|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponCode|优惠券模板编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;couponType|优惠券类型||false|string||
|&emsp;&emsp;discountValue|优惠值||false|number||
|&emsp;&emsp;minAmount|最低消费金额||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;memberLevelLimit|会员等级限制||false|string||
|&emsp;&emsp;validDays|领取后有效天数||false|integer(int32)||
|&emsp;&emsp;validFrom|固定有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|固定有效期结束||false|string(date-time)||
|&emsp;&emsp;stackable|是否可叠加||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponCode": "",
  "couponName": "",
  "couponType": "",
  "discountValue": 0,
  "minAmount": 0,
  "productScope": "",
  "scopeRef": "",
  "memberLevelLimit": "",
  "validDays": 0,
  "validFrom": "",
  "validTo": "",
  "stackable": "",
  "status": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponTemplate|优惠券模板|body|true|ShopifyMemberCouponTemplate|ShopifyMemberCouponTemplate|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponCode|优惠券模板编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;couponType|优惠券类型||false|string||
|&emsp;&emsp;discountValue|优惠值||false|number||
|&emsp;&emsp;minAmount|最低消费金额||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;memberLevelLimit|会员等级限制||false|string||
|&emsp;&emsp;validDays|领取后有效天数||false|integer(int32)||
|&emsp;&emsp;validFrom|固定有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|固定有效期结束||false|string(date-time)||
|&emsp;&emsp;stackable|是否可叠加||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberCouponTemplate|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberCouponTemplate|ShopifyMemberCouponTemplate|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;couponCode|优惠券模板编码|string||
|&emsp;&emsp;couponName|优惠券名称|string||
|&emsp;&emsp;couponType|优惠券类型|string||
|&emsp;&emsp;discountValue|优惠值|number||
|&emsp;&emsp;minAmount|最低消费金额|number||
|&emsp;&emsp;productScope|商品范围|string||
|&emsp;&emsp;scopeRef|范围引用|string||
|&emsp;&emsp;memberLevelLimit|会员等级限制|string||
|&emsp;&emsp;validDays|领取后有效天数|integer(int32)||
|&emsp;&emsp;validFrom|固定有效期开始|string(date-time)||
|&emsp;&emsp;validTo|固定有效期结束|string(date-time)||
|&emsp;&emsp;stackable|是否可叠加|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"couponCode": "",
		"couponName": "",
		"couponType": "",
		"discountValue": 0,
		"minAmount": 0,
		"productScope": "",
		"scopeRef": "",
		"memberLevelLimit": "",
		"validDays": 0,
		"validFrom": "",
		"validTo": "",
		"stackable": "",
		"status": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponTemplate|优惠券模板|query|true|ShopifyMemberCouponTemplate|ShopifyMemberCouponTemplate|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponCode|优惠券模板编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;couponType|优惠券类型||false|string||
|&emsp;&emsp;discountValue|优惠值||false|number||
|&emsp;&emsp;minAmount|最低消费金额||false|number||
|&emsp;&emsp;productScope|商品范围||false|string||
|&emsp;&emsp;scopeRef|范围引用||false|string||
|&emsp;&emsp;memberLevelLimit|会员等级限制||false|string||
|&emsp;&emsp;validDays|领取后有效天数||false|integer(int32)||
|&emsp;&emsp;validFrom|固定有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|固定有效期结束||false|string(date-time)||
|&emsp;&emsp;stackable|是否可叠加||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberCouponTemplate|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberCouponTemplate|IPageShopifyMemberCouponTemplate|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberCouponTemplate|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;couponCode|优惠券模板编码|string||
|&emsp;&emsp;&emsp;&emsp;couponName|优惠券名称|string||
|&emsp;&emsp;&emsp;&emsp;couponType|优惠券类型|string||
|&emsp;&emsp;&emsp;&emsp;discountValue|优惠值|number||
|&emsp;&emsp;&emsp;&emsp;minAmount|最低消费金额|number||
|&emsp;&emsp;&emsp;&emsp;productScope|商品范围|string||
|&emsp;&emsp;&emsp;&emsp;scopeRef|范围引用|string||
|&emsp;&emsp;&emsp;&emsp;memberLevelLimit|会员等级限制|string||
|&emsp;&emsp;&emsp;&emsp;validDays|领取后有效天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;validFrom|固定有效期开始|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;validTo|固定有效期结束|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;stackable|是否可叠加|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"couponCode": "",
				"couponName": "",
				"couponType": "",
				"discountValue": 0,
				"minAmount": 0,
				"productScope": "",
				"scopeRef": "",
				"memberLevelLimit": "",
				"validDays": 0,
				"validFrom": "",
				"validTo": "",
				"stackable": "",
				"status": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券模板-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponTemplate/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_template:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 优惠券流水


## 优惠券流水-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponId": "",
  "memberId": "",
  "changeType": "",
  "beforeStatus": "",
  "afterStatus": "",
  "reconcileId": "",
  "sourceType": "",
  "sourceId": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponLedger|优惠券流水|body|true|ShopifyMemberCouponLedger|ShopifyMemberCouponLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponId|会员优惠券ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;beforeStatus|变动前状态||false|string||
|&emsp;&emsp;afterStatus|变动后状态||false|string||
|&emsp;&emsp;reconcileId|对账单ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponId": "",
  "memberId": "",
  "changeType": "",
  "beforeStatus": "",
  "afterStatus": "",
  "reconcileId": "",
  "sourceType": "",
  "sourceId": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponLedger|优惠券流水|body|true|ShopifyMemberCouponLedger|ShopifyMemberCouponLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponId|会员优惠券ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;beforeStatus|变动前状态||false|string||
|&emsp;&emsp;afterStatus|变动后状态||false|string||
|&emsp;&emsp;reconcileId|对账单ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponId": "",
  "memberId": "",
  "changeType": "",
  "beforeStatus": "",
  "afterStatus": "",
  "reconcileId": "",
  "sourceType": "",
  "sourceId": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponLedger|优惠券流水|body|true|ShopifyMemberCouponLedger|ShopifyMemberCouponLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponId|会员优惠券ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;beforeStatus|变动前状态||false|string||
|&emsp;&emsp;afterStatus|变动后状态||false|string||
|&emsp;&emsp;reconcileId|对账单ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberCouponLedger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberCouponLedger|ShopifyMemberCouponLedger|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;couponId|会员优惠券ID|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;changeType|变动类型|string||
|&emsp;&emsp;beforeStatus|变动前状态|string||
|&emsp;&emsp;afterStatus|变动后状态|string||
|&emsp;&emsp;reconcileId|对账单ID|string||
|&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"couponId": "",
		"memberId": "",
		"changeType": "",
		"beforeStatus": "",
		"afterStatus": "",
		"reconcileId": "",
		"sourceType": "",
		"sourceId": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCouponLedger|优惠券流水|query|true|ShopifyMemberCouponLedger|ShopifyMemberCouponLedger|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponId|会员优惠券ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;changeType|变动类型||false|string||
|&emsp;&emsp;beforeStatus|变动前状态||false|string||
|&emsp;&emsp;afterStatus|变动后状态||false|string||
|&emsp;&emsp;reconcileId|对账单ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberCouponLedger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberCouponLedger|IPageShopifyMemberCouponLedger|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberCouponLedger|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;couponId|会员优惠券ID|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;changeType|变动类型|string||
|&emsp;&emsp;&emsp;&emsp;beforeStatus|变动前状态|string||
|&emsp;&emsp;&emsp;&emsp;afterStatus|变动后状态|string||
|&emsp;&emsp;&emsp;&emsp;reconcileId|对账单ID|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源ID|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"couponId": "",
				"memberId": "",
				"changeType": "",
				"beforeStatus": "",
				"afterStatus": "",
				"reconcileId": "",
				"sourceType": "",
				"sourceId": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 优惠券流水-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCouponLedger/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon_ledger:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员优惠券


## 会员优惠券-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponTemplateId": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "couponCode": "",
  "couponName": "",
  "availableQuantity": 0,
  "status": "",
  "receiveSource": "",
  "receiveSourceId": "",
  "validFrom": "",
  "validTo": "",
  "usedTime": "",
  "idempotencyKey": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCoupon|会员优惠券|body|true|ShopifyMemberCoupon|ShopifyMemberCoupon|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponTemplateId|优惠券模板ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;couponCode|优惠券编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;availableQuantity|可用次数||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;receiveSource|领取来源||false|string||
|&emsp;&emsp;receiveSourceId|领取来源ID||false|string||
|&emsp;&emsp;validFrom|有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|有效期结束||false|string(date-time)||
|&emsp;&emsp;usedTime|核销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponTemplateId": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "couponCode": "",
  "couponName": "",
  "availableQuantity": 0,
  "status": "",
  "receiveSource": "",
  "receiveSourceId": "",
  "validFrom": "",
  "validTo": "",
  "usedTime": "",
  "idempotencyKey": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCoupon|会员优惠券|body|true|ShopifyMemberCoupon|ShopifyMemberCoupon|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponTemplateId|优惠券模板ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;couponCode|优惠券编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;availableQuantity|可用次数||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;receiveSource|领取来源||false|string||
|&emsp;&emsp;receiveSourceId|领取来源ID||false|string||
|&emsp;&emsp;validFrom|有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|有效期结束||false|string(date-time)||
|&emsp;&emsp;usedTime|核销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "couponTemplateId": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "couponCode": "",
  "couponName": "",
  "availableQuantity": 0,
  "status": "",
  "receiveSource": "",
  "receiveSourceId": "",
  "validFrom": "",
  "validTo": "",
  "usedTime": "",
  "idempotencyKey": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCoupon|会员优惠券|body|true|ShopifyMemberCoupon|ShopifyMemberCoupon|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponTemplateId|优惠券模板ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;couponCode|优惠券编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;availableQuantity|可用次数||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;receiveSource|领取来源||false|string||
|&emsp;&emsp;receiveSourceId|领取来源ID||false|string||
|&emsp;&emsp;validFrom|有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|有效期结束||false|string(date-time)||
|&emsp;&emsp;usedTime|核销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberCoupon|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberCoupon|ShopifyMemberCoupon|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;couponTemplateId|优惠券模板ID|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;couponCode|优惠券编码|string||
|&emsp;&emsp;couponName|优惠券名称|string||
|&emsp;&emsp;availableQuantity|可用次数|integer(int32)||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;receiveSource|领取来源|string||
|&emsp;&emsp;receiveSourceId|领取来源ID|string||
|&emsp;&emsp;validFrom|有效期开始|string(date-time)||
|&emsp;&emsp;validTo|有效期结束|string(date-time)||
|&emsp;&emsp;usedTime|核销时间|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"couponTemplateId": "",
		"memberId": "",
		"shopifyCustomerGid": "",
		"couponCode": "",
		"couponName": "",
		"availableQuantity": 0,
		"status": "",
		"receiveSource": "",
		"receiveSourceId": "",
		"validFrom": "",
		"validTo": "",
		"usedTime": "",
		"idempotencyKey": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberCoupon|会员优惠券|query|true|ShopifyMemberCoupon|ShopifyMemberCoupon|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;couponTemplateId|优惠券模板ID||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;couponCode|优惠券编码||false|string||
|&emsp;&emsp;couponName|优惠券名称||false|string||
|&emsp;&emsp;availableQuantity|可用次数||false|integer(int32)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;receiveSource|领取来源||false|string||
|&emsp;&emsp;receiveSourceId|领取来源ID||false|string||
|&emsp;&emsp;validFrom|有效期开始||false|string(date-time)||
|&emsp;&emsp;validTo|有效期结束||false|string(date-time)||
|&emsp;&emsp;usedTime|核销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberCoupon|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberCoupon|IPageShopifyMemberCoupon|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberCoupon|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;couponTemplateId|优惠券模板ID|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;couponCode|优惠券编码|string||
|&emsp;&emsp;&emsp;&emsp;couponName|优惠券名称|string||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|可用次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;receiveSource|领取来源|string||
|&emsp;&emsp;&emsp;&emsp;receiveSourceId|领取来源ID|string||
|&emsp;&emsp;&emsp;&emsp;validFrom|有效期开始|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;validTo|有效期结束|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;usedTime|核销时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"couponTemplateId": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"couponCode": "",
				"couponName": "",
				"availableQuantity": 0,
				"status": "",
				"receiveSource": "",
				"receiveSourceId": "",
				"validFrom": "",
				"validTo": "",
				"usedTime": "",
				"idempotencyKey": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员优惠券-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberCoupon/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_coupon:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 权益发放记录


## 权益发放记录-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "benefitId": "",
  "benefitCode": "",
  "grantType": "",
  "grantStatus": "",
  "relatedCouponId": "",
  "sourceType": "",
  "sourceId": "",
  "grantTime": "",
  "revokeTime": "",
  "idempotencyKey": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitGrant|权益发放记录|body|true|ShopifyMemberBenefitGrant|ShopifyMemberBenefitGrant|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;benefitId|权益ID||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;grantType|发放类型||false|string||
|&emsp;&emsp;grantStatus|发放状态||false|string||
|&emsp;&emsp;relatedCouponId|关联优惠券ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;grantTime|发放时间||false|string(date-time)||
|&emsp;&emsp;revokeTime|撤销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "benefitId": "",
  "benefitCode": "",
  "grantType": "",
  "grantStatus": "",
  "relatedCouponId": "",
  "sourceType": "",
  "sourceId": "",
  "grantTime": "",
  "revokeTime": "",
  "idempotencyKey": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitGrant|权益发放记录|body|true|ShopifyMemberBenefitGrant|ShopifyMemberBenefitGrant|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;benefitId|权益ID||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;grantType|发放类型||false|string||
|&emsp;&emsp;grantStatus|发放状态||false|string||
|&emsp;&emsp;relatedCouponId|关联优惠券ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;grantTime|发放时间||false|string(date-time)||
|&emsp;&emsp;revokeTime|撤销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "shopifyCustomerGid": "",
  "benefitId": "",
  "benefitCode": "",
  "grantType": "",
  "grantStatus": "",
  "relatedCouponId": "",
  "sourceType": "",
  "sourceId": "",
  "grantTime": "",
  "revokeTime": "",
  "idempotencyKey": "",
  "lastErrorMessage": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitGrant|权益发放记录|body|true|ShopifyMemberBenefitGrant|ShopifyMemberBenefitGrant|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;benefitId|权益ID||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;grantType|发放类型||false|string||
|&emsp;&emsp;grantStatus|发放状态||false|string||
|&emsp;&emsp;relatedCouponId|关联优惠券ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;grantTime|发放时间||false|string(date-time)||
|&emsp;&emsp;revokeTime|撤销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberBenefitGrant|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberBenefitGrant|ShopifyMemberBenefitGrant|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;benefitId|权益ID|string||
|&emsp;&emsp;benefitCode|权益编码|string||
|&emsp;&emsp;grantType|发放类型|string||
|&emsp;&emsp;grantStatus|发放状态|string||
|&emsp;&emsp;relatedCouponId|关联优惠券ID|string||
|&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;sourceId|来源单据ID|string||
|&emsp;&emsp;grantTime|发放时间|string(date-time)||
|&emsp;&emsp;revokeTime|撤销时间|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"shopifyCustomerGid": "",
		"benefitId": "",
		"benefitCode": "",
		"grantType": "",
		"grantStatus": "",
		"relatedCouponId": "",
		"sourceType": "",
		"sourceId": "",
		"grantTime": "",
		"revokeTime": "",
		"idempotencyKey": "",
		"lastErrorMessage": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitGrant|权益发放记录|query|true|ShopifyMemberBenefitGrant|ShopifyMemberBenefitGrant|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;benefitId|权益ID||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;grantType|发放类型||false|string||
|&emsp;&emsp;grantStatus|发放状态||false|string||
|&emsp;&emsp;relatedCouponId|关联优惠券ID||false|string||
|&emsp;&emsp;sourceType|来源类型||false|string||
|&emsp;&emsp;sourceId|来源单据ID||false|string||
|&emsp;&emsp;grantTime|发放时间||false|string(date-time)||
|&emsp;&emsp;revokeTime|撤销时间||false|string(date-time)||
|&emsp;&emsp;idempotencyKey|幂等键||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberBenefitGrant|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberBenefitGrant|IPageShopifyMemberBenefitGrant|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberBenefitGrant|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;benefitId|权益ID|string||
|&emsp;&emsp;&emsp;&emsp;benefitCode|权益编码|string||
|&emsp;&emsp;&emsp;&emsp;grantType|发放类型|string||
|&emsp;&emsp;&emsp;&emsp;grantStatus|发放状态|string||
|&emsp;&emsp;&emsp;&emsp;relatedCouponId|关联优惠券ID|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|来源类型|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源单据ID|string||
|&emsp;&emsp;&emsp;&emsp;grantTime|发放时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;revokeTime|撤销时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;idempotencyKey|幂等键|string||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"benefitId": "",
				"benefitCode": "",
				"grantType": "",
				"grantStatus": "",
				"relatedCouponId": "",
				"sourceType": "",
				"sourceId": "",
				"grantTime": "",
				"revokeTime": "",
				"idempotencyKey": "",
				"lastErrorMessage": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 权益发放记录-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitGrant/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_grant:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员权益


## 会员权益-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "benefitCode": "",
  "benefitName": "",
  "benefitType": "",
  "benefitValue": "",
  "applyScope": "",
  "startTime": "",
  "endTime": "",
  "status": "",
  "priority": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefit|会员权益|body|true|ShopifyMemberBenefit|ShopifyMemberBenefit|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;benefitName|权益名称||false|string||
|&emsp;&emsp;benefitType|权益类型||false|string||
|&emsp;&emsp;benefitValue|权益值||false|string||
|&emsp;&emsp;applyScope|适用范围||false|string||
|&emsp;&emsp;startTime|开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|结束时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "benefitCode": "",
  "benefitName": "",
  "benefitType": "",
  "benefitValue": "",
  "applyScope": "",
  "startTime": "",
  "endTime": "",
  "status": "",
  "priority": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefit|会员权益|body|true|ShopifyMemberBenefit|ShopifyMemberBenefit|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;benefitName|权益名称||false|string||
|&emsp;&emsp;benefitType|权益类型||false|string||
|&emsp;&emsp;benefitValue|权益值||false|string||
|&emsp;&emsp;applyScope|适用范围||false|string||
|&emsp;&emsp;startTime|开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|结束时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "benefitCode": "",
  "benefitName": "",
  "benefitType": "",
  "benefitValue": "",
  "applyScope": "",
  "startTime": "",
  "endTime": "",
  "status": "",
  "priority": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefit|会员权益|body|true|ShopifyMemberBenefit|ShopifyMemberBenefit|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;benefitName|权益名称||false|string||
|&emsp;&emsp;benefitType|权益类型||false|string||
|&emsp;&emsp;benefitValue|权益值||false|string||
|&emsp;&emsp;applyScope|适用范围||false|string||
|&emsp;&emsp;startTime|开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|结束时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberBenefit|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberBenefit|ShopifyMemberBenefit|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;benefitCode|权益编码|string||
|&emsp;&emsp;benefitName|权益名称|string||
|&emsp;&emsp;benefitType|权益类型|string||
|&emsp;&emsp;benefitValue|权益值|string||
|&emsp;&emsp;applyScope|适用范围|string||
|&emsp;&emsp;startTime|开始时间|string(date-time)||
|&emsp;&emsp;endTime|结束时间|string(date-time)||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"benefitCode": "",
		"benefitName": "",
		"benefitType": "",
		"benefitValue": "",
		"applyScope": "",
		"startTime": "",
		"endTime": "",
		"status": "",
		"priority": 0,
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefit|会员权益|query|true|ShopifyMemberBenefit|ShopifyMemberBenefit|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitCode|权益编码||false|string||
|&emsp;&emsp;benefitName|权益名称||false|string||
|&emsp;&emsp;benefitType|权益类型||false|string||
|&emsp;&emsp;benefitValue|权益值||false|string||
|&emsp;&emsp;applyScope|适用范围||false|string||
|&emsp;&emsp;startTime|开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|结束时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;priority|优先级||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberBenefit|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberBenefit|IPageShopifyMemberBenefit|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberBenefit|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;benefitCode|权益编码|string||
|&emsp;&emsp;&emsp;&emsp;benefitName|权益名称|string||
|&emsp;&emsp;&emsp;&emsp;benefitType|权益类型|string||
|&emsp;&emsp;&emsp;&emsp;benefitValue|权益值|string||
|&emsp;&emsp;&emsp;&emsp;applyScope|适用范围|string||
|&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|结束时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"benefitCode": "",
				"benefitName": "",
				"benefitType": "",
				"benefitValue": "",
				"applyScope": "",
				"startTime": "",
				"endTime": "",
				"status": "",
				"priority": 0,
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefit/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 年度积分账户


## 年度积分账户-编辑


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "totalEarnedPoints": 0,
  "totalUsedPoints": 0,
  "availablePoints": 0,
  "frozenPoints": 0,
  "expiredPoints": 0,
  "lastChangeTime": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAnnualMemberPointAccount|年度积分账户|body|true|ShopifyAnnualMemberPointAccount|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;totalEarnedPoints|年度累计获得积分||false|integer(int32)||
|&emsp;&emsp;totalUsedPoints|年度累计使用积分||false|integer(int32)||
|&emsp;&emsp;availablePoints|可用积分||false|integer(int32)||
|&emsp;&emsp;frozenPoints|冻结积分||false|integer(int32)||
|&emsp;&emsp;expiredPoints|已过期积分||false|integer(int32)||
|&emsp;&emsp;lastChangeTime|最近变动时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-编辑


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "totalEarnedPoints": 0,
  "totalUsedPoints": 0,
  "availablePoints": 0,
  "frozenPoints": 0,
  "expiredPoints": 0,
  "lastChangeTime": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAnnualMemberPointAccount|年度积分账户|body|true|ShopifyAnnualMemberPointAccount|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;totalEarnedPoints|年度累计获得积分||false|integer(int32)||
|&emsp;&emsp;totalUsedPoints|年度累计使用积分||false|integer(int32)||
|&emsp;&emsp;availablePoints|可用积分||false|integer(int32)||
|&emsp;&emsp;frozenPoints|冻结积分||false|integer(int32)||
|&emsp;&emsp;expiredPoints|已过期积分||false|integer(int32)||
|&emsp;&emsp;lastChangeTime|最近变动时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-添加


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "memberId": "",
  "memberYear": 0,
  "totalEarnedPoints": 0,
  "totalUsedPoints": 0,
  "availablePoints": 0,
  "frozenPoints": 0,
  "expiredPoints": 0,
  "lastChangeTime": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAnnualMemberPointAccount|年度积分账户|body|true|ShopifyAnnualMemberPointAccount|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;totalEarnedPoints|年度累计获得积分||false|integer(int32)||
|&emsp;&emsp;totalUsedPoints|年度累计使用积分||false|integer(int32)||
|&emsp;&emsp;availablePoints|可用积分||false|integer(int32)||
|&emsp;&emsp;frozenPoints|冻结积分||false|integer(int32)||
|&emsp;&emsp;expiredPoints|已过期积分||false|integer(int32)||
|&emsp;&emsp;lastChangeTime|最近变动时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAnnualMemberPointAccount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAnnualMemberPointAccount|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;totalEarnedPoints|年度累计获得积分|integer(int32)||
|&emsp;&emsp;totalUsedPoints|年度累计使用积分|integer(int32)||
|&emsp;&emsp;availablePoints|可用积分|integer(int32)||
|&emsp;&emsp;frozenPoints|冻结积分|integer(int32)||
|&emsp;&emsp;expiredPoints|已过期积分|integer(int32)||
|&emsp;&emsp;lastChangeTime|最近变动时间|string(date-time)||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"memberYear": 0,
		"totalEarnedPoints": 0,
		"totalUsedPoints": 0,
		"availablePoints": 0,
		"frozenPoints": 0,
		"expiredPoints": 0,
		"lastChangeTime": "",
		"status": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAnnualMemberPointAccount|年度积分账户|query|true|ShopifyAnnualMemberPointAccount|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员ID||false|string||
|&emsp;&emsp;memberYear|年度||false|integer(int32)||
|&emsp;&emsp;totalEarnedPoints|年度累计获得积分||false|integer(int32)||
|&emsp;&emsp;totalUsedPoints|年度累计使用积分||false|integer(int32)||
|&emsp;&emsp;availablePoints|可用积分||false|integer(int32)||
|&emsp;&emsp;frozenPoints|冻结积分||false|integer(int32)||
|&emsp;&emsp;expiredPoints|已过期积分||false|integer(int32)||
|&emsp;&emsp;lastChangeTime|最近变动时间||false|string(date-time)||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyAnnualMemberPointAccount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyAnnualMemberPointAccount|IPageShopifyAnnualMemberPointAccount|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyAnnualMemberPointAccount|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员ID|string||
|&emsp;&emsp;&emsp;&emsp;memberYear|年度|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;totalEarnedPoints|年度累计获得积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;totalUsedPoints|年度累计使用积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;availablePoints|可用积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;frozenPoints|冻结积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;expiredPoints|已过期积分|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;lastChangeTime|最近变动时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"memberYear": 0,
				"totalEarnedPoints": 0,
				"totalUsedPoints": 0,
				"availablePoints": 0,
				"frozenPoints": 0,
				"expiredPoints": 0,
				"lastChangeTime": "",
				"status": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-通过id删除


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 年度积分账户-批量删除


**接口地址**:`/yueran/shopify/member/shopifyAnnualMemberPointAccount/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_annual_member_point_account:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 通用多语言配置


## 通用多语言配置-编辑


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "resourceCode": "",
  "sourceType": "",
  "tableName": "",
  "idField": "",
  "displayField": "",
  "fieldName": "",
  "description": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "shopifyI18nContentList": [
    {
      "id": "",
      "fieldConfigId": "",
      "recordId": "",
      "language": "",
      "content": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|body|true|ShopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level||false|string||
|&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本||false|string||
|&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀||false|string||
|&emsp;&emsp;idField|DATA 类型的业务主键字段名||false|string||
|&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名||false|string||
|&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名||false|string||
|&emsp;&emsp;description|字段用途说明||false|string||
|&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;shopifyI18nContentList|||false|array|ShopifyI18nContent|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;fieldConfigId|多语言字段配置 ID||false|string||
|&emsp;&emsp;&emsp;&emsp;recordId|业务记录主键||false|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;&emsp;&emsp;content|纯文本翻译内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-编辑


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "resourceCode": "",
  "sourceType": "",
  "tableName": "",
  "idField": "",
  "displayField": "",
  "fieldName": "",
  "description": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "shopifyI18nContentList": [
    {
      "id": "",
      "fieldConfigId": "",
      "recordId": "",
      "language": "",
      "content": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|body|true|ShopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level||false|string||
|&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本||false|string||
|&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀||false|string||
|&emsp;&emsp;idField|DATA 类型的业务主键字段名||false|string||
|&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名||false|string||
|&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名||false|string||
|&emsp;&emsp;description|字段用途说明||false|string||
|&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;shopifyI18nContentList|||false|array|ShopifyI18nContent|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;fieldConfigId|多语言字段配置 ID||false|string||
|&emsp;&emsp;&emsp;&emsp;recordId|业务记录主键||false|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;&emsp;&emsp;content|纯文本翻译内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-添加


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "resourceCode": "",
  "sourceType": "",
  "tableName": "",
  "idField": "",
  "displayField": "",
  "fieldName": "",
  "description": "",
  "status": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "shopifyI18nContentList": [
    {
      "id": "",
      "fieldConfigId": "",
      "recordId": "",
      "language": "",
      "content": "",
      "createBy": "",
      "createTime": "",
      "updateBy": "",
      "updateTime": "",
      "sysOrgCode": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|body|true|ShopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level||false|string||
|&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本||false|string||
|&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀||false|string||
|&emsp;&emsp;idField|DATA 类型的业务主键字段名||false|string||
|&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名||false|string||
|&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名||false|string||
|&emsp;&emsp;description|字段用途说明||false|string||
|&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;shopifyI18nContentList|||false|array|ShopifyI18nContent|
|&emsp;&emsp;&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;&emsp;&emsp;fieldConfigId|多语言字段配置 ID||false|string||
|&emsp;&emsp;&emsp;&emsp;recordId|业务记录主键||false|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码：zh、en、ja||false|string||
|&emsp;&emsp;&emsp;&emsp;content|纯文本翻译内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-查询翻译文本


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/queryShopifyI18nContentByMainId`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|字段配置ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListShopifyI18nContent|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|array|ShopifyI18nContent|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;fieldConfigId|多语言字段配置 ID|string||
|&emsp;&emsp;recordId|业务记录主键|string||
|&emsp;&emsp;language|语言编码：zh、en、ja|string||
|&emsp;&emsp;content|纯文本翻译内容|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": [
		{
			"id": "",
			"fieldConfigId": "",
			"recordId": "",
			"language": "",
			"content": "",
			"createBy": "",
			"createTime": "",
			"updateBy": "",
			"updateTime": "",
			"sysOrgCode": ""
		}
	],
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-通过id查询


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|字段配置ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyI18nFieldConfigPage|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyI18nFieldConfigPage|ShopifyI18nFieldConfigPage|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level|string||
|&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本|string||
|&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀|string||
|&emsp;&emsp;idField|DATA 类型的业务主键字段名|string||
|&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名|string||
|&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名|string||
|&emsp;&emsp;description|字段用途说明|string||
|&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;shopifyI18nContentList||array|ShopifyI18nContent|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;fieldConfigId|多语言字段配置 ID|string||
|&emsp;&emsp;&emsp;&emsp;recordId|业务记录主键|string||
|&emsp;&emsp;&emsp;&emsp;language|语言编码：zh、en、ja|string||
|&emsp;&emsp;&emsp;&emsp;content|纯文本翻译内容|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"resourceCode": "",
		"sourceType": "",
		"tableName": "",
		"idField": "",
		"displayField": "",
		"fieldName": "",
		"description": "",
		"status": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"shopifyI18nContentList": [
			{
				"id": "",
				"fieldConfigId": "",
				"recordId": "",
				"language": "",
				"content": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		]
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-分页列表查询


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|fieldConfig|通用多语言字段配置|query|true|ShopifyI18nFieldConfig|ShopifyI18nFieldConfig|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level||false|string||
|&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本||false|string||
|&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀||false|string||
|&emsp;&emsp;idField|DATA 类型的业务主键字段名||false|string||
|&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名||false|string||
|&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名||false|string||
|&emsp;&emsp;description|字段用途说明||false|string||
|&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyI18nFieldConfig|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyI18nFieldConfig|IPageShopifyI18nFieldConfig|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyI18nFieldConfig|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;resourceCode|业务资源编码，例如 store、member_level|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据来源类型：DICT 通用字典文本，DATA 业务数据文本|string||
|&emsp;&emsp;&emsp;&emsp;tableName|DATA 类型的业务表名，仅允许 shopify_ 前缀|string||
|&emsp;&emsp;&emsp;&emsp;idField|DATA 类型的业务主键字段名|string||
|&emsp;&emsp;&emsp;&emsp;displayField|DATA 类型的候选数据展示字段名|string||
|&emsp;&emsp;&emsp;&emsp;fieldName|DATA 类型实际需要翻译的业务字段名|string||
|&emsp;&emsp;&emsp;&emsp;description|字段用途说明|string||
|&emsp;&emsp;&emsp;&emsp;status|配置启停状态，使用 shopify_enabled_status 字典|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"resourceCode": "",
				"sourceType": "",
				"tableName": "",
				"idField": "",
				"displayField": "",
				"fieldName": "",
				"description": "",
				"status": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-查询业务数据候选项


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/dataOptions`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:queryDataOptions</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|configId|字段配置ID，新增未保存配置时可不传|query|false|string||
|tableName|DATA 类型业务表名，未传配置ID时使用|query|false|string||
|idField|DATA 类型主键字段，未传配置ID时使用|query|false|string||
|displayField|DATA 类型展示字段，未传配置ID时使用|query|false|string||
|fieldName|DATA 类型翻译字段，未传配置ID时使用|query|false|string||
|keyword|展示字段模糊查询关键字|query|false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListShopifyI18nDataOption|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|array|ShopifyI18nDataOption|
|&emsp;&emsp;value|业务记录主键|string||
|&emsp;&emsp;label|候选项展示文本|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": [
		{
			"value": "",
			"label": ""
		}
	],
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-通过id删除


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|字段配置ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 通用多语言配置-批量删除


**接口地址**:`/yueran/shopify/common/shopifyI18nFieldConfig/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_i18n_field_config:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|字段配置ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify预约时间统计


## Shopify预约时间统计-编辑


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "storeRef": "",
  "storeName": "",
  "statDate": "",
  "slotTime": "",
  "reservedAt": "",
  "limitNumber": 0,
  "productReservedNumber": 0,
  "storeReservedNumber": 0,
  "reservedNumber": 0,
  "remainingNumber": 0,
  "fullFlag": "",
  "availableFlag": "",
  "disabledReason": "",
  "snapshotKey": "",
  "archivedAt": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationSlotStat|预约时间统计|body|true|ShopifyReservationSlotStat|ShopifyReservationSlotStat|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;storeName|门店名称快照||false|string||
|&emsp;&emsp;statDate|统计日期||false|string||
|&emsp;&emsp;slotTime|时间段||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;limitNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;productReservedNumber|商品预约人数||false|integer(int32)||
|&emsp;&emsp;storeReservedNumber|门店预约人数||false|integer(int32)||
|&emsp;&emsp;reservedNumber|总预约人数||false|integer(int32)||
|&emsp;&emsp;remainingNumber|剩余人数||false|integer(int32)||
|&emsp;&emsp;fullFlag|是否约满||false|string||
|&emsp;&emsp;availableFlag|是否可预约||false|string||
|&emsp;&emsp;disabledReason|不可预约原因||false|string||
|&emsp;&emsp;snapshotKey|Redis快照键||false|string||
|&emsp;&emsp;archivedAt|归档时间||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-导入Excel


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/importExcel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:importExcel</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-添加


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "storeRef": "",
  "storeName": "",
  "statDate": "",
  "slotTime": "",
  "reservedAt": "",
  "limitNumber": 0,
  "productReservedNumber": 0,
  "storeReservedNumber": 0,
  "reservedNumber": 0,
  "remainingNumber": 0,
  "fullFlag": "",
  "availableFlag": "",
  "disabledReason": "",
  "snapshotKey": "",
  "archivedAt": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationSlotStat|预约时间统计|body|true|ShopifyReservationSlotStat|ShopifyReservationSlotStat|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;storeName|门店名称快照||false|string||
|&emsp;&emsp;statDate|统计日期||false|string||
|&emsp;&emsp;slotTime|时间段||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;limitNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;productReservedNumber|商品预约人数||false|integer(int32)||
|&emsp;&emsp;storeReservedNumber|门店预约人数||false|integer(int32)||
|&emsp;&emsp;reservedNumber|总预约人数||false|integer(int32)||
|&emsp;&emsp;remainingNumber|剩余人数||false|integer(int32)||
|&emsp;&emsp;fullFlag|是否约满||false|string||
|&emsp;&emsp;availableFlag|是否可预约||false|string||
|&emsp;&emsp;disabledReason|不可预约原因||false|string||
|&emsp;&emsp;snapshotKey|Redis快照键||false|string||
|&emsp;&emsp;archivedAt|归档时间||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-通过id查询


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约时间统计记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservationSlotStat|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservationSlotStat|ShopifyReservationSlotStat|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;storeName|门店名称快照|string||
|&emsp;&emsp;statDate|统计日期|string||
|&emsp;&emsp;slotTime|时间段|string||
|&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;limitNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;productReservedNumber|商品预约人数|integer(int32)||
|&emsp;&emsp;storeReservedNumber|门店预约人数|integer(int32)||
|&emsp;&emsp;reservedNumber|总预约人数|integer(int32)||
|&emsp;&emsp;remainingNumber|剩余人数|integer(int32)||
|&emsp;&emsp;fullFlag|是否约满|string||
|&emsp;&emsp;availableFlag|是否可预约|string||
|&emsp;&emsp;disabledReason|不可预约原因|string||
|&emsp;&emsp;snapshotKey|Redis快照键|string||
|&emsp;&emsp;archivedAt|归档时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"storeRef": "",
		"storeName": "",
		"statDate": "",
		"slotTime": "",
		"reservedAt": "",
		"limitNumber": 0,
		"productReservedNumber": 0,
		"storeReservedNumber": 0,
		"reservedNumber": 0,
		"remainingNumber": 0,
		"fullFlag": "",
		"availableFlag": "",
		"disabledReason": "",
		"snapshotKey": "",
		"archivedAt": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-分页列表查询


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationSlotStat|预约时间统计|query|true|ShopifyReservationSlotStat|ShopifyReservationSlotStat|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|createBy||false|string||
|&emsp;&emsp;createTime|createTime||false|string(date-time)||
|&emsp;&emsp;updateBy|updateBy||false|string||
|&emsp;&emsp;updateTime|updateTime||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;storeName|门店名称快照||false|string||
|&emsp;&emsp;statDate|统计日期||false|string||
|&emsp;&emsp;slotTime|时间段||false|string||
|&emsp;&emsp;reservedAt|预约时间||false|string||
|&emsp;&emsp;limitNumber|时间段可预约人数||false|integer(int32)||
|&emsp;&emsp;productReservedNumber|商品预约人数||false|integer(int32)||
|&emsp;&emsp;storeReservedNumber|门店预约人数||false|integer(int32)||
|&emsp;&emsp;reservedNumber|总预约人数||false|integer(int32)||
|&emsp;&emsp;remainingNumber|剩余人数||false|integer(int32)||
|&emsp;&emsp;fullFlag|是否约满||false|string||
|&emsp;&emsp;availableFlag|是否可预约||false|string||
|&emsp;&emsp;disabledReason|不可预约原因||false|string||
|&emsp;&emsp;snapshotKey|Redis快照键||false|string||
|&emsp;&emsp;archivedAt|归档时间||false|string(date-time)||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyReservationSlotStat|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyReservationSlotStat|IPageShopifyReservationSlotStat|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyReservationSlotStat|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|createBy|string||
|&emsp;&emsp;&emsp;&emsp;createTime|createTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|updateBy|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|updateTime|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;&emsp;&emsp;storeName|门店名称快照|string||
|&emsp;&emsp;&emsp;&emsp;statDate|统计日期|string||
|&emsp;&emsp;&emsp;&emsp;slotTime|时间段|string||
|&emsp;&emsp;&emsp;&emsp;reservedAt|预约时间|string||
|&emsp;&emsp;&emsp;&emsp;limitNumber|时间段可预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;productReservedNumber|商品预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;storeReservedNumber|门店预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reservedNumber|总预约人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remainingNumber|剩余人数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;fullFlag|是否约满|string||
|&emsp;&emsp;&emsp;&emsp;availableFlag|是否可预约|string||
|&emsp;&emsp;&emsp;&emsp;disabledReason|不可预约原因|string||
|&emsp;&emsp;&emsp;&emsp;snapshotKey|Redis快照键|string||
|&emsp;&emsp;&emsp;&emsp;archivedAt|归档时间|string(date-time)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"storeRef": "",
				"storeName": "",
				"statDate": "",
				"slotTime": "",
				"reservedAt": "",
				"limitNumber": 0,
				"productReservedNumber": 0,
				"storeReservedNumber": 0,
				"reservedNumber": 0,
				"remainingNumber": 0,
				"fullFlag": "",
				"availableFlag": "",
				"disabledReason": "",
				"snapshotKey": "",
				"archivedAt": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-通过id删除


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|预约时间统计记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约时间统计-批量删除


**接口地址**:`/yueran/shopify/shopifyReservationSlotStat/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_slot_stat:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|预约时间统计记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify预约每日人工放行


## Shopify预约每日人工放行-编辑


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "mode": "",
  "storeRef": "",
  "customerId": "",
  "reservationDate": "",
  "unlockCount": 0,
  "reason": "",
  "operatorId": "",
  "operatorName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationDailyUnlock|Shopify预约每日人工放行|body|true|ShopifyReservationDailyUnlock|ShopifyReservationDailyUnlock|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;reservationDate|预约日期||false|string||
|&emsp;&emsp;unlockCount|放行次数||false|integer(int32)||
|&emsp;&emsp;reason|放行原因||false|string||
|&emsp;&emsp;operatorId|操作人ID||false|string||
|&emsp;&emsp;operatorName|操作人名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-导入Excel


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/importExcel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:importExcel</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-添加


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "mode": "",
  "storeRef": "",
  "customerId": "",
  "reservationDate": "",
  "unlockCount": 0,
  "reason": "",
  "operatorId": "",
  "operatorName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationDailyUnlock|Shopify预约每日人工放行|body|true|ShopifyReservationDailyUnlock|ShopifyReservationDailyUnlock|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;reservationDate|预约日期||false|string||
|&emsp;&emsp;unlockCount|放行次数||false|integer(int32)||
|&emsp;&emsp;reason|放行原因||false|string||
|&emsp;&emsp;operatorId|操作人ID||false|string||
|&emsp;&emsp;operatorName|操作人名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-通过id查询


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|人工放行记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservationDailyUnlock|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservationDailyUnlock|ShopifyReservationDailyUnlock|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约|string||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;reservationDate|预约日期|string||
|&emsp;&emsp;unlockCount|放行次数|integer(int32)||
|&emsp;&emsp;reason|放行原因|string||
|&emsp;&emsp;operatorId|操作人ID|string||
|&emsp;&emsp;operatorName|操作人名称|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"mode": "",
		"storeRef": "",
		"customerId": "",
		"reservationDate": "",
		"unlockCount": 0,
		"reason": "",
		"operatorId": "",
		"operatorName": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-分页列表查询


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyReservationDailyUnlock|Shopify预约每日人工放行|query|true|ShopifyReservationDailyUnlock|ShopifyReservationDailyUnlock|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约||false|string||
|&emsp;&emsp;storeRef|门店ID||false|string||
|&emsp;&emsp;customerId|Shopify客户ID||false|string||
|&emsp;&emsp;reservationDate|预约日期||false|string||
|&emsp;&emsp;unlockCount|放行次数||false|integer(int32)||
|&emsp;&emsp;reason|放行原因||false|string||
|&emsp;&emsp;operatorId|操作人ID||false|string||
|&emsp;&emsp;operatorName|操作人名称||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyReservationDailyUnlock|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyReservationDailyUnlock|IPageShopifyReservationDailyUnlock|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyReservationDailyUnlock|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约|string||
|&emsp;&emsp;&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;&emsp;&emsp;reservationDate|预约日期|string||
|&emsp;&emsp;&emsp;&emsp;unlockCount|放行次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reason|放行原因|string||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID|string||
|&emsp;&emsp;&emsp;&emsp;operatorName|操作人名称|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"mode": "",
				"storeRef": "",
				"customerId": "",
				"reservationDate": "",
				"unlockCount": 0,
				"reason": "",
				"operatorId": "",
				"operatorName": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-通过id删除


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|人工放行记录ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约每日人工放行-批量删除


**接口地址**:`/yueran/shopify/shopifyReservationDailyUnlock/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_reservation_daily_unlock:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|人工放行记录ID集合，多个ID用英文逗号分隔|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员积分计算规则


## 会员积分规则-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "ruleCode": "",
  "ruleName": "",
  "channel": "",
  "baseAmount": 0,
  "points": 0,
  "startTime": "",
  "endTime": "",
  "status": "",
  "priority": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointRule|会员积分计算规则|body|true|ShopifyMemberPointRule|ShopifyMemberPointRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;ruleCode|规则编码||false|string||
|&emsp;&emsp;ruleName|规则名称||false|string||
|&emsp;&emsp;channel|适用渠道：offline线下、online线上、both线上线下||false|string||
|&emsp;&emsp;baseAmount|每消费多少金额获得一档积分||false|number||
|&emsp;&emsp;points|每档消费金额对应的积分数||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始生效时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束生效时间||false|string(date-time)||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|规则优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员积分规则-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "ruleCode": "",
  "ruleName": "",
  "channel": "",
  "baseAmount": 0,
  "points": 0,
  "startTime": "",
  "endTime": "",
  "status": "",
  "priority": 0,
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberPointRule|会员积分计算规则|body|true|ShopifyMemberPointRule|ShopifyMemberPointRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;ruleCode|规则编码||false|string||
|&emsp;&emsp;ruleName|规则名称||false|string||
|&emsp;&emsp;channel|适用渠道：offline线下、online线上、both线上线下||false|string||
|&emsp;&emsp;baseAmount|每消费多少金额获得一档积分||false|number||
|&emsp;&emsp;points|每档消费金额对应的积分数||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始生效时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束生效时间||false|string(date-time)||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|规则优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员积分规则-详情查询


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberPointRule|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberPointRule|ShopifyMemberPointRule|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;ruleCode|规则编码|string||
|&emsp;&emsp;ruleName|规则名称|string||
|&emsp;&emsp;channel|适用渠道：offline线下、online线上、both线上线下|string||
|&emsp;&emsp;baseAmount|每消费多少金额获得一档积分|number||
|&emsp;&emsp;points|每档消费金额对应的积分数|integer(int32)||
|&emsp;&emsp;startTime|规则开始生效时间|string(date-time)||
|&emsp;&emsp;endTime|规则结束生效时间|string(date-time)||
|&emsp;&emsp;status|启用状态|string||
|&emsp;&emsp;priority|规则优先级，数值越大越优先|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"ruleCode": "",
		"ruleName": "",
		"channel": "",
		"baseAmount": 0,
		"points": 0,
		"startTime": "",
		"endTime": "",
		"status": "",
		"priority": 0,
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员积分规则-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|entity|会员积分计算规则|query|true|ShopifyMemberPointRule|ShopifyMemberPointRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;ruleCode|规则编码||false|string||
|&emsp;&emsp;ruleName|规则名称||false|string||
|&emsp;&emsp;channel|适用渠道：offline线下、online线上、both线上线下||false|string||
|&emsp;&emsp;baseAmount|每消费多少金额获得一档积分||false|number||
|&emsp;&emsp;points|每档消费金额对应的积分数||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始生效时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束生效时间||false|string(date-time)||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|规则优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberPointRule|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberPointRule|IPageShopifyMemberPointRule|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberPointRule|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;ruleCode|规则编码|string||
|&emsp;&emsp;&emsp;&emsp;ruleName|规则名称|string||
|&emsp;&emsp;&emsp;&emsp;channel|适用渠道：offline线下、online线上、both线上线下|string||
|&emsp;&emsp;&emsp;&emsp;baseAmount|每消费多少金额获得一档积分|number||
|&emsp;&emsp;&emsp;&emsp;points|每档消费金额对应的积分数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTime|规则开始生效时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|规则结束生效时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|启用状态|string||
|&emsp;&emsp;&emsp;&emsp;priority|规则优先级，数值越大越优先|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"ruleCode": "",
				"ruleName": "",
				"channel": "",
				"baseAmount": 0,
				"points": 0,
				"startTime": "",
				"endTime": "",
				"status": "",
				"priority": 0,
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员积分规则-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员积分规则-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberPointRule/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_point_rule:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员权益匹配规则


## 会员权益匹配规则-编辑


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "benefitId": "",
  "memberLevelCode": "",
  "memberYear": 0,
  "triggerType": "",
  "status": "",
  "priority": 0,
  "startTime": "",
  "endTime": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitRule|会员权益匹配规则|body|true|ShopifyMemberBenefitRule|ShopifyMemberBenefitRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitId|关联权益ID||false|string||
|&emsp;&emsp;memberLevelCode|会员等级编码；为空表示不限制||false|string||
|&emsp;&emsp;memberYear|适用年度；为空表示不限制||false|integer(int32)||
|&emsp;&emsp;triggerType|触发场景||false|string||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益匹配规则-添加


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "benefitId": "",
  "memberLevelCode": "",
  "memberYear": 0,
  "triggerType": "",
  "status": "",
  "priority": 0,
  "startTime": "",
  "endTime": "",
  "remark": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "sysOrgCode": "",
  "delFlag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberBenefitRule|会员权益匹配规则|body|true|ShopifyMemberBenefitRule|ShopifyMemberBenefitRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitId|关联权益ID||false|string||
|&emsp;&emsp;memberLevelCode|会员等级编码；为空表示不限制||false|string||
|&emsp;&emsp;memberYear|适用年度；为空表示不限制||false|integer(int32)||
|&emsp;&emsp;triggerType|触发场景||false|string||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益匹配规则-详情


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberBenefitRule|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberBenefitRule|ShopifyMemberBenefitRule|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;benefitId|关联权益ID|string||
|&emsp;&emsp;memberLevelCode|会员等级编码；为空表示不限制|string||
|&emsp;&emsp;memberYear|适用年度；为空表示不限制|integer(int32)||
|&emsp;&emsp;triggerType|触发场景|string||
|&emsp;&emsp;status|启用状态|string||
|&emsp;&emsp;priority|优先级，数值越大越优先|integer(int32)||
|&emsp;&emsp;startTime|规则开始时间|string(date-time)||
|&emsp;&emsp;endTime|规则结束时间|string(date-time)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;createBy||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateBy||string||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;delFlag||string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"benefitId": "",
		"memberLevelCode": "",
		"memberYear": 0,
		"triggerType": "",
		"status": "",
		"priority": 0,
		"startTime": "",
		"endTime": "",
		"remark": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益匹配规则-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|entity|会员权益匹配规则|query|true|ShopifyMemberBenefitRule|ShopifyMemberBenefitRule|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;benefitId|关联权益ID||false|string||
|&emsp;&emsp;memberLevelCode|会员等级编码；为空表示不限制||false|string||
|&emsp;&emsp;memberYear|适用年度；为空表示不限制||false|integer(int32)||
|&emsp;&emsp;triggerType|触发场景||false|string||
|&emsp;&emsp;status|启用状态||false|string||
|&emsp;&emsp;priority|优先级，数值越大越优先||false|integer(int32)||
|&emsp;&emsp;startTime|规则开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|规则结束时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberBenefitRule|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberBenefitRule|IPageShopifyMemberBenefitRule|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberBenefitRule|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;benefitId|关联权益ID|string||
|&emsp;&emsp;&emsp;&emsp;memberLevelCode|会员等级编码；为空表示不限制|string||
|&emsp;&emsp;&emsp;&emsp;memberYear|适用年度；为空表示不限制|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;triggerType|触发场景|string||
|&emsp;&emsp;&emsp;&emsp;status|启用状态|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级，数值越大越优先|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTime|规则开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|规则结束时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;&emsp;&emsp;createBy||string||
|&emsp;&emsp;&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;&emsp;&emsp;delFlag||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"benefitId": "",
				"memberLevelCode": "",
				"memberYear": 0,
				"triggerType": "",
				"status": "",
				"priority": 0,
				"startTime": "",
				"endTime": "",
				"remark": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益匹配规则-删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员权益匹配规则-批量删除


**接口地址**:`/yueran/shopify/member/shopifyMemberBenefitRule/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_benefit_rule:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify元对象授权映射


## Shopify元对象授权映射-编辑


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:edit</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "metaobjectType": "",
  "metaobjectName": "",
  "roleIds": "",
  "fieldCacheJson": "",
  "dataCacheJson": "",
  "lastSyncTime": "",
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectMapping|Shopify元对象授权映射|body|true|ShopifyMetaobjectMapping|ShopifyMetaobjectMapping|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;metaobjectType|Shopify元对象type，例如 offlinestore 或 $app:author||false|string||
|&emsp;&emsp;metaobjectName|元对象本地展示名称||false|string||
|&emsp;&emsp;roleIds|允许查询该元对象的Jeecg角色ID，多个使用英文逗号分隔||false|string||
|&emsp;&emsp;fieldCacheJson|Shopify远程元对象字段定义缓存JSON||false|string||
|&emsp;&emsp;dataCacheJson|Shopify远程元对象数据缓存JSON，仅用于后台查看||false|string||
|&emsp;&emsp;lastSyncTime|最后同步远程元对象字段或数据的时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-添加


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:add</p>



**请求示例**:


```javascript
{
  "id": "",
  "createBy": "",
  "createTime": "",
  "updateBy": "",
  "updateTime": "",
  "delFlag": "",
  "metaobjectType": "",
  "metaobjectName": "",
  "roleIds": "",
  "fieldCacheJson": "",
  "dataCacheJson": "",
  "lastSyncTime": "",
  "remark": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectMapping|Shopify元对象授权映射|body|true|ShopifyMetaobjectMapping|ShopifyMetaobjectMapping|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;metaobjectType|Shopify元对象type，例如 offlinestore 或 $app:author||false|string||
|&emsp;&emsp;metaobjectName|元对象本地展示名称||false|string||
|&emsp;&emsp;roleIds|允许查询该元对象的Jeecg角色ID，多个使用英文逗号分隔||false|string||
|&emsp;&emsp;fieldCacheJson|Shopify远程元对象字段定义缓存JSON||false|string||
|&emsp;&emsp;dataCacheJson|Shopify远程元对象数据缓存JSON，仅用于后台查看||false|string||
|&emsp;&emsp;lastSyncTime|最后同步远程元对象字段或数据的时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-后台查询远程数据


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/remoteData`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|type||query|true|string||
|source||query|false|string||
|refresh||query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-通过id查询


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMetaobjectMapping|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMetaobjectMapping|ShopifyMetaobjectMapping|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;metaobjectType|Shopify元对象type，例如 offlinestore 或 $app:author|string||
|&emsp;&emsp;metaobjectName|元对象本地展示名称|string||
|&emsp;&emsp;roleIds|允许查询该元对象的Jeecg角色ID，多个使用英文逗号分隔|string||
|&emsp;&emsp;fieldCacheJson|Shopify远程元对象字段定义缓存JSON|string||
|&emsp;&emsp;dataCacheJson|Shopify远程元对象数据缓存JSON，仅用于后台查看|string||
|&emsp;&emsp;lastSyncTime|最后同步远程元对象字段或数据的时间|string(date-time)||
|&emsp;&emsp;remark|备注|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"metaobjectType": "",
		"metaobjectName": "",
		"roleIds": "",
		"fieldCacheJson": "",
		"dataCacheJson": "",
		"lastSyncTime": "",
		"remark": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-分页列表查询


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMetaobjectMapping|Shopify元对象授权映射|query|true|ShopifyMetaobjectMapping|ShopifyMetaobjectMapping|
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除||false|string||
|&emsp;&emsp;metaobjectType|Shopify元对象type，例如 offlinestore 或 $app:author||false|string||
|&emsp;&emsp;metaobjectName|元对象本地展示名称||false|string||
|&emsp;&emsp;roleIds|允许查询该元对象的Jeecg角色ID，多个使用英文逗号分隔||false|string||
|&emsp;&emsp;fieldCacheJson|Shopify远程元对象字段定义缓存JSON||false|string||
|&emsp;&emsp;dataCacheJson|Shopify远程元对象数据缓存JSON，仅用于后台查看||false|string||
|&emsp;&emsp;lastSyncTime|最后同步远程元对象字段或数据的时间||false|string(date-time)||
|&emsp;&emsp;remark|备注||false|string||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMetaobjectMapping|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMetaobjectMapping|IPageShopifyMetaobjectMapping|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMetaobjectMapping|
|&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;&emsp;&emsp;metaobjectType|Shopify元对象type，例如 offlinestore 或 $app:author|string||
|&emsp;&emsp;&emsp;&emsp;metaobjectName|元对象本地展示名称|string||
|&emsp;&emsp;&emsp;&emsp;roleIds|允许查询该元对象的Jeecg角色ID，多个使用英文逗号分隔|string||
|&emsp;&emsp;&emsp;&emsp;fieldCacheJson|Shopify远程元对象字段定义缓存JSON|string||
|&emsp;&emsp;&emsp;&emsp;dataCacheJson|Shopify远程元对象数据缓存JSON，仅用于后台查看|string||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最后同步远程元对象字段或数据的时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": "",
				"metaobjectType": "",
				"metaobjectName": "",
				"roleIds": "",
				"fieldCacheJson": "",
				"dataCacheJson": "",
				"lastSyncTime": "",
				"remark": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-查询字段定义


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/fields`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|type||query|true|string||
|refresh||query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-App查询元对象数据


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/data`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|type||query|true|string||
|source||query|false|string||
|refresh||query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-删除


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/delete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:delete</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify元对象授权映射-批量删除


**接口地址**:`/yueran/shopify/common/shopifyMetaobjectMapping/deleteBatch`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_metaobject_mapping:deleteBatch</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Smaregi交易Webhook临时采集


## Smaregi交易Webhook临时采集


**接口地址**:`/yueran/shopify/webhook/smaregi/transaction/capture`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|smaregi-contract-id||header|false|string||
|smaregi-event||header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized|ResultObject|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify客户更新Webhook


## Shopify客户更新Webhook回调


**接口地址**:`/yueran/shopify/webhook/customers/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized|ResultObject|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify 预约人员管理


## Shopify预约人员管理-单独修改时间段可预约人数


**接口地址**:`/yueran/shopify/user/reservationSlots/updateLimit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:edit</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||
|reservedAt|预约时间，格式 yyyy-MM-dd HH:mm:ss|query|true|string||
|limitNumber|时间段可预约人数|query|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-刷新单个门店某天可预约时间段剩余人数


**接口地址**:`/yueran/shopify/user/reservationSlots/refreshDate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||
|date|预约日期，格式 yyyy-MM-dd|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-初始化单个门店可预约时间段


**接口地址**:`/yueran/shopify/user/reservationSlots/initStore`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-初始化所有门店可预约时间段


**接口地址**:`/yueran/shopify/user/reservationSlots/initAll`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:list</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultInteger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|integer(int32)|integer(int32)|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": 0,
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-按业务参数人工放行一次每日预约限制


**接口地址**:`/yueran/shopify/user/dailyUnlocks/releaseOnce`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:edit</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||
|customerId|Shopify客户ID|query|true|string||
|date|预约日期，格式 yyyy-MM-dd|query|true|string||
|mode|预约模式：product=商品预约，store=门店预约|query|false|string||
|reason|放行原因|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyReservationDailyUnlock|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyReservationDailyUnlock|ShopifyReservationDailyUnlock|
|&emsp;&emsp;id|id|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除|string||
|&emsp;&emsp;mode|预约模式：product=商品预约，store=门店预约|string||
|&emsp;&emsp;storeRef|门店ID|string||
|&emsp;&emsp;customerId|Shopify客户ID|string||
|&emsp;&emsp;reservationDate|预约日期|string||
|&emsp;&emsp;unlockCount|放行次数|integer(int32)||
|&emsp;&emsp;reason|放行原因|string||
|&emsp;&emsp;operatorId|操作人ID|string||
|&emsp;&emsp;operatorName|操作人名称|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": "",
		"mode": "",
		"storeRef": "",
		"customerId": "",
		"reservationDate": "",
		"unlockCount": 0,
		"reason": "",
		"operatorId": "",
		"operatorName": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-重置客户当天取消预约次数限制


**接口地址**:`/yueran/shopify/user/dailyCancellationLimits/reset`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:edit</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cacheKey|取消预约限制缓存键|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-查询单个门店可预约时间段剩余人数


**接口地址**:`/yueran/shopify/user/reservationSlots/store`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeRef|门店ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-查询今天被预约限定锁定的客户


**接口地址**:`/yueran/shopify/user/dailyLimits/today`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|keyword|关键字，支持客户、门店、预约码、预约时间模糊匹配|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify预约人员管理-查询今天被取消预约次数限定锁定的客户


**接口地址**:`/yueran/shopify/user/dailyCancellationLimits/today`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_store:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|keyword|关键字，支持客户、门店、预约时间和取消时间模糊匹配|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify第三方身份绑定审核


## 重新发送Shopify第三方身份绑定审核用户通知


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/resendEmail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:resendEmail</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 拒绝Shopify第三方身份绑定审核


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/reject`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:reject</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||
|remark||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 关闭Shopify第三方身份绑定审核


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/close`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:close</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||
|remark||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 确认Shopify第三方身份绑定


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/approve`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:approve</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||
|memberId||query|true|string||
|remark||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify第三方身份绑定审核-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyThirdAccountBindingReview|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyThirdAccountBindingReview|ShopifyThirdAccountBindingReview|
|&emsp;&emsp;id||string||
|&emsp;&emsp;createBy||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateBy||string||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;delFlag||string||
|&emsp;&emsp;tenantId||integer(int32)||
|&emsp;&emsp;shopifySub||string||
|&emsp;&emsp;shopifyCustomerGid||string||
|&emsp;&emsp;customerEmail||string||
|&emsp;&emsp;customerFirstName||string||
|&emsp;&emsp;customerLastName||string||
|&emsp;&emsp;customerPhone||string||
|&emsp;&emsp;conflictSysUserId||string||
|&emsp;&emsp;conflictThirdAccountId||string||
|&emsp;&emsp;candidateMemberId||string||
|&emsp;&emsp;reviewStatus||string||
|&emsp;&emsp;reviewAction||string||
|&emsp;&emsp;reviewBy||string||
|&emsp;&emsp;reviewTime||string(date-time)||
|&emsp;&emsp;reviewRemark||string||
|&emsp;&emsp;userEmailSendCount||integer(int32)||
|&emsp;&emsp;userEmailLastSendTime||string(date-time)||
|&emsp;&emsp;userEmailLastSendResult||string||
|&emsp;&emsp;adminNoticeSendTime||string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": "",
		"tenantId": 0,
		"shopifySub": "",
		"shopifyCustomerGid": "",
		"customerEmail": "",
		"customerFirstName": "",
		"customerLastName": "",
		"customerPhone": "",
		"conflictSysUserId": "",
		"conflictThirdAccountId": "",
		"candidateMemberId": "",
		"reviewStatus": "",
		"reviewAction": "",
		"reviewBy": "",
		"reviewTime": "",
		"reviewRemark": "",
		"userEmailSendCount": 0,
		"userEmailLastSendTime": "",
		"userEmailLastSendResult": "",
		"adminNoticeSendTime": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify第三方身份绑定审核-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyThirdAccountBindingReview/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_third_account_binding_review:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|review|Shopify第三方身份绑定审核申请|query|true|ShopifyThirdAccountBindingReview|ShopifyThirdAccountBindingReview|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|&emsp;&emsp;tenantId|||false|integer(int32)||
|&emsp;&emsp;shopifySub|||false|string||
|&emsp;&emsp;shopifyCustomerGid|||false|string||
|&emsp;&emsp;customerEmail|||false|string||
|&emsp;&emsp;customerFirstName|||false|string||
|&emsp;&emsp;customerLastName|||false|string||
|&emsp;&emsp;customerPhone|||false|string||
|&emsp;&emsp;conflictSysUserId|||false|string||
|&emsp;&emsp;conflictThirdAccountId|||false|string||
|&emsp;&emsp;candidateMemberId|||false|string||
|&emsp;&emsp;reviewStatus|||false|string||
|&emsp;&emsp;reviewAction|||false|string||
|&emsp;&emsp;reviewBy|||false|string||
|&emsp;&emsp;reviewTime|||false|string(date-time)||
|&emsp;&emsp;reviewRemark|||false|string||
|&emsp;&emsp;userEmailSendCount|||false|integer(int32)||
|&emsp;&emsp;userEmailLastSendTime|||false|string(date-time)||
|&emsp;&emsp;userEmailLastSendResult|||false|string||
|&emsp;&emsp;adminNoticeSendTime|||false|string(date-time)||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyThirdAccountBindingReview|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyThirdAccountBindingReview|IPageShopifyThirdAccountBindingReview|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyThirdAccountBindingReview|
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;createBy||string||
|&emsp;&emsp;&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;&emsp;&emsp;delFlag||string||
|&emsp;&emsp;&emsp;&emsp;tenantId||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shopifySub||string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid||string||
|&emsp;&emsp;&emsp;&emsp;customerEmail||string||
|&emsp;&emsp;&emsp;&emsp;customerFirstName||string||
|&emsp;&emsp;&emsp;&emsp;customerLastName||string||
|&emsp;&emsp;&emsp;&emsp;customerPhone||string||
|&emsp;&emsp;&emsp;&emsp;conflictSysUserId||string||
|&emsp;&emsp;&emsp;&emsp;conflictThirdAccountId||string||
|&emsp;&emsp;&emsp;&emsp;candidateMemberId||string||
|&emsp;&emsp;&emsp;&emsp;reviewStatus||string||
|&emsp;&emsp;&emsp;&emsp;reviewAction||string||
|&emsp;&emsp;&emsp;&emsp;reviewBy||string||
|&emsp;&emsp;&emsp;&emsp;reviewTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;reviewRemark||string||
|&emsp;&emsp;&emsp;&emsp;userEmailSendCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;userEmailLastSendTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;userEmailLastSendResult||string||
|&emsp;&emsp;&emsp;&emsp;adminNoticeSendTime||string(date-time)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": "",
				"tenantId": 0,
				"shopifySub": "",
				"shopifyCustomerGid": "",
				"customerEmail": "",
				"customerFirstName": "",
				"customerLastName": "",
				"customerPhone": "",
				"conflictSysUserId": "",
				"conflictThirdAccountId": "",
				"candidateMemberId": "",
				"reviewStatus": "",
				"reviewAction": "",
				"reviewBy": "",
				"reviewTime": "",
				"reviewRemark": "",
				"userEmailSendCount": 0,
				"userEmailLastSendTime": "",
				"userEmailLastSendResult": "",
				"adminNoticeSendTime": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify客户更新Webhook事件


## 重试Shopify客户更新Webhook事件


**接口地址**:`/yueran/shopify/member/shopifyCustomerWebhookEvent/{id}/retry`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_webhook_event:retry</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户更新Webhook事件-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyCustomerWebhookEvent/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_webhook_event:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCustomerWebhookEvent|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCustomerWebhookEvent|ShopifyCustomerWebhookEvent|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;webhookId|Webhook唯一ID|string||
|&emsp;&emsp;webhookTopic|Webhook主题|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify客户GID|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID|string||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间|string(date-time)||
|&emsp;&emsp;processStatus|处理状态|string||
|&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": "",
		"webhookId": "",
		"webhookTopic": "",
		"shopifyCustomerGid": "",
		"shopifyCustomerId": "",
		"shopifyUpdatedAt": "",
		"processStatus": "",
		"retryCount": 0,
		"nextRetryTime": "",
		"rawWebhookJson": "",
		"lastErrorMessage": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户更新Webhook事件-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyCustomerWebhookEvent/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_customer_webhook_event:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|event|Shopify客户更新Webhook事件|query|true|ShopifyCustomerWebhookEvent|ShopifyCustomerWebhookEvent|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|&emsp;&emsp;webhookId|Webhook唯一ID||false|string||
|&emsp;&emsp;webhookTopic|Webhook主题||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify客户GID||false|string||
|&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID||false|string||
|&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间||false|string(date-time)||
|&emsp;&emsp;processStatus|处理状态||false|string||
|&emsp;&emsp;retryCount|重试次数||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|下次重试时间||false|string(date-time)||
|&emsp;&emsp;rawWebhookJson|Webhook原始报文||false|string||
|&emsp;&emsp;lastErrorMessage|最近错误信息||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyCustomerWebhookEvent|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyCustomerWebhookEvent|IPageShopifyCustomerWebhookEvent|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyCustomerWebhookEvent|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;&emsp;&emsp;webhookId|Webhook唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;webhookTopic|Webhook主题|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify客户GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerId|Shopify客户数字ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyUpdatedAt|Shopify远端更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;processStatus|处理状态|string||
|&emsp;&emsp;&emsp;&emsp;retryCount|重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime|下次重试时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;rawWebhookJson|Webhook原始报文|string||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage|最近错误信息|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": "",
				"webhookId": "",
				"webhookTopic": "",
				"shopifyCustomerGid": "",
				"shopifyCustomerId": "",
				"shopifyUpdatedAt": "",
				"processStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"rawWebhookJson": "",
				"lastErrorMessage": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员消费归档


## 会员消费归档-重试归档


**接口地址**:`/yueran/shopify/member/purchaseArchive/retry`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_purchase_archive:retry</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消费归档-重建归档


**接口地址**:`/yueran/shopify/member/purchaseArchive/rebuild`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_purchase_archive:rebuild</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|startTime||query|false|string(date-time)||
|endTime||query|false|string(date-time)||
|sourceType||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultInteger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|integer(int32)|integer(int32)|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": 0,
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消费归档-详情查询


**接口地址**:`/yueran/shopify/member/purchaseArchive/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_purchase_archive:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消费归档-我的消费记录


**接口地址**:`/yueran/shopify/member/purchaseArchive/myPage`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberPurchaseArchive|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberPurchaseArchive|IPageShopifyMemberPurchaseArchive|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberPurchaseArchive|
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;archiveNo||string||
|&emsp;&emsp;&emsp;&emsp;memberId||string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid||string||
|&emsp;&emsp;&emsp;&emsp;sourceType||string||
|&emsp;&emsp;&emsp;&emsp;sourceId||string||
|&emsp;&emsp;&emsp;&emsp;sourceOrderNo||string||
|&emsp;&emsp;&emsp;&emsp;sourceTransactionHeadId||string||
|&emsp;&emsp;&emsp;&emsp;sourceShopifyOrderGid||string||
|&emsp;&emsp;&emsp;&emsp;reconcileId||string||
|&emsp;&emsp;&emsp;&emsp;orderTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;channel||string||
|&emsp;&emsp;&emsp;&emsp;storeId||string||
|&emsp;&emsp;&emsp;&emsp;storeName||string||
|&emsp;&emsp;&emsp;&emsp;smaregiStoreId||string||
|&emsp;&emsp;&emsp;&emsp;terminalId||string||
|&emsp;&emsp;&emsp;&emsp;currency||string||
|&emsp;&emsp;&emsp;&emsp;originalAmount||number||
|&emsp;&emsp;&emsp;&emsp;discountAmount||number||
|&emsp;&emsp;&emsp;&emsp;paidAmount||number||
|&emsp;&emsp;&emsp;&emsp;refundAmount||number||
|&emsp;&emsp;&emsp;&emsp;netAmount||number||
|&emsp;&emsp;&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;&emsp;&emsp;orderStatus||string||
|&emsp;&emsp;&emsp;&emsp;archiveStatus||string||
|&emsp;&emsp;&emsp;&emsp;processStatus||string||
|&emsp;&emsp;&emsp;&emsp;retryCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage||string||
|&emsp;&emsp;&emsp;&emsp;lastArchiveTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;itemCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;totalQuantity||number||
|&emsp;&emsp;&emsp;&emsp;sourcePayloadVersion||string||
|&emsp;&emsp;&emsp;&emsp;sourceRawJson||string||
|&emsp;&emsp;&emsp;&emsp;createBy||string||
|&emsp;&emsp;&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;&emsp;&emsp;delFlag||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"archiveNo": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"sourceType": "",
				"sourceId": "",
				"sourceOrderNo": "",
				"sourceTransactionHeadId": "",
				"sourceShopifyOrderGid": "",
				"reconcileId": "",
				"orderTime": "",
				"channel": "",
				"storeId": "",
				"storeName": "",
				"smaregiStoreId": "",
				"terminalId": "",
				"currency": "",
				"originalAmount": 0,
				"discountAmount": 0,
				"paidAmount": 0,
				"refundAmount": 0,
				"netAmount": 0,
				"paymentMethod": "",
				"orderStatus": "",
				"archiveStatus": "",
				"processStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"lastErrorMessage": "",
				"lastArchiveTime": "",
				"itemCount": 0,
				"totalQuantity": 0,
				"sourcePayloadVersion": "",
				"sourceRawJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消费归档-我的消费详情


**接口地址**:`/yueran/shopify/member/purchaseArchive/myDetail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMapStringObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员消费归档-分页列表查询


**接口地址**:`/yueran/shopify/member/purchaseArchive/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_purchase_archive:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|archive|会员消费归档|query|true|ShopifyMemberPurchaseArchive|ShopifyMemberPurchaseArchive|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;archiveNo|||false|string||
|&emsp;&emsp;memberId|||false|string||
|&emsp;&emsp;shopifyCustomerGid|||false|string||
|&emsp;&emsp;sourceType|||false|string||
|&emsp;&emsp;sourceId|||false|string||
|&emsp;&emsp;sourceOrderNo|||false|string||
|&emsp;&emsp;sourceTransactionHeadId|||false|string||
|&emsp;&emsp;sourceShopifyOrderGid|||false|string||
|&emsp;&emsp;reconcileId|||false|string||
|&emsp;&emsp;orderTime|||false|string(date-time)||
|&emsp;&emsp;channel|||false|string||
|&emsp;&emsp;storeId|||false|string||
|&emsp;&emsp;storeName|||false|string||
|&emsp;&emsp;smaregiStoreId|||false|string||
|&emsp;&emsp;terminalId|||false|string||
|&emsp;&emsp;currency|||false|string||
|&emsp;&emsp;originalAmount|||false|number||
|&emsp;&emsp;discountAmount|||false|number||
|&emsp;&emsp;paidAmount|||false|number||
|&emsp;&emsp;refundAmount|||false|number||
|&emsp;&emsp;netAmount|||false|number||
|&emsp;&emsp;paymentMethod|||false|string||
|&emsp;&emsp;orderStatus|||false|string||
|&emsp;&emsp;archiveStatus|||false|string||
|&emsp;&emsp;processStatus|||false|string||
|&emsp;&emsp;retryCount|||false|integer(int32)||
|&emsp;&emsp;nextRetryTime|||false|string(date-time)||
|&emsp;&emsp;lastErrorMessage|||false|string||
|&emsp;&emsp;lastArchiveTime|||false|string(date-time)||
|&emsp;&emsp;itemCount|||false|integer(int32)||
|&emsp;&emsp;totalQuantity|||false|number||
|&emsp;&emsp;sourcePayloadVersion|||false|string||
|&emsp;&emsp;sourceRawJson|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|||false|string||
|&emsp;&emsp;delFlag|||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberPurchaseArchive|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberPurchaseArchive|IPageShopifyMemberPurchaseArchive|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberPurchaseArchive|
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;archiveNo||string||
|&emsp;&emsp;&emsp;&emsp;memberId||string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid||string||
|&emsp;&emsp;&emsp;&emsp;sourceType||string||
|&emsp;&emsp;&emsp;&emsp;sourceId||string||
|&emsp;&emsp;&emsp;&emsp;sourceOrderNo||string||
|&emsp;&emsp;&emsp;&emsp;sourceTransactionHeadId||string||
|&emsp;&emsp;&emsp;&emsp;sourceShopifyOrderGid||string||
|&emsp;&emsp;&emsp;&emsp;reconcileId||string||
|&emsp;&emsp;&emsp;&emsp;orderTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;channel||string||
|&emsp;&emsp;&emsp;&emsp;storeId||string||
|&emsp;&emsp;&emsp;&emsp;storeName||string||
|&emsp;&emsp;&emsp;&emsp;smaregiStoreId||string||
|&emsp;&emsp;&emsp;&emsp;terminalId||string||
|&emsp;&emsp;&emsp;&emsp;currency||string||
|&emsp;&emsp;&emsp;&emsp;originalAmount||number||
|&emsp;&emsp;&emsp;&emsp;discountAmount||number||
|&emsp;&emsp;&emsp;&emsp;paidAmount||number||
|&emsp;&emsp;&emsp;&emsp;refundAmount||number||
|&emsp;&emsp;&emsp;&emsp;netAmount||number||
|&emsp;&emsp;&emsp;&emsp;paymentMethod||string||
|&emsp;&emsp;&emsp;&emsp;orderStatus||string||
|&emsp;&emsp;&emsp;&emsp;archiveStatus||string||
|&emsp;&emsp;&emsp;&emsp;processStatus||string||
|&emsp;&emsp;&emsp;&emsp;retryCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;nextRetryTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastErrorMessage||string||
|&emsp;&emsp;&emsp;&emsp;lastArchiveTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;itemCount||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;totalQuantity||number||
|&emsp;&emsp;&emsp;&emsp;sourcePayloadVersion||string||
|&emsp;&emsp;&emsp;&emsp;sourceRawJson||string||
|&emsp;&emsp;&emsp;&emsp;createBy||string||
|&emsp;&emsp;&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy||string||
|&emsp;&emsp;&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode||string||
|&emsp;&emsp;&emsp;&emsp;delFlag||string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"archiveNo": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"sourceType": "",
				"sourceId": "",
				"sourceOrderNo": "",
				"sourceTransactionHeadId": "",
				"sourceShopifyOrderGid": "",
				"reconcileId": "",
				"orderTime": "",
				"channel": "",
				"storeId": "",
				"storeName": "",
				"smaregiStoreId": "",
				"terminalId": "",
				"currency": "",
				"originalAmount": 0,
				"discountAmount": 0,
				"paidAmount": 0,
				"refundAmount": 0,
				"netAmount": 0,
				"paymentMethod": "",
				"orderStatus": "",
				"archiveStatus": "",
				"processStatus": "",
				"retryCount": 0,
				"nextRetryTime": "",
				"lastErrorMessage": "",
				"lastArchiveTime": "",
				"itemCount": 0,
				"totalQuantity": 0,
				"sourcePayloadVersion": "",
				"sourceRawJson": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify图片文件


## 上传正式图片到tokoyz-images


**接口地址**:`/yueran/shopify/image/upload`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|图片文件|query|true|file||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyImageFileVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyImageFileVO|ShopifyImageFileVO|
|&emsp;&emsp;bucketName|MinIO桶名称|string||
|&emsp;&emsp;objectName|MinIO对象路径|string||
|&emsp;&emsp;url|图片访问地址|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;temp|是否临时文件|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"bucketName": "",
		"objectName": "",
		"url": "",
		"originalFilename": "",
		"temp": true
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 上传临时图片到tokoyz-images-temp


**接口地址**:`/yueran/shopify/image/uploadTemp`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|图片文件|query|true|file||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyImageFileVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyImageFileVO|ShopifyImageFileVO|
|&emsp;&emsp;bucketName|MinIO桶名称|string||
|&emsp;&emsp;objectName|MinIO对象路径|string||
|&emsp;&emsp;url|图片访问地址|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;temp|是否临时文件|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"bucketName": "",
		"objectName": "",
		"url": "",
		"originalFilename": "",
		"temp": true
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 提交临时图片，复制到tokoyz-images并删除tokoyz-images-temp原图


**接口地址**:`/yueran/shopify/image/confirmTemp`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|objectName|临时图片对象路径，示例：images/temp/a.png|query|false|string||
|url|临时图片访问地址；未传objectName时可传url|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyImageFileVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyImageFileVO|ShopifyImageFileVO|
|&emsp;&emsp;bucketName|MinIO桶名称|string||
|&emsp;&emsp;objectName|MinIO对象路径|string||
|&emsp;&emsp;url|图片访问地址|string||
|&emsp;&emsp;originalFilename|原始文件名|string||
|&emsp;&emsp;temp|是否临时文件|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"bucketName": "",
		"objectName": "",
		"url": "",
		"originalFilename": "",
		"temp": true
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify客户


## Shopify首次登录账号资料更新


**接口地址**:`/yueran/shopify/customer/completeFirstLoginProfile`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "username": "",
  "password": "",
  "confirmpassword": "",
  "realname": "",
  "avatar": "",
  "sex": 0,
  "email": "",
  "phone": "",
  "birthday": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyFirstLoginProfileUpdateParam|Shopify首次登录账号资料更新参数|body|true|ShopifyFirstLoginProfileUpdateParam|ShopifyFirstLoginProfileUpdateParam|
|&emsp;&emsp;username|账号/用户名，仅Shopify首次注册登录后允许修改一次||false|string||
|&emsp;&emsp;password|新密码||false|string||
|&emsp;&emsp;confirmpassword|确认新密码||false|string||
|&emsp;&emsp;realname|姓名||false|string||
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;sex|性别||false|integer(int32)||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;phone|手机号||false|string||
|&emsp;&emsp;birthday|生日||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 判断当前用户是否为Shopify账号


**接口地址**:`/yueran/shopify/customer/isShopifyAccount`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultBoolean|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|boolean||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": true,
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 获取当前登录Shopify客户


**接口地址**:`/yueran/shopify/customer/current`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyCurrentCustomerVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyCurrentCustomerVO|ShopifyCurrentCustomerVO|
|&emsp;&emsp;sysUserId|Jeecg用户ID|string||
|&emsp;&emsp;username|Jeecg账号|string||
|&emsp;&emsp;realname|Jeecg姓名|string||
|&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;sex|性别|integer(int32)||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;birthday|生日|string(date-time)||
|&emsp;&emsp;shopifySub|Shopify Customer Account sub|string||
|&emsp;&emsp;thirdUserId|第三方账号标识|string||
|&emsp;&emsp;customerId|Shopify Admin Customer GID|string||
|&emsp;&emsp;customerName|客户名称|string||
|&emsp;&emsp;customerFirstName|Shopify客户名（first name）|string||
|&emsp;&emsp;customerLastName|Shopify客户姓（last name）|string||
|&emsp;&emsp;customerEmail|客户邮箱|string||
|&emsp;&emsp;matched|是否已匹配到Shopify Admin客户|boolean||
|&emsp;&emsp;firstLoginProfileRequired|是否需要完成Shopify首次登录账号资料|boolean||
|&emsp;&emsp;memberId|本地会员ID|string||
|&emsp;&emsp;memberCode|本地会员码|string||
|&emsp;&emsp;memberInitialized|是否已初始化本地会员|boolean||
|&emsp;&emsp;memberLevelCode|当前长期会员等级编码|string||
|&emsp;&emsp;memberLevelName|当前长期会员等级名称|string||
|&emsp;&emsp;nextLevelName|下一长期会员等级名称；已达到最高等级时为空|string||
|&emsp;&emsp;nextLevelMinCumulativeAmount|下一长期会员等级累计消费门槛；已达到最高等级时为空|number||
|&emsp;&emsp;cumulativeConsumptionAmount|全部历史有效累计消费金额|number||
|&emsp;&emsp;pointYear|当前年度积分账户年度|integer(int32)||
|&emsp;&emsp;availablePoints|当前年度可用积分|integer(int32)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"sysUserId": "",
		"username": "",
		"realname": "",
		"avatar": "",
		"sex": 0,
		"phone": "",
		"birthday": "",
		"shopifySub": "",
		"thirdUserId": "",
		"customerId": "",
		"customerName": "",
		"customerFirstName": "",
		"customerLastName": "",
		"customerEmail": "",
		"matched": true,
		"firstLoginProfileRequired": true,
		"memberId": "",
		"memberCode": "",
		"memberInitialized": true,
		"memberLevelCode": "",
		"memberLevelName": "",
		"nextLevelName": "",
		"nextLevelMinCumulativeAmount": 0,
		"cumulativeConsumptionAmount": 0,
		"pointYear": 0,
		"availablePoints": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify账号注销


## Shopify账号注销申请-重试


**接口地址**:`/yueran/shopify/accountDeletion/retry`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_account_deletion_request:retry</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|注销申请ID|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionRequest|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionRequest|ShopifyAccountDeletionRequest|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除标识|integer(int32)||
|&emsp;&emsp;requestNo|注销申请编号|string||
|&emsp;&emsp;sysUserId|Jeecg系统用户ID|string||
|&emsp;&emsp;username|注销时的用户账号，默认与Shopify客户邮箱一致|string||
|&emsp;&emsp;tenantId|租户ID|integer(int32)||
|&emsp;&emsp;shopifySub|Shopify客户sub|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify客户GID|string||
|&emsp;&emsp;memberId|本地会员ID|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi远程会员ID|string||
|&emsp;&emsp;smaregiRemoteStatus|Smaregi远程处理状态|string||
|&emsp;&emsp;smaregiRemoteError|Smaregi远程处理错误|string||
|&emsp;&emsp;smaregiRemoteCompletedTime|Smaregi远程处理完成时间|string(date-time)||
|&emsp;&emsp;remoteStatus|Shopify远程处理状态|string||
|&emsp;&emsp;remoteStrategy|Shopify远程注销策略|string||
|&emsp;&emsp;remoteOrderCount|Shopify客户订单数量|integer(int32)||
|&emsp;&emsp;remoteStep|Shopify远程处理步骤|string||
|&emsp;&emsp;remoteAnonymizedEmail|虚拟化后的Shopify客户邮箱|string||
|&emsp;&emsp;remoteCompletedTime|Shopify远程处理完成时间|string(date-time)||
|&emsp;&emsp;remoteError|Shopify远程处理错误|string||
|&emsp;&emsp;status|申请处理状态|string||
|&emsp;&emsp;progress|清理进度百分比|integer(int32)||
|&emsp;&emsp;currentHandler|当前处理器标识|string||
|&emsp;&emsp;retryCount|已重试次数|integer(int32)||
|&emsp;&emsp;lastError|最近一次失败原因|string||
|&emsp;&emsp;requestedTime|用户提交申请时间|string(date-time)||
|&emsp;&emsp;startedTime|开始异步处理时间|string(date-time)||
|&emsp;&emsp;completedTime|完成处理时间|string(date-time)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"delFlag": 0,
		"requestNo": "",
		"sysUserId": "",
		"username": "",
		"tenantId": 0,
		"shopifySub": "",
		"shopifyCustomerGid": "",
		"memberId": "",
		"smaregiCustomerId": "",
		"smaregiRemoteStatus": "",
		"smaregiRemoteError": "",
		"smaregiRemoteCompletedTime": "",
		"remoteStatus": "",
		"remoteStrategy": "",
		"remoteOrderCount": 0,
		"remoteStep": "",
		"remoteAnonymizedEmail": "",
		"remoteCompletedTime": "",
		"remoteError": "",
		"status": "",
		"progress": 0,
		"currentHandler": "",
		"retryCount": 0,
		"lastError": "",
		"requestedTime": "",
		"startedTime": "",
		"completedTime": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 提交Shopify账号注销申请


**接口地址**:`/yueran/shopify/accountDeletion/request`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_account_deletion_request:request</p>



**请求示例**:


```javascript
{
  "verificationCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAccountDeletionVerifyParam|ShopifyAccountDeletionVerifyParam|body|true|ShopifyAccountDeletionVerifyParam|ShopifyAccountDeletionVerifyParam|
|&emsp;&emsp;verificationCode|邮箱验证码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionStatusVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionStatusVO|ShopifyAccountDeletionStatusVO|
|&emsp;&emsp;requestNo||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;progress||integer(int32)||
|&emsp;&emsp;currentHandler||string||
|&emsp;&emsp;lastError||string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestNo": "",
		"status": "",
		"progress": 0,
		"currentHandler": "",
		"lastError": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 发送Shopify账号注销邮箱验证码


**接口地址**:`/yueran/shopify/accountDeletion/emailCode`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "captchaTicket": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAccountDeletionCaptchaTicketVO|ShopifyAccountDeletionCaptchaTicketVO|body|true|ShopifyAccountDeletionCaptchaTicketVO|ShopifyAccountDeletionCaptchaTicketVO|
|&emsp;&emsp;captchaTicket|一次性验证码票据||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionEmailCodeVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionEmailCodeVO|ShopifyAccountDeletionEmailCodeVO|
|&emsp;&emsp;maskedEmail|脱敏后的收件邮箱|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"maskedEmail": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 校验Shopify账号注销图形验证码


**接口地址**:`/yueran/shopify/accountDeletion/captcha/verify`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "captchaId": "",
  "captcha": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAccountDeletionCaptchaVerifyParam|ShopifyAccountDeletionCaptchaVerifyParam|body|true|ShopifyAccountDeletionCaptchaVerifyParam|ShopifyAccountDeletionCaptchaVerifyParam|
|&emsp;&emsp;captchaId|验证码挑战标识||false|string||
|&emsp;&emsp;captcha|用户输入的图形验证码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionCaptchaTicketVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionCaptchaTicketVO|ShopifyAccountDeletionCaptchaTicketVO|
|&emsp;&emsp;captchaTicket|一次性验证码票据|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"captchaTicket": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 查询Shopify账号注销状态


**接口地址**:`/yueran/shopify/accountDeletion/status`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionStatusVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionStatusVO|ShopifyAccountDeletionStatusVO|
|&emsp;&emsp;requestNo||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;progress||integer(int32)||
|&emsp;&emsp;currentHandler||string||
|&emsp;&emsp;lastError||string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"requestNo": "",
		"status": "",
		"progress": 0,
		"currentHandler": "",
		"lastError": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify账号注销申请-分页列表查询


**接口地址**:`/yueran/shopify/accountDeletion/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_account_deletion_request:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyAccountDeletionRequest|Shopify账号注销申请|query|true|ShopifyAccountDeletionRequest|ShopifyAccountDeletionRequest|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;delFlag|逻辑删除标识||false|integer(int32)||
|&emsp;&emsp;requestNo|注销申请编号||false|string||
|&emsp;&emsp;sysUserId|Jeecg系统用户ID||false|string||
|&emsp;&emsp;username|注销时的用户账号，默认与Shopify客户邮箱一致||false|string||
|&emsp;&emsp;tenantId|租户ID||false|integer(int32)||
|&emsp;&emsp;shopifySub|Shopify客户sub||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify客户GID||false|string||
|&emsp;&emsp;memberId|本地会员ID||false|string||
|&emsp;&emsp;smaregiCustomerId|Smaregi远程会员ID||false|string||
|&emsp;&emsp;smaregiRemoteStatus|Smaregi远程处理状态||false|string||
|&emsp;&emsp;smaregiRemoteError|Smaregi远程处理错误||false|string||
|&emsp;&emsp;smaregiRemoteCompletedTime|Smaregi远程处理完成时间||false|string(date-time)||
|&emsp;&emsp;remoteStatus|Shopify远程处理状态||false|string||
|&emsp;&emsp;remoteStrategy|Shopify远程注销策略||false|string||
|&emsp;&emsp;remoteOrderCount|Shopify客户订单数量||false|integer(int32)||
|&emsp;&emsp;remoteStep|Shopify远程处理步骤||false|string||
|&emsp;&emsp;remoteAnonymizedEmail|虚拟化后的Shopify客户邮箱||false|string||
|&emsp;&emsp;remoteCompletedTime|Shopify远程处理完成时间||false|string(date-time)||
|&emsp;&emsp;remoteError|Shopify远程处理错误||false|string||
|&emsp;&emsp;status|申请处理状态||false|string||
|&emsp;&emsp;progress|清理进度百分比||false|integer(int32)||
|&emsp;&emsp;currentHandler|当前处理器标识||false|string||
|&emsp;&emsp;retryCount|已重试次数||false|integer(int32)||
|&emsp;&emsp;lastError|最近一次失败原因||false|string||
|&emsp;&emsp;requestedTime|用户提交申请时间||false|string(date-time)||
|&emsp;&emsp;startedTime|开始异步处理时间||false|string(date-time)||
|&emsp;&emsp;completedTime|完成处理时间||false|string(date-time)||
|pageNo|页码，从1开始|query|false|integer(int32)||
|pageSize|每页条数，默认10|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyAccountDeletionRequest|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyAccountDeletionRequest|IPageShopifyAccountDeletionRequest|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyAccountDeletionRequest|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;delFlag|逻辑删除标识|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;requestNo|注销申请编号|string||
|&emsp;&emsp;&emsp;&emsp;sysUserId|Jeecg系统用户ID|string||
|&emsp;&emsp;&emsp;&emsp;username|注销时的用户账号，默认与Shopify客户邮箱一致|string||
|&emsp;&emsp;&emsp;&emsp;tenantId|租户ID|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shopifySub|Shopify客户sub|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify客户GID|string||
|&emsp;&emsp;&emsp;&emsp;memberId|本地会员ID|string||
|&emsp;&emsp;&emsp;&emsp;smaregiCustomerId|Smaregi远程会员ID|string||
|&emsp;&emsp;&emsp;&emsp;smaregiRemoteStatus|Smaregi远程处理状态|string||
|&emsp;&emsp;&emsp;&emsp;smaregiRemoteError|Smaregi远程处理错误|string||
|&emsp;&emsp;&emsp;&emsp;smaregiRemoteCompletedTime|Smaregi远程处理完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;remoteStatus|Shopify远程处理状态|string||
|&emsp;&emsp;&emsp;&emsp;remoteStrategy|Shopify远程注销策略|string||
|&emsp;&emsp;&emsp;&emsp;remoteOrderCount|Shopify客户订单数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remoteStep|Shopify远程处理步骤|string||
|&emsp;&emsp;&emsp;&emsp;remoteAnonymizedEmail|虚拟化后的Shopify客户邮箱|string||
|&emsp;&emsp;&emsp;&emsp;remoteCompletedTime|Shopify远程处理完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;remoteError|Shopify远程处理错误|string||
|&emsp;&emsp;&emsp;&emsp;status|申请处理状态|string||
|&emsp;&emsp;&emsp;&emsp;progress|清理进度百分比|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;currentHandler|当前处理器标识|string||
|&emsp;&emsp;&emsp;&emsp;retryCount|已重试次数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;lastError|最近一次失败原因|string||
|&emsp;&emsp;&emsp;&emsp;requestedTime|用户提交申请时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;startedTime|开始异步处理时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedTime|完成处理时间|string(date-time)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"delFlag": 0,
				"requestNo": "",
				"sysUserId": "",
				"username": "",
				"tenantId": 0,
				"shopifySub": "",
				"shopifyCustomerGid": "",
				"memberId": "",
				"smaregiCustomerId": "",
				"smaregiRemoteStatus": "",
				"smaregiRemoteError": "",
				"smaregiRemoteCompletedTime": "",
				"remoteStatus": "",
				"remoteStrategy": "",
				"remoteOrderCount": 0,
				"remoteStep": "",
				"remoteAnonymizedEmail": "",
				"remoteCompletedTime": "",
				"remoteError": "",
				"status": "",
				"progress": 0,
				"currentHandler": "",
				"retryCount": 0,
				"lastError": "",
				"requestedTime": "",
				"startedTime": "",
				"completedTime": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 获取Shopify账号注销图形验证码


**接口地址**:`/yueran/shopify/accountDeletion/captcha`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyAccountDeletionCaptchaVO|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyAccountDeletionCaptchaVO|ShopifyAccountDeletionCaptchaVO|
|&emsp;&emsp;captchaId|验证码挑战标识|string||
|&emsp;&emsp;image|Base64编码的验证码图片|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"captchaId": "",
		"image": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# Shopify中转接口


## Shopify商品列表


**接口地址**:`/yueran/shopify/proxy/products`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|first|每页返回商品数量，默认20，最大值按 Shopify 接口限制处理|query|false|integer(int32)||
|after|Shopify 分页游标，首次查询不传，加载更多时传上一次返回的 endCursor|query|false|string||
|query|Shopify 商品搜索关键字或查询语句，可用于按标题、厂商、标签等组合搜索|query|false|string||
|filters|商品筛选条件 JSON 字符串，格式示例：[{"key":"vendor","value":"品牌名"}]|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 根据标签查询Shopify商品


**接口地址**:`/yueran/shopify/proxy/products/byTag`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tag|Shopify 商品标签|query|true|string||
|first|每页返回商品数量，默认20|query|false|integer(int32)||
|after|Shopify 分页游标，首次查询不传，加载更多时传上一次返回的 endCursor|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 根据名称查询Shopify商品


**接口地址**:`/yueran/shopify/proxy/products/byName`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|name|商品名称关键字|query|true|string||
|first|每页返回商品数量，默认20|query|false|integer(int32)||
|after|Shopify 分页游标，首次查询不传，加载更多时传上一次返回的 endCursor|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品筛选候选值


**接口地址**:`/yueran/shopify/proxy/product-filter-options`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|filterKey|筛选条件 key，来自 product-filter-definitions 接口，例如 vendor、tag、productType、category|query|true|string||
|keyword|筛选值关键字，后端会在完整候选集合上过滤|query|false|string||
|first|兼容旧分页参数；当前筛选值由后端一次聚合全量返回，可不传|query|false|integer(int32)||
|after|兼容旧分页参数；当前筛选值由后端一次聚合全量返回，可不传|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify商品筛选条件定义


**接口地址**:`/yueran/shopify/proxy/product-filter-definitions`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## Shopify客户列表


**接口地址**:`/yueran/shopify/proxy/customers`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|first|每页返回客户数量，默认20|query|false|integer(int32)||
|after|Shopify 分页游标，首次查询不传，加载更多时传上一次返回的 endCursor|query|false|string||
|query|客户搜索关键字，可按邮箱、姓名等 Shopify 支持的字段查询|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultJSONObject|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|ResultJSONObject_result|ResultJSONObject_result|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"empty": true,
		"innerMap": {}
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


# 会员长期等级账户


## 会员长期等级账户-同步远程


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelAccount/syncRemote`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_account:syncRemote</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultString|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": "",
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员长期等级账户-全量同步远程


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelAccount/syncAllRemote`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_account:syncAllRemote</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultInteger|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|integer(int32)|integer(int32)|
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": 0,
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员长期等级账户-通过id查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelAccount/queryById`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_account:queryById</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultShopifyMemberLevelAccount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||ShopifyMemberLevelAccount|ShopifyMemberLevelAccount|
|&emsp;&emsp;id|主键|string||
|&emsp;&emsp;memberId|会员主档ID|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;currentLevelId|当前长期会员等级ID|string||
|&emsp;&emsp;currentLevelCode|当前长期会员等级编码|string||
|&emsp;&emsp;currentLevelName|当前长期会员等级名称|string||
|&emsp;&emsp;cumulativeConsumptionAmount|全部历史有效累计消费金额|number||
|&emsp;&emsp;offlineConsumptionAmount|线下历史有效累计消费金额|number||
|&emsp;&emsp;onlineConsumptionAmount|线上历史有效累计消费金额|number||
|&emsp;&emsp;lastRecalculateTime|最近一次重算时间|string(date-time)||
|&emsp;&emsp;levelChangedTime|最近一次等级变化时间|string(date-time)||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;shopifyMetaobjectHandle|Shopify会员等级元对象Handle|string||
|&emsp;&emsp;shopifyMetaobjectGid|Shopify会员等级元对象GID|string||
|&emsp;&emsp;shopifySyncStatus|Shopify远程同步状态|string||
|&emsp;&emsp;lastSyncTime|最近一次Shopify远程同步时间|string(date-time)||
|&emsp;&emsp;lastSyncError|最近一次Shopify远程同步错误|string||
|&emsp;&emsp;version|乐观锁版本号|integer(int32)||
|&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;delFlag|删除状态|string||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"id": "",
		"memberId": "",
		"shopifyCustomerGid": "",
		"currentLevelId": "",
		"currentLevelCode": "",
		"currentLevelName": "",
		"cumulativeConsumptionAmount": 0,
		"offlineConsumptionAmount": 0,
		"onlineConsumptionAmount": 0,
		"lastRecalculateTime": "",
		"levelChangedTime": "",
		"status": "",
		"shopifyMetaobjectHandle": "",
		"shopifyMetaobjectGid": "",
		"shopifySyncStatus": "",
		"lastSyncTime": "",
		"lastSyncError": "",
		"version": 0,
		"createBy": "",
		"createTime": "",
		"updateBy": "",
		"updateTime": "",
		"sysOrgCode": "",
		"delFlag": ""
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```


## 会员长期等级账户-分页列表查询


**接口地址**:`/yueran/shopify/member/shopifyMemberLevelAccount/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>权限标识：shopify:shopify_member_level_account:list</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopifyMemberLevelAccount|会员长期等级账户|query|true|ShopifyMemberLevelAccount|ShopifyMemberLevelAccount|
|&emsp;&emsp;id|主键||false|string||
|&emsp;&emsp;memberId|会员主档ID||false|string||
|&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID||false|string||
|&emsp;&emsp;currentLevelId|当前长期会员等级ID||false|string||
|&emsp;&emsp;currentLevelCode|当前长期会员等级编码||false|string||
|&emsp;&emsp;currentLevelName|当前长期会员等级名称||false|string||
|&emsp;&emsp;cumulativeConsumptionAmount|全部历史有效累计消费金额||false|number||
|&emsp;&emsp;offlineConsumptionAmount|线下历史有效累计消费金额||false|number||
|&emsp;&emsp;onlineConsumptionAmount|线上历史有效累计消费金额||false|number||
|&emsp;&emsp;lastRecalculateTime|最近一次重算时间||false|string(date-time)||
|&emsp;&emsp;levelChangedTime|最近一次等级变化时间||false|string(date-time)||
|&emsp;&emsp;status|账户状态||false|string||
|&emsp;&emsp;shopifyMetaobjectHandle|Shopify会员等级元对象Handle||false|string||
|&emsp;&emsp;shopifyMetaobjectGid|Shopify会员等级元对象GID||false|string||
|&emsp;&emsp;shopifySyncStatus|Shopify远程同步状态||false|string||
|&emsp;&emsp;lastSyncTime|最近一次Shopify远程同步时间||false|string(date-time)||
|&emsp;&emsp;lastSyncError|最近一次Shopify远程同步错误||false|string||
|&emsp;&emsp;version|乐观锁版本号||false|integer(int32)||
|&emsp;&emsp;createBy|创建人||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;updateBy|更新人||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;sysOrgCode|所属部门||false|string||
|&emsp;&emsp;delFlag|删除状态||false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultIPageShopifyMemberLevelAccount|
|401|Unauthorized|ResultObject|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result||IPageShopifyMemberLevelAccount|IPageShopifyMemberLevelAccount|
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;records||array|ShopifyMemberLevelAccount|
|&emsp;&emsp;&emsp;&emsp;id|主键|string||
|&emsp;&emsp;&emsp;&emsp;memberId|会员主档ID|string||
|&emsp;&emsp;&emsp;&emsp;shopifyCustomerGid|Shopify Customer GID|string||
|&emsp;&emsp;&emsp;&emsp;currentLevelId|当前长期会员等级ID|string||
|&emsp;&emsp;&emsp;&emsp;currentLevelCode|当前长期会员等级编码|string||
|&emsp;&emsp;&emsp;&emsp;currentLevelName|当前长期会员等级名称|string||
|&emsp;&emsp;&emsp;&emsp;cumulativeConsumptionAmount|全部历史有效累计消费金额|number||
|&emsp;&emsp;&emsp;&emsp;offlineConsumptionAmount|线下历史有效累计消费金额|number||
|&emsp;&emsp;&emsp;&emsp;onlineConsumptionAmount|线上历史有效累计消费金额|number||
|&emsp;&emsp;&emsp;&emsp;lastRecalculateTime|最近一次重算时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;levelChangedTime|最近一次等级变化时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;shopifyMetaobjectHandle|Shopify会员等级元对象Handle|string||
|&emsp;&emsp;&emsp;&emsp;shopifyMetaobjectGid|Shopify会员等级元对象GID|string||
|&emsp;&emsp;&emsp;&emsp;shopifySyncStatus|Shopify远程同步状态|string||
|&emsp;&emsp;&emsp;&emsp;lastSyncTime|最近一次Shopify远程同步时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastSyncError|最近一次Shopify远程同步错误|string||
|&emsp;&emsp;&emsp;&emsp;version|乐观锁版本号|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createBy|创建人|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新人|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;sysOrgCode|所属部门|string||
|&emsp;&emsp;&emsp;&emsp;delFlag|删除状态|string||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;pages||integer(int64)||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {
		"current": 0,
		"size": 0,
		"records": [
			{
				"id": "",
				"memberId": "",
				"shopifyCustomerGid": "",
				"currentLevelId": "",
				"currentLevelCode": "",
				"currentLevelName": "",
				"cumulativeConsumptionAmount": 0,
				"offlineConsumptionAmount": 0,
				"onlineConsumptionAmount": 0,
				"lastRecalculateTime": "",
				"levelChangedTime": "",
				"status": "",
				"shopifyMetaobjectHandle": "",
				"shopifyMetaobjectGid": "",
				"shopifySyncStatus": "",
				"lastSyncTime": "",
				"lastSyncError": "",
				"version": 0,
				"createBy": "",
				"createTime": "",
				"updateBy": "",
				"updateTime": "",
				"sysOrgCode": "",
				"delFlag": ""
			}
		],
		"total": 0,
		"pages": 0
	},
	"timestamp": 0
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success|成功标志|boolean||
|message|返回处理消息|string||
|code|返回代码|integer(int32)|integer(int32)|
|result|返回数据对象|object||
|timestamp|时间戳|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"success": true,
	"message": "",
	"code": 0,
	"result": {},
	"timestamp": 0
}
```