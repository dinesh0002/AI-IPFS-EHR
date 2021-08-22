import './App.css';
import styled from 'styled-components'
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

function App() {
  return (
  <AppContainer> 
    <AccountBox /> 
  </AppContainer>
  );
}

export default App;