import Storys from './Storys.js';
import Feed from './Feed.js';

export default function Contentleft() {
  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
      <Storys/>
      <Feed/>
    </div>
  );
}