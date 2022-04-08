//TypeScript generic arrow functions
let getArray = <T>(items: T[]): T[] => {
    return new Array<T>().concat(items)
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);
myNumArr.push(1)
console.log(myNumArr)


const foo = <T,>(x: T) => x;

//forwarding refs in typescript


const Component = React.forwardRef<RefType, PropsType>((props, ref) => {
  return someComponent;
});

const Search = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} type="search" />;
});

