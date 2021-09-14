import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import { Projects } from "./Pages/Project";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import Expo from "./components/Expo";
import Creation from "./Pages/Create";

const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("projet-1");
            }, 500);
          }
          break;
        case url + "projet-1":
          wheelRouter("projet-2", "");
          break;
        case url + "projet-2":
          wheelRouter("projet-3", "projet-1");
          break;
        case url + "projet-3":
          wheelRouter("projet-4", "projet-2");
          break;
        case url + "projet-4":
          wheelRouter("contact", "projet-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("projet-4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/projet/:id" component={Projects} />
        <Route path="/expo/:id" component={Expo} > <Expo /></Route>
        <Route path="/create" component={Creation} > <Creation/></Route>
        <Route path="/contact" component={Contact} />
        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
