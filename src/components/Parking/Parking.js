import "./Parking.scss";

import React, { useEffect, useState } from "react";

import { get } from "../../utils/request";
import { getAreaNo } from "../selector";
import { setAreaNo } from "../../slices/parameters";
import { useDispatch } from "react-redux";

const Parking = () => {
  let _mount = true;
  const dispatch = useDispatch();

  const [refreshTimer, setRefreshTimer] = useState(null);

  const getRefreshTick = () => {
    const hidRefreshSecond = document.getElementById("hidRefreshSecond");
    let tick = parseInt(hidRefreshSecond ? hidRefreshSecond.value : 0) * 1000;
    return tick;
  };
  const getRemainParingNumber = () => (_, getState) => {
    const pAreaNo = getAreaNo(getState());
    const hidAPIUrl = document.getElementById("hidAPIUrl");
    if (pAreaNo && hidAPIUrl) {
      const apiurl = hidAPIUrl.value.trim();
      console.log("apiurl: ", apiurl);
      get(`${apiurl}/api/AreaParkingPlace/${pAreaNo}`).then((res) => {
        res && res.data && setRemain(res.data);
      });
    }
  };

  const getParameterAreaNo = () => {
    const param = new URLSearchParams(window.location.search);
    param.forEach((value, key) => {
      if (key.toLowerCase() === "areano") {
        console.log("value: ", value);
        dispatch(setAreaNo(value));
      }
    });
  };

  const [remain, setRemain] = useState(0);
  const refreshTimeout = () => {
    dispatch(getRemainParingNumber());
    const _refresh_timer_tick = getRefreshTick();
    const _refresh_timer = setTimeout(() => {
      refreshTimeout();
    }, _refresh_timer_tick);
    _mount && setRefreshTimer(_refresh_timer);
  };

  useEffect(() => {
    getParameterAreaNo();
    //check timer
    refreshTimeout();
    return () => {
      refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line
      _mount = false;
    };
  }, []);

  return (
    <>
      <div className="parking">
        <div className="parking-logo-wrapper">
          <img className="parking-logo" alt="" src="resources/logo.jpg" />
        </div>
        <div className="parking-empty-wrapper">
          <div className="parking-empty-label">
            <div className="parking-empty-label-P">P</div>
            <div className="parking-empty-label-text">剩余车位</div>
          </div>

          <div className="parking-empty-number">{remain}</div>
        </div>
      </div>
    </>
  );
};

export default Parking;
