import Topbar from "./Topbar.js";
import Content from "./Content.js";

export default function App() {
  return (
    <div style={{backgroundColor: '#E5E5E5' ,height:'1800vh', display:'flex', justifyContent: 'center'}}>
      <Topbar/>
      <Content/>
    </div>
  );
}
