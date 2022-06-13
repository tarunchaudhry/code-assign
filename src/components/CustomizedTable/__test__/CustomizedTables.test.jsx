import * as React from "react";
import CustomizedTable from "../CustomizedTable";
import { getTableRowData } from "../../../utils/helpers";
import { customData, TicketHeader } from "../../../mockData/table";
import { RenderWithTheme } from "../../../utils/testHelpers";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

test("Render Without Crashing", async () => {
  render(
    <RenderWithTheme>
      <CustomizedTable
        isLoading={false}
        data={getTableRowData(customData, TicketHeader)}
        key="id"
      />
    </RenderWithTheme>
  );
  expect(screen.getByText("Created On").textContent).toBeTruthy();
  expect(screen.getByText("Ticket ID").textContent).toBeTruthy();
  expect(screen.getByText("Issues").textContent).toBeTruthy();
  expect(screen.getByText("Last Updated").textContent).toBeTruthy();
  expect(screen.getByText("Status").textContent).toBeTruthy();
  expect(screen.getByText("Action").textContent).toBeTruthy();
});
