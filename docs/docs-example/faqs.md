---
sidebar_position: 3
---

# FAQs

> **Context**
>
>Sample of Frequently Asked Questions, organized by topic for easy navigation. They provide clear, practical guidance on authorization, connectors, and executions, helping users quickly understand key platform features and resolve common issues.

## Authorizations

<details>
  <summary>If I update the authorization data used in a deployed flow, do I need to redeploy the flow?</summary>

Yes. You need to redeploy the flow in the environment where you updated the authorization data. This ensures the changes take effect.
</details>

## Connectors

<details>
  <summary>What is and how to write an instruction for a database connector?</summary>

**What is an instruction?**

An **instruction** is a command or query that interacts with systems or services in an integration flow. Instructions are essential for exchanging and managing information between integrated systems.

They enable data manipulation and trigger operations, such as querying information, sending data, or executing specific actions. 

When configuring a database connector, you must fill in the **INSTRUCTION** field according to the connector type. In this field, you write a script using the native syntax of the protocol that the connector accesses.

:::important[IMPORTANT]    
Most database connectors available in Sensedia Integrations require instructions written in SQL syntax.  
:::

**How to write an instruction**

You can create an instruction using the **properties** feature, which contain environment variables and values from previous steps in the flow:

You can create an instruction in two different ways:

- **Insert input attributes**: click **Properties** in the connector's left panel and select the input attributes.  
- **Create an expression using a Concat funtion**: 
    - Click **Properties** in the connector's left panel.
    - Click the **fx**  button at the top right to open the expression editor. 
    - Type the expression using the Concat function. 

</details>

   
## Executions

<details>
  <summary>I can't view the execution traces of a flow. What could be happening?</summary>

If you can't view the execution traces of a flow, it is possible that the traces feature is not enabled for your user in Access Control.

  To enable trace viewing, your user must be associated with a role that has the *Observability* permission group selected along with the items below:

- **Traces**
  - **Traces List**
  - **Traces View**

  The option to view traces is only available for executions performed after the traces feature has been enabled.
 
</details>

  

