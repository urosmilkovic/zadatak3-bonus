var nameEmpty;
var lastEmpty;
var mailEmpty;
var passEmpty;

$(document).ready(function(){
     $('.cbutton').click(function() {
        nameEmpty = $('.name').val();
        lastEmpty = $('.last').val();
        mailEmpty = $('.mail').val();
        passEmpty = $('.pass').val();
        

        if(nameEmpty === ""){
            $('.img-last').toggleClass('error-img');
            $('.w-name').toggleClass('error-p');
            $('.inputs').toggleClass('dis');
        }
        else {
           $('.name').text(nameEmpty); 
        }
    });
});

