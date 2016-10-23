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
	"pictureUrl":"images/me.jpeg",
	"contactInfo":phoneNumber,
	"skills":skills

};


$("#header").append(HTMLheaderName.replace("%data%",bio.name)); //HTMLheaderNameis in the helper.js class
$("#header").append(HTMLheaderRole.replace("%data%",bio.skills));


