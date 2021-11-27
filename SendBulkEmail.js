function sendEmail(){


  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName("Form Responses 1");

  const data = sheet.getRange(2,2,sheet.getLastRow() -1,3).getValues();

  //console.log(data)

  data.forEach(function(row,i){

    const score = row[0];
    const name = row[1];
    const email = row[2];

    //Logger.log(score)
    //Logger.log(name)
    //Logger.log(email)

    if(score >= 30){

      var body = emailBody(name,email,score,"Very Good")

    }

    if(score  == 20){

      var body = emailBody(name,email,score,"Good")
      
    }

    if(score <=10){


      var body = emailBody(name,email,score,"Very Bad")
    }


    let subject = "Maths quiz result";

    GmailApp.sendEmail(email,subject,body);

  });


}

function emailBody(name,email,score,feedback){

  let emailtext = "Dear " + name + " this email is regarding your marks"+ 
                       "Marks Scored : " + score + 
                       "Feedback     : " + feedback;


  return emailtext;
}
