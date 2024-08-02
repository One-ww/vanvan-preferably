import React, { memo, useState } from "react";
import classNames from "classnames";

import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => {
                itemClickHandle(item, index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
