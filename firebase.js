$('form').on('submit' , (e)=> {
    e.preventDefault();
    
        db.collection('email').add({
            name: $('#name').val(),
            email: $('#city').val(),
        })
        .then(function (s){
            $('#name').val("");
            $('#city').val("");
            alert('successful');
            console.log('successful',s)
        })
        .catch(function (err) {
            console.log("no", err);
           })
    
})
$(document).ready(function(){
    $('.modal').modal();
  });






