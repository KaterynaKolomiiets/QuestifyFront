import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsActivated } from '../redux/user/selectors';

function PublicRoute({ children, redirectTo = '/home', restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(getIsActivated);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {
        shouldRedirect
          ?
          <Redirect to = {redirectTo} />
          :
          children
      }
    </Route>
  );
};

export default PublicRoute;