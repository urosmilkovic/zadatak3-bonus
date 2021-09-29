var nameEmpty;
var lastEmpty;
var mailEmpty;
var passEmpty;

 $('button').click(function() {
    nameEmpty = $('.name').val();
    lastEmpty = $('.last').val();
    mailEmpty = $('.mail').val();
    passEmpty = $('.pass').val();
    

    if(nameEmpty === ""){
        $('.w-name').addClass('error-p');
        $('.name').addClass('error-img');
        $('.inputs-n').addClass('input-fix');
    }
    else {
        $('.name').text(nameEmpty); 
        $('.w-name').removeClass('error-p');
        $('.name').removeClass('error-img');
        $('.inputs-n').removeClass('input-fix');
    }

    if(lastEmpty === ""){     
        $('.w-last').addClass('error-p');
        $('.last').addClass('error-img');
        $('.inputs-l').addClass('input-fix');
    }
    else {
        $('.last').text(lastEmpty); 
        $('.w-last').removeClass('error-p');
        $('.last').removeClass('error-img');
        $('.inputs-l').removeClass('input-fix');
    }

    if(mailEmpty === ""){
        $('.mail').addClass('error-img');
        $('.w-mail').addClass('error-p');
        $('.inputs-m').addClass('input-fix');
        $('.mail').attr('placeholder', "example@email.com");
    }
    else {
        $('.mail').text(mailEmpty); 
        $('.w-mail').removeClass('error-p');
        $('.mail').removeClass('error-img');
        $('.inputs-m').removeClass('input-fix');
        $('.mail').attr('placeholder', "Email Address");
    }

    if(passEmpty === ""){
        $('.pass').addClass('error-img');
        $('.w-pass').addClass('error-p');
        $('.inputs-p').addClass('input-fix');
    }
    else {
        $('.pass').text(lastEmpty); 
        $('.w-pass').removeClass('error-p');
        $('.pass').removeClass('error-img');
        $('.inputs-p').removeClass('input-fix');
    }
});

