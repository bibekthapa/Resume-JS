/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName="Bibek Thapa";
var formattedRole="Web Developer";
var phoneNumber="9860559853";
var skills=["Android Programming","Java Programming","JS"];
var welcomeMessage="Hi I am "+" "+formattedName;
var bio={
	"name":formattedName,
	"role":formattedRole,
	"pictureUrl":"images/me.jpg",
	"contactInfo":phoneNumber,
	"skills":skills,
	"msg":welcomeMessage


};
//%data% is like a place holder. it acts as a buffer for placing the data

$("#header").append(HTMLmobile.replace("%data%",bio.contactInfo));
$("#header").append(HTMLskills.replace("%data%",bio.skills));
$("#header").prepend(HTMLbioPic.replace("%data",bio.pictureUrl));
$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.msg));
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name)); //HTMLheaderNameis in the helper.js class






