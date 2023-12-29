// var v = 0

// const range = (start: number, stop: number): number[] => new Array(stop - start).fill(0).map((v, i) => i + start)

// console.log(range(2, 10))

const invert = 
(fn) =>
(...args) => -fn(args)

const debounce = <T extends (...args: any[]) => void>
(fn: T, delay = 1000 ) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
  clearTimeout(timer);
  timer = setTimeout(() => fn(...args), delay)
  }
}





