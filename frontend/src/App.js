import "./App.css";
import { Provider } from "./context/StoryContext";
import Home from "./Components/Home";
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Error4001 from './Components/Error400_1';
import Error4002 from './Components/Error400_2';
import Error4041 from './Components/Error404_1';
import Error4042 from './Components/Error404_2';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/error-400-1" element={<Error4001 />} />
          <Route path="/error-400-2" element={<Error4002 />} />
          <Route path="/error-404" element={<Error4041 />} />
          <Route path="*" element={<Error4042 />} />
          <Route path="/uploadDocument" element={<DocumentUpload/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
