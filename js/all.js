$(document).ready(function(){

    $('navbar-btn').click(function(){
        $('navbar-menu-collapse').slideToggle('show');
    })

    $('.backtotop').click(function(event){
        $('body').animate({
            scrollTop:0
        },800)
    })
});