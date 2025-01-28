/* eslint-disable react/prop-types */

import DoubbleArrowIcon from "../../assets/iconos/IconoFlechaN.png";
import "./FolderColumn.scss";

const FolderColumn = ({ columnName, items }) => {
  return (
    <div className="parentp">
      <div className="cardHeaderp">
        <h3 className="columnTitlep">{columnName}</h3>
        <img className="iconp doubleArrow" src={DoubbleArrowIcon} />
      </div>
      <div className="linep"></div>
      <div className="itemsParentp">
        {items.map((item) => (
          <div className="itemCardp" key={item.title}>
            <img className="bigIconp" src={item.icon} />
            <div className="smallSub">
              <div>{item.title}</div>
              {item.subtitle && <p className="subtitlep">{item.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderColumn;
