class SoundSystem{
  constructor(queueContainer){
      this.queueContainer = queueContainer;
      this.audioContext = new window.AudioContext();
  }

  queueSong(metadata){
    var itemContainer = prototypes.getPlayerContainer();

    var remover = prototypes.getRemover(() => {
      itemContainer.remove();
    });
    itemContainer.appendChild(remover);

    itemContainer.appendChild(prototypes.getUpButton());
    itemContainer.appendChild(prototypes.getDownButton());

    var desc = "";
    if(metadata.artists.length > 0){
      desc = metadata.artists.join(", ") + " - ";
    }
    if(metadata.album != null){
      desc = desc + metadata.album + " - ";
    }
    desc = desc + metadata.title;

    var descriptor = prototypes.getDescriptor(desc);
    itemContainer.appendChild(descriptor);

    var audio = document.createElement('audio');
    audio.src = "http://localhost:1234/file/" + metadata.songid;
    audio.preload = "metadata";
    audio.controls = "controls";
    itemContainer.appendChild(audio);

    this.queueContainer.appendChild(itemContainer);
  }

  play(id){

  }

  remove(id){

  }

  up(id){

  }

  down(id){

  }

}
