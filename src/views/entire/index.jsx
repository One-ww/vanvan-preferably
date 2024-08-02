import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EntireWrapper } from "./style";
import EntireFilter from "./components/entire-filter";
import EntireRooms from "./components/entire-rooms";
import EntirePagination from "./components/entire-pagination";
// import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
