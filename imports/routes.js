import { IndexRoute, Route } from 'react-router';
import AppContainer from './layouts/AppContainer';

/* Pages */
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllTodos from './routes/AllTodos';
import EditTodo from './routes/EditTodo';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterPage}/>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={AllTodos} />
      <Route path='/todo/edit/:id' component={EditTodo} />
    </Route>
  </Route>    
);
