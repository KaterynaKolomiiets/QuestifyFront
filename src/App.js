import Container from "./components/Container";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ModalNewCard from "./components/modal/ModalNewCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <AuthPage />
        <HomePage />
        <ModalNewCard />
      </Container>
    </div>
  );
}

export default App;
