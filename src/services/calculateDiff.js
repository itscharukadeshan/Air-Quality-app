/** @format */

import moment from "moment";

export default function calculateDiff(time) {
  const currentUTCTime = moment().utcOffset(time.tz);
  const currentTime = currentUTCTime.format("YYYY-MM-DD HH:mm:ss");
  const givenUTCTime = moment(time.s).utc(time.tz);

  const timeDifference = givenUTCTime.diff(currentTime);

  const duration = moment.duration(timeDifference);
  const hours = duration.hours();
  const minutes = duration.minutes();

  return duration;
}
