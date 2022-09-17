import Topbar from "./Topbar.js";
import Content from "./Content.js";

export default function App() {
  return (
    <div style={{backgroundColor: '#E5E5E5' ,height:'3200vh', display:'flex', justifyContent: 'center'}}>
      <Topbar/>
      <Content/>
    </div>
  );
}
