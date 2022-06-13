import * as React from "react";
import { render, screen } from "@testing-library/react";

import NotFound from "../NotFound";
import { RenderWithTheme } from "../../../utils/testHelpers";

test("Render Without Crashing", async () => {
  render(
    <RenderWithTheme>
      <NotFound text={"No Data Found"} />
    </RenderWithTheme>
  );
  expect(screen.getByText("No Data Found").textContent).toBeTruthy();
});
