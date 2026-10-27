/**
 * timetable.js - Compatibility wrapper for TimeTableApp master timetable engine
 */
window.generate = function() {
  if (typeof generateAllYears === "function") generateAllYears();
};