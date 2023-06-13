/** @format */

import moment from "moment";

export default function calculateDiff(time) {
  const utcOffsetString = time.tz;
  const [h, m] = utcOffsetString.split(":").map(Number);
  const totalMinutesInUTC = h * 60 + m;

  const currentUTCTime = moment().utcOffset(totalMinutesInUTC);
  const currentTime = currentUTCTime.format("YYYY-MM-DD HH:mm:ss");
  const givenUTCTime = moment(time.s).utcOffset(totalMinutesInUTC);

  const timeDifference = givenUTCTime.diff(currentTime);

  const duration = moment.duration(timeDifference);

  return duration;
}
