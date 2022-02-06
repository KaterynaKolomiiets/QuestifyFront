import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../redux/user/selectors';

function PrivateRoute({ children, redirectTo = '/auth', ...routeProps }) {
  const user = useSelector(getUser);
  
  return (
    <Route {...routeProps}>
      {
        user.isActivated
          ?
          children
          :
          <Redirect to = {redirectTo} />
      }
    </Route>
  );
}

export default PrivateRoute;