import "./sidebar.css";
import {
  ViewWeekOutlined,  
  Home,
  AccountTree,
  Dashboard,
  Message,
  Assignment,
  Apartment,
  Settings,
  ExitToApp,
} from "@material-ui/icons";


export default function Sidebar() {
  return (
    <div className="sidebar">
        <span className="logo">KYRO</span>
        <ViewWeekOutlined className="logo1" />
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
             <br />
            <li className="sidebarListItem">
              <AccountTree className="sidebarIcon" />
              Project
            </li>
            <br />

            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            <br />

            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Message
            </li>
            <br />

            <li className="sidebarListItem">
              <Assignment className="sidebarIcon" />
              Document
            </li>
            <br />

            <li className="sidebarListItem">
              <Apartment className="sidebarIcon" />
              Organization
            </li>
            <br />

            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Setting
            </li>
            <br />
            <br /><br /><br /><br /><br /><br />
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              Logout
            </li>
            

          </ul>
        </div>
        
       
      
      </div>
    </div>
  );
}
