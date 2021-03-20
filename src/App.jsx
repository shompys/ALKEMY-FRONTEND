import Routes from './routes/Routes';
import styled from 'styled-components';


function App() {
  return (
    <Contentmaster>
      <Routes />
    </Contentmaster>
  );
}

const Contentmaster = styled.div`
  background-color: #f3f3f3;
  min-width: 360px;
`
export default App;
