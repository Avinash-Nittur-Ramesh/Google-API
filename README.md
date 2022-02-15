# Google-API
Learn to interact with Google Drive API, Gmail API, Google Docs API, and Google Sheets API using REST commands from Javascript embedded in HTML files hosted on Firebase. 

Google API does not provide good documentation / reference for the client libraries in their websites. But, instead provides a discovery service API which lists all the classes, functions, parameters with their data types and description etc. It follows a JSON schema which is machine readable. 

It is built upon two concepts 
- APIs Directory: It lists all the available APIs that Google Workspace provides and can be seen using REST API: https://discovery.googleapis.com/discovery/v1/apis
  The most important field of the JSON result is `discoveryRestUrl`.
- Discovery document: It provides a machine-readable description of a particular API selected browsed using `discoveryRestUrl`. It provides descriptions of the data and methods associated with the API, as well as information about available OAuth scopes, and descriptions of schemas, methods, parameters and available parameter values.
