import { Provider } from 'react-redux'
import './App.css';
import {
  BrowserRouter as Router ,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import AddTodo from './pages/AddTodo'
import store from './store'

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="m-4">
            <Link className="mr-3" to="/">Home</Link>
            <Link to="/addTodo">Add New Todo</Link>

          </div>

          <Switch>
            <Route component={AddTodo} path="/addTodo"></Route>
            <Route component={Home} path="/"></Route>
          </Switch>
        </Router>
      </Provider>
    
  );
}

export default App;
