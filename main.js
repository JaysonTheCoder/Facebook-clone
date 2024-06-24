

let mock_feedData = [
  {
    name: "Clash of Clans",
    timeAfter: "2 day",
    content: {
      type: "text",
      display: "I've been wiping my own tears since i was a kid, i got me don't worry"
    },
    likes: 687,
    comments: 267,
    shares: 468,
    profile: "/src/layout_3222.jpg"
  },
  {
    name: "Joy",
    timeAfter: "24mins",
    content: {
      type: "image",
      display: "/",
      caption: "Hello"
    },
    likes: 347,
    comments: 35,
    shares: 12,
    profile: ""
  },
  {
  name: "Joy",
  timeAfter: "29mins",
  content: {
    type: "text",
    display: "Hi I'm Joy from Insideout 2."
  },
  likes: 347,
  comments: 35,
  shares: 12,
  profile: "/src/Joy.jpg"
},
{
  name: "Sadness",
  timeAfter: "12mins",
  content: {
    type: "text",
    display: "Being sad is my hobby."
  },
  likes: 347,
  comments: 35,
  shares: 12,
  profile: "/src/Sadness.png"
},
{
  name: "Jayson Bonina",
  timeAfter: "10mins",
  content: {
    type: "text",
    display: "Hello world"
  },
  likes: 347,
  comments: 35,
  shares: 12,
  profile: ""
},
{
  name: "Jayson Bonina",
  timeAfter: "10mins",
  content: {
    type: "text",
    display: "Hello world"
  },
  likes: 347,
  comments: 35,
  shares: 12,
  profile: ""
},
{
  name: "Jayson Bonina",
  timeAfter: "10mins",
  content: {
    type: "text",
    display: "Hello world"
  },
  likes: 347,
  comments: 35,
  shares: 12,
  profile: ""
}
]


mock_feedData.forEach((data)=>{
  let feed = document.querySelector('.feed')
  let news = document.createElement('div')
  feed.appendChild(news)
  news.className = 'news'
    if(data.content.type == 'text') {
      news.innerHTML = `
        <div class="user-info">
          <div class="profile">
              <img src=${data.profile} alt="profile">
          </div>
            
          <div>
            <h3 class="name">${data.name}</h3>
            <div>
              <p>${data.timeAfter} .</p>
            </div>
          </div>
            
            <div class="menu">
              <button>
                <img src="/src/option.png" alt="option">
              </button>
              
            </div>
        </div>
        
       <div class="news-content">
            <div>
              <p>${data.content.display}. </p>
            </div>
            <div class="news-nav">
              <div class="reactions">
                <img src="/src/facebook-reactions (1).png" width="26px" alt="heart">
                <img src="/src/facebook-reactions (2).png" width="26px" alt="like">
              </div>
              <div name="second">
                <button>
                  <img id="like" aria-label="" src="/src/like.png" alt="like" width="22px">
                  <label for="like">${
                    (function() {
                      if(data.likes > 1000) {
                        return data.likes + 'k'
                      }else return data.likes
                    })()
                    
                  }</label>
                </button>

                <button>
                  <img id="comment" src="/src/comment.png" alt="comment" width="22px">
                  <label for="commemt">${
                    (function() {
                      if(data.comments > 1000) {
                        return data.comments + 'k'
                      }else return data.comments
                    })()
                    
                  }</label>                  
                </button>        
                <button>
                  <img id="share" src="/src/share.png" alt="share" width="22px">
                  <label for="share">${
                      (function() {
                        if (data.shares > 1000) {
                          return data.shares + 'k'
                      }else return data.shares
                      })()

}</label>                  
                </button>                
              </div>
            </div>
          </div>
          
  
      `
      
    }
  
})
