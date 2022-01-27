document.getElementById('button-1').addEventListener('click', button1)
document.getElementById('button-2').addEventListener('click', button2)
document.getElementById('button-3').addEventListener('click', button3)

async function fetch_method_and_headers() {
  const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await response.text();
  console.log(content)
}

async function fetch_credentials() {
  const response = await fetch('http://localhost:3000/cookies', {
    credentials: 'include'
  });
  const content = await response.text();
  console.log(content)
}

async function fetch_redirect() {
  const response = await fetch('http://localhost:3000/redirect', {
    // redirect: 'error'
    // redirect: 'follow'
    redirect: 'manual'
  });
  console.log(...response.headers)
  const content = await response.text();
  console.log(content)
}


function button1() {
  fetch_method_and_headers()
}

function button2() {
  fetch_credentials();
}

function button3() {
  fetch_redirect();
}
