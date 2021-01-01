import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

const useLeavePrompt = () => {
  let _mount = true;
  const leaveTick = 10 * 1000;
  const [refreshTimer, setRefreshTimer] = useState(null);
  const [leave, setLeave] = useState(null);
  const dispatch = useDispatch();

  const leaveCheck = () => (dispatch, getState) => {
    const state = getState();
    const list = state.queueHist.list.filter((x) => x.remainMins <= 0);
    const _leave = list.length > 0 ? list[0] : null;
    setLeave(_leave);
    leaveCheckTimeout();
  };

  const leaveCheckTimeout = () => {
    !refreshTimer && clearTimeout(refreshTimer);
    const timer = setTimeout(() => {
      dispatch(leaveCheck());
    }, leaveTick);
    _mount && setRefreshTimer(timer);
  };
  useEffect(() => {
    dispatch(leaveCheck());
    return () => {
      !refreshTimer && clearTimeout(refreshTimer);
      // eslint-disable-next-line
      _mount = false;
    };
    // eslint-disable-next-line
  }, []);

  return [leave];
};

export default useLeavePrompt;
