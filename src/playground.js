const axios = require("axios");

const url = "http://localhost:3000/jobs";

const fetchJobsV1 = () => {
  axios.get(url).then((response) => {
    console.debug(response.data);
  });
};

// fetchJobsV1();

const fetchJobsV2 = async () => {
  const response = await axios.get(url);
  console.debug(response.data);
};

// fetchJobsV2();

const sushi = [
  "Tuna",
  "Salmon",
  "Yellowtail",
  "Eel",
  "Shrimp",
  "Octopus",
  "Uni",
];

console.debug(sushi.slice());
console.debug(sushi.slice(2)); // with left boundary, inclusive
console.debug(sushi.slice(2, 4)); // with right boundary, exclusive
