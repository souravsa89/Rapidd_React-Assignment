import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Page10 from "./Pages/Page10";
import Page11 from "./Pages/Page11";
import Page12 from "./Pages/Page12";
import Page13 from "./Pages/Page13";
import Page14 from "./Pages/Page14";
import Page15 from "./Pages/Page15";
import Page16 from "./Pages/Page16";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
        <Route path="/page7" component={Page7} />
        <Route path="/page8" component={Page8} />
        <Route path="/page9" component={Page9} />
        <Route path="/page10" component={Page10} />
        <Route path="/page11" component={Page11} />
        <Route path="/page12" component={Page12} />
        <Route path="/page13" component={Page13} />
        <Route path="/page14" component={Page14} />
        <Route path="/page15" component={Page15} />
        <Route path="/page16" component={Page16} />
      </Switch>
    </Router>
  );
};

export default App;
