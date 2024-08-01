import React, { memo } from "react";

import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo(() => {
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div className="item" key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
