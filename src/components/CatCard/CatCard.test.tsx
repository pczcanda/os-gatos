import { render, screen } from "@testing-library/react";
import { Cat } from "../../types";
import CatCard from "./CatCard";

describe("<CatCard /> cat details", () => {
  test("renders cat details", () => {
    const cat: Cat = {
      breeds: [],
      id: "AluKZKrdt",
      url: "https://cdn2.thecatapi.com/images/AluKZKrdt.jpg",
      width: 3000,
      height: 3999,
      sub_id: "my-user-1",
      created_at: "2024-09-23T13:05:51.000Z",
      original_filename: "gato 1.jpeg",
      breed_ids: null,
    };

    render(<CatCard cat={cat} />);

    const CatImage = screen.getByRole("img");
    expect(CatImage).toHaveAttribute("src", cat.url);
  });

  test("displays cat as favourite", () => {
    const cat: Cat = {
      breeds: [],
      id: "AluKZKrdt",
      url: "https://cdn2.thecatapi.com/images/AluKZKrdt.jpg",
      width: 3000,
      height: 3999,
      sub_id: "my-user-1",
      created_at: "2024-09-23T13:05:51.000Z",
      original_filename: "gato 1.jpeg",
      breed_ids: null,
    };

    render(<CatCard cat={cat} isFavourite />);

    const FavIcon = screen.getByLabelText("add to favorites");
    expect(FavIcon).toBeInTheDocument();
  });
});
