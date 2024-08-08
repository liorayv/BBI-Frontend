import './App.css';
import ContainerOutsideExample from './components/Appbar';
import DarkExample from './components/Sales';

function App() {
  return (
    <div className="app-background">
      <ContainerOutsideExample />
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <DarkExample />
        </div>
      </div>
    </div>
  );
}

export default App;
