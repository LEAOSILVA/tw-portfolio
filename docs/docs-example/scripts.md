---
sidebar_position: 5
---

# Scripts

I design trainings accessible to both customers and employees through the company’s learning platform.

The excerpt below comes from a training session that walks users through the creation of an integration flow, guiding them step by step from start to finish. It includes detailed configurations for each step, along with the corresponding logs and traces.

While the script itself is not publicly available, it serves as a powerful tool for planning and recording the session. 

For clarity, the flow steps are summarized below. We will focus on **Step 5: Data transformation with JSONata**.

1. **Order received with a REST trigger**  
   The flow starts with a POST request when an order is received, including a client identification code (`ClientID`).

2. **Information retrieval**  
   Additional details about the order are then fetched using the `ClientID` as a parameter in an internal purchasing endpoint.

3. **Data transformation with JSONata**  
   A **JSONata** expression is applied to structure the received data and ensure it is in the correct format for the next step.

4. **Payment processing via an external endpoint**  
   Once the data is properly formatted, it is sent to an external endpoint to execute the payment.

5. **Data transformation with JSONata**  
   The returned data is structured again using JSONata, preparing it for the final steps of the flow.

6. **Status update and confirmation**  
   After payment is completed, the order status is updated in an internal endpoint to keep the system synchronized, and a payment confirmation is received.

:::note[NOTE]    
The training sessions are recorded in Portuguese. The script below is a translated version. 
:::

## Data transformation with JSONata

>**Structure & Objectives**
>
>- Demonstrate how to add and configure JSONata
>- Check logs and traces

Hi, everyone!  
In this step, we will perform another data transformation using JSONata.

**Body transformation with JSONata**

We will add a **SetBody** step to combine the result of the payment processing with the **ClientID**.  

To redefine the message body, we will select the **Simple** language again in the expression field, which allows referencing headers, properties, the message body, and performing simple operations such as concatenation, conditions, and transformations.

```yaml
- setBody:
         expression:
           simple:
             expression: '{"ClientID": "${exchangeProperty.ClientID}", "status":${body}}'
```

Essentially, we are creating a JSON that combines:

- The ClientID stored in the `ClientID` property, and
- The status coming from the original body.

**Adding a log step**

Next, we add a Log step to record the result of the combined information, using the prefix “Concatenation” to indicate that the body data has been concatenated.

```yaml
     - log:
         message: CONCATENATION - ${body}
```
**Creating a resource**

In the Source Code tab, we will create a resource with the transformation instructions, which will be called `statusPayload.jsonata`.

Click **+** next to “Resources” and add the transformation instructions:

```json
{
    "ClientID":ClientID,
    "Status":status.status
}
```
This JSONata expression creates a new JSON object by extracting and organizing values from the original JSON.

For example, if the original JSON is:

```json
{
  "ClientID": "1",
  "status": {
    "status": "Paid"
  }
}
```
The JSONata expression produces the following result:

```json
{
  "ClientID": "1",
  "Status": "Paid"
}
```
In other words, the expression simply reorganizes the data, keeping the `ClientID` and extracting the status field from a nested object.

We assign the name and extension `statusPayload.jsonata` and save the file.

**Using the JSONata component**

After creating the resource with the transformation instructions, we will create a step using the JSONata component.

Remember that the `statusPayload.jsonata` file is referenced in the `classpath`.

**Adding another log step**

Now we add a Log step to record the body from the previous step, using the prefix status payload.

```yaml
     - log:
         message: 'PAYLOAD STATUS - ${body}'

```
**Checking logs and traces**

Finally, we will check the logs and traces for this step.

- In the traces, we can see information related to the product and the JSONata step.
- In the logs, we can see:
  - The result of the concatenation between ClientID and the payment processing data.
  - Then, we can see the transformed payment data recorded with the prefix `PAYLOAD STATUS`.