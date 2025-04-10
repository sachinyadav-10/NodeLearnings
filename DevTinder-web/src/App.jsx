import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Feed from "./components/Feed.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import appStore from "./utils/appStore.js"
import { Provider } from 'react-redux';
import Profile from "./components/Profile.jsx";
import Connections from "./components/Connections.jsx";
import Requests from "./components/Requests.jsx";
function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/connections" element={<Connections/>}/>
            <Route path="/requests" element={<Requests/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
