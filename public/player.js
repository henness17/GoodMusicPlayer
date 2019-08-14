const SoundCloudAudio = require("soundcloud-audio");
const player = new SoundCloudAudio("aaa60081e68b473f31821b833345485f");

window.play = function(url) {
  playingSnippet = false;
  var success = false;
  player.resolve(url, function(track) {
    player.play();
  });
};

var currentSnippet;
window.playSnippet = function(url) {
  currentSnippet = Math.random();
  var snippet = currentSnippet;
  player.resolve(url, function(track) {
    player
      .play()
      .then(function() {
        player.setTime(20);
      })
      .then(
        setTimeout(function() {
          if (snippet == currentSnippet) window.pause();
        }, 6500)
      );
  });
};

window.pause = function() {
  player.pause();
};

window.setVolume = function(level) {
  level = level / 100;
  player.setVolume(level);
};
