import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(
        '/marvel',
        {
          replace: true
        }
      );
  }

  return (
    <div className="container">
      <h1>LoginScreen</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}

export default LoginScreen