document.write(`
<!DOCTYPE html>
<html lang="en-AU">
<head>
<title>Activate Youth Voice</title>
<link rel="stylesheet" href="AYVstyle.css">
<link rel="icon" typle="image/jpg" href=Images/favicon.jpg>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<meta http-equiv="refresh", content="300">
<meta name="viewport", content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
<!-- look up <base> you're going to need it, specifies base url for page

-->
</head>
<body onresize="window.location.reload()">

<h1 style="font-size: min(9vw,60px); margin-bottom: 0">Activate Youth Voice</h1>
<h4 style="margin-top: 3px; margin-bottom: 30px; font-style: italic">Peer research, engagement, and co-design.</h4>

<div id="nav-wrapper" style="height: 45px; display: none"></div>
<div class="menu" id="navbar">
	<ul>
	  <li>
		<div class="dropdown">
			<button class="dropbtn">Home</botton>
			<div class="dropdown-content">
				<a href="index.html">About Us</a>
				<a href="values.html">Our Values</a>
				<a href="vision.html">Our Vision and Our Mission</a>
			</div>
		</div>
	  </li>
	  <li><a href="projects.html">Our Work</a></li>
	  <li style="float: right"><a href="contact.html">Contact Us</a></li>
	</ul>
</div>


<script>

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
	var test = document.getElementById("navbar");
	var dist = test.offsetTop;
	
	if(dist >= sticky) {sticky = dist}
	
  if (window.pageYOffset >= sticky) { 
    navbar.classList.add("sticky");
	document.getElementById("nav-wrapper").style.display="inherit";
  } else {
    navbar.classList.remove("sticky");
	document.getElementById("nav-wrapper").style.display="none";
  }
}
</script>

<div class="content" style="margin: 0; padding: 0";>

`);