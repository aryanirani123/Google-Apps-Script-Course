function getsetsheets(){

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const name_sheet = sheet.getName();
  //console.log(name_sheet)
  
  const ss = sheet.getActiveSheet();

  const name = ss.getName();
  //console.log(name)

  //console.log(sheet.getDataRange().getValues())


  const data = ss.getRange(2,1).getValue();

  //Logger.log(data)

  const data2 = ss.getRange(2,1,8,3).getValues();

  Logger.log(data2)

  //const newsheet = SpreadsheetApp.create("My Sheet")
  //console.log("The sheet has been created")

  const mynewsheet = sheet.insertSheet();
  mynewsheet.setName("Mynewsheet")
  


}

function settinvalues(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Mynewsheet");

  const cell = sheet.getRange("C3");

  //cell.setValue(9000)

  //Logger.log("The value has been set")

  const array1 = [["2000","1000","200","900"]]

  const range1 = sheet.getRange("A2:D2")
  range1.setValues(array1)

  Logger.log("The array has been set in the sheet")



}

