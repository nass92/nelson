import TXT from "../CreateNFT/Text";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react"
import Exp from "../SeeNFT/Expo";

const GridText = () => {
  return (

    <Router>

      <Switch>

        <Box p="170" mt="-130" >
          <Route path='/' />
          <Route path='/creation' exact component={TXT} />

          <Route exact path='/expo' component={Exp}>
            <Exp />
          </Route>
        </Box>

      </Switch>

    </Router>




  );
};

export default GridText;