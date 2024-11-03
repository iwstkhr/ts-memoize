import { afterEach, describe, expect, jest, test } from '@jest/globals';
import { memoize } from './memoize';

/** Setup */
afterEach(() => {
  jest.clearAllMocks();
});

describe('memoize', () => {
  describe('When normal function', () => {
    const add = jest.fn((a: number, b: number) => {
      return a + b;
    });

    test('At the first time call, should return an actual value', async () => {
      const memoizedAdd = memoize(add);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });

    test('At the second time call, should return the cached value', async () => {
      const memoizedAdd = memoize(add);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });

    test('When the arguments are changed, should return an actual value', async () => {
      const memoizedAdd = memoize(add);
      expect(memoizedAdd(1, 2)).toBe(3);
      expect(memoizedAdd(3, 4)).toBe(7);
      expect(add.mock.calls).toHaveLength(2);
    });
  });

  describe('When promise function', () => {
    const add = jest.fn(async (a: number, b: number) => {
      return a + b;
    });

    test('At the first time call, should return an actual value', async () => {
      const memoizedAdd = memoize(add);
      expect(await memoizedAdd(1, 2)).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });

    test('At the second time call, should return the cached value', async () => {
      const memoizedAdd = memoize(add);
      expect(await memoizedAdd(1, 2)).toBe(3);
      expect(await memoizedAdd(1, 2)).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });

    test('When the arguments are changed, should return an actual value', async () => {
      const memoizedAdd = memoize(add);
      expect(await memoizedAdd(1, 2)).toBe(3);
      expect(await memoizedAdd(3, 4)).toBe(7);
      expect(add.mock.calls).toHaveLength(2);
    });
  });

  describe('When a function has no arguments', () => {
    const add = jest.fn(() => {
      return 1 + 2;
    });

    test('At the first time call, should return an actual value', async () => {
      const memoizedAdd = memoize(add);
      expect(memoizedAdd()).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });

    test('At the second time call, should return the cached value', async () => {
      const memoizedAdd = memoize(add);
      expect(memoizedAdd()).toBe(3);
      expect(memoizedAdd()).toBe(3);
      expect(add.mock.calls).toHaveLength(1);
    });
  });
});
