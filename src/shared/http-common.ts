import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7279",
  headers: {
    "Content-type": "application/json",
    "accept": "*/*",
  }
});