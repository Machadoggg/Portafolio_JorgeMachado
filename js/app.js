document.getElementById("toastbtn").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      // Creates an array of toasts (it only initializes them)
      return new bootstrap.Toast(toastEl) // No need for options; use the default options
    });
    toastList.forEach(toast => toast.show()); // This show them

    console.log(toastList); // Testing to see if it works

  };



  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 90) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-300px";
    }
    prevScrollpos = currentScrollPos;
  }


  function toggleDarkMode() {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark-mode');
  }







  var check=document.querySelector(".check");
  check.addEventListener('click',idioma);

  function idioma(){
    let id=check.checked;

    if(id==true){
        location.href="en/index.html";
    }
    else{
        location.href="../index.html";
    }
  }