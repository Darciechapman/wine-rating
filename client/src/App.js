import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchWines from './pages/SearchWines';
import SavedWines from './pages/SavedWines';
import AddWines from './pages/addWines'
import AppNavbar from './components/NavBar';

import * as API from './utils/API';

//import context for global state
import SavedWineContext from './utils/SavedWineContext';

function App() {

  //create state for our saved books
  const [savedWineState, setSavedWineState] = useState({
    wines: [],
    getSavedWines: () => {
      API.getSavedWines()
        .then(({ data }) => setSavedWineState({ ...savedWineState, wines: data }));
    }
  });

  //get saved books on load
  useEffect(() => {
    savedWineState.getSavedWines();
  })

  return (
    <Router>
      <>
        <AppNavbar />
          <SavedWineContext.Provider value={savedWineState}>
            <Switch>
              <Route exact path='/' component={SearchWines}></Route>
              <Route exact path='/saved' component={SavedWines}></Route>
              <Route exact path='/add' component={AddWines}></Route>
              <Route render={() => <h1  className='display-2'>Wrong page!</h1>}></Route>
            </Switch>
          </SavedWineContext.Provider>
      </>
    </Router>
  );
}

export default App;