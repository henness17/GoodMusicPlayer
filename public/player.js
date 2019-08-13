const SoundCloudAudio = require("soundcloud-audio");
const player = new SoundCloudAudio("aaa60081e68b473f31821b833345485f");

window.play = function(url) {
  var success = false;
  player.resolve(url, function(track) {
    player.play();
  });
};

window.pause = function() {
  player.pause();
};

window.setVolume = function(level) {
  level = level / 100;
  player.setVolume(level);
};
