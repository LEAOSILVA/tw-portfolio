---
sidebar_position: 9
---

# Use case

> **Context**
>
>This use case demonstrates a real-world scenario in systems integrations for payment management. It provides clear guidance that helps customers understand the process and apply it effectively.

## Payment management

In the context of an e-commerce purchase, consider an integration flow that manages the payment processing through the following steps:

1. **Order reception**
1. **Purchase information retrieval** 
1. **Data transformation** 
1. **Payment processing** 
1. **Status update** 
1. **Final response**

### Diagram

![Diagram](./img/https-diagrama.gif)

### Description of the steps

Check the description of each step of the integration flow:

#### Order reception

- The flow begins when an order is received with an identification code (ClientID).
- The `POST` request is forwarded to the `/simple` endpoint.
- Then, the response to the request is logged.

```yaml
- from:
    uri: rest:post:/simple
- setProperty:
    expression:
      simple:
        expression: ${header[ClientID]}   
    name: "clientID"
- log:
    message: ${exchangeProperty.clientID}
----
```

#### Purchase information retrieval

- With the ClientID, the system queries an internal service for more details.
- The `GET` request is made to the shopping endpoint, passing the ClientID as a parameter.
- Then, the response to the request is logged.

```yaml
- toD:
    uri: https://{{URL}}/internal/purchases
    parameters:
        bridgeEndpoint: true
        httpMethod: GET
        ClientID: '${exchangeProperty.clientID}'
- log:
    message: 'PURCHASES - ${body}'
```

#### Data transformation

- The information is then processed and formatted using a transformation tool, JSONata. 
- The resulting body is logged for verification.

```yaml
- to:
    uri: jsonata:classpath:extractTotal.jsonata
    parameters:
       inputType: JsonString
- log:
    message: 'TRANSFORMATION - ${body}'
```

:::important[IMPORTANT] 
* The instructions for creating a new JSON object are in the `extractTotal.jsonata` file, available in the *Resources* folder.
* The `extractTotal.jsonata` file is referenced in the flow script along with the classpath (snippet above).
* See below the content of the `extractTotal.jsonata` file:

```yaml 
{
   "Account": Client.Account,
   "TypePayment": Client.TypePayment,
   "Value": $sum(Client.Orders.Product.(Price * Quantity))
}
```
::: 

:::note[NOTE] 
* See how to create a file in the **Resources** folder.
:::

#### Payment processing

- The data is then sent to an external service to make the payment.
- The transformed message body is converted to JSON format.
- The `Content-Type` header (set to application/json) and the `Authorization` header (with an example token) are configured. 
- A `POST` request is then made to the payment endpoint.
- The response is logged.

```yaml 
- marshal:
    json:
       library: Jackson
- setHeader:
    expression:
      constant:
        expression: application/json
    name: Content-Type
- setHeader:
    expression:
      constant:
        expression: 'Bearer AuthorizationTokenExample'
    name: Authorization
- toD:
    uri: https://{{URL}}/external/payment
    parameters:
        bridgeEndpoint: true
        httpMethod: POST
- log:
    message: 'PAYMENT - ${body}'
```

#### Status update

- After the payment is processed, the result is combined with the ClientID and transformed again to update the payment status in an internal service. 

- The adjusted message body is converted to JSON format and sent in a `POST` request to the status endpoint.

```yaml 
- setBody:
    expression:
      simple:
        expression: '{"ClientID": "${exchangeProperty.clientID}", "status":${body}}'
- log:
    message: 'CONCATENATION - ${body}'
- to:
    uri: jsonata:classpath:statusPayload.jsonata
    parameters:
       inputType: JsonString
- log:
    message: 'STATUS PAYLOAD - ${body}'
- marshal:
    json:
       library: Jackson
- setHeader:
    expression:
      constant:
        expression: application/json
    name: Content-Type
- toD:
    uri: https://{{URL}}/internal/status
    parameters:
        bridgeEndpoint: true
        httpMethod: POST
```

