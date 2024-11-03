import { memoize } from './memoize';

function add(a: number, b: number): number {
  const result = a + b;
  console.info(`add: ${a} + ${b} = ${result}`);
  return result;
}

const memoizedAdd = memoize(add);

// Because of the first execution, run `add` function and cache the result.
// You would see the log text in your console.
console.info(memoizedAdd(1, 2));

// Because of the second execution, return the cached value.
// You wouldn't see the log text in your console.
console.info(memoizedAdd(1, 2));
