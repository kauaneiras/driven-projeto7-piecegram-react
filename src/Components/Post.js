import React from "react";

export default function Post({source, profile, feed, likes, liked, mainLiked, mainLikedSource, mediaType}) {
    
    const [isLiked, setIsliked] = React.useState(liked);

    function likePost() {
        setIsliked(!isLiked);
    }

    return (
        <div class="post" style={{display: 'flex', flexDirection: 'column', maxWidth:'614px', maxHeight: '749px', borderRadius:'3px', backgroundColor: 'white', marginBottom:'80px'}}>
            <div class="postHeader" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '16px'}}>
                <div class="headerProfile" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={source} style={{width:'32px', height:'32px', borderRadius:'50%'}}/>
                    <div style={{fontFamily: 'Roboto', fontWeight: '500', fontSize:'14px', lineHeight: '16.41px', marginLeft: '15px'}}>{profile}</div>
                </div>
                <div class="headerDots">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            
            </div>
            <div class="postFeed" style={{width: '612px', backgroundColor: 'white', cursor: 'pointer', overflow: 'hidden'}}>
                {mediaType === 'image' ? (<img src={feed} style={{cursor: 'pointer', height:'612px', display: 'flex', alignItems:'center', justifyContent:'center'}} onClick={() => setIsliked(true)} />) : 
                (<video onClick={likePost} autoPlay muted loop controls>
                    <source src={feed} type="video/mp4"></source>
                </video>
                )}
            </div>
            <div class="postFooter" style={{height:'40px', backgroundColor:'white', display: 'flex', flexDirection: 'column' }}>
                <div class="footerIcons" style={{marginLeft: '16px', marginRight: '16px', marginTop: '12px', display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <div style={{display: 'flex', flexDirection: 'row', }}>
                        <ion-icon style={{height: '20px', color: 'black'}} name="heart-outline"></ion-icon>
                        <ion-icon style={{height: '20px', color: 'black'}} name="chatbubble-outline"></ion-icon>
                        <ion-icon style={{height: '20px', color: 'black'}} name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon style={{height: '20px', color: 'black'}} name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="footerLikes" style={{height: '50px',backgroundColor:'white', borderRadius: '5px',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <img style={{marginLeft:'16px', backgroundColor:'white', height:'20px', width:'20px', borderRadius: '50%'}} src={mainLikedSource}/>
                    <p style={{backgroundColor:'white', fontFamily: 'Roboto', marginLeft: '5px'}}>Curtido por <strong>{mainLiked}</strong> e <strong>outras {likes} pessoas</strong></p>
                </div>
            </div>
        </div>
        
    );
}