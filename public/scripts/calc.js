$(function () {
  console.log('JQUERY LOADED');

  $('#clearButton').on('click', function() {
    $('#displayResult').html('0');
    $('#inputx').val('');
    $('#inputy').val('');
  });

  $('#decimalButton').on('click', function () {
    
  });

  $('.operatorButton').on('click', function() {
    var operator = $(this).data('type');
    console.log('button type clicked:', operator);
    var inputToSend = {
      x: $('#inputx').val(),
      y: $('#inputy').val(),
      type: operator
  }; //inputToSend
    console.log('sending object: ', inputToSend);
    //axax post inputToSend
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: inputToSend,
      success: function(response){
        console.log('returned from server with: ', response);
         $('#displayResult').html(response.number);
      }
    }); // end ajax post
  });// end operatorButton on click
}); // end doc ready
