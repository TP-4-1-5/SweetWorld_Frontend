import $api from "../http";

export default class CommentsService {
  static async getComment(id) {
    return await $api.get(`/comments/getcomment?id=${id}`);
  }

  static async addComment(product, username, description, product_id) {
    console.log(product_id)
    return await $api.post(`/comments/post`, {
      product, username, description, product_id
    })
  }

  static async removeComment(id, product_id) {
    return await $api.post(`/comments/delete`, {
      id, product_id
    })
  }
}