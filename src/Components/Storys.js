import ProfileImages from "./ProfileImages";

function Story(props) {
    return (
      <div class="story" style={{backgroundImage:' url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Instagram_Stories_ring.svg/2048px-Instagram_Stories_ring.svg.png")',display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '14px 0', fontSize: '12px', cursor: 'pointer', marginRight: '10px',}}>
        <div class="imagem" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '66px', width: '66px'}}>
          <img src={props.sourceImage} style={{borderRadius:'50%', height:'56px', width: '56px'}}/>
        </div>
        <div class="usuario" style={{width: '66px', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center', height: '14px'}}>{props.profileName}</div>
      </div>
    );
  }

  export default function Storys() {
    return (
      <div class="stories" style={{backgroundColor: '#FFFFFF', marginBottom:'30px', marginTop: '90px',maxWidth:'580px', display: 'flex', flexDirection: 'row',alignItems: 'center',height: '118px', borderRadius: '3px', border: '1px solid #DBDBDB', padding: '0 18px', overflow: 'hidden', position: 'relative'}}>
        {ProfileImages.map((story) => (<Story sourceImage={story.source} profileName={story.profile}/>))}
        <div class="setinha" style={{position: 'absolute', right: '10px', top: '45px', height: '32px', width: '32px', color: '#FFF', fontSize: '28px', cursor: 'pointer', }}>
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
  }
  
  