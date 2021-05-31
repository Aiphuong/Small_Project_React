import React from "react";

const useDeviceDetect = (weatherInfo) => {
  const [check, setCheck] = React.useState(false);
  React.useEffect(() => {
    if (weatherInfo.length === 0 || weatherInfo === null) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [weatherInfo]);
  return { check };
};

export default useDeviceDetect;
