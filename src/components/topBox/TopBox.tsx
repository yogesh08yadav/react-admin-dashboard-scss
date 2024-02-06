import "./topBox.scss";
import { topDealUsers } from "../../data";
const TopBox = () => {
  return (
    <div className="topbox">
      <h2>Hot Deals</h2>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItems" key={item.id}>
            <div className="user">
              <img
                src={item.img}
                alt=""
              />
              <div className="detail">
                <span>{item.username}</span>
                <span>{item.email}</span>
              </div>
            </div>
            <div className="amount">
              <span>${item.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
