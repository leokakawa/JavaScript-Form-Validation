function validateForm() 
{
	var x = document.forms["CustomerInfo"]["firstname"].value;
	
	if (x == "")
	{
		alert("Please enter first name");
        return false;
	}
	var y = document.forms["CustomerInfo"]["lastname"].value;
	
	if (y == "")
	{
		alert("Please enter last name");
        return false;
	}
	var z = document.forms["CustomerInfo"]["email"].value;
	
	if (z == "")
	{
		alert("Please enter email");
        return false;
	}
	confirm("Thank you for your input");
	
}