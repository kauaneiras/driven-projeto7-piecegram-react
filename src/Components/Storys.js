import ProfileImages from "./ProfileImages";

function Story(props) {
    return (
      <div class="story" style={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '14px 0', fontSize: '12px', cursor: 'pointer', marginRight: '10px',}}>
        
        <div class="imagem" style={{backgroundImage:' url("https://pngimg.com/uploads/circle/circle_PNG26.png")', backgroundSize: '68px 68px', backgroundRepeat: 'no-repeat',backgroundPosition:'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70px', width: '70px'}}>
          <img src={props.sourceImage} style={{borderRadius:'50%', height:'60px', width: '60px'}}/>
        </div>
        <div class="storyuser" style={{fontSize: '12px', fontWeight:'500', fontFamily: 'Roboto' ,width: '66px', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center', height: '14px'}}>{props.profileName}</div>
      </div>
    );
  }

  export default function Storys() {
    return (
      <div class="stories" style={{backgroundColor: '#FFFFFF', marginBottom:'30px', marginTop: '90px',maxWidth:'580px', display: 'flex', flexDirection: 'row',alignItems: 'center',height: '118px', borderRadius: '5px', border: '2px solid #DBDBDB', padding: '0 18px', overflow: 'hidden', position: 'relative',}}>
        {ProfileImages.map((story) => (<Story sourceImage={story.source} profileName={story.profile}/>))}
        <div class="setinha" style={{position: 'absolute', right: '10px', top: '45px', height: '32px', width: '32px', color: '#FFF', fontSize: '28px', cursor: 'pointer',}}>
          <ion-icon style={{backgroundColor: 'rgba(128, 128, 128, 0.3)', borderRadius: '50%'}} name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
  }
  
  
  