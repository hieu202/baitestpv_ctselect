import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <div>
      <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<AddStudentComponent />} />
          <Route path = "/add-student/:id" element={<AddStudentComponent />}></Route>
        </Routes>
      </Router>
    </div>
      
    </div >
  );
}

export default App;
