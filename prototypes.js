var prototypes = {

  'getPlayerContainer': function(){
    var itemContainer = document.createElement('div');
    itemContainer.classList.add('player-container');
    return itemContainer;
  },

  'getRemover': function(action){
    var remover = document.createElement('button');
    remover.classList.add('remover');
    remover.innerText = "remove";
    remover.addEventListener('click', action);
    return remover;
  },

  'getUpButton': function(){
    var up = document.createElement('button');
    up.classList.add('up');

    up.innerText = '▲';
    //up.innerHtml = '<svg viewBox="0 0 2 2"><path style="fill: black;" d="M 0 2 L 1 0 L 2 2 Z"></path></svg>';
    up.addEventListener('click',e => {
      var upParent = e.target.parentNode;
      var container = upParent.parentNode;
      if(upParent.previousSibling != null){
        container.insertBefore(upParent, upParent.previousSibling);
      }
    });
    return up;
  },

  'getDownButton': function(){
    var down = document.createElement('button');
    down.classList.add('down');
    down.innerText = '▼';
    down.addEventListener('click',e => {
      var downParent = e.target.parentNode;
      var container = downParent.parentNode;
      if(downParent.nextSibling != null){
        container.insertBefore(downParent, downParent.nextSibling.nextSibling);
      }
    });
    return down;
  },

  'getDescriptor': function(description){
    var descriptor = document.createElement('span');
    descriptor.innerText = description;
    return descriptor;
  }
}
