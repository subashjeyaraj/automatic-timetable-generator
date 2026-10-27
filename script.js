/**
 * script.js - Compatibility wrapper for TimeTableApp master schedule generator
 */
window.generateAll = function() {
  if (typeof generateAllYears === "function") generateAllYears();
};