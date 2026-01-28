---
sidebar_position: 5
---

# Glossary

> **Context**
>
> Sample of a glossary with key terms and concepts.

## A

| Term | Definition |
|------|------------|
| **Apache Camel**| Open-source integration framework that facilitates connecting systems and exchanging data between them using a route-based model. |
| **API Key** | Unique identifier used to authenticate and authorize an application's access to an API. |
| **Authorization Code** | Authorization flow of OAuth 2.0 that requests an authorization code for later exchange for an access token. Provides additional security by avoiding direct credential sharing and protecting against token interception. |
| **Authorization Code with PKCE** | Authorization flow of OAuth 2.0 that uses unique cryptographic challenges to protect against interception attacks. |

---

## C

| Term | Definition |
|------|------------|
| **Camel Context** | Core of Apache Camel responsible for managing integration between systems. It uses a *Domain Specific Language* or DSL to define and build integration routes. |
| **Client Credentials**| Authorization flow of OAuth 2.0 that uses client credentials to directly obtain access tokens without requiring end-user interaction. |
| **Code Challenge Method** | Security extension in Authorization Code with PKCE that protects applications and access tokens using code challenges. |
| **Connector** | *Step* responsible for integrating with external systems. Translates information in protocols like HTTP to consume or send data via APIs. |
| **Consumer** | Apache Camel component that acts as a data entry point, initiating the integration flow. See also Trigger. |
| **Cron Expression** | Periodic scheduling expression in the format `<second><minute> <hour> <day of the month> <month> <day of the week><year>`. Allows the use of special characters like `*`, `?`, `-`, `,`, `/`, and `L` to define more complex scheduling patterns. For example, `0 0 12 * * ?` triggers at 12 PM (noon) every day. |

---