:::important[IMPORTANT] 
* The instructions for creating a new JSON object are in the `statusPayload.jsonata` file, available in the *Resources* folder.
* The `statusPayload.jsonata` file is referenced in the flow script along with the classpath (snippet above).
* See below the content of the `statusPayload.jsonata` file:

```yaml
{
    "ClientID": ClientID,
    "Status":status.status
}
```
:::

:::note[NOTE] 
* See how to create a file in the Resources folder.
:::

#### Final response

- The system sends a final confirmation to indicate that the payment was successful. 
- The HTTP response code is set to `200`, and the response body confirms the success of the operation. 
- Additionally, the content of the final response is logged.

```yaml   
- setHeader:
    expression:
      constant:
        expression: "200"
    name: CamelHttpResponseCode
- setBody:
    expression:
      simple:
        expression: '{"success": "true"}'
- log:
    message: ${body}
```

### Source Code

Consult below the complete script for the integration flow:

```yaml
- from:
    uri: rest:post:/simple  # Defines a REST endpoint that receives POST requests at the /simple route
    steps:
       - setProperty:
           expression:
             simple:
               expression: ${header[ClientID]}  # Stores the value of the 'ClientID' header in an exchange property called 'clientID'
           name: "clientID"
       - log:
          message: ${exchangeProperty.clientID}  # Logs the value of the 'clientID' property for debugging
       - toD:
          uri: https://{{URL}}/internal/purchases  # Makes a GET request to the internal purchases endpoint
          parameters:
              bridgeEndpoint: true
              httpMethod: GET
              ClientID: '${exchangeProperty.clientID}'  # Passes the 'clientID' as a parameter in the request
       - log:
          message: 'PURCHASES - ${body}'  # Logs the response from the purchases request
       - to:
            uri: jsonata:classpath:extractTotal.jsonata  # Processes the response using a JSONata transformation to extract the total
            parameters:
               inputType: JsonString
       - log:
            message: 'TRANSFORMATION - ${body}'  # Logs the result of the JSONata transformation
       - marshal:
            json:
               library: Jackson  # Converts the message body to JSON using Jackson
       - setHeader:
            expression:
              constant:
                expression: application/json  # Sets the 'Content-Type' header to 'application/json'
            name: Content-Type
       - setHeader:
            expression:
              constant:
                expression: 'Bearer AuthorizationTokenExample'  # Sets the 'Authorization' header with an example token
            name: Authorization
       - toD:
          uri: https://{{URL}}/external/payment  # Sends data to the external payment service via POST
          parameters:
              bridgeEndpoint: true
              httpMethod: POST
       - log:
          message: 'PAYMENT - ${body}'  # Logs the response from the payment service
       - setBody:
          expression:
            simple:
              expression: '{"ClientID": "${exchangeProperty.clientID}", "status":${body}}'  # Builds a new JSON body with 'clientID' and the payment status
       - log:
          message: 'CONCATENATION - ${body}'  # Logs the message body after concatenation
       - to:
            uri: jsonata:classpath:statusPayload.jsonata  # Applies a JSONata transformation to format the status payload
            parameters:
               inputType: JsonString
       - log:
            message: 'STATUS PAYLOAD - ${body}'  # Logs the generated status payload
       - marshal:
            json:
               library: Jackson  # Converts back to JSON
       - setHeader:
            expression:
              constant:
                expression: application/json  # Sets the 'Content-Type' header to 'application/json' again
            name: Content-Type
       - toD:
          uri: https://{{URL}}/internal/status  # Sends the processed status to an internal service
          parameters:
              bridgeEndpoint: true
              httpMethod: POST
       - setHeader:
          expression:
            constant:
                expression: "200"  # Sets the HTTP response code to 200 (OK)
          name: CamelHttpResponseCode
       - setBody:
          expression:
            simple:
              expression: '{"success": "true"}'  # Sets the final API response indicating success
       - log:
          message: ${body}  # Logs the final response
```