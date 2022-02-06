import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsActivated } from '../redux/user/selectors';

function PrivateRoute({ children, redirectTo = '/auth', ...routeProps }) {
  const isLoggedIn = useSelector(getIsActivated);
  
  return (
    <Route {...routeProps}>
      {
        isLoggedIn
          ?
          children
          :
          <Redirect to = {redirectTo} />
      }
    </Route>
  );
}

export default PrivateRoute;