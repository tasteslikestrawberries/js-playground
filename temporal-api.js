import { Temporal, toTemporalInstant } from '@js-temporal/polyfill'; //not yet in stage 4 but soon - until then have to use polyfill
Date.prototype.toTemporalInstant = toTemporalInstant;

const now = new Date();
console.log(now);

//new Temporal API
//we can use multiple syntaxes to get the same result:

//Temporal.Now syntax
const nowTemporalDate = Temporal.Now.plainDateISO();
const nowTemporalTime = Temporal.Now.plainTimeISO();
const zonedTemporal = Temporal.Now.zonedDateTimeISO();
console.log('temporal date ', nowTemporalDate.toString())
console.log('temporal time ', nowTemporalTime)
console.log('zoned temporal', zonedTemporal.toString())


//new syntax
const nowTemporal = new Temporal.PlainDate(2022,6,22)
console.log(nowTemporal)

//from syntax
const nowTemporalFrom = Temporal.ZonedDateTime.from({
  year: 2022,
  month: 1,
  day: 1,
  timeZone: Temporal.Now.timeZone()
})

console.log(nowTemporalFrom)