function changecolor(){

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const mysheet = sheet.getSheetByName("Form Responses 1");

  const range = mysheet.getRange("E2:E6");

  const rule = SpreadsheetApp.newConditionalFormatRule()
  .whenNumberLessThan(4)
  .setBackground("red")
  .setRanges([range])
  .build();

  const rules = mysheet.getConditionalFormatRules();

  rules.push(rule);

  mysheet.setConditionalFormatRules(rules)



  const rule1 = SpreadsheetApp.newConditionalFormatRule()
  .whenNumberGreaterThan(3)
  .setBackground("green")
  .setRanges([range])
  .build()

  const rules1 = mysheet.getConditionalFormatRules()
  rules1.push(rule1)

  mysheet.setConditionalFormatRules(rules1)


}
