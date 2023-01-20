import './SidebarBlock.scss';

function SidebarBlock(props) {
    return (
        <div
            onClick={props.changeSelectGameType}
            className={props.select ? 'select-game-type' : 'game-type'}>
            {props.gameType}
        </div>
    );
}

export default SidebarBlock;
