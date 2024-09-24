import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CatsPage from "./CatsPage";

describe("Cats Listing Page", () => {
  test("renders list of Cats", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock)
      .mockResolvedValueOnce({
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
      }) // fetch images
      .mockResolvedValueOnce({
        json: async () => [
          {
            id: 100038507,
            image_id: "E8dL1Pqpz",
            sub_id: null,
            created_at: "2022-07-10T12:24:39.000Z",
            image: {
              id: "E8dL1Pqpz",
              url: "https://cdn2.thecatapi.com/images/E8dL1Pqpz.jpg",
            },
          },
        ],
      }) // fetch favourites
      .mockResolvedValueOnce({
        json: async () => [
          {
            id: 587093,
            image_id: "2bbSbBC-v",
            sub_id: "demo-474a90",
            created_at: "2022-07-31T09:11:45.000Z",
            value: 1,
            country_code: "JP",
            image: {
              id: "2bbSbBC-v",
              url: "https://cdn2.thecatapi.com/images/2bbSbBC-v.jpg",
            },
          },
        ],
      }); // fetch votes

    render(<CatsPage />, { wrapper: BrowserRouter });

    const catItems = await screen.findAllByTestId(/cat-card-/i);

    expect(catItems).toHaveLength(1);
  });
});
