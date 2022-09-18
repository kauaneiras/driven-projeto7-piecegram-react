import React from "react";

export default function Post({source, profile, feed, likes, liked, mainLiked, mainLikedSource, mediaType}) {
    
    const [isLiked, setIsliked] = React.useState(liked);

    function likePost() {
        setIsliked(!isLiked);
    }

    const likesquantity = isLiked ? (likes + 1) : likes;
    const wholiked = isLiked ? 'você' : mainLiked; 
    const profilewholiked = isLiked ? 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg' : mainLikedSource; 

    return (
        <div class="post" style={{border: '2px solid #DBDBDB', display: 'flex', flexDirection: 'column', maxWidth:'614px', borderRadius:'3px', backgroundColor: 'white', marginBottom:'30px'}}>
            <div class="postHeader" style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between', padding: '16px'}}>
                <div class="headerProfile" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={source} style={{cursor:'pointer', width:'32px', height:'32px', borderRadius:'50%'}}/>
                    <div style={{cursor:'pointer', fontFamily: 'Roboto', fontWeight: '500', fontSize:'14px', lineHeight: '16.41px', marginLeft: '15px'}}>{profile}</div>
                </div>
                <div class="headerDots">
                    <ion-icon name="ellipsis-horizontal" style={{cursor:'pointer'}}></ion-icon>
                </div>
            
            </div>
            <div class="postFeed" style={{width: '614px', backgroundColor: 'white', cursor: 'pointer', overflow: 'hidden'}}>
                {mediaType === 'image' ? (<img src={feed} style={{cursor: 'pointer', margin:'auto', height:'614px', display: 'flex', alignItems:'center', justifyContent:'center'}} onClick={() => setIsliked(true)} />) : 
                (<video onClick={likePost} autoPlay muted loop controls>
                    <source src={feed} type="video/mp4"></source>
                </video>
                )}
            </div>
            <div class="postFooter" style={{ backgroundColor:'white', display: 'flex', flexDirection: 'column' }}>
                <div class="footerIcons" style={{marginLeft: '16px', marginRight: '16px', marginTop: '12px', display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center',}}>
                    <div style={{display: 'flex', flexDirection: 'row', }}>


                        {isLiked ? (<ion-icon name="heart" style={{cursor:'pointer', color: '#B10201', height: '20px', visibility: 'visible', marginRight:'15px'}} onClick={likePost}></ion-icon>) : 
                        (<ion-icon name="heart-outline" style={{cursor:'pointer', height: '20px', color: 'black', marginRight:'15px'}} onClick={likePost}></ion-icon>)}

                        {/* <ion-icon style={{height: '20px', color: 'black', marginRight:'15px'}} name="heart-outline"></ion-icon> */}
                        <ion-icon style={{cursor:'pointer', height: '20px', color: 'black', marginRight:'15px'}} name="chatbubble-outline"></ion-icon>
                        <ion-icon style={{cursor:'pointer', height: '20px', color: 'black', marginRight:'15px'}} name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon style={{cursor:'pointer', height: '20px', color: 'black'}} name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="footerLikes" style={{height: '50px',backgroundColor:'white', borderRadius: '5px',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <img style={{marginLeft:'16px', backgroundColor:'white', height:'20px', width:'20px', borderRadius: '50%'}} src={profilewholiked}/>
                    <p style={{backgroundColor:'white', fontFamily: 'Roboto', marginLeft: '5px'}}>Curtido por <strong style={{cursor:'pointer'}}>{wholiked}</strong> e <strong style={{cursor:'pointer'}}>outras {likesquantity} pessoas</strong></p>
                </div>
            </div>
        </div>
        
    );
}