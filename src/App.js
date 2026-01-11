import About from './components/pages/About/About';
import SinglePost from './components/pages/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import Home from './components/pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
