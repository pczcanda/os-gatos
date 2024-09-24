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

    render(<CatCard cat={cat} favouriteId="1234" />);

    const favourite = screen.getByTestId("favourite-cat");
    const unfavourite = screen.queryByTestId("unfavourite-cat");

    expect(favourite).toBeInTheDocument();
    expect(unfavourite).not.toBeInTheDocument();
  });

  test("displays cat score", () => {
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

    render(<CatCard cat={cat} votesCount={12} />);

    const votes = screen.getByTestId("cat-votes");
    expect(votes).toHaveTextContent(`Score: 12`);
  });
});
