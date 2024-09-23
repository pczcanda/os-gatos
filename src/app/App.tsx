import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import CatsPage from "../pages/CatsPage/CatsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        >
          <Route path="/" element={<CatsPage />} errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
