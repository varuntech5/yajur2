
// saving data
// function adddata (){
   
//     try {
//         db.collection('email').add({
            
//             name: form.name.value,
//             email: form.email.value
           
//         });
        
//     } catch (e) {
//         console.log(e)
//     }
   
  
// } 
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('email').add({
//         name: form.name.value,
//         email: form.email.value
//     });
// });
 

$('form').on('submit' , (e)=> {
    e.preventDefault();
    
        db.collection('email').add({
            name: $('#name').val(),
            email: $('#city').val(),
        })
        .then(function (s){
            $('#name').val("");
            $('#city').val("");
            console.log('Yes',s)
        })
        .catch(function (err) {
            console.log("no", err);
           })
    
})



