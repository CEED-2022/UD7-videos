console.log("I'm the worker")

self.addEventListener('message', function(e) {
  console.log(e.data)
  if(e.data.question === 'The Answer to the Ultimate Question of Life, The Universe, and Everything.')
    self.postMessage({ answer: 42 });
  else
    self.postMessage({ answer: "I don't know" });
}, false);
