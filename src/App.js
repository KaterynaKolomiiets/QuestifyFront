import "./App.css";
import Container from "./components/Container";
import AuthPage from "./views/AuthPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <Container>
        <AuthPage />
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
