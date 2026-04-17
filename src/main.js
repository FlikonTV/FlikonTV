import './style.css';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App root not found.');
}

app.innerHTML = `
  <main>
    <h1>FlikonTV build is ready ✅</h1>
    <p>The project has a working local build pipeline.</p>
  </main>
`;
