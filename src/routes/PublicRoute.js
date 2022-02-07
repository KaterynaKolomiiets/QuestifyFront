import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../redux/user/selectors';

function PublicRoute({ children, redirectTo = '/home', restricted = false, ...routeProps }) {
  const user = useSelector(getUser);
  const shouldRedirect = user.isActivated && restricted;

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