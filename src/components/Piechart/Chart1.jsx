import FDMaturityTimeline from "../FDMaturityTimeline/FDMaturityTimeline";
import "./Chart1.css";
import { PieChart } from "@mui/x-charts/PieChart";

const Chart1 = () => {
    return (
      <div className="chart-container">
        <div className="pie-container">
        <div className="fd-option">
          <h3>Your FD Portfolio</h3>
          <select id="options">
            <option value="depositAmount">Deposit Amt</option>
            <option value="interestRate">Interest Rate</option>
          </select>
        </div>

        <div className="pie-chart">
          <PieChart
            const
            colors={["#4A4ED4", "#FA9D17", "#74A700", "#59CBD3"]}
            series={[
              {
                data: [
                  { id: 0, value: 25000, label: "Bajaj Finserv" },
                  { id: 1, value: 20000, label: "Shriram Finance" },
                  { id: 2, value: 15000, label: "Mahindra Finance" },
                  { id: 3, value: 40000, label: "Utkarsh Finance" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
        </div>
        <div className="fd-chart">
          <FDMaturityTimeline/>
        </div>
      </div>
  );
};

export default Chart1;
