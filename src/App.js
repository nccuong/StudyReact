import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Login';



function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <LoginForm></LoginForm>
        </div>
      </div>
      
    </div>
  );
}

export default App;
