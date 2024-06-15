import Chart1 from "../Piechart/Chart1";
import FDCards from "../fdCards/FDCards";
import "./Body.css";

const Body = () => {
  return (
    <div className="body-container">
      <h2>Welcome, Johan Paul</h2>
      <Chart1/>
      <FDCards/>
    </div>
  )
}

export default Body;
