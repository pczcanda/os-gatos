import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import CatsPage from "../pages/CatsPage/CatsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UploadPage from "../pages/UploadPage/UploadPage";
import "./App.css";
import { Box } from "@mui/material";

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
              <Box component="main" className="app" p={4}>
                <Outlet />
              </Box>
            </div>
          }
        >
          <Route
            path={APP_ROUTES.ROOT}
            element={<CatsPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path={APP_ROUTES.UPLOAD}
            element={<UploadPage />}
            errorElement={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
