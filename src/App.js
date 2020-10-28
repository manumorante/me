import './App.css'

function App() {
  return (
    <div className="App">
      <div class="Avatar">
        <img className='Avatar__img' alt="Manu Morante" src="//www.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e.jpg?s=400" />
      </div>

      <h1 class="title">Manu Morante</h1>

      <p>Front end developer and UI designer</p>

      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/manumorante/" target="blank">Linkedin</a></li>
          <li><a href="https://www.github.com/manumorante/" target="blank">Github</a></li>
          <li><a href="https://www.codepen.io/manumorante/" target="blank">Codepen</a></li>
          <li><a href="https://www.instagram.com/manu.morante/" target="blank">Instagram</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
