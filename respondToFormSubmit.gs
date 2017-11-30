function respondToFormSubmit() {
  
  var emails = ["a@email.com", "b@email.com", "c@email.com"];
  var subject = "Ansible Evaluation Support Request";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var latestrow = sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()).getValues()[0];
  var message = "\n\n";

  for (var i in headers) {
    //Prints the first row
    //Logger.log(headers[i]);
    
    //Prints the last row
    //Logger.log(latestrow[i]);
    
    // Prints the header followed by data in the last row same column
    message += headers[i] + ': '+ latestrow[i] + "\n\n";
    //Logger.log(message);
   }
  
  // Sends email to address in the emails variable
  for (var i in emails) {
    MailApp.sendEmail(emails[i], subject, message);
  }
}
