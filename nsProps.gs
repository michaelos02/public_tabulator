let nsProps = (()=>{
  let m_sheetID = '1W-33bovvsxfh-rSjzJLQGRrLCsnd5hqcfI8VDurF9nc';// enter the Spreadsheet ID
  let m_dataSheet = 'copiedGoals';// enter the name of the sheet that contains ALL user data
  let m_emailHeader = 'teacherEmail';// replace this with the header name (per Row 1) where user emails exist
  let m_studID = 'Student ID'; //this for the student ID number
  let m_colsKeep = [1,2,5,8,12,13]  //this is an array of the columns of data that we want to keep

  let m_activeUser = Session.getActiveUser()

  //get current user and make lower case for filter to work
  const m_currentUser = (()=>{
    if(m_activeUser !==''){
      return m_activeUser.getEmail().toLowerCase();
    }else{
      return "Could not detect user!";
    }
  })

  //return what is exposed by this namespace
  return{
    sheetID:     m_sheetID,
    dataSheet:   m_dataSheet,
    emailHeader: m_emailHeader,
    studentID :  m_studID,
    currentUser: m_currentUser,
    colsKeep:    m_colsKeep
  }

})();

