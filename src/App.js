import Container from "./components/Container";


import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import "./App.css";


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
