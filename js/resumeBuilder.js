/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName="Bibek Thapa";
var formattedRole="Web Developer";


$("#header").append(HTMLheaderName.replace("%data%",formattedName));
$("#header").prepend(HTMLheaderRole.replace("%data%",formattedRole));

