---
sidebar_position: 6
---

# Release notes

These release notes highlight Sensedia Integrations’ new features, improvements, and fixes, clearly communicated for users. They demonstrate how structured, user-focused documentation keeps users informed, and supports effective use of the product.

<details>
  <summary>September 02, 2025</summary>

**Improvement**

- **Error message: invalid character**  

  If the user enters space in the name of a query parameter in REST connectors, the system will display a message indicating that space is an invalid character (diagram-type flows).
</details>


<details>
  <summary>August 29, 2025</summary>

**New feature**

- **Release creation and management**  

  The integration deployment process now requires creating a release, which represents a specific version of your integration flow.  
  With this feature, you can control and manage different versions of your integrations, ensuring greater organization and traceability in deployments.  

  Check out [how to create releases](https://docs.sensedia.com/en/integrations-guide/Latest/flow-deploy.html).
</details>


<details>
  <summary>August 28, 2025</summary>

**Fix**

* **Deployment error in flows with the EIP PollEnrich** 

  We fixed an error that occurred when using the EIP **PollEnrich**.  
  When trying to create an endpoint from the URI, Camel could not find the responsible component, and the error was raised after deployment, when executing the flow.
</details>


<details>
  <summary>August 21, 2025</summary>

**Fix**

- **Deployment error in flows with the EIP unmarshal and PGP data format** 

  We fixed an error that occurred during the deployment of flows that used the EIP **unmarshal** and the **PGP** data format.
</details>

<details>
  <summary>August 14, 2025</summary>

**New feature**

- **New component released**  

  You can now use **Google Cloud Storage** in your integrations, making it easier to store and retrieve objects in Google Cloud buckets.  

  Check all available [components](https://docs.sensedia.com/en/integrations-guide/Latest/apache-camel-components.html) and [triggers](https://docs.sensedia.com/en/integrations-guide/Latest/source-triggers.html).

</details>


<details>
  <summary>August 05, 2025</summary>

**Fix**

- **REST connector logging issue in diagram-type flows** 

    We fixed an error that occurred when using **REST connectors**, in which the request responses were sent to Analytics without the attributes that link the log message to the specific `runtimeExecutionId`. This caused difficulties to visualize errors in the executions.
</details>

