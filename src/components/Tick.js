import { getDate } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

const Tick = ({ tick, count, format }) => {
  // const isFullHour = !getMinutes(tick.value);
  const isFullHour = getDate(tick.value) % 3 == 0;
  const _count = count / 3;
  // console.log(tick.value, getDate(tick.value) % 3, isFullHour);

  const tickLabelStyle = {
    marginLeft: `${-(100 / _count) / 2}%`,
    width: `${100 / _count}%`,
    left: `${tick.percent}%`,
  };

  return (
    <>
      <div
        className={`react_time_range__tick_marker${
          isFullHour ? "__large" : ""
        }`}
        style={{ left: `${tick.percent}%` }}
      />
      {isFullHour && (
        <div className="react_time_range__tick_label" style={tickLabelStyle}>
          {format(tick.value)}
        </div>
      )}
    </>
  );
};

Tick.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

Tick.defaultProps = { format: (d) => d };

export default Tick;
