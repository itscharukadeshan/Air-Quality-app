/** @format */

import moment from "moment";

export default function calculateDiff(time) {
  const currentUTCTime = moment().utc(time.tz);
  const givenUTCTime = moment(time.s).utc(time.tz);

  const timeDifference = givenUTCTime.diff(currentUTCTime);

  const duration = moment.duration(timeDifference);
  const hours = duration.hours();
  const minutes = duration.minutes();

  return duration;
}
