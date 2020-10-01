// Loops and calls each function in a queue
function Queue() {
  let queue = [];
  let isLooping = false;
  let isPaused = false;

  this.loop = async () => {
      isLooping = true;

      const item = queue[0];
      queue.shift();
      await item();

      if (!queue.length || isPaused) {
      isLooping = false;
      return;
      }

      this.loop();
  };

  this.add = item => {
      if (isPaused) return;

      queue.push(item);

      if (!isLooping) this.loop();
  };

  this.clear = () => {
      queue = [];
  };

  this.pause = (duration = 0) => {
      isPaused = true;
      setTimeout(() => (isPaused = false), duration);
  };

  this.isLooping = isLooping;
}