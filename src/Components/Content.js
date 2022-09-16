import Contentleft from './Contentleft';
import SideBar from './Sidebar';

export default function Content() {
  return (
    <div style={{backgroundColor:'#E5E5E5',height:'100vh', width: '100%',maxWidth: '1000px',display:'flex', flexDirection: 'row'}}>
      <Contentleft/>
      <SideBar/>
    </div>
  );
}
