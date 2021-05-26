import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./component/pages/Main";
import About from "./component/pages/About";
import Reference from "./component/pages/Reference";
import Youtube from "./component/pages/Youtube";
import Script from "./component/pages/Script";
import Portfolio from "./component/pages/Portfolio";
import Contact from "./component/pages/Contact";

function App(){
    return (
        <Router>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/reference" exact component={Reference} />
            <Route path="/youtube" exact component={Youtube} />
            <Route path="/script" exact component={Script} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
        </Router>
    );
}

export default App;