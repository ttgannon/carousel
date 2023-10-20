import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../Carousel"
import TEST_IMAGES from "./_testCommon";

it("renders carousel without crashing", function() {
    render(<Carousel photos={TEST_IMAGES} title={"Test"}/>);
  });


it("matches Snapshot", function () {
    const {asFragment} = render(<Carousel photos={TEST_IMAGES} title={"Test"}/>);
    expect(asFragment()).toMatchSnapshot();
})

