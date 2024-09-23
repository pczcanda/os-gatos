import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="App">
              <header className="App-header">
                <h1>Os Gatos</h1>
              </header>
              <main className="app">
                <Outlet />
              </main>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
