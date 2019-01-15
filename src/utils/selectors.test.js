import { entities } from './selectors';

test('selector gives entities state', () => {
  const naover = ['photo'];
  const state = { naover };
  const res = entities(state);
  expect(res).toBe(naover.entities);
});
