//Load the page!!
function doGet(e) {
  if(e.parameter.p=='tab'){
    //used if we need another page to load
    return HtmlService.createTemplateFromFile('index2').evaluate().setTitle('Utilities');
  }
  else{
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Tab - Display User Data');
  }
}

//used to get other info (CSS, JS) into the web page
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

//Used with html to call a function
function pick(func, args){
  args = args || [];
  return nsProps[func].apply(this, args);
}

//takes 2d array and returns key:value as well as the headers
const makeData = ({values})=> {
  const [headers,...data] = values
  return {
    data: data.map(row=>headers.reduce((p,c,i)=>{
      p[c] = row[i]
      return p
    },{})),
    headers 
  }
}