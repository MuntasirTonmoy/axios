const { default: axios } = require("axios");

async function fetchData() {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
