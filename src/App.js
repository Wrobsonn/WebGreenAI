import { Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Signup from "./components/Signup/Signup"
import Signin from "./components/Signin/Signin"
import Main from "./components/Main/Main"
import Login from "./components/Login/index"
import Register from "./components/Register/index"

function App() {

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/" exact element={<Main />} />
      <Route path="/r" exact element={<Register />} />
      <Route path="/l" exact element={<Login />} />
    </Routes>
  )
}

export default App;
