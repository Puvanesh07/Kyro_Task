import Sidebar from "./components/sidebar/Sidebar";
import Form from "./components/form/Form";
import Profile from "./components/profile/Profile";
import "./app.css"


function App() {

  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Form></Form>
      <Profile></Profile>
     </div>
  );
}

export default App;
