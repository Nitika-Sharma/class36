class Form {
  constructor() {

  }

  display() {
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130, 0);
    title.style('color', 'blue');
    title.style('font-size', '30px')

    var input = createInput('Name');
    input.position(130, 160);
    input.style('background', 'pink');

    var button = createButton('Play');
    button.position(250, 200);
    button.style('background', 'lavender');
    button.mousePressed(function () {

      input.hide();
      button.hide();
      var name = input.value();

      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);

      var greeting = createElement('h3');
      greeting.position(130, 160);
      greeting.html("Hello " + name + " ! wait for other players to join.");
      greeting.style('color', 'red');
      greeting.style('font-size', '30px')






    });

  }
}
