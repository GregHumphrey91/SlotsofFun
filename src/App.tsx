import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "semantic-ui-css/semantic.min.css";
import "./assets/CSS/index.css";

const App = () => {
  return (
    <div className='container'>
      <Route exact path='/' component={Home} />
    </div>
  );
};

export default App;
