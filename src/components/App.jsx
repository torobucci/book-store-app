import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Categories from './Routes/Categories';
import LayOut from './LayOut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>

    </Routes>
  );
}
export default App;
