import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'


export default function AuthPage({setUser}) {
    
  return (
    <>
    <body>
      <h1 id='AuthPageH1'>Register/LogIn</h1>
      <div id='auth'>
        <div className='sign-up'>
          <SignUpForm setUser ={setUser}/>
        </div>
        <div className='login'>
          <LoginForm setUser ={setUser}/>
        </div>
        
      </div>
    </body>
    </>
  );
}