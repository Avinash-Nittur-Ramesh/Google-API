// Enter an API key from the Google API Console:
//   https://console.developers.google.com/apis/credentials
const apiKey = 'AIzaSyCrwPR75LU8IeYAycY6maRWT3CHrvbSG48';

// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the People API, so we load
// Discovery Doc found here: https://developers.google.com/people/api/rest/
const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];


// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
const clientId = '915999462569-qdfli7t94jofar3u8fj3k5j4enoekn47.apps.googleusercontent.com';

// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/people/v1/how-tos/authorizing
// for details.
var scopes = "https://www.googleapis.com/auth/drive \
    https://www.googleapis.com/auth/drive.file \
    https://www.googleapis.com/auth/drive.readonly \
    https://www.googleapis.com/auth/drive.metadata.readonly \
    https://www.googleapis.com/auth/drive.appdata \
    https://www.googleapis.com/auth/drive.metadata \
    https://www.googleapis.com/auth/drive.photos.readonly";

function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: scopes
    }).then(function () {
        gapi.auth2.getAuthInstance().signIn();
        console.log("Signed-in");
    }, function(reject) {
        console.log("Rejected: ", rejected)
    })
        .catch((err) => {
            console.log("Error occurred: ", err);
        });
}

function execute() {
    gapi.client.drive.files.list({
        "corpora": "user"
    }).then((response) => {
        response.result.files.forEach(element => {
            console.log("Filename: " + element.name);
        });
    }, (err) => {
        console.error("Execute error", err);
    });
}

async function googleDrive() {
    const prom1 = await new Promise((resolve, reject) => {
        console.log("Here");
        resolve();
    });

    const prom2 = await new Promise((resolve, reject) => {
        console.log("Client Loading");
        handleClientLoad();
        console.log("Client Loaded");
        resolve();
    });

    const prom3 = await new Promise((resolve, reject) => {
        execute();
        resolve();
    });
}
