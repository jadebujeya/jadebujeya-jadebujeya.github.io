document.write(`
<!DOCTYPE html>
<html lang="en-AU">
<head>
<title>Activate Youth Voice</title>
<link rel="stylesheet" href="AYVstyle.css">
<meta http-equiv="refresh" content="300">
<meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1.0,maximum-scale=1.0">
<!-- look up <base> you're going to need it, specifies base url for page-->
</head>
<body>

<header class="actionsBar">

<div class="inBar"; style="position: relative; float: left; width: min(70%)">
<h1 style="font-size: min(9vw,60px); margin-bottom: 0; margin-top: 0; margin-left: 1%; margin-right: 0; white-space: normal;">Activate Youth Voice</h1>
<h4 style="margin-top: 3px; margin-bottom: 15px; margin-left: 1%; font-style: italic;";>Peer research, engagement, and co-design.</h4>
</div>

<div onmouseover = "openNav('navigation')"; class="inBar"; style = "width: 50px; margin: 2%; position: relative; float: right; align-items: center; justify-content: center;">
<div class="menuIcon"></div>
<div class="menuIcon"></div>
<div class="menuIcon"></div>
<div><b>MENU</b></div>
</div>

</header>
<!--
<div style="size: min(100%, 60px)">
<br>
<br>
<br>
<br>
</div>
<br>
<br>
-->

<div id = "navigation"; style="display: none;";>
	<table class = "menu";>
	  <tr><td><a href="index.html">About Us</a></td></tr>
	  <tr><td><a href="projects.html">Our Work</a></td></tr>
	  <tr><td><a href="contact.html">Contact Us</a></td></tr>
	</table>
</div>

`);

function openNav(object) {
  // Declare all variables
  document.getElementById(object).style.display = "block";
  
}