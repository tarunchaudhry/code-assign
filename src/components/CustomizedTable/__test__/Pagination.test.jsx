import * as React from "react";
import { render } from "@testing-library/react";
import Pagination from "../Pagination";
import { RenderWithTheme } from "../../../utils/testHelpers";

const pagination = {
  totalDocs: 10,
  limit: 10,
  page: 1,
};

test("Render Without Crashing", async () => {
  const handlePageChange = jest.fn();
  const handleRowChange = jest.fn();
  const header = [];
  render(
    <RenderWithTheme>
      <Pagination
        colSpan={header && header.length + 1}
        pagination={pagination}
        handlePageChange={handlePageChange}
        handleRowChange={handleRowChange}
      />
    </RenderWithTheme>
  );
});
