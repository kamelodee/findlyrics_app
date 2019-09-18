import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Index from './Components/layout/Index'
import Lyrics from './Components/Tracks/Lyrics';


function App() {
    return ( < Router >
        <React.Fragment >
        <Navbar/>
        <div className = "container" >
        <Switch >
            <Route exact path = '/' component={Index} />
            <Route exact path='/Lyrics/track:id' component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>

    );
}

export default App;