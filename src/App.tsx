import "./App.css";
import { Dashboard } from "./components/dashboard";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
