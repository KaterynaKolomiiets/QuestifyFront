import "./App.css";
import Container from "./components/Container";
import AuthPage from "./views/AuthPage";

import Card from "./components/Card";
import ButtonAddCard from "./components/ButtonAddCard";
import DoneSection from "./components/DoneSection";

function App() {
  return (
    <div className="App">
      <Container>
        <AuthPage />
            
        <Card />
        <ButtonAddCard />
<DoneSection/>
      </Container>
    </div>
  );
}

export default App;
