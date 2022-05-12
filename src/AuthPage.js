import { useState } from 'react';
import { getUser, signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setEmail, setToken }) {
  // you'll need to track the form state of the email and password
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  
  async function handleSignIn(e) {
    e.preventDefault();    
    // sign the user in using the form state
    await signIn(formEmail, formPassword);    
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    const {
      access_token,
      user : { email, }
    } = getUser();
    setEmail(email);
    setToken(access_token);
  }
    
  async function handleSignUp(e) {
    // sign the user up using the form state
    e.preventDefault();
    signUp(formEmail, formPassword);
    const {
      access_token,
      user : { email, }
    } = getUser();
    setEmail(email);
    setToken(access_token);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }
  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user up using the function defined above */}
      <form onSubmit={handleSignUp}>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
      </form>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={handleSignIn}>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
  




//   return (
//     <div className='auth'>
//       <h1><em>Boardzo</em></h1>
//       {/* on submit, sign the user in using the function defined above */}
//       <form onSubmit={handleSignIn}>
//         <label>
//             Email
//           {/* on change, update the form state for email */}
//           <input required type="email" name="email" />
//         </label>
//         <label>
//             Password
//           {/* on change, update the form state for password */}
//           <input required type="password" name="password" />
//         </label>
//         <button>Sign In</button>
//         {/* on clicking sign up, sign the user up using the function defined above */}
//         <button type="button">Sign Up</button>
//       </form>
//     </div>
//   );
// }
