import axios from "axios";

export const API_URL = "http://51.250.30.255:30/";

const $api = axios.create({
  baseURL: API_URL
})

export default $api;