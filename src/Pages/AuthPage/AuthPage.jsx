import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './AuthPage.css'


export default function AuthPage({setUser}) {

  return (
    <>
    <main>
      <h1 id='AuthPageH1'>Register/LogIn</h1>
      <div id='auth'>
        <div className='sign-up'>
          <SignUpForm setUser ={setUser}/>
        </div>
        <div className='login'>
          <LoginForm setUser ={setUser}/>
        </div>

      </div>
    </main>
    </>
  );
}