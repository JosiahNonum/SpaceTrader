var tokenValue = "";

function addMessage(message, title) {
  console.log("Message: " + message);

  // displaying the title of the message
  $("#messages").append(`<h2>${title}</h2>`);

  // Recursive function to handle nested data
  function processNestedData(data, parentKey = "") {
    // Check if data is an object
    if (data && typeof data === "object") {
      // Iterate through the properties of the data object using for...in loop
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // Construct the HTML output dynamically
          const nestedKey = parentKey ? `${parentKey}.${key}` : key;
          const htmlOutput = `<p>${nestedKey}: ${data[key]}</p>`;
          // Append the HTML to the #messages element
          $("#messages").append(htmlOutput);

          // Recursively process nested data
          processNestedData(data[key], nestedKey);
        }
      }
    } else {
      console.error("Invalid data format");
    }
  }

  // Call the recursive function with the initial data
  processNestedData(message);
}

function displayPlain(message, title) {
  // displaying the title of the message
  $("#messages").append(`<h2>${title}</h2>`);

  var jsonContainer = document.getElementById("messages");
  var jsonText = document.createTextNode(JSON.stringify(message, null, 2));
  jsonContainer.appendChild(jsonText);
  jsonContainer.appendChild(document.createElement("br"));
}

function emptyMessages() {
  var messagesContainer = document.getElementById("messages");

  // Check if the element exists before trying to manipulate it
  if (messagesContainer) {
    // Empty the content of the element
    messagesContainer.innerHTML = "";
  } else {
    console.error('Element with id "messages" not found.');
  }
}

function setToken() {
  // Get the value from the input field
  tokenValue = document.getElementById("token").value;

  tokenValue = "Bearer " + tokenValue;

  console.log(tokenValue);
}

function serverStatus() {
  emptyMessages();
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.spacetraders.io/v2/",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    displayPlain(response.status, "Server Status");
    displayPlain(response.version, "Server Version");
    displayPlain(response.resetDate, "Server Reset Date");
    displayPlain(response.description, "Server Description");
  });

  // fetch("https://api.spacetraders.io/v2/")
  //   .then((response) => {
  //     console.log(response);
  //     addMessage(response, "Server Status");
  //     response.json();
  //   })
  //   .then((response) => {
  //     console.log(response); // Check the data received from the API
  //     addMessage(response, "Server Status");
  //   })
  //   .catch((err) => console.error(err));
}

function displayAgent() {
  emptyMessages();
  let data = "";

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: tokenValue,
    },
  };

  fetch("https://api.spacetraders.io/v2/my/agent", options)
    .then((response) => response.json())
    .then((data) => {
      addMessage(data, "Agent Information");
      console.log(data); // Check the data received from the API
    })
    .catch((err) => console.error(err));
}

function displayContracts() {
  emptyMessages();
  let data = "";

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: tokenValue,
    },
  };

  fetch("https://api.spacetraders.io/v2/my/contracts", options)
    .then((response) => response.json())
    .then((data) => {
      addMessage(data, "Contracts Information");
      console.log(data); // Check the data received from the API
    })
    .catch((err) => console.error(err));
}

function acceptContract() {
  let contractID = document.getElementById("contractID").value;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: tokenValue,
    },
  };

  fetch(
    "https://api.spacetraders.io/v2/my/contracts/" + contractID + "/accept",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
