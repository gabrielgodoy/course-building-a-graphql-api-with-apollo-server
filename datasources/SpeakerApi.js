const { RESTDataSource } = require('apollo-datasource-rest');

// GraphQL is fetching from REST API here
class SpeakerApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  async getSpeakers() {
    const data = await this.get('/');
    return data;
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

module.exports = SpeakerApi;
