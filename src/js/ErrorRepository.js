export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [403, 'Forbidden'],
      [404, 'Not found'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}
