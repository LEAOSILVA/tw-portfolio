---
sidebar_position: 3
---

# Glossary

Here’s a sample glossary from Sensedia Integrations, designed to clarify key terms and concepts for users.

Originally published at [Sensedia Docs | Integrations | Glossary](https://docs.sensedia.com/en/integrations-guide/Latest/glossary.html)

:::note[NOTE]    
Some of the links were removed.
:::


# A


| Term | Definition |
|------|------------|
| [Apache Camel](https://docs.sensedia.com/en/integrations-guide/Latest/apache-camel-concepts.html) | Open-source integration framework that facilitates connecting systems and exchanging data between them using a route-based model. |
| [API Key](https://docs.sensedia.com/en/integrations-guide/Latest/api-key.html) | Unique identifier used to authenticate and authorize an application's access to an API. |
| [Authorization Code](https://docs.sensedia.com/en/integrations-guide/Latest/oauth2-authorization-code.html) | Authorization flow of OAuth 2.0 that requests an authorization code for later exchange for an access token. Provides additional security by avoiding direct credential sharing and protecting against token interception. |
| [Authorization Code with PKCE](https://docs.sensedia.com/en/integrations-guide/Latest/oauth2-pkce.html) | Authorization flow of OAuth 2.0 that uses unique cryptographic challenges to protect against interception attacks. |

---

# C

| Term | Definition |
|------|------------|
| Camel Context | Core of Apache Camel responsible for managing integration between systems. It uses a *Domain Specific Language* or DSL to define and build integration routes. |
| [Client Credentials](https://docs.sensedia.com/en/integrations-guide/Latest/oauth2-client-credentials.html) | Authorization flow of 
OAuth 2.0 that uses client credentials to directly obtain access tokens without requiring end-user interaction. |
| Code Challenge Method | Security extension in [Authorization Code with PKCE](https://docs.sensedia.com/en/integrations-guide/Latest/oauth2-pkce.html) that protects applications and access tokens using code challenges. |
| [Connector](chttps://docs.sensedia.com/en/integrations-guide/Latest/connectors.html) | *Step* responsible for integrating with external systems. Translates information in protocols like HTTP to consume or send data via APIs. |
| Consumer | Apache Camel component that acts as a data entry point, initiating the integration flow. See also Trigger. |
| Cron Expression | Periodic scheduling expression in the format `<second><minute> <hour> <day of the month> <month> <day of the week><year>`. Allows the use of special characters like `*`, `?`, `-`, `,`, `/`, and `L` to define more complex scheduling patterns. For example, `0 0 12 * * ?` triggers at 12 PM (noon) every day. |

---

# D

| Term | Definition |
|------|------------|
| Data format | Artifact referenced by data transformation EIPs to determine the input or output data format. It facilitates data conversion between formats like XML, JSON, CSV, and others. |
| Data Mapping | Process that relates one or more fields from a source dataset to their equivalents in the destination. In addition to establishing relationships, it ensures interoperability between data in different formats. |
| [Diagram](https://docs.sensedia.com/en/integrations-guide/Latest/diagram.html) | Low-code integration construction through a visual interface, the canvas. See also Source. |
| Domain-Specific Language (DSL) | Language designed for a specific domain that allows users to define and configure routes and integrations. Camel supports DSLs in various languages, such as Java, Groovy, YAML, XML, among others. |

---


