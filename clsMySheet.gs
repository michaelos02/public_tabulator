class MySheet {
  static open ({sheetId, sheetName, create}) {
    const ss = SpreadsheetApp.openById(sheetId)
    return ss.getSheetByName(sheetName) || (create && ss.insertSheet(sheetName))
  }
  static replaceValues ({sheet, values}) {
    sheet.getDataRange().clear()
    if(values.length && values[0] && values[0].length) {
      const range = sheet.getRange(1,1,values.length,values[0].length)
      return range.setValues(values)
    }
  }
  constructor (options) {
    this._sheet = this.constructor.open(options)
  }
  get sheet () {
    return this._sheet
  }
  get dataRange () {
    return this.sheet.getDataRange()
  }
  // get currently cached valued
  get values () {
    // if we dont have any then get some
    return this._values || this.getValues()
  }
  // get values from sheet
  getValues () {
    // caching for later
    this._values = this.dataRange.getValues()
    return this._values
  }
  //get the header row and rest of the data at one time
  getHeadersAndData () {
    let [headers, ...data]=this._values || this.getValues();
    this._headers = headers;
    this._data = data;
    return {headers,data}
  }
  //get just the headers
  get headers (){
    //if we dont have any then get them
    return this._headers || this.getHeadersAndData().headers;
  }
  //get just the data
  get data (){
    return this._data || this.getHeadersAndData().data;
  }

  get filteredData(){
    return this._filteredData;
  }
  // set currently cached values
  set values (val) {
    this._values = val
  }
  // write current (or new) values to sheet
  setValues ({values}) {
    if (values) {
      this.values = values
    }
    return this.constructor.replaceValues({sheet: this.sheet, values: this.values})
  }
  //methods...
  dataFilter ({filterColumnIndex,filterCondition}){
    this._filteredData = this._values.filter(row => {return row[filterColumnIndex].toLowerCase()==filterCondition});
    return this._filteredData;
  }

  columnsToKeep({ data, colIndxsKeep }) {
    if (Array.isArray(data[0])) {
      return data.map(arr => {
        return arr.filter((el, idx) => { return (colIndxsKeep.indexOf(idx) !== -1) });//this will be true if the current index number is IN the column array
      });
    }
    else {
      return data.filter((el, idx) => { return (colIndxsKeep.indexOf(idx) !== -1) });
    }
}
}
