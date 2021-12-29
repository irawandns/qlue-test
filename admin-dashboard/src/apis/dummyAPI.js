import axios from "axios";

export default axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
  });