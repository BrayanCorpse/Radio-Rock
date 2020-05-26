$(document).ready(function(){


    function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)

    }

    $("#lock").mouseover(function (e) {
        e.preventDefault();
        $("#password").attr('type', 'text');
        $("#lock").attr('uk-icon', 'unlock');

    });

    $("#lock").mouseout(function (e) {
        e.preventDefault();
        $("#password").attr('type', 'password');
        $("#lock").attr('uk-icon', 'lock');

    });



    function autenticar(email,password){

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    }

function register(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

    if( email == "" || password =="")
    {
        swal({
            title: "Empty fiels!",
            text: "You are wrong!",
            icon: "error",
            dangerMode: true,
            button: "Close!",
          });
    }

    else if(!expr.test(email))
    {
        $("#email").addClass("uk-form-danger");
        $("#message").html("<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Email must be a valid format.</p></div>");
    }

    else if(!regex.test(password))
    {
        $("#password").addClass("uk-form-danger");
        $("#message").html("<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Password must be for example: 'Uikit546'</p></div>");
    }

    else
    {
        autenticar(email,password);
        $("#email").val("");
        $("#password").val("");
        swal({
            title: "You are Register!",
            text: "Congratulations!",
            icon: "success",
            button: "Close!",
          });

    }

}

const save = document.getElementById('save');

save.addEventListener('click', register);

});

