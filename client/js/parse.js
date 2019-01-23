var Parse = {
  server: `http://127.0.0.1:3000/directions/swimming`,

  read: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: function (data) {
        console.error('A Synchronous Swimming: Failed to submit direction', data);
      }
    });
  }
}