import styles from './SidebarBlock.module.scss';

function SidebarBlock(props) {
    return (
        <div
            onClick={props.changeSelectGameType}
            className={props.select ? styles.select_game_type : styles.game_type}>
            {props.gameType}
        </div>
    );
}

export default SidebarBlock;
