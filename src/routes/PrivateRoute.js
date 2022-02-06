import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { authSelectors } from 'redux/auth';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  // const isLoggedIn = useSelector(authSelectors.getIsAuthorized);

  return (
    <Route {...routeProps}>
      children
    </Route>
  );
}

export default PrivateRoute;

//       {
//         isLoggedIn
//         ?
//         children
//         :
//   <Redirect to={redirectTo} />
// }