---
sidebar_position: 1
---

# FAQs

This is a sample of FAQs from Sensedia Integrations, organized by topic for easier navigation.  
They address common questions about integrations, deployments, and platform features, providing quick answers and practical guidance.  

Originally published at [Sensedia Docs | Integrations | FAQs](https://docs.sensedia.com/en/integrations-guide/Latest/faqs.html).

## Authorizations

- **If I change the data of an authorization used in a deployed flow, will I need to redeploy the flow?**

  Yes. You will need to redeploy the flow in the environment where the authorization data was changed for the changes to take effect.

## Connectors

- **What is and how to write an instruction for a database connector?**

   **What is an instruction?**

   An *instruction* is a command or query used to interact with systems or services within an integration flow.
   It allows data manipulation or triggering operations, such as querying information, sending data, or executing specific actions, being essential for the exchange and management of information between integrated systems.

   When configuring the form of a technical connector, you need to fill in the **INSTRUCTION** field according to the type of connector you selected.
   In this field, you will create a script using the native syntax of the protocol the connector accesses.

   :::note[IMPORTANT]    
   Most of the technical connectors available in Sensedia Integrations require instructions with SQL syntax.
   :::

    **How to write an instruction?**

  You can write the instruction in two ways, using the [properties](https://docs.sensedia.com/en/integrations-guide/Latest/properties.html) that allow the use of environment variables and properties from previous steps in the flow:

  * **Insert input attributes**: Select the desired items from Properties on the left panel.

  * **Create an expression**: Combine items from Properties using the Concat function.
To use it, click the btn:[fx] button available to create expressions.

  :::note[NOTE]    
  Check more details on how to [build SQL instructions](https://docs.sensedia.com/en/integrations-guide/Latest/connectors-sql-instructions.html) and how to use the [Concat function](https://docs.sensedia.com/en/integrations-guide/Latest/connectors-concat.html) to create expressions.
  :::

    See the videos below that demonstrate how to create a simple instruction for a MySQL connector:

    * **Using the Concat function**: [Watch on YouTube](https://www.youtube.com/watch?v=zwJoaMFtoTE&t=24s)

    * **Not using the Concat function**: [Watch on YouTube](https://www.youtube.com/watch?v=W0tR-Ifh3s8&t=31s)

## Executions

- **I can't view the execution traces of a flow. What could be happening?**

  If you can't view the execution traces of a flow, it is possible that the traces feature is not enabled for your user in Access Control.

  To enable trace viewing, your user must be associated with a role that has the *Observability* permission group selected along with the items below:

- **Traces**
  - **Traces List**
  - **Traces View**

  The option to view traces is only available for executions performed after the traces feature has been enabled.
 
  :::note[NOTE] 
  See how to [create a role and enable permissions in Access Control](https://docs.sensedia.com/en/access-control-guide/Latest/policies.html#create_policy).
  :::

