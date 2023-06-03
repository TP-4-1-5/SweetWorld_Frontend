import axios from "axios";

export const API_URL = "http://84.201.131.3:3000/";

const $api = axios.create({
  baseURL: API_URL
})

export default $api;