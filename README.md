# public_tabulator
Display sheet data on a website

I needed to find a way to allow users to see data they have submitted to a spreadsheet.  I wanted something more than just publishing the sheet to the web AND it needed to be filtered to show just the users submsions.

I found this website and it was the start of me going down a path of frameworks and libraries and oh my!!!  But it has been a fantastid journey so far.  Here is the site: https://script.gs/display-user-specific-spreadsheet-data-on-a-web-app/

This gave me a "plain" HTML table that I found rather boring.  So I tried looking at other frameworks like Bootstrap and Materialize.  I did get some working examples using Metro_4 (https://metroui.org.ua/intro.html) but found it a little cumbersome.

I stumbled upon Tabulator (http://tabulator.info/) and now I think I am sticking with this one.  I have learned how to use different themes, modify the CSS and load data from a google sheet.

So this repository is working code that uses this spreadsheet:https://docs.google.com/spreadsheets/d/1W-33bovvsxfh-rSjzJLQGRrLCsnd5hqcfI8VDurF9nc/edit?usp=sharing

Open the sheet and add your email to the "teacherEmail" column and deploy the app.  You will see a webpage with the data filtered just for you.

The main settings for the app are in the "nsProps" file.  Open it and it is pretty self explanaotry.

Have fun with this code!  Maybe it will save you some time searching for the right solution!

Feel free to contact me if you have any questions.
