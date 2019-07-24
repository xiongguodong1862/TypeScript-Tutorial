import * as React from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import Article from '../components/Article';
import Classify from '../components/Classify';

class BrowserRouter extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/article'} component={Article}/>
        <Route path={'/classify'} component={Classify}/>
      </div>
    );
  }
}

export default BrowserRouter;
