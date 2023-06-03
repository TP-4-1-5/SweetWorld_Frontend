import $api from "../http";

export default class UsersService {
  static async login(username, password) {
    return await $api.post('/users/login', {
      "username": username,
      "password": password,
    });
  }

  static async registration(username, password) {
    return await $api.post('/users/registration', {
      "username": username,
      "password": password,
    });
  }

  static async getFavoriteProducts(username) {
    return await $api.get(`/users/getFavorites?username=${username}`);
  }
}