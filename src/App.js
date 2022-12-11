import './App.css';
import SignIn from './components/SignIn/SignIn';
import { auth } from './firebase';
import TwitterMain from './TwitterMain';
import { useAuthState } from "react-firebase-hooks/auth"


function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <TwitterMain /> : <SignIn />}
    </div>
  );
}

export default App;
