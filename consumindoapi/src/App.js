import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Post from './pages/post/post';
import Edit from './pages/edit/edit';
import Feed from './pages/feed/feed';
import Lermais from './pages/lermais/lermais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="post" element={<Post/>} />
        <Route path="edit" element={<Edit />} />
        <Route exact path="/" element={<Feed />} />
        <Route path="lermais" element={<Lermais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
