import ContainerComponent from "./components/ContainerComponent";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <ContainerComponent />;
    </ShoppingCartProvider>
  );
}

export default App;
