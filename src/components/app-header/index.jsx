import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./children-comp/header-left";
import HeaderCenter from "./children-comp/header-center";
import HeaderRight from "./children-comp/header-right";
import useScrollPosition from "@/hooks/useScrollPosition";

const AppHerder = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed } = headerConfig;

  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={(e) => setIsSearch(true)}
          />
          <HeaderRight />
        </div>
        <SearchAreaWrapper issearch={isSearch}></SearchAreaWrapper>
      </div>
      {isSearch && (
        <div className="cover" onClick={(e) => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  );
});

export default AppHerder;
