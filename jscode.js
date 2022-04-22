function validateTextBox()
{
var box = document.getElementById("name");
var box1 = document.getElementById("password");
if(box.value == "" || box1.value == "")
{
alert("field can not be blanck");
return false;
}
else if(box.value.length < 5)
{
	alert("name or password should be atleast 4 character");
	box.focus();
	box.style.border = "solid 3px red";
	return false;
}

else if(box1.value.length < 5 || box1.value.length > 12)
{
	alert("password should be atleast 4 to 11 character including special character");
	box1.focus();
	box1.style.border = "solid 3px yellow";
	return false;
}

else if(box.value[0] == "@")
{
	alert("name should not start with @ charracter");
	return false;
}

else if(box.value[0] == "_")
{
	alert("name should not start with _(underscore) charracter");
	return false;
}

else if(box.value[0] == "0")
{
	alert("name should not start with zero digit");
	return false;
}


}