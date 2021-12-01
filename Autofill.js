const sheet_ID = "1E7vz97D1JODPssypj5rSeizIzLGazg1BcScojaukEck";
const form_ID = "1_UBXgWztuvOiie4LS1ROBWPkGIQGbhjedW1p8glYXOk";
const data = SpreadsheetApp.openById(sheet_ID).getSheetByName("Sheet1");
const form = FormApp.openById(form_ID);

function main(){
    
    const startRowIndex = 1 
    const startColumnIndex = 1
    const amountOfRowsToUse = 1
    const lastColumn = data.getLastColumn()
    const labels = data.getRange(startRowIndex, startColumnIndex, amountOfRowsToUse, lastColumn).getValues()[0];
    const startColIndex = 2
    const lastRowIndex = data.getLastRow()-1
    const lastColumnIndex = 1
    labels.forEach((label, i) => {
        const startRowIndex = i +1
        const options = data.getRange(startColIndex, startRowIndex, lastRowIndex, lastColumnIndex).getValues()
        updateDropdownTitle(label,options)
})


}


function updateDropdownTitle(title,values){
    const items = form.getItems();
    const titles = items.map(item => item.getTitle())
    const pos = titles.indexOf(title);
    const item = items[pos];
    const itemID = item.getId();
    updateDropdown(itemID,values);
}

function updateDropdown(id,values){
  const item = form.getItemById(id);
  item.asMultipleChoiceItem().setChoiceValues(values);

}





