//Main code to get the data
function getData3() {
  const theSheet = new MySheet({ sheetId: nsProps.sheetID, sheetName: nsProps.dataSheet });
  let emailIndex = theSheet.headers.indexOf(nsProps.emailHeader);
  //get the current user (which is LOWERCASE) and filter on the email index TO LOWERCASE
  let crntUser = nsProps.currentUser();
  let userDataAll = theSheet.dataFilter({ filterColumnIndex: emailIndex, filterCondition: crntUser })

  if (userDataAll.length > 0) {
    //get just the columns to display
    let userData = theSheet.columnsToKeep({data:userDataAll,colIndxsKeep:nsProps.colsKeep})
    let userHeaders = theSheet.columnsToKeep({data:theSheet.headers,colIndxsKeep:nsProps.colsKeep})
    let theKey = userHeaders.indexOf("key");
    userData.unshift(userHeaders)
    let dtJSON = makeData({ values: userData })
    //return the JSON data
    return dtJSON.data;
  } else {
    return "OOPS";
  }
}



const tester = ()=>{
  let rslt = getData3()
  console.log(rslt)
}
