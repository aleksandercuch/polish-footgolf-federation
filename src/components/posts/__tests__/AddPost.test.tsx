import test, { describe } from "node:test";
import React from "react";
import { AddPost } from "../AddPost";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("post operations", () => {
  render(<AddPost />);

  test("submit fulfilled form", () => {
    // fulfill title
    const titleInput = screen.getByLabelText("Tytuł posta");
    // Simulate user typing into the title input
    fireEvent.change(titleInput, { target: { value: "New Post Title" } });

    // Verify the value
    expect(titleInput).toHaveValue("New Post Title");

    // fulfill image
    // fulfill text
    // click add post
    // get message with post added
  });

  // test("delete post", () => {
  //   //click delete button
  //   // get approciate communicat
  // });
});

// import test, { describe } from "node:test";

// describe("display posts on main page", () => {
//   // Is logged in as admin

//   test("test", () => {
//     // get data
//     // pass it to component
//     // check if passed data is rendered
//   });
// });
