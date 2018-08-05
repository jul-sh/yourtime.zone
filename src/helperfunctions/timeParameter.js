/*
The encoded event contains the number of minutes since the beginning of 2017 UTC
time. A custom epoch is used to generate a smaller number and hence shorter
string.
*/

export const timestampToParameter = timestamp =>
  Math.floor(timestamp / 1000 / 60 - 14832288).toString(36)

export const parameterToTimestamp = encodedTime =>
  (parseInt(encodedTime, 36) + 14832288) * 1000 * 60
