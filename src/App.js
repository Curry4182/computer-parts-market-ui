import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="container-fluid">
          <div className="row justify-content-center m-4">
              <h1 className="text-center">Computer Parts Market</h1>
          </div>
          <div className="card">
              <div className="row">
                  <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                      <nav className="navbar navbar-light bg-light">
                          <span className="navbar-brand mb-0 h1">Navbar</span>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
