import Utkarsh from "../Utkarsh";
import Tick1 from "../Tick1";
import "./FDCards.css";
import Bajaj from "../Bajaj";
import Tick2 from "../Tick2";
import Shriram from "../Shriram";
import Tick3 from "../Tick3";
import Mahindra from "../Mahindra";

const FDCards = () => {
  return (
    <>
      <div className="main-container">
        <div className="card-div">
          <div className="inner-div">
            <div className="logo-div">
              <Utkarsh />
              <h4>Utkarsh Small Finance Bank</h4>
            </div>
            <div className="tag-container">
              <div className="first-tag">
                <Tick1 />
                <p>Highest Interest Rate</p>
              </div>
              <div className="sec-tag">
                <Tick1 />
                <p>RBI Insuranced</p>
              </div>
            </div>
            <div className="button-container">
              <div>
                <p>Interest Upto</p>
                <p>9.10% p.a</p>
              </div>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>

        <div className="card-div">
          <div className="inner-div1">
            <div className="logo-div">
              <Bajaj />
              <h4>Bajaj Finserve</h4>
            </div>
            <div className="tag-container">
              <div className="BJGfirst-tag">
                <Tick2 />
                <p>Crisil AAA Rated</p>
              </div>
              <div className="BJGsec-tag">
                <Tick2 />
                <p>No Video KYC Required</p>
              </div>
            </div>
            <div className="button-container">
              <div>
                <p>Interest Upto</p>
                <p>8.80% p.a</p>
              </div>
              <button className="btn1">Book Now</button>
            </div>
          </div>
        </div>

      </div>

      <div className="second-container">
        <div className="card-div">
          <div className="inner-div2">
            <div className="logo-div">
              <Shriram />
              <h4>Shriram Finance</h4>
            </div>
            <div className="tag-container">
              <div className="BJGfirst-tag1">
                <Tick3 />
                <p>Crisil AAA Rated</p>
              </div>
              <div className="BJGsec-tag2">
                <Tick3 />
                <p>No Video KYC Required</p>
              </div>
            </div>
            <div className="button-container">
              <div>
                <p>Interest Upto</p>
                <p>8.80% p.a</p>
              </div>
              <button className="btn2">Book Now</button>
            </div>
          </div>
        </div>

        <div className="card-div">
          <div className="inner-div3">
            <div className="logo-div">
              <Mahindra />
              <h4>Mahindra Finance</h4>
            </div>
            <div className="tag-container">
              <div className="BJGfirst-tag3">
                <Tick3 />
                <p>Crisil AAA Rated</p>
              </div>
              <div className="BJGsec-tag3">
                <Tick3 />
                <p>No Video KYC Required</p>
              </div>
            </div>
            <div className="button-container">
              <div>
                <p>Interest Upto</p>
                <p>8.80% p.a</p>
              </div>
              <button className="btn3">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FDCards;
