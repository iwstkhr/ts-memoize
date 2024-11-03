// biome-ignore lint/suspicious/noExplicitAny:
export function memoize<T extends (...args: any) => any>(func: T) {
  let prevArgs: string;
  let prevValue: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    const currentArgs = JSON.stringify(args);
    if (prevArgs === currentArgs) {
      return prevValue;
    }

    const currentValue = func(...args);

    prevArgs = currentArgs;
    prevValue = currentValue;
    return prevValue;
  };
}
