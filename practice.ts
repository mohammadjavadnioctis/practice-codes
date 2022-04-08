//TypeScript generic arrow functions


interface Props {
  
}

export const App: React.FC<Props> = (props) => {
  return (
    <>
     <SomeComponent/>
    </>
  );
};




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

//Typescript context boilerplate

import React, { useState, useEffect, createContext, useContext } from 'react';

interface AppContext {
  
  }
  
  const defaultState = { 'TestDefaultState': 'value of the test state' };
  
  export const AppContext = React.createContext<AppContext>(defaultState);




type Props = {
    children: React.ReactNode
}



export  function ContextProvider({children, ...props}: Props) {
    const [ appDefaultState, setAppDefaultState ] = useState(defaultState)
  return (
    <AppContext.Provider value={appDefaultState} >
        {children}
    </AppContext.Provider>
  )
}



export default function useAppContext() {
  return (
    useContext(AppContext)
  )
}

  
