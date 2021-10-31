import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    // const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
//Destructure from Context API
  const { user, signInUsingGoogle} = useAuth();
  
console.log(user);
const handleGoogleSignIn = () => {
  signInUsingGoogle().then(() => {
    history.push(redirect_uri);
    
  });
};
    return (
    <div>
        <div className="login">
          <h1>Please Login</h1>
          <p>{user?.displayName}</p>
          <button onClick={handleGoogleSignIn} className="btn btn-success">Sign in with google🔎</button>
          <br />
        </div>
      </div>
     
    );
};

export default Login;