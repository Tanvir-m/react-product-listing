import ProductList from './Components/ProductList/ProductList';
import Create from './Components/Create/Create';
import Update from './Components/Update/Update';
import Search from './Components/Search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route
          exact
          path="/update/:id"
          render={(props) => <Update {...props} />}
        ></Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Router>
    </>
  );
}

export default App;
