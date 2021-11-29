function LimitResponses(){


  const max_responses = 5;

  const form = FormApp.openById("1LpNI_d6TkVD2UavitZMBAlNshbJKY1r6yinBMJ5T6LQ");
  const responses = form.getResponses();

  //Logger.log(responses);

  len = responses.length;

  Logger.log(len)

  if(len == max_responses){

    form.setAcceptingResponses(false)


  }
}
