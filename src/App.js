import Container from './Container';
import { UserModeProvider } from './context/UserMode';
import './App.css';

function App() {
  return (
  <>
    <UserModeProvider>
      <Container />
    </UserModeProvider>
  </>
  );
}

export default App;
