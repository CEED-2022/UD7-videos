console.log('page 1')
const worker = new Worker(new URL('./page1.worker.js', import.meta.url));

worker.addEventListener("message", ({ data: { answer } }) => {
  console.log(answer);
}, false);

worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});

worker.postMessage({
  question:
    'A silly question',
});

setTimeout( () => {
  worker.postMessage({
    question:
      'A sillier question',
  });
}, 100)
