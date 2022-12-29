import ErrorRepository from '../ErrorRepository';

test('Получаем ошибку с кодом 404', () => {
  const error = new ErrorRepository();
  expect(error.translate(404)).toBe('Not found');
});

test('Получаем сообщение о несуществующей ошибке', () => {
  const error = new ErrorRepository();
  expect(error.translate(405)).toBe('Unknown error');
});
