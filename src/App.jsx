import Sidebar from "./components/sidebar";
import FormContainer from "./screens";
import useApp from "./hooks/useApp";
import "./App.css";

function App() {
  const { state, setState } = useApp();

  return (
    <div className="container">
      <Sidebar />
      <FormContainer />
    </div>
  );
}

export default App;
