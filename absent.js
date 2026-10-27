/**
 * absent.js - Compatibility wrapper for TimeTableApp absent adjustment engine
 */
window.loadTeachers = function() {
  if (window.TimeTableApp) window.TimeTableApp.getTeachers();
};
window.generateAbsent = function() {
  if (typeof calculateAdjustment === "function") calculateAdjustment();
};
