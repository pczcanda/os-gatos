import { screen } from "@testing-library/react";
import { APP_ROUTES } from "../../constants";
import { renderWithBrowserRoute } from "../../tests/utils";
import UploadPage from "./UploadPage";

describe("UploadPage", () => {
  test("displays page intro", () => {
    // renderWithBrowserRoute(<UploadPage />, { startingUrl: APP_ROUTES.UPLOAD });
    // const description = screen.getByTestId("upload-page-description");
    // expect(description).toBeInTheDocument();
  });
});
