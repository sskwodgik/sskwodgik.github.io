$(document).ready(function(){
    $(document).on('click', '#pobierzDane', function(){
        $.get('https://akademia108.pl/api/ajax/get-post.php').done(function(data){
            $('#id').html('<p>ID: '+data.id+'</p>');
            $('#userId').html('<p>UserID: '+data.userId+'</p>');
            $('#title').html('<p>ID: '+data.title+'</p>');
            $('#body').html('<p>ID: '+data.body+'</p>');
        })
        .fail(function(error){
            console.error(error);
        });
    });
    $(document).on('click', '#pobierzDaneJSON', function(){
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php').done(function(dataJSON){
            $('#idJSON').html('<p>ID: '+dataJSON.id+'</p>');
            $('#userIdJSON').html('<p>UserID: '+dataJSON.userId+'</p>');
            $('#titleJSON').html('<p>ID: '+dataJSON.title+'</p>');
            $('#bodyJSON').html('<p>ID: '+dataJSON.body+'</p>');
        })
        .fail(function(error){
            console.error(error);
        });
    });
});