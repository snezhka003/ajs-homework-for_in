import orderByProperties, { character, rulesOfOrder } from '../app';

test('test that hasOwnProperty', () => { // писала этот тест специально, чтобы протестить 15 строку, но покрытие все равно пишет, что она не покрыта. Не знаю, в чем дело
  const expection = () => {
    for (const item in character) {
      if (Object.prototype.hasOwnProperty.call(character, item));
    }
  };
  expect(expection).toBeTruthy();
});

test('test order by properties', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const received = orderByProperties(character, rulesOfOrder);

  expect(received).toEqual(expected);
});
