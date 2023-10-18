(()=>{
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
//     let counter = 0;
   chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, value, videoId} = obj;

       

        if(type === "NEW")
        {
            currentVideo = videoId;
             newVideoLoaded();
        }
   });
   
   const newVideoLoaded = () => {
     const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
     console.log(bookmarkBtnExists);
     if(!bookmarkBtnExists){

      const bookmarkBtn = document.createElement("img");
      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png")
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "add to bookmark"

     youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
     youtubePlayer = document.getElementsByClassName("video-stream")[0];

     youtubeLeftControls.appendChild(bookmarkBtn);
     }
   }
newVideoLoaded();

})();