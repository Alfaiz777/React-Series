import AuthProvider from "./contexts/AuthProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </AuthProvider>
      ;
    </>
  );
}

export default App;
