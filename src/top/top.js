import './top.scss';
import { connect } from 'react-redux';

function Top(props) {
  return (
    <header class="main-header">
        <input type="text" placeholder="Поиск города" class="search-city" />
        <a href="/" class="logo">
            <img class="logo-shadow" src="https://developers.teleport.org/assets/logo.e663724a.svg" alt="Teleport" />
        </a>
        {props.cities}
    </header>
  );
}

function mapStateToProps(state){
    console.log('mapStateToProps -> ', state);
    return{
        cities: state.cities
    }
}

export default connect(mapStateToProps)(Top);
