import './App.css';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
