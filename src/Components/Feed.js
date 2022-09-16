import Post from './Post';
import ProfileImages from './ProfileImages';

export default function Feed() {
    return (
      <div class="posts" style={{backgroundColor: '#E5E5E5'}}>
        {ProfileImages.map((ProfileImages) => (
          <Post
            source={ProfileImages.source}
            profile={ProfileImages.profile}
            likes={ProfileImages.likes}
            mainLiked={ProfileImages.mainLiked}
            mainLikedSource={ProfileImages.mainLikedSource}
            feed={ProfileImages.feed}
            liked={ProfileImages.liked}
            mediaType={ProfileImages.mediaType}/>
        ))}
      </div>
    );
  }