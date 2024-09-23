import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CatsPage from "./CatsPage";

describe("Cats Listing Page", () => {
  test("renders list of Cats", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [
        {
          id: "ebv",
          url: "https://cdn2.thecatapi.com/images/ebv.jpg",
          width: 176,
          height: 540,
          breeds: [],
          favourite: {},
        },
      ],
    });

    render(<CatsPage />, { wrapper: BrowserRouter });

    const catItems = await screen.findAllByTestId(/cat-/i);

    expect(catItems).toHaveLength(1);
  });
});
