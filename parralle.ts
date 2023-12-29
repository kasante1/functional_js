// function fib(n: number): number {
//   return n < 2 ? n : fib(n - 1) + fib(n - 1)
// }
//
// const worker = new Worker(
//   "http://localhost:8887/test_fib_worker.js"
// );
//
//   onmessage = (e: MessageEvent<number>)=> postMessage(fib(e.data));;
//

// const myGet = (): number => performance.now()

// const myPut = (
//     text: string,
//     name: string,
//     toStart: number,
//     tEnd: number
// ): void => console.log(
//     `${name} - ${text} ${tEnd - toStart} ms`
// )

// function addTiming<T extends (...args: any[]) => any>(
//     fn: T,
//     { getTime, output } = {
//         getTime: myGet,
//         output: myPut
//     }
// ): (...args: Parameters<T>) => ReturnType<T> {
//     return (...args: Parameters<T>): ReturnType<T> => {
//         const tStart = getTime();

//         try {
//             const valueToReturn = fn(...args);
//             output("normal exit", fn.name, tStart, getTime());
//             return valueToReturn;
//         } catch (thrownError) {
//             output("exception!!", fn.name, tStart, getTime());
//             throw thrownError;
//         }
//     }
// }



// const memoize = <T extends (x: number) => any>(fn: T):
//     ((x: number) => ReturnType<T>) => {
//     const cache = {} as Record<number, ReturnType<T>>;
//     return (x) => x in cache ? cache[x] : (cache[x] = fn(x));
// };


// function fib(n: number): number {
//     if (n == 0) {
//         return 0;
//     }else if (n == 1) {
//         return 1;
//     } else {
//         return fib(n - 2) + fib(n - 1);
//     }
// }


// const testMemoFib = 
// memoize((n: number) => fib(n));

const hello: (x: string) => (x: string) => string  =
 msg  => (msg2: string): string  => msg + msg2

let t = hello("another one ! ")

let h = t(" mo hits !!")

console.log(h)

// console.log(hello("merry ")(" christmas"))
