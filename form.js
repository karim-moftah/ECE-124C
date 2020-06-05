



let toggleBtn = document.querySelector(".menu");
let tlink = document.querySelector(".list");


toggleBtn.onclick = function () {
  
    tlink.classList.toggle("open");
};


 function chpass(str) {

     var r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*]).{8}$/;
     return r.test(str);
 }



 function valid(form) {

     if (form.fname.value == "" || form.lname.value == "") {
         alert("type your first and last name");
         form.fname.focus();
         return false;
     }

     r = /^\w+$/;

     if (!r.test(form.fname.value) || !r.test(form.lname.value)) {
         alert("First and last name must contain only letters, numbers and underscores! spaces are not allowed ");
         form.fname.focus();
         return false;
     }


     for (var k = 0; k <= 8; k++) {
         if (form.fpass.value[k] == " ") {
             alert("password can't contain any space");
             form.fpass.focus();

             return false;
         }
         else { continue; }
     }


     if (form.fpass.value[0] >= 'A' && form.fpass.value[0] <= 'Z') {
         k = 0;

     }
     else {
         alert("first char must be capital letter");
         form.fpass.focus();
         return false;
     }


     if (form.fpass.value != "" && form.fpass.value == form.fpass2.value) {
         if (!chpass(form.fpass.value)) {
             alert("The password you have entered is not valid! , password must consist of only 8 characters and the first letter must be capital and password including at least capital and small case and digits and special characters");
             form.fpass.focus();
             return false;
         }
     }


     else {
         alert("Error: Please check that you've entered and confirmed your password!");
         form.fpass.focus();
         return false;
     }
     return alert("welcome to our page");




 }




