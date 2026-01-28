---
sidebar_position: 2
---

# Component

> **Context**
>
> The [**FHIR**](https://camel.apache.org/components/4.10.x/fhir-component.html) Apache component enables standardized healthcare data exchange between systems, ensuring interoperability and consistency in communication. 
> It defines a flexible structure based on resources that represent clinical, administrative, and financial entities, enabling standardized communication across different platforms.
>
>The excerpt below shows important information regarding the use of this component in an iPaas, such as: 
>- URI Syntax
>- Path and Query Parameters
>- Examples
>- Guidelines

## URI Syntax

`fhir:apiName/methodName`

## Path Parameters

| **Name** | **Description** | **Default** | **Type** |
|----------|---------------|------------|----------|
| `apiName` (common) | (**Required**) Type of operation to be executed. Possible values: `CAPABILITIES`, `CREATE`, `DELETE`, `HISTORY`, `LOAD_PAGE`, `META`, `OPERATION`, `PATCH`, `READ`, `SEARCH`, `TRANSACTION`, `UPDATE`, `VALIDATE`. | —  | FhirApiName |
| `methodName` (common)| (**Required**) Sub-operation to be used for the selected operation.| — | String |

## Query Parameters

| **Name** | **Description** | **Default** | **Type** |
|----------|---------------|------------|----------|
| `serverUrl` | The base URL of the FHIR server. |—  | String |

## Examples

**Example 1**: querying patient data by ID (api: read)

1. The integration is triggered from a GET request to a specific endpoint.

2. The request is forwarded to a FHIR server.

3. The resource type being fetched is `Patient` and the patient identifier is `596526`.

4. The data returned by the FHIR server is processed by the marshal EIP, which converts the response to JSON format.

```yaml
- from:
  uri: rest:get:/demo
  steps:
    - to:
      uri: fhir:read/resourceById
      parameters:
      serverUrl: http://hapi.fhir.org/baseR4
      resourceClass: Patient
      stringId: 596526
    - marshal:
      fhirJson: {}
```

**Result**

```
{
  "resourceType": "Patient",
  "id": "596526",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2020-02-02T01:14:46.434+00:00",
    "source": "#vFLZ5SEEhAWeTh3L"
  },
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>atolstykh3</td></tr><tr><td>Address</td><td><span>Main St </span><br/><span>Nashua </span><span>NH </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>16 June 1971</span></td></tr></tbody></table></div>"
  },
  "identifier": [
    {
      "value": "atolstykh3"
    }
  ],
  "name": [
    {
      "family": "Shakur",
      "given": [
        "Tupac"
      ]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "1234567890",
      "use": "mobile"
    }
  ],
  "gender": "male",
  "birthDate": "1971-06-16",
  "address": [
    {
      "line": [
        "Main St"
      ],
      "city": "Nashua",
      "state": "NH",
      "postalCode": "03062",
      "country": "USA"
    }
  ]
}
```
**Example 2**: searching for patients (api: search)

1. The integration is triggered by a GET request to a specific endpoint.

2. Upon receiving this request, the flow performs a search on the FHIR server (`https://server.fire.ly/r4`) for all patients whose last name is “Shakur”.

3. The result of this search (a list of patients) is converted to the FHIR JSON format, which is an international standard for healthcare data.

4. This JSON can then be returned to the requester or used in other steps of the flow.


```yaml
- from:
  uri: rest:get:/demo
  steps:
    - to:
      uri: fhir:search/searchByUrl
      parameters:
      serverUrl: https://server.fire.ly/r4
      fhirVersion: R4
      url: Patient?family=Shakur
    - marshal:
      fhirJson: {}
```

**Result**

```
{
  "resourceType": "Bundle",
  "id": "292c8223-90d4-48cb-931e-44acc049f641",
  "meta": {
    "lastUpdated": "2025-01-06T18:14:28.104+00:00"
  },
  "type": "searchset",
  "total": 11,
  "link": [
    {
      "relation": "self",
      "url": "https://hapi.fhir.org/baseR4/Patient?family=Shakur"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/596516",
      "resource": {
        "resourceType": "Patient",
        "id": "596516",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2024-12-16T10:55:13.066+00:00",
          "source": "#pFqRMR2CWFikHs3p"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> <div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b> </div> <table class=\"hapiPropertyTable\"> <tbody/> </table> </div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/596517",
      "resource": {
        "resourceType": "Patient",
        "id": "596517",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2024-12-23T10:03:10.153+00:00",
          "source": "#9oWWVFsUcZvSm4fO"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/596518",
      "resource": {
        "resourceType": "Patient",
        "id": "596518",
        "meta": {
          "versionId": "5",
          "lastUpdated": "2024-12-24T06:51:37.720+00:00",
          "source": "#yx5d82dUckvMaRiv"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>142421423</td></tr><tr><td>Address</td><td><span>USA </span><br/><span>illinois </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>16 June 1971</span></td></tr></tbody></table></div>"
        },
        "identifier": [
          {
            "use": "official",
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "MR",
                  "display": "Medical Record Number"
                }
              ]
            },
            "value": "142421423"
          },
          {
            "use": "secondary",
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "AN",
                  "display": "Account Number"
                }
              ]
            },
            "value": "321312321"
          }
        ],
        "name": [
          {
            "use": "official",
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "telecom": [
          {
            "system": "phone",
            "value": "123123213",
            "use": "mobile"
          }
        ],
        "gender": "male",
        "birthDate": "1971-06-16",
        "address": [
          {
            "line": [
              "USA"
            ],
            "city": "illinois",
            "country": "USA"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/596521",
      "resource": {
        "resourceType": "Patient",
        "id": "596521",
        "meta": {
          "versionId": "2",
          "lastUpdated": "2024-12-16T08:40:02.277+00:00",
          "source": "#Uq9VaC6zR10eHR9t"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> <div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b> </div> <table class=\"hapiPropertyTable\"> <tbody> <tr> <td>Date of birth</td> <td> <span>16 June 1971</span> </td> </tr> </tbody> </table> </div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "telecom": [
          {
            "system": "phone",
            "value": "1234567890",
            "use": "mobile"
          }
        ],
        "gender": "male",
        "birthDate": "1971-06-16"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45443766",
      "resource": {
        "resourceType": "Patient",
        "id": "45443766",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-18T03:50:40.587+00:00",
          "source": "#ROPdqP42sDZnrfM6"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45500405",
      "resource": {
        "resourceType": "Patient",
        "id": "45500405",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-23T09:59:00.843+00:00",
          "source": "#YrUIosjuu7GefUBp"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45506236",
      "resource": {
        "resourceType": "Patient",
        "id": "45506236",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-23T14:55:15.488+00:00",
          "source": "#75G5vKdll9yQaimw"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45506245",
      "resource": {
        "resourceType": "Patient",
        "id": "45506245",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-23T14:55:36.754+00:00",
          "source": "#8i4t7DEH7B09qsOz"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45506277",
      "resource": {
        "resourceType": "Patient",
        "id": "45506277",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-23T14:56:54.407+00:00",
          "source": "#aLtSTKH6QkbUk4e1"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody/></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45512270",
      "resource": {
        "resourceType": "Patient",
        "id": "45512270",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-12-23T19:01:38.990+00:00",
          "source": "#l6JLC3AuubcXuskj"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Date of birth</td><td><span>16 June 1971</span></td></tr></tbody></table></div>"
        },
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "1971-06-16"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://hapi.fhir.org/baseR4/Patient/45617509",
      "resource": {
        "resourceType": "Patient",
        "id": "45617509",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2025-01-06T17:31:25.106+00:00",
          "source": "#1cqHJv59pnHNXwKi"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tupac <b>SHAKUR </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>atolstykh3</td></tr><tr><td>Address</td><td><span>Main St </span><br/><span>Nashua </span><span>NH </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>16 June 1971</span></td></tr></tbody></table></div>"
        },
        "identifier": [
          {
            "value": "atolstykh3"
          }
        ],
        "name": [
          {
            "family": "Shakur",
            "given": [
              "Tupac"
            ]
          }
        ],
        "telecom": [
          {
            "system": "phone",
            "value": "1234567890",
            "use": "mobile"
          }
        ],
        "gender": "male",
        "birthDate": "1971-06-16",
        "address": [
          {
            "line": [
              "Main St"
            ],
            "city": "Nashua",
            "state": "NH",
            "postalCode": "03062",
            "country": "USA"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```
## Guidelines

- The component's response will be inserted into the _Exchange_ body as a Java object.
  - The object varies according to the API and protocol version used.
  - For version R4, the object will be in the [org.hl7.fhir.r4.model](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-structures-r4/org/hl7/fhir/r4/model/package-summary.html) package.

- To use the object in other components, it must be converted to JSON using the marshal EIP.
  - Use the `fhirJson` Data Format.
  - The traditional JSON Data Format is not compatible with FHIR classes.

- Component parameters do not support _expressions_ to obtain a payload from the body.
  - For this, use the _inBody_ parameter.

In this example, we are indicating that the `resourceAsString` parameter should be obtained from the body.

```yaml
- to:
    uri: fhir:update/resource
    parameters:
      serverUrl: https://server.fire.ly/r4
      stringId: 9b17aa98-95aa-41d7-b143-72f7526111d7
      # indicates that the resourceAsString parameter should be read from the body
      inBody: resourceAsString
```

- Expressions cannot be used in any field.
  - To parameterize values, use environment variables. Example:

```yaml
- to:
    uri: fhir:search/searchByUrl
    parameters:
      serverUrl: "{{FHIR_URL}}"   # here it would not be possible to use ${exchangeProperty.url}, for example
      fhirVersion: R4
      url: Patient?family=Simpson

```