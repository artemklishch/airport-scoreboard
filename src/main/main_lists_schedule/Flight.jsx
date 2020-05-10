import React from "react";
import moment from "moment";

const Flight = ({
  term,
  expectedTime,
  airport,
  realTime,
  airline,
  flightNum,
  flightType,
}) => {
  const typeFlight = flightType === "arrival" ? "Arrived" : "Depatured";
  return (
    <tr className="scheduleList__table__tbody_row">
      <td className="scheduleList__table__tbody_terminal">{term}</td>
      <td className="scheduleList__table__tbody_planned-time">
        {moment(expectedTime).format("h:mm")}
      </td>
      <td className="scheduleList__table__tbody_destintion">{airport}</td>
      <td className="scheduleList__table__tbody_fact-time">{`${typeFlight} at ${moment(
        realTime
      ).format("h:mm")}`}</td>
      <td className="scheduleList__table__tbody_airline">{airline}</td>
      <td className="scheduleList__table__tbody_flight">{flightNum}</td>

      <td className="scheduleList__table__tbody_terminal-planned-time_onsmallwidth">
        <p>{term}</p>
        <p>{realTime}</p>
      </td>
      <td className="scheduleList__table__tbody_onsmall-width">
        <p>{airport}</p>
        <p>{`Departed at ${expectedTime}`}</p>
        <p>{airline}</p>
      </td>
    </tr>
  );
};
export default Flight;
