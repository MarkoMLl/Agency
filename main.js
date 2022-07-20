// Get the modal
var modal = document.getElementById("myModal");

var modalLogo= document.getElementById("modalLogo");

// Get the button that opens the modal


var popdiv = document.getElementById("myDiv");

var btn = document.getElementById("myBtn");
var closespan  =document.getElementById("closeSpan");


var hamburgerAligment =document.getElementById("hamburger_Logo-aligment");

var iconmenu = document.getElementById("menu-display-none");

var bodyRight =document.getElementById("body-full-right");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "none";
  modalLogo.style.display = "none";
  document.getElementById("myDiv").style.backgroundColor = "white";
  iconmenu.style.display ="block";
  iconmenu.style.paddingTop ="20px"
  popdiv.style.flex ="5.5%";
  bodyRight.style.flex ="94.5%";
  btn.style.display ="none";
  closespan.style.display ="block";
  
}


span.onclick = function() {
  modal.style.display = "";
  modalLogo.style.display = "none";
  document.getElementById("myDiv").style.backgroundColor = "white";
  iconmenu.style.display ="none";
   btn.style.display ="block";
   closespan.style.display ="none";
}


span.onclick = function() {
  modal.style.display = "block";
  modalLogo.style.display = "block";
  document.getElementById("myDiv").style.backgroundColor = "white";
  iconmenu.style.display ="none";
  popdiv.style.flex ="5.5%";
  bodyRight.style.flex ="94.5%  ";
  btn.style.display ="block";
  closespan.style.display ="none";
}






var modalmobile = document.getElementById("myModalMobile");

var closemobilespan= document.getElementById("closeSpanMobile");
// Get the button that opens the modal
var btnmobile = document.getElementById("myBtnMobile");

var mobilespan = document.getElementsByClassName("close_mobile")[0];

btnmobile.onclick = function() {
  modalmobile.style.display = "block";
  modalLogo.style.display = "block";
  closemobilespan.style.display="block";
  btnmobile.style.display="none";
}

// When the user clicks on <span> (x), close the modal
mobilespan.onclick = function() {
  modalmobile.style.display = "none";
  
  closemobilespan.style.display="none";
  btnmobile.style.display="block";
}
mobilespan.onclick = function() {
  modalmobile.style.display = "none";
  
  closemobilespan.style.display="none";
  btnmobile.style.display="block";
}


//FOR Search & Select

$(document).ready(function() {
  $('.js-example-basic-single').select2();
});


//DATE PICKER
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


//For TABLE
$(document).ready( function () {
  $('#table_id').DataTable();
} );



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionone() {
  document.getElementById("myDropdownone").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnone')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentone");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
