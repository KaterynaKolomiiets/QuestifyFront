import "./App.css";
import Container from "./components/Container";
import AuthPage from "./views/AuthPage";

import Card from "./components/Card";
import ButtonAddCard from "./components/ButtonAddCard";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AuthPage />

        <Card />
        <ButtonAddCard />
      </Container>
    </div>
  );
}

export default App;
