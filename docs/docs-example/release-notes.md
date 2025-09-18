---
sidebar_position: 4
---

# Release notes

Here’s a sample of release notes from Sensedia Integrations, showing how product new features, improvements, and fixes are communicated to users.

Originally published at [Sensedia Docs | Integrations | Release Notes](https://docs.sensedia.com/en/integrations-guide/Latest/release-notes.html)

## September 2, 2025

**Improvement**

- If the user enters spaces in the name of a query parameter in REST connectors, the system will display a message indicating that space is an invalid character (Diagram-type flows).

## August 29, 2025

**New feature**

- **Release creation and management**  
  The integration deployment process now requires creating a release, which represents a specific version of your integration flow.  
  With this feature, you can control and manage different versions of your integrations, ensuring greater organization and traceability in deployments.  

  Check out [how to create releases](https://docs.sensedia.com/en/integrations-guide/Latest/flow-deploy.html).

---

## August 28, 2025

**Fix**

- We fixed an error that occurred when using the EIP **PollEnrich**.  
  When trying to create an endpoint from the URI, Camel could not find the responsible component, and the error was raised after deployment, when starting the flow's execution.

---

## August 21, 2025

**Fix**

- We fixed an error that occurred during the deployment of flows that used the EIP **unmarshal** and the **PGP** data format.

---

## August 14, 2025

**New feature**

- **New component released**  
  You can now use **Google Cloud Storage** in your integrations, making it easier to store and retrieve objects in Google Cloud buckets.  

  Check all available [components](https://docs.sensedia.com/en/integrations-guide/Latest/apache-camel-components.html) and [triggers](https://docs.sensedia.com/en/integrations-guide/Latest/source-triggers.html).

---

## August 05, 2025

**Fix**

- We fixed an error that occurred when using **REST connectors** in **Diagram-type flows**, where the request responses were sent to Analytics without the attributes that link the log message to the specific `runtimeExecutionId`, making it difficult to visualize errors in the executions.
