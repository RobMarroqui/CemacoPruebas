import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ShowProducts from './components/ShowProducts'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/ShowProducts' element={<ShowProducts></ShowProducts>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
