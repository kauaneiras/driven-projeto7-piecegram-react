import React from "react";
import styled from 'styled-components';

const SugestionVector = [
    {source: 'https://3.bp.blogspot.com/-2pp4u_MLmv8/W5VKcaqs7-I/AAAAAAAAt_E/wKFer6Gw19MFHSwv2jA0kI8pJvuGOUICQCLcBGAs/s1600/Charlotte%2BKatakuri.png', name: 'katakuri', reason: 'Segue você'},
    {source: 'https://i.pinimg.com/originals/70/a7/bc/70a7bc093dda3fd707ab56de9ac00d31.jpg', name: 'vinsmoke.niji', reason: 'Novo no Piecegram'},
    {source: 'https://cdn.myanimelist.net/r/360x360/images/characters/14/159079.jpg?s=f22b4a5f51b2edd53ea278cee2c5d865', name: 'shirahoshi', reason: 'Novo no Piecegram'},
    {source: 'https://pbs.twimg.com/media/FZrZ1umWQAAo0hL?format=jpg&name=large', name: 'cross.guild.store', reason: 'Segue você'},
    {source: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4086f46a-dc59-4cf9-b9e0-378158337c0b/d39g7i0-93187069-68ff-4887-948e-2e11fbbe3e4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwODZmNDZhLWRjNTktNGNmOS1iOWUwLTM3ODE1ODMzN2MwYlwvZDM5ZzdpMC05MzE4NzA2OS02OGZmLTQ4ODctOTQ4ZS0yZTExZmJiZTNlNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rEGQfgsq3aMM_roSvxAhTFkBZrtcUL1QfyOV2nUrCFg', name: 'penelopy.okama', reason: 'Segue você'}, 
]

//backgroundColor: '#E5E5E5'

function Sugestion(props) {
  const [status, setStatus] = React.useState('Seguir');

  return (
    <div class="sugestion" style={{backgroundColor: '#E5E5E5', height: '34px', width:'294px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', height: '31px', marginBottom: '16px'}}>
      <div class="usersugestion" style={{display: 'flex', alignItems: 'center', width: '80%', height: '48px'}}>
        <img src={props.source} style={{width:'32px', height:'32px', borderRadius: '50%', marginRight: '10px'}}/>
        <div class="text" style={{marginTop:'3px'}}>
          <div class="sugestionnameuser" style={{fontFamily:'Roboto, Sans', fontWeight: '500', fontSize: '14px', lineHeight:'16.41px', color: '#262626'}}>{props.name}</div>
          <div class="reason" style={{fontFamily:'Roboto', fontWeight: '400', fontSize: '12px', lineHeight:'16.41px', color: '#8E8E8E'}}>{props.reason}</div>
        </div>
      </div>

      <div class="fallow" style={{color:'#139EF2', fontSize: '12px',fontFamily:'Roboto' , fontWeight:'500'}} onClick={() => status == 'Seguir'? setStatus('Seguindo') : setStatus('Seguir')}>
        {status}
      </div>
    </div>
  );
}



export default function Sidebar() {
  return (
    <SidebarVisibility class="sidebar" style={{ backgroundColor: '#E5E5E5', width:'294px', height: '377px', borderRadius:'3px', marginTop:'88px', marginLeft:'30px'}}>
      <div class="user" style={{display: 'flex', height:'96px', alignItems: 'center', justifyContent: 'flex-start'}}>
        <img style={{cursor: 'pointer', borderRadius:'50%', height:'56px', width: '56px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqrCh-hXm21Gw2BW0o_3MiZzjIbuVVgwZzA&usqp=CAU" />
        <div class="userprofilename" style={{marginLeft: '16px'}}>
          <div style={{color: '#262626', fontWeight: '600', fontSize: '14px', fontFamily: 'Roboto' , cursor: 'pointer'}}>shanksruivo</div>
          <div style={{color: '#8E8E8E', fontWeight: '300', fontSize: '14px', fontFamily: 'Roboto'}}>Shanks O Ruivo</div>
        </div>
      </div>

      <div class="sugestions">
        <div class="titulo" style={{display:'flex', justifyContent:'space-between' ,marginTop:'6px', fontWeight:'500', fontSize:'12px', lineHeight:'14.06px', color: '8E8E8E'}}>
        <div style={{fontFamily:'Roboto', fontWeight:'500', fontSize:'12px', color:'#8E8E8E'}}>Sugestões para você</div>
          <div style={{fontFamily:'Roboto', fontWeight:'500', fontSize:'12px', color:'#262626', cursor:'pointer'}}>Ver tudo</div>
        </div>
        <div class="sugestions-map" style={{marginTop: '40px'}}>
        {SugestionVector.map((value) => (
          <Sugestion
            source={value.source}
            reason={value.reason}
            name={value.name}
          />
        ))}
        </div>
      </div>

      <div class="links" style={{color:'#C7C7C7', fontFamily:'Roboto', fontSize:'11px', fontWeight:'400', lineHeight:'13px', letterSpacing:'0em', textAlign:'left'}}>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright" style={{color:'#C7C7C7', fontFamily:'Roboto', fontSize:'11px', fontWeight:'400', lineHeight:'13px', letterSpacing:'0em', textAlign:'left'}}>© 2022 PIECEGRAM DO ONE PIECE</div>
    </SidebarVisibility>
  );
}


const SidebarVisibility = styled.div`

    @media (max-width: 1000px){
        display: none;
    }
`