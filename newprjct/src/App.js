import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostForm from './Pages/PostForm';
import SubmittedData from './Pages/SubmittedData';

function App() {
  return (
    <div className="App">
  
  <Routes>
      <Route path='/' element={<PostForm/>}/>
      <Route path='/sd' element={<SubmittedData/>}/>
      </Routes>
    </div>
  );
}

export default App;
