$(document).ready(function(){
    $(document).on('click', '#pobierzDane', function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function( json ) {
            $('body').append('<div id="dane-programisty">Imię: '+json.imie+"<br>Nazwisko: "+json.nazwisko+"<br>Zawód: "+json.zawod+"<br>Firma: "+json.firma);

        })
    });
});