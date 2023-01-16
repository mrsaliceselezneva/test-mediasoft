import './Sidebar.scss';
import SidebarBlock from '../SidebarBlock/SidebarBlock';

const sidebarList = ['lol', 'kek', 'cheburek'];

function Sidebar() {
    return (
        <div className="sidebar">
            {sidebarList.map((element) => (
                <SidebarBlock gameType={element} />
            ))}
        </div>
    );
}

export default Sidebar;
