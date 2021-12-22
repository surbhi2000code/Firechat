import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
    {user ? <Chat /> : <Login />}
     
    </>
  );
}

export default App;
