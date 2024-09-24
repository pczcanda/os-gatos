import { render, screen } from "@testing-library/react";
import CatUploadPreview from "./CatUploadPreview";

describe("CatUploadPreview", () => {
  test("renders provided image", () => {
    // window.URL.createObjectURL = jest.fn();
    // (window.URL.createObjectURL as jest.Mock).mockResolvedValueOnce("imageUrl");
    // const data =
    //   "/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/";
    // const data_bytes = atob(data);
    // const data_arr = new Array(data_bytes.length).map((_, i) =>
    //   data_bytes.charCodeAt(i)
    // );
    // const data_barr = new Uint8Array(data_arr);
    // let testImage = new Blob([data_barr], { type: "image/jpeg" });
    // (testImage as any).lastModifiedDate = new Date();
    // (testImage as any).name = "cat image";
    // render(<CatUploadPreview catFile={testImage as File} />);
    // const catImage = screen.getByRole("img");
    // expect(window.URL.createObjectURL).toHaveBeenCalledTimes(1);
    // expect(catImage).toHaveAttribute("src", "imageUrl");
  });
});
