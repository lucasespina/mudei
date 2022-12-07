function login_check(input){
    var login = document.getElementById("inpot_login").value;
    var password = document.getElementById("inpot_passworld").value;
      if (login === "" || password === "") {
      alert("Você deve prencher todos os campos")
      } else {
        location.href="menu_inicial.html"

      };
    };

function botao_login() {

    button = document.querySelector('button[name="login_botao"]')
    button.addEventListener("click", login_check);
};


document.addEventListener('DOMContentLoaded', function() {
    botao_login()





});