import logo from './logo.svg';
import './App.css';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterOne from './components/HookCounterOne';
import HookMouseMover from './components/HookMouseMover';
import MouseContainer from './components/MouseContainer'
import IntervalCounter from './components/IntervalCounter';
import FetchingData from './components/FetchingData';
import React ,{useReducer} from 'react';
import Test from './components/Test';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ClassCounter from './components/ClassCounter';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/useCallBack/ParentComponent';
import Counter from './components/useMemo/Counter';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialSate = 0

const reducer=(state,action)=>{
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialSate
    default:
      return state
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialSate)
  return (
    <div className="App">
      <Counter/>
      {/* <ParentComponent/> */}
      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingOne/> */}

      {/* <h1>{count}</h1>
      <CountContext.Provider value={{count:count,countAction:dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider> */}

      {/* <CountTwo/> */}
      {/* <CountOne/> */}
      {/* <Test/> */}
      {/* <UserContext.Provider value={{fname : "yash", lanme : "parmar"}}>
        <ChannelContext.Provider value={["bmw","audi","tata"]}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <FetchingData/> */}
      {/* <IntervalCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouseMover/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
    </div>
  );
}

export default App;
