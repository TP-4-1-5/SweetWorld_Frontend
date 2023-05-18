import axios from "axios";

export const API_URL = "http://158.160.4.158:30/";

const $api = axios.create({
  baseURL: API_URL
})

export default $api;