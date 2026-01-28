---
sidebar_position: 7
---

# Script

> **Context**
>
>The excerpt below comes from a training session that walks users through the creation of an integration flow, guiding them step by step from start to finish. It includes detailed configurations for each step, along with the corresponding logs and traces.
>
> For clarity, the flow steps are summarized below. We will focus on **Step 5: Data transformation with JSONata**.

1. **Order received with a REST trigger**  
   The flow starts with a POST request. The request includes a client identification code (`ClientID`).  

2. **Information retrieval**  
   The system uses the `ClientID` to fetch additional order details from an internal purchasing endpoint.  

3. **Data transformation with JSONata**  
   A **JSONata** expression restructures the data and formats it for the next step.  

4. **Payment processing via an external endpoint**  
   The system sends the payment request to an external endpoint and processes the response.  

5. **Data transformation with JSONata**  
   JSONata restructures the returned data again, preparing it for the final steps.  

6. **Status update and confirmation**  
   The system updates the order status in an internal endpoint. It also receives and records the payment confirmation.  

## Data transformation with JSONata

>**Structure & Objectives**
>
>- Demonstrate how to add and configure JSONata
>- Check logs and traces

Hi, everyone!  
In this step, we will perform another data transformation using JSONata.

### Body transformation with JSONata

We will add a **SetBody** step to combine the result of the payment processing with the **ClientID**.  

To redefine the message body, we will select the **Simple** language again in the expression field. It allows referencing headers, properties, the message body, and performing simple operations such as concatenation, conditions, and transformations.

```yaml title="Using Simple language"
- setBody:
         expression:
           simple:
             expression: '{"ClientID": "${exchangeProperty.ClientID}", "status":${body}}'
```

Essentially, we are creating a JSON that combines:

- The ClientID stored in the `ClientID` property
- Anda the status coming from the original body.

### Adding a log step

Next, we add a Log step to record the result of the combined information. We will used the prefix “Concatenation” to indicate that the body data has been concatenated.

```yaml title="Adding the log step"
     - log:
         message: CONCATENATION - ${body}
```
### Creating a resource

In the Source Code tab, we will create a resource with the transformation instructions, which will be called `statusPayload.jsonata`.

Click **+** next to “Resources” and add the transformation instructions:

```json title="Creating the transformation instruction in JSONata"
{
    "ClientID":ClientID,
    "Status":status.status
}
```
This JSONata expression creates a new JSON object by extracting and organizing values from the original JSON.

For example, if the original JSON is:

```json title="Example"
{
  "ClientID": "1",
  "status": {
    "status": "Paid"
  }
}
```
The JSONata expression produces the following result:

```json title="Result"
{
  "ClientID": "1",
  "Status": "Paid"
}
```
In other words, the expression simply reorganizes the data, keeping the `ClientID` and extracting the status field from a nested object.

We assign the name and extension `statusPayload.jsonata` and save the file.

### Using the JSONata component

After creating the resource with the transformation instructions, we will create a step using the JSONata component.

Remember that the `statusPayload.jsonata` file is referenced in the `classpath`.

### Adding another log step

Now we add a Log step to record the body from the previous step. We will use the prefix "PAYLOAD STATUS".

```yaml title="Adding the log step"
     - log:
         message: 'PAYLOAD STATUS - ${body}'

```
### Checking logs and traces

Finally, we will check the logs and traces for this step.

- In the traces, we can see information related to the product and the JSONata step.
- In the logs, we can see:
  - The result of the concatenation between ClientID and the payment processing data.
  - Then, we can see the transformed payment data recorded with the prefix `PAYLOAD STATUS`.