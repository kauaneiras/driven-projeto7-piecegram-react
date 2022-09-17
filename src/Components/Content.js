import Contentleft from './Contentleft';
import SideBar from './Sidebar';

export default function Content() {
  return (
    <div style={{backgroundColor:'#E5E5E5',height:'1700vh',width: '5000vw' ,maxWidth: '1000px',display:'flex', flexDirection: 'row'}}>
      <Contentleft/>
      <SideBar/>
    </div>
  );
}
