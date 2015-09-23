import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Blank from 'routes/blank';
import Logout from 'components/auth/app-logout';
import About from 'routes/about';
import Dash from 'routes/dashboard';

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Blank} />
      <Route path='/logout' component={Logout} />
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dash} />
    </Router>
  );
};
