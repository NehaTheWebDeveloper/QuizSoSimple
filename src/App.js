import './App.css';
import LoginPage from './Screens/Login/Login';
import Main from './Screens/Main/Main';
import Quiz from './Screens/Quiz/Quiz';
import Result from './Screens/Result/Result';
// import SignupPage from './Screens/Signup/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import from 'react-router-dom'

function App() {
  return (
    <div className="">
      {/* <SignupPage/> */}
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<LoginPage/>} />
          <Route path={"/"} element={<Main/>} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/result"} element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
