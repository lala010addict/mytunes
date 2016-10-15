// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
   this.on('add', this.added, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);

  },

 added: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },


  ended: function() {
    this.shift()
    if (this.length > 0) {
      this.playFirst();
    }
  },

  dequeue: function() {
    this.remove()
  },

  playFirst: function() {
    this.first().play();
  },
  replay: function() {
    this.shift()
    if (this.length < 0) {
      this.playLast();
    }
  }



});
