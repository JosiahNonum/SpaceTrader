var tokenValue = "";

// function addMessage(message, title) {
//   // displaying the title of the message
//   $("#messages").append(`<h2>${title}</h2>`);

//   // Check if message.data is an object
//   if (message.data && typeof message.data === "object") {
//     // Iterate through the properties of the data object using for...in loop
//     for (const key in message.data) {
//       if (message.data.hasOwnProperty(key)) {
//         // Construct the HTML output dynamically
//         const htmlOutput = `<p>${key}: ${message.data[key]}</p>`;
//         // Append the HTML to the #messages element
//         $("#messages").append(htmlOutput);
//       }
//     }
//   } else {
//     console.error("Invalid message format");
//   }
// }
function addMessage(message, title) {
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
  processNestedData(message.data);
}

function setToken() {
  // Get the value from the input field
  tokenValue = document.getElementById("token").value;

  tokenValue = "Bearer " + tokenValue;

  console.log(tokenValue);
}

function displayAgent() {
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
