$(document).ready(function() {

    $('#btn1').on('click', function() {
        $('#para1').hide();
    });
    $('#btn11').on('click', function() {
        $('#para1').show();
    });

    $('#btn2').on('click', function() {
        $('#para2').append('<li>Hello World</li>');
    });
    $('#btn22').on('click', function() {
        $('li').remove()
    });
    $('#btn3').on('click', function() {
        $('#para3').css('color', 'red');
    });
    $('#btn33').on('click', function() {
        $('#para3').css('color', 'black')
    });
    $('#btn4').on('click', function() {
        $('#para4').addClass("intro");
    });
    $('#btn4').on('click', function() {
        $('#para4').addClass("intro");
    });
    $('#btn5').on('click', function() {
        $('#para4').removeClass("intro");
    });
    $('#btn6').on('click', function() {
        $('#para5').html("Hello <b>world!</b>");
    });
    $('#btn7').on('click', function() {
        $('#para6').text("Hello world!");
    });
    $('#btn8').on('click', function() {
        $("input:text").val("HELLO World");
    });
    $("#btn9").click(function() {
        $("#para7").fadeOut();
    });
    $("#btn99").click(function() {
        $("#para7").fadeIn();
    });
    $("#btn0").click(function() {
        $("#para8").slideUp();
    });
    $("#btn00").click(function() {
        $("#para8").slideDown();
    });
});