import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((list) => (
            <Link to={list.url} className="listItem" key={list.id}>
              <img src={list.icon} alt="" />
              <span>{list.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
