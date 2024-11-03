# ts-memoize

TypeScript memoize function

## Usage

Copy the `src/memoize.ts` to your project and use it as follows.

```ts
import { memoize } from './memoize';

const memoizedFunc = memoize(yourFunction);
const result = memoizedFunc(
  // arguments
);
```

You can also see the example usage in the `src/example.ts`.

## Testing

Run jest with ts-jest.

```sh
jest
```
