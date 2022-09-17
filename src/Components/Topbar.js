import React from "react";
import styled from 'styled-components';


export default function Topbar(){
    return(
    <TopbarSize style={{position: 'fixed', backgroundColor: '#FFFFFF', width: '100%', zIndex:'10', height: '54px', borderBottom:'1px solid #ebebeb', display:'flex' , flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: '#FFFFFF',width: '100%',maxWidth: '1000px', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
            <div style={{}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="logoinsta" style={{height: '40px', cursor: 'pointer'}}/>
            </div>
            <SearchBar style={{}}>
                <input type="text" placeholder="Pesquisar" style={{width: '215px', height:'28px',backgroundColor:'#FAFAFA', color:'#979797', border:'1px solid #DBDBDB', borderRadius:'3px' ,fontFamily:'Roboto, sans-serif', fontSize: '12px', display:'flex', justifyContent:'center',alignItems:'center', textAlign: 'center', lineHeight: '14.06px'}}/>
            </SearchBar>
            <AllIcons>
                <ion-icon name="paper-plane-outline" height="40px" style={{cursor: 'pointer', height:'40px', marginRight: '20px'}}></ion-icon>
                <ion-icon name="compass-outline" height="40px" style={{cursor: 'pointer', height:'40px', marginRight: '20px'}}></ion-icon>
                <ion-icon name="heart-outline" height="40px" style={{cursor: 'pointer', height:'40px', marginRight: '20px'}}></ion-icon>
                <ion-icon name="person-outline" height="40px" style={{cursor: 'pointer', height:'40px', marginRight: '20px'}}></ion-icon>
            </AllIcons>
            <MidiaMin style={{}}>
            <ion-icon name="paper-plane-outline" style={{height:'40px', marginRight: '20px'}}></ion-icon>
            </MidiaMin>
        </div>
    </TopbarSize>
    );
}


const TopbarSize = styled.div`
    @media (max-width: 614px){
        display: flex;
        align-items: space-between;

    }
`

const SearchBar = styled.div`
    height: 100%;
    color: black;
    @media (max-width: 614px){
        display: none;
    }
`
const AllIcons = styled.div`

    @media (max-width: 614px){
        display: none;
    }
`
const MidiaMin = styled.div`
    @media (min-width: 614px){
        display: none;
    }
`