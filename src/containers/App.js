// Third party Library
import Button from "@mui/material/Button";
// Components
import { CustomizedTable } from "../components";
// Helpers
import { getTableRowData } from "../utils/helpers";
// Custom Mock Data
import { customData, TicketHeader } from "../mockData/table";

const BulkActions = ({ onView }) => (
  <Button variant="contained" size="small" color="primary" onClick={onView}>
    View
  </Button>
);

function App() {
  const handleView = () => {
    console.log("view");
  };
  return (
    <div className="app-wrapper">
      <CustomizedTable
        isLoading={false}
        data={getTableRowData(customData, TicketHeader)}
        key="id"
        actions={(row) => <BulkActions onView={handleView} data={row} />}
      />
    </div>
  );
}

export default App;
