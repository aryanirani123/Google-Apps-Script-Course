/** @OnlyCurrentDoc */

function DataFormatting() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A:A').activate();
  spreadsheet.getActiveSheet().setFrozenRows(0);
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getRange('1:1001').applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getRange('A1:Z1001').getBandings()[0];
  banding.setHeaderRowColor('#4dd0e1')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e0f7fa')
  .setFooterRowColor(null);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontSize(12);
  spreadsheet.getActiveSheet().autoResizeColumns(1, 1);
  spreadsheet.getActiveSheet().autoResizeColumns(6, 1);
  spreadsheet.getRange('E:E').activate();
  spreadsheet.getActiveSheet().sort(5, true);
  spreadsheet.getActiveCell().sort(6,true)
  spreadsheet.getRange('E20').activate();

};

function DataFormatting1() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getRange('1:1001').applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getRange('A1:Z1001').getBandings()[0];
  banding.setHeaderRowColor('#4dd0e1')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e0f7fa')
  .setFooterRowColor(null);
  spreadsheet.getRange('F6').activate();
  spreadsheet.getActiveSheet().autoResizeColumns(1, 1);
  spreadsheet.getActiveSheet().setFrozenRows(0);
  spreadsheet.getRange('K:K').activate();
  spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('M11').activate();
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getActiveSheet().autoResizeColumns(2, 1);
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontSize(12);
  spreadsheet.getRange('E:E').activate();
  spreadsheet.getActiveSheet().sort(5, true);
  spreadsheet.getRange('E2').activate();
  spreadsheet.getActiveSheet().setColumnWidth(4, 133);
  spreadsheet.getRange('D:D').activate();
  spreadsheet.getActiveSheet().sort(4, true);
  spreadsheet.getRange('F4').activate();
};
