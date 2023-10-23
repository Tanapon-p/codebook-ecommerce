import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
