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

//fetchData();

const postData = async () => {
  const postResponse = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      name: "muntasir",
    }
  );
  console.log(postResponse.data);
};

//postData();

const putData = async () => {
  // put will replace the whole dat
  const putResponse = await axios.put(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      name: "muntasir",
    }
  );
  console.log(putResponse.data);
};

putData();
