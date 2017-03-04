$( document ).ready(function() {
    console.log( "ready!" );

//var rule = document.getElementById('new-rule');
  var rule= $('#new-rule')
$('.new-rule-form').on('submit', function(e){
  e.preventDefault();
  console.log('hi')
  $('.rules-list').append(rule[0].value);
})

});
