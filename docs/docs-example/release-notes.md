---
sidebar_position: 6
---

# Release notes

> **Context**
>
> Sample of release notes that highlight product's new features, improvements, and fixes.

<details>
  <summary>New feature</summary>

**Release creation and management**  

The integration deployment process now requires creating a release, which represents a specific version of your integration flow.  
With this feature, you can control and manage different versions of your integrations, ensuring greater organization and traceability in deployments.  

</details>

<details>
  <summary>Improvement</summary>

**Error message: invalid character**  

If the user enters space in the name of a query parameter in REST connectors, the system will display a message indicating that space is an invalid character (diagram-type flows).
</details>

<details>
  <summary>Fix</summary>

**Deployment error in flows with the EIP PollEnrich** 

We fixed an error that occurred when using the EIP **PollEnrich**.  
When trying to create an endpoint from the URI, Camel could not find the responsible component, and the error was raised after deployment, when executing the flow.
</details>