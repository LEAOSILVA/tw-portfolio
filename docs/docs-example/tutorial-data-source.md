---
parent: tutorials
sidebar_position: 2
---

# Binding data sources to integration flows

> **Context**
>
> This tutorial shows how to bind a data source, which allows access to databases, to an integration flow.

Follow the steps below to bind a data source to an integration flow:

1. Access or create the flow to which the data source will be linked.

2. Click **Add Step** and then select the **Components** tab. 
Use one of the components below to link a data source to your integration flow, depending on the type of operation you want to execute.
Read the details of each component and use cases in the following table:

| Component | Use Case | Query |
|-----------|----------|-------|
| **SQL (Recommended)** | Dynamic queries (`SELECTs`) that use parameters from **headers** or **body**. Ideal for externalizing queries. | In the component itself (e.g., `uri: sql:classpath:query.sql`) |
| **JDBC** | Direct operations (`INSERT`, `UPDATE`) where the query is built in a previous flow step. | The query must be in the message **body** at the time of the call. |
| **SQL Stored Procedure** | Execute complex business logic that already exists in the database (e.g., `GET_USERS_BY_LASTNAME`). | In the component itself (e.g., `uri: sql-stored:PROCEDURE_NAME(...)`) |

3. Select the component and click **CONFIRM** or drag it to the diagram. The configuration form will open automatically.


4. With the configuration form open, locate the **Data Source Name** or **Data Source** fields and select, from the dropdown list, the name of the data source you registered.

   * For **JDBC**, select the data source name in the **Data Source Name** field.
   * For **SQL** and **SQL Stored Procedure**, select the data source name in the **Data Source** field.

:::note[NOTE] 
If a component (JDBC, SQL, or SQL Procedure) linked to a data source is deleted, the link between the data source and the flow will be automatically removed. This prevents the data source from being associated with a non-existent component.
Similarly, if a flow linked to a data source is deleted, all links associated with that flow will be automatically removed.
:::

5. Fill in the remaining form fields (such as the query or procedure name). See the [parameters](#components) for each component.

6. Complete the configuration by clicking **CONFIRM**.

## Components

### SQL (Recommended)

[**SQL**](https://camel.apache.org/components/4.10.x/sql-component.html) is ideal for dynamic queries, where parameters are passed through headers or body, and the query can be externalized.

#### Parameters

| Parameter (UI) | Parameter (YAML) | Required | Description | Example |
|----------------|------------------|----------|-------------|---------|
| Data Source Name | parameters.dataSource | Yes | The exact name of the Data Source you created. | `datasource-mysql-2` |
| SQL Query | uri (path) | Yes | The query to be executed. It's recommended to use `classpath:` to reference a `.sql` file or `constant:` for simple queries. | `sql:classpath:query.sql` |
| Query Parameters | (in query) | No | Placeholders in your query (e.g., `:#userLastName`) that are replaced by Camel **headers**. | `WHERE lastname = :#userLastName` |

#### Example

1. The flow receives an HTTP POST request at the `/test` endpoint. The request body must contain the `lastName` field.

2. Then, it uses the value obtained from `lastName` to create a header called `userLastName`, extracting the value with jsonpath (`$.lastName`).

3. Next, it executes an SQL query defined in the `query.sql` file (referenced via `classpath`), using the data source named `datasource-mysql-2`.

4. Finally, it converts (marshals) the SQL query result to JSON format, preparing the response to be sent to the client.

**In summary**: this flow receives a POST with a last name (`lastName`), executes an SQL query using that value, and returns the result in JSON.

```yaml
- from:
  uri: rest:post:/test # the request body must contain the 'lastName' field.
  steps:
    - setHeader:
      name: 'userLastName'
      expression:
      jsonpath:
        expression: $.lastName

    - to:
      uri: 'sql:classpath:query.sql'
      parameters:
      dataSource: "#datasource-mysql-2"

    - marshal:
      json: {}
```

See below the content of the `query.sql` file used in the flow above:

**SQL Query:**

The `query.sql` file is stored in **Resources** and referenced via `classpath`.
It contains the following SQL query:

`SELECT id, name FROM newTestes.users WHERE lastname = :#userLastName`.

This query will return all records from the `users` table whose last name (`lastname`) is "Doe", showing only the `id` and `name` fields.

Below are the request and response bodies:

**Request Body**:

```json
{
"last name": "Doe"
}
```

**Response Body**:

```json
[
  {
  "id": 1,
  "name": "John"
  },
  {
  "id": 2,
  "name": "Jane"
  }
]
```

### JDBC

[**JDBC**](https://camel.apache.org/components/4.10.x/jdbc-component.html) is used for more direct operations. The main difference is that it expects the SQL query to be in the message body at the time the component is called.

#### Parameters

| Parameter (UI) | Parameter (YAML) | Required | Description | Example |
|----------------|------------------|----------|-------------|---------|
| Data Source | uri (prefix) | Yes | The Data Source name preceded by `jdbc:`. | `jdbc:datasource-mysql-2` |
| SQL Query | (implicit) | Yes | There is no query field. You must use a previous step (like `setBody`) to set the message **body** as the query string. | `setBody -> constant: SELECT ...` |

#### Example

1. The flow receives an HTTP POST request at the `/test` endpoint.

2. Then, it sets the message body as a constant string: `SELECT id, name FROM newTestes.users WHERE lastname = 'Wilson'`. In other words, it creates a fixed SQL query, fetching all users with the last name "Wilson".

3. Next, it executes the above query on the database using the `datasource-mysql-2` data source, through the JDBC component.

4. Finally, it converts (marshals) the query result to JSON format, preparing the response to be sent to the client.

**In summary**: this flow always executes the same SQL query (fetching users with the last name "Wilson") and returns the result in JSON.

```yaml
- from:
  uri: rest:post:/test
  steps:
    - setBody:
      expression:
      constant:
        expression: SELECT id, name FROM newTestes.users WHERE lastname = 'Wilson' 
    - to:
      uri: jdbc:datasource-mysql-2
    - marshal:
      json: {}
```

### SQL Stored Procedure

[**SQL Stored Procedure**](https://camel.apache.org/components/4.10.x/sql-stored-component.html) is optimized for calling stored procedures in the database.

#### Parameters

| Parameter (UI)           | Parameter (YAML)      | Required | Description                                   | Example            |
|--------------------------|-----------------------|----------|---------------------------------------------|--------------------|
| Data Source              | parameters.dataSource | Yes      | The exact name of the Data Source you created. | `datasource-mysql-5` |
| Procedure Name           | uri (path)            | Yes      | The name of the procedure to be called, followed by its parameters. | `sql-stored:GET_USERS_BY_LASTNAME(...)` |
| Parameter Mapping        | (in uri)              | No       | Defines how Camel **headers** are mapped to procedure parameters. | `(VARCHAR ${header.searchlastName})` |

#### Example

1. The flow receives an HTTP POST request at the `/test-stored-procedure` endpoint.

2. Then it sets a header called `searchLastName` with the constant value "Doe".

3. Next, it calls the stored procedure `GET_USERS_BY_LASTNAME`, passing the value of the `searchLastName` header as a parameter (`VARCHAR ${header.searchLastName}`). The component used is SQL Stored Procedure, which executes procedures in the database.

4. Then, it uses the `datasource-mysql-5` data source to connect to the database.

5. Finally, it converts the procedure result to JSON.

**In summary**: the flow executes a stored procedure in MySQL, passing a parameter, and returns the result in JSON.

```yaml
 from:
  uri: rest:post:/test-stored-procedure
  steps:
    - setHeader:
      name: searchLastName
      expression:
      constant: Doe
    - to:
      uri: sql-stored:GET_USERS_BY_LASTNAME(VARCHAR ${header.searchLastName})
      parameters:
      dataSource: "#datasource-mysql-5"
    - marshal:
      json: {}
```

Below are the procedure definition and response body:

**Procedure created in MySQL database**:

```sql
DELIMITER $$

CREATE PROCEDURE GET_USERS_BY_LASTNAME(
  IN p_lastname VARCHAR(100)
)
BEGIN
  SELECT 
    id, 
    name, 
    lastname
  FROM 
    users 
  WHERE 
    lastname = p_lastname;
END$$

DELIMITER ;
```

This procedure called `GET_USERS_BY_LASTNAME`, created in MySQL, receives an input parameter called `p_lastname` (of type VARCHAR).

When executed, it performs a query on the `users` table, fetching all records whose `lastname` field equals the value received in `p_lastname`. The query result returns the `id`, `name`, and `lastname` fields of those users.

In summary, the procedure returns all users who have the last name provided as a parameter.

**Response Body**

```json
{
  "#result-set-1": [
  {
  "id": 1,
  "name": "John",
  "lastname": "Doe"
  },
  {
  "id": 2,
  "name": "Jane",
  "lastname": "Doe"
  }
],
"#update-count-1":"0"
}
```