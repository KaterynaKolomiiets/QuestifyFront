import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { authSelectors } from 'redux/auth';

function PublicRoute({ children, redirectTo = '/', ...routeProps }) {
  // const isLoggedIn = useSelector(authSelectors.getIsAuthorized);
  
  return (
    <Route {...routeProps}>
        <Redirect to={redirectTo} />
    </Route>
  );
};

export default PublicRoute;

      {/* {isLoggedIn
        ?
        <Redirect to={redirectTo} />
        :
        children      } */}
