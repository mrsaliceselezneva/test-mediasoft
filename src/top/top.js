import './top.scss';

function Top() {
  return (
    <header class="main-header">
        <input type="text" placeholder="Поиск города" class="search-city" />
        <a href="/" class="logo">
            <img class="logo-shadow" src="https://developers.teleport.org/assets/logo.e663724a.svg" alt="Teleport" />
        </a>
    </header>
  );
}

export default Top;
