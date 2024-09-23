import { Box } from "@mui/material";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import CatsPage from "../pages/CatsPage/CatsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UploadPage from "../pages/UploadPage/UploadPage";
import { headerSx } from "./App.styles.";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Box className="app-layout">
              <Box component="header" className="header" sx={headerSx}>
                <h1 className="header__title">The Gatos</h1>
              </Box>
              <Box component="main" className="main">
                <Outlet />
              </Box>
            </Box>
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
