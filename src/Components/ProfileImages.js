const ProfileImages = [
    { source: 'https://sm.ign.com/t/ign_br/screenshot/default/blob_ut5r.1200.jpg', profile: 'luffy', feed:'https://shogi-pineapple.com/wp-content/uploads/2022/03/1647469774_One-Piece-this-quiz-will-tell-you-if-you-are.jpg', likes: 134, liked: false, mainLiked: 'bartolomeo', mainLikedSource: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', mediaType: 'image'}, 
    { source: 'https://cdn.ome.lt/oVWWr24OxMUgy6jhuVtOiKTWiQE=/1200x630/smart/extras/conteudos/yamato-capa-omelete.jpg', profile: 'yamato', feed:'https://pbs.twimg.com/media/FLTYGf3aIAQzlad.jpg', likes: 67, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/originals/0f/62/05/0f62058ee89389e00e7c6b0af5f7d984.jpg', profile: 'zoro', feed: 'https://i.ytimg.com/vi/dgeW8G6sk_Q/maxresdefault.jpg', likes: 53, liked: false, mainLiked: 'bartolomeo', mainLikedSource: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/736x/ed/10/2d/ed102db05a609ea983d8abd1515e3a06.jpg',profile: 'princessvivi', feed: 'https://img1.ak.crunchyroll.com/i/spire3-tmb/6a06b43ce3cf495e4735f8269664bf151487468036_main.jpg', likes: 584.543, liked: false, mainLiked: 'bartolomeo', mainLikedSource: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', profile: 'bartolomeo', feed: 'https://pm1.narvii.com/6350/f6f559a96c19fda2a96fe4cf42c187fa4584a6be_hq.jpg', likes: 35, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/originals/30/02/a0/3002a0d4af576f795e75e5ad512e8364.jpg', profile: 'kavendish', feed:'https://i.pinimg.com/564x/e4/88/b4/e488b49197516b610f5642ef19d7922a--one-piece-d-one-piece-manga.jpg', likes: 999, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/originals/68/eb/e4/68ebe48ee3c663d6f839f9444de0fe40.jpg', profile: 'tra.law', feed:'https://designe.com.br/wp-content/uploads/2021/06/piratas-heart-one-piece.jpg', likes: 653, liked: false, mainLiked: 'bepo', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/736x/51/ad/8e/51ad8eb7d60c546e727d2e428250d51a.jpg', profile: 'hankock', feed: 'https://trecobox.com.br/wp-content/uploads/2022/07/boa-hancock-One-Piece-Stampede-01.jpg', likes: 945.948, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', profile: 'bepo', feed: 'https://pa1.narvii.com/6614/079ee6f0960c1c9aa7ac0dd0d9278b04a398fa06_hq.gif', likes: 245, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/originals/ea/a0/55/eaa05552e95a472f7a1063fcd3ba433b.jpg', profile: 'koala', feed: 'https://i0.wp.com/pa1.narvii.com/6701/92bbc36c5afae88b64940126aec95cb80a78355c_hq.gif', likes: 739 , liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://ovicio.com.br/wp-content/uploads/2022/04/20220412-ovicio-one-piece-jinbe-555x555.jpg', profile: 'jimbei', feed: 'https://i.pinimg.com/originals/26/9e/b8/269eb8acb175de29a433491b81795ad0.jpg', likes: 354, liked: false, mainLiked: 'bartolomeo', mainLikedSource: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', mediaType: 'image'},
    { source: 'https://static.wikia.nocookie.net/onepiece/images/4/47/Eustass_Kid_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20150130172539&path-prefix=pt', profile: 'eus.kid', feed: 'https://i.pinimg.com/originals/a2/46/08/a24608778477b2b5dc35089e41d7b789.jpg', likes: 657, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
    { source: 'https://i.pinimg.com/474x/b0/e0/dc/b0e0dc669a5da1da338769e5b5ddc721.jpg', profile: 'chopper', feed: 'https://i.pinimg.com/originals/1c/96/66/1c9666fde8acb3cd87515e1ee2695727.jpg', likes: 259, liked: false, mainLiked: 'bartolomeo', mainLikedSource: 'https://i.pinimg.com/originals/61/ea/50/61ea50f43e0ce79362f000150957fd66.jpg', mediaType: 'image'},
    { source: 'https://static.wikia.nocookie.net/onepiece/images/1/14/Carrot_Portrait.png/revision/latest?cb=20190516231328', profile: 'carrot', feed: 'https://sm.ign.com/ign_br/screenshot/default/blob_6fb4.jpg', likes: 534, liked: false, mainLiked: 'ALGUEMAQUI', mainLikedSource: 'http://pm1.narvii.com/6537/9b8d700e8c458f59f9c853d410cb3d0b54188024_00.jpg', mediaType: 'image'},
  ];

  export default ProfileImages;
  
  
  // sourceProfile: source
  // nameProfile: profile
  // qtdLikes: '101.523',
  // mainLiked: 'respondeai',
  // mainLikedSource: 'assets/img/respondeai.svg',
  // media: Feed
  // likes: liked
  // mediaType: 'image',