function createForm(){


  const form = FormApp.create('My new Google Form');
  
  const item = form.addCheckboxItem();

  item.setTitle("Select your favourite movie");
  item.setChoices([

    item.createChoice('Titanic'),
    item.createChoice('Eternals'),
    item.createChoice('Avengers')

  ]);


  form.addMultipleChoiceItem()
  .setTitle("Do you like Coffee or Tea")
  .setChoiceValues(['Tea','Coffee'])

  form.addDateItem()
  .setTitle("When is your Birthday")

  Logger.log("Google Form Link : "+ form.getPublishedUrl());



}
