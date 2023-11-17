import axios from "axios";

const baseURL = "https://dummyjson.com/";

const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json;charset=utf8",
  },
});

export { client };
