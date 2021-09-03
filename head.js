document.write(`
<!DOCTYPE html>
<html lang="en-AU">
<head>
<title>Activate Youth Voice</title>
<link rel="stylesheet" href="AYVstyle.css">
<link rel="icon" typle="image/jpg" href=Images/favicon.jpg>
<meta http-equiv="refresh", content="300">
<meta name="viewport", content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
<!-- look up <base> you're going to need it, specifies base url for page-->
</head>
<body>

<h1 style="font-size: min(9vw,60px); margin-bottom: 0">Activate Youth Voice</h1>
<h4 style="margin-top: 3px; margin-bottom: 30px; font-style: italic">Peer research, engagement, and co-design.</h4>

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
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>

<div class="content" style="margin: 0; padding: 0";>

`);