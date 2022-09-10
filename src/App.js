import {Container} from "react-bootstrap";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CharacterScreen from "./Screens/CharacterScreen";
import HomeScreen from "./Screens/HomeScreen";
import CardComponent from "./Components/CardComponent";

function App() {
return(
 <Container>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen></HomeScreen>} />
      <Route path="/:id" element={<CharacterScreen></CharacterScreen>} />
    </Routes>
  </BrowserRouter>
 </Container>
); 
}
/* ? -> if,  : -> else anlamına gelmekte */
export default App;
