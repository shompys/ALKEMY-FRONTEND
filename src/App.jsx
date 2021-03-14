// import styled from 'styled-components';
// import {} from './styled';
import Routes from './routes/Routes';
import styled from 'styled-components';


function App() {
  return (
    <ContentMaster>
      <Routes />
    </ContentMaster>
  );
}

const ContentMaster = styled.div`
  background-color: #f3f3f3;
`
export default App;
