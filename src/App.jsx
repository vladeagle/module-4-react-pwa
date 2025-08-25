import "./App.css";
import { AuthProvider } from "@contexts/AuthProvider";
import { Header } from "@components/Header/";
import { Layout } from "@components/Layout/";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header />
        <Layout />
      </div>
    </AuthProvider>
  );
}

export default App;
