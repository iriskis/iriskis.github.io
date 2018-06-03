let a = getRandom(6, 10);
let b = getRandom(11-a, 14-a+1);
let sum = a + b;

$(document).ready(function(){
    $(".term-1").text(a);
    $(".term-2").text(b);
    $(".arrow-1").css({'width' : (39*a).toString() });
    $(".arrow-2").css({'width' : (39*b).toString() });    
    $(".arrow__term-1").css({'visibility': 'visible'});
    $(".in_term-1").on('change', function(){
        check_term($(".in_term-1"), $(".term-1"), a);
        if ($(this).val() == a) {
            $(".arrow__term-2").css('visibility', 'visible');
        }
    });
    $(".in_term-2").on('change', function(){
        check_term($(".in_term-2"), $(".term-2"), b);
        if ($(this).val() == b) {
            $("span").remove(".answer");
            $(".example").append('<input class="answer" type="text" maxlength="2">');
            $(".answer").css({'font-size' : '40px', 'width' : '50px', 'text-align' : 'center'});
            $(".answer").on('change', function(){ 
                if ($(this).val() != sum){
                    $(this).css('color', 'red');
                }
                else {
                    $(this).css({'color': 'black', 'border' : 'none', 'background' : 'transparent'})
                        .attr('disabled','disabled');
                        $(".new_example").css('visibility', 'visible').click(function(){
                            location.reload();
                        });
                }
            });
        }
    });   
});

function check_term(in_term, term, n){
    if ($(in_term).val() != n){
            $(in_term).css('color', 'red');
            $(term).css('background', 'rgb(255, 196, 0)');
        }
        else {
            $(in_term).css({'color': 'black', 'border' : 'none', 'background' : 'transparent'})
                .attr('disabled','disabled');
            $(term).css('background', 'transparent');
        }
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};