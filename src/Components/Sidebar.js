import React from "react";
import { useState } from "react";

const SugestionVector = [
    {source: 'https://3.bp.blogspot.com/-2pp4u_MLmv8/W5VKcaqs7-I/AAAAAAAAt_E/wKFer6Gw19MFHSwv2jA0kI8pJvuGOUICQCLcBGAs/s1600/Charlotte%2BKatakuri.png', name: 'katakuri', reason: 'Segue você'},
    {source: 'https://i.pinimg.com/originals/70/a7/bc/70a7bc093dda3fd707ab56de9ac00d31.jpg', name: 'vinsmoke.niji', reason: 'Novo no Piecegram'},
    {source: 'https://cdn.myanimelist.net/r/360x360/images/characters/14/159079.jpg?s=f22b4a5f51b2edd53ea278cee2c5d865', name: 'shirahoshi', reason: 'Novo no Piecegram'},
    {source: 'https://pbs.twimg.com/media/FZrZ1umWQAAo0hL?format=jpg&name=large', name: 'cross.guild.store', reason: 'Segue você'},
    {source: 'https://static.wikia.nocookie.net/onepiece/images/1/15/120px-ElizabethHeadShot.jpg/revision/latest/smart/width/250/height/250?cb=20101117044415&path-prefix=pt', name: 'penelopy.okama', reason: 'Segue você'}, 
]

//backgroundColor: '#E5E5E5'

function Sugestion(props) {
  const [status, setStatus] = React.useState('Seguir');

  return (
    <div class="sugestion" style={{backgroundColor: '#E5E5E5', height: '34px', width:'294px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', height: '31px', marginBottom: '16px'}}>
      <div class="usuario" style={{display: 'flex', width: '80%', height: '48px'}}>
        <img src={props.source} style={{width:'32px', height:'32px', borderRadius: '50%'}}/>
        <div class="texto">
          <div class="sugestionname" style={{fontFamily:'Roboto, Sans', fontWeight: '500', fontSize: '14px', lineHeight:'16.41px', color: '#262626'}}>{props.name}</div>
          <div class="razao" style={{fontFamily:'Roboto', fontWeight: '400', fontSize: '12px', lineHeight:'16.41px', color: '#8E8E8E'}}>{props.reason}</div>
        </div>
      </div>

      <div class="seguir" style={{color:'#139EF2', fontSize: '12px', fontWeight:'500'}} onClick={() => setStatus('Seguindo')}>
        {status}
      </div>
    </div>
  );
}



export default function Sidebar() {
  return (
    <div class="sidebar" style={{ backgroundColor: '#E5E5E5', width:'294px', height: '377px', borderRadius:'3px', marginTop:'88px', marginLeft:'30px'}}>
      <div class="user" style={{display: 'flex', height:'96px', alignItems: 'center', justifyContent: 'spare-between'}}>
        <img style={{borderRadius:'50%', height:'56px', width: '56px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqrCh-hXm21Gw2BW0o_3MiZzjIbuVVgwZzA&usqp=CAU" />
        <div class="userprofilename">
          <div><strong>shanks_ruivo</strong></div>
          <div>Shanks O Ruivo</div>
        </div>
      </div>
      

      <div class="sugestoes">
        <div class="titulo" style={{display: 'flex', marginTop: '6px', fontWeight: '500', fontSize:'12px', lineHeight:'14.06px', color: '8E8E8E'}}>
        <div>Sugestões para você</div>
          <div>Ver tudo</div>
        </div>
        <div class="sugestoes" style={{marginTop: '40px'}}>
        {SugestionVector.map((value) => (
          <Sugestion
            source={value.source}
            reason={value.reason}
            name={value.name}
          />
        ))}
        </div>
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2022 PIECEGRAM DO ONE PIECE</div>
    </div>
  );
}
