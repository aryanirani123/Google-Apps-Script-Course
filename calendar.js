function create_Events(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet()
  const last_row = sheet.getLastRow();
  const data = sheet.getRange("A1:E" + last_row).getValues();
  const cal = CalendarApp.getCalendarById("aryanirani123@gmail.com");
  //Logger.log(data);

  for(var i = 0;i< data.length;i++){
    //index 0 =
    const event = CalendarApp.getDefaultCalendar().createEvent(data[i][0],
    new Date(data[i][1]),
    new Date(data[i][2]),
    {location: data[i][3]});

    
  }

}
