//---------------------------------------------------------------	

//importante hay q poner <script > al final xq sino nova funcionar, ya q las variables noson todavia declaradas

//este se ejecuta con el void(0);

var icono = document.getElementById("icon");
var barra_navegacion = document.getElementById("menunavigation");

console.log("aqui estoy carajo");

//para poner el tab-default en el inicio
document.getElementById("butinit").click();


if (true) {
	//var x = document.getElementById("icon");
	barra_navegacion.style.display = "block";
	icono.style.display = "none";
} else {
	//var x = document.getElementById("icon");	
	icono.style.display = "block";
	barra_navegacion.style.display = "none";
}



function isMobile() {

	/* Storing user's device details in a variable*/
	let details = navigator.userAgent;

	/* Creating a regular expression
	containing some mobile devices keywords
	to search it in details string*/
	let regexp = /android|iphone|kindle|ipad/i;

	/* Using test() method to search regexp in details
	it returns boolean value*/
	let isMobileDevice = regexp.test(details);

	return isMobileDevice;

	// if (isMobileDevice) {
	//    document.write("<h3>Its a Mobile Device !</h3>");
	// } else {
	//    document.write("<h3>Its a Desktop !</h3>");
	// }

}


//-------------------------------------------------------------

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

//---------------------------------------------------------	

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {

	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

//------------------------------------------------------------
function smoothScroll(obj) {
	document.querySelector(obj).scrollIntoView({
		behavior: 'smooth'
	});
	closeNav();
}

function scrolldiv() {
	window.scroll(0,
		findPosition(document.getElementById("contactid")));
}

function findPosition(obj) {
	var currenttop = 0;
	if (obj.offsetParent) {
		do {
			currenttop += obj.offsetTop;
		} while ((obj = obj.offsetParent));
		return [currenttop];
	}
}

//-------------------------------------------------
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};
//esta funcion es par mostrar el boton top
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//----------------------------------PAGINA WEB DE FILESRATER--------------------

function openTab(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabs");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}


	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("button-section");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}


	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";



}


//---------------------------------------------------------

let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//---------------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active2");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
