let getArray = <T>(items: T[]): T[] => {
    return new Array<T>().concat(items)
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);
myNumArr.push(1)
console.log(myNumArr)
