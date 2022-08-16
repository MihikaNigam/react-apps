import axios from "axios";

//default method to create axios object
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ccN5-iFogUGENeJwC2hbEgQL2cLSfs8eU2xclsFcGPg",
  },
});
