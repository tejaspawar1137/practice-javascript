import styled from "styled-components";
import LandingPage from "./components/LandingPage/LandingPage";
// import AI from "./AI/AI"

// import ProductGrid from "./Performance/IntersectionObserver/IntersectionObserver"


// import ProductList from "./Performance/ContentVisability/ContentVisability"

// import VirtualizedList from "./Tasks/VirtualizedList"

// import DebouncingSearch from "./Tasks/DebouncingSearch"

// import UseMemo from "./hooks/UseMemo"

// import UseRef from "./hooks/UseRef"

// import Login from "./components/Login"
// import Profile from "./components/Profile"
// import UseEffect from "./hooks/UseEffect"
// import UseReducer from "./hooks/UseReducer"
// import UseState from "./hooks/UseState"

// import Todolits from "./TodoList/Todolits"

// import PromiseAllSettled from "./Promises/PromiseAllSettled"

// import AsyncAwait from "./async-await/Index"
// import PromiseAll from "./Promises/PromiseAll"
// import PromiseRace from "./Promises/PromiseRace"

// import EventLoopPromises from "./EventLoop/EventLoopPromises"

// import EventLoopSetTimeout from "./EventLoop/EventLoopSetTimeout"

// import UseCallback from "./Tasks/UseCallback"

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0F172A;
`;

const App = () => {
  return (
    <AppContainer>
      <LandingPage />
    </AppContainer>
  )
}

export default App