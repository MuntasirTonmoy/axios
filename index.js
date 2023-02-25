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

//putData();

const patchData = async () => {
  // it will just update or add the field value not replace the whole obj
  // patch will replace the whole dat
  const patchResponse = await axios.patch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      name: "muntasir",
      username: "Muntasir",
    }
  );
  console.log(patchResponse.data);
};

//patchData();

const deleteData = async () => {
  const deleteResponse = await axios.delete(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log(deleteResponse.data);
};

//deleteData();

//simultaneous request
const simultaneousData = async () => {
  const [users, todos] = await axios.all([
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=1"),
  ]);

  console.log(todos);
};

//simultaneousData();
