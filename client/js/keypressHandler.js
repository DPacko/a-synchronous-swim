
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    Parse.read(arrowPress, (data) => {
      SwimTeam.move(data.toLowerCase());
    });
  }
});

$('.btn').on('click', function(event) {
  event.preventDefault();
  var arrows = ['Up', 'Down', 'Left', 'Right']
  var randomIndex = Math.floor(Math.random() * 4);
  var direction = arrows[randomIndex];
  Parse.read(direction, (data) => {
      SwimTeam.move(data.toLowerCase());
  });
});

console.log('Client is running in the browser!');
