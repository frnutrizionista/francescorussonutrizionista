function doGet(request) {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate();
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1ZhrRoh_J29GhTGP0EYUuu4pOOWju5wlUgGRTidMjSEY/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Foglio1");
  
  ws.appendRow([formObject.codice_fiscale,
                formObject.cognome,
                formObject.nome,
                formObject.email,
                formObject.telefono,
                formObject.peso,
                formObject.circonferenza]);
}                                         