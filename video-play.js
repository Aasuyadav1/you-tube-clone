
// import the array of videos from previous js file
// import videos from './video-play.js';
// console.log(videos);

// datas of videos that recomanded

let videos = [
    {
        title :'SSC | Final Episode : कर Jaayenge Ya घर Jaayenge | Amit Bhadana',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/0msPCoU0GY8?si=tHZ2rvGwpLWcBWf2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://i3.ytimg.com/vi/0msPCoU0GY8/hqdefault.jpg',
        view : '4.4M',
        channel : 'Amit Bhadana',
        channelLogo : 'https://yt3.ggpht.com/1vX1mZYVJJcNlU_X1jwHJYqelk9Q1Z4u65wYDlhDwsRrwlg601-Wuql_DSYO_Ogkt86DA8WU=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'Harvard CS50 (2023) – Full Computer Science University Course',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/LfaMVlDaQ24?si=BKsRFy-EktTCBYRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/LfaMVlDaQ24/sddefault.jpg',
        view : '700K',
        channel : 'freeCodeCamp.org',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'How To Prepare For Coding Interviews (In 2024)',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/JPMsNSDNows?si=AWxJGV9YQM8CutEN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/JPMsNSDNows/sddefault.jpg',
        view : '2.3K',
        channel : 'Conner Ardman',
        channelLogo : 'https://yt3.ggpht.com/OG7FMfG_isZdrfTKY10oxi-jh64kmdV2mLeyLvf2whGaqAxqPVYCqcB2cpRL4NQ8i8USGYqH=s88-c-k-c0x00ffffff-no-rj'
    },
    {   
        title :'Why FedEx Use Missile Defense System on its Airplanes',
        link : '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MHzExnLmeU8?si=FgIdwGwr3rr5REUO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay></iframe>',
        thumbnail : 'https://img.youtube.com/vi/MHzExnLmeU8/sddefault.jpg',
        view : '4M',
        channel : 'Zem TV',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKYsqYPmL6-JEgs2rErwydteLMmNzQG9qV0Q8a0oxw=s68-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'JavaScript Full Course ❤️ | Variables & Data Types | Lecture 1',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/ajdRvxDWH4w?si=5yH7pBe0SQ6ZhKlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay ></iframe>',
        thumbnail : 'https://img.youtube.com/vi/ajdRvxDWH4w/sddefault.jpg',
        view : '40M',
        channel : 'Apana college',
        channelLogo : 'https://yt3.ggpht.com/sq5rm1ghog5nfzTN0zeUaeXxc2PtB3KvKG2AJpyGN_O0ZPxwUoOS0Y5y1AkbMT1_LTHXMJ94MA=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'Figma Basics in One Video | Sigma Web Development Course - Tutorial #52',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/mpJb9GNxdYI?si=Ntrq2uZdGcT7YzsR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay ></iframe>',
        thumbnail : 'https://img.youtube.com/vi/mpJb9GNxdYI/sddefault.jpg',
        view : '4K',
        channel : 'code with harry',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'How She Hired as Frontend Developer in Microsoft - Step by Step to Crack Product 2024',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/nU-TNks8bbs?si=JaKIiW_neFByTHYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay ></iframe>',
        thumbnail : 'https://img.youtube.com/vi/nU-TNks8bbs/sddefault.jpg',
        view : '1000M',
        channel : 'Technical suneja',
        channelLogo : 'https://yt3.ggpht.com/f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'The Politics of Cricket World Cup | Explained by Dhruv Rathee',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/FW2vY2WnI68?si=cpZ1xHvaLD4oaJbv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/FW2vY2WnI68/sddefault.jpg',
        view : '10M',
        channel : 'Dhruv Rathee',
        channelLogo : 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s48-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'Complete javascript in under a minute learned js in one miutes',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xidy3Op9dP4?si=xIw-53i1HyE1MKvN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://i3.ytimg.com/vi/Xidy3Op9dP4/hqdefault.jpg',
        view : '5K',
        channel :'chai aur code',
        channelLogo : 'https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'True parallax with CSS-only is now possible | make awesome website in 20 minutes only',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qj0Qx8HpNUo?si=_WJSNSItjf0-vIM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/Qj0Qx8HpNUo/sddefault.jpg',
        view : '4000M',
        channel : 'Kevin powell',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'How Earphones Damage Your Ears? | don t used earphone the results will be unbeliveable',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngLQjI23GCM?si=unUCK5nT5_7hOVFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/ngLQjI23GCM/sddefault.jpg',
        view : '10M',
        channel : 'Professor of How',
        channelLogo : 'https://yt3.ggpht.com/rrj1j4Hx4T5EZNYP0l973HaHELJ8ntgPsethTZscS8unqQk1ydK1dU42CmuQ-MnvH_DXkEKNMQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'Submarine Types | Akula Class | Kilo Class | Scorpion Class | Tyan Class | AIP | Nuclear Submarine',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/uWZQT5u8Rvs?si=c49jtUKeoZUDqR9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/uWZQT5u8Rvs/sddefault.jpg',
        view : '1.1M',
        channel : 'Khan GS Research Centre',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKZnOrdnRFOdy0zK_wcMM7YBXZgVRax2BgUE1lqMdg=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'Taarak Mehta Ka Ooltah Chashmah | तारक मेहता का उल्टा चश्मा | Episode 860 | 11th March, 2021',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/caZbGPOPYcU?si=rIliEpwXMw6B8CcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/caZbGPOPYcU/sddefault.jpg',
        view : '5.1M',
        channel : 'Sonay PAL',
        channelLogo : 'https://yt3.ggpht.com/C2LsE5yGdsAyVyR3I3RPnIcrRQqLKrn5jygoQOWkyWH2Aol4nKlsh3HamGe9EYQK_TLfDzM0KQ=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'I coded 4 hours everyday for 1 year. And it changed my life.',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/6dpF_G3yMMQ?si=DQSBb5_OK79vGWo_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail : 'https://img.youtube.com/vi/6dpF_G3yMMQ/sddefault.jpg',
        view : '61K',
        channel : 'Power Couple',
        channelLogo : 'https://yt3.ggpht.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s88-c-k-c0x00ffffff-no-rj'
    }

]

// selecting using dom
let videoTtileD = document.querySelector(".channel-title"); //for video titiel
let channelLogoD = document.getElementById("chan-log"); // channel logo
let channelNameD = document.querySelector(".channel-names"); // cahnnel name
let subscribrD = document.querySelector(".sub-count"); // for subscribers
let likeD = document.querySelector(".like"); // for likes


let leftVideo = document.querySelector(".left-video");

// here access the data from local storage

let videoUrl = localStorage.getItem("videoUrl");
let videoTitle = localStorage.getItem("videoTitle");
let channelLogo = localStorage.getItem("channelLogo");
let channelName = localStorage.getItem("channelName");

//  when new html open then it will loaded
loadVideo();

function loadVideo (){


    // created videos those are cliked start playing

    let videoD = document.createElement("div");
    videoD.classList.add("video-playing");
    videoD.innerHTML = `${videoUrl}`;
    leftVideo.prepend(videoD)
    videoTtileD.innerHTML = `${videoTitle}`;
    channelLogoD.src = `${channelLogo}`;
    channelNameD.innerHTML = `${channelName}`; 
    
}

// video right section
let rightVideo = document.querySelector(".right-videos")


loadSuggestVideo();


// suggested video created 
function loadSuggestVideo(){
    videos.forEach((e, i)=>{
        let videoSuggested = document.createElement("div");
        videoSuggested.classList.add("video-suggested");
        videoSuggested.innerHTML = `<img src="${videos[i].thumbnail}" class="video-thumb" alt="">
        <div class="video-sug-info">
    <img src="${videos[i].channelLogo}" alt="">
    <div class="video-sug-info-detail">
         <p class="title">${videos[i].title}</p>
         <p class="channel-name">${videos[i].channel}</p>
      <div class="view-con">
         <p class="view">${videos[i].view}</p>
         <p class="date">6 year</p>
      </div>
    </div>
</div>`;
            rightVideo.prepend(videoSuggested)



            // this will check the video clicked and passsed the data of video
            // we can also used filter to access that data sperate
            videoSuggested.addEventListener("click", () => {
                let dataClickedUrl = e.link;
                let dataTitle = e.title;
                let channelLogo = e.channelLogo;
                let channelName = e.channel;
                let videoView = e.view;
                videoPlay(dataClickedUrl, dataTitle, channelLogo, channelName, videoView);
            });
    })
}



let viewsDis = document.querySelector('.views');
let monthDis = document.querySelector('.month-ago');
let subDis = document.querySelector('.sub-count');

function videoPlay(url, title, logo, name, view){
    let videoD = document.querySelector(".video-playing");
    videoD.innerHTML = "";
    videoD.innerHTML = `${url}`;
  // lets load the content of that videos are clicked 
   videoTtileD.innerHTML = `${title}`;
   channelLogoD.src = `${logo}`;
   channelNameD.innerHTML = `${name}`; 
   viewsDis.innerHTML = `${view} views`;
   let randomNo = Math.floor((Math.random())*10 + 1);
   monthDis.innerHTML = `${randomNo} month ago`;
   let RandomSub = Math.floor((Math.random())*500 + 100);
   subDis.innerHTML = `${RandomSub}K`

}


// for description btn 

let moreBtn = document.querySelector(".more-btn");
let descriptionText = document.querySelector(".descriptions-text");
moreBtn.addEventListener("click", ()=>{
    descriptionText.classList.toggle("active-desc")
   if(descriptionText.classList.contains("active-desc")){
     moreBtn.innerHTML = "show less..."
   }
   else{
     moreBtn.innerHTML = "...more"
   }
})


// if(document.activeElement === document.getElementById('com-inp')){
//     alert("a ma active")
// }

// let elem = document.querySelector('#com-inp');

// if (elem === document.activeElement) {
//     console.log('Element has focus!');
// } else {
//     console.log(`Element is not focused.`);
// }

let commentInput = document.querySelector('#com-inp'); // input
let inputButtons = document.querySelector('.comment-btns');
let showIcon = document.querySelector('.fa-angle-down');
let commentsCon = document.querySelector('.channel-comments');

// Function to check if the input is focused
function checkFocus() {
  if (commentInput === document.activeElement) {
        inputButtons.style.visibility= "visible";
        let cancelBtn = document.querySelector('.cancel-btn');
        cancelBtn.addEventListener("click",()=>{
            commentInput.value = "";
            inputButtons.style.visibility= "hidden";
        })
       
  } 
}
let commentBtn = document.querySelector('.comment-btn');

// Add event listeners for focus and blur events
commentInput.addEventListener('focus', checkFocus);
commentInput.addEventListener('blur', checkFocus);

//  lets make when user add new comments 
let commentMain = document.querySelector('.comments-disply-area');

commentBtn.addEventListener("click",()=>{
    if(commentInput.value == ""){
        // alert("enter something")
    }
    else{
    let commentDis = document.createElement("div");
    commentDis.classList.add("comments");
    commentDis.innerHTML = `<img src="https://lh3.googleusercontent.com/a/ACg8ocJFfBLev87tkg3u8LBrdzVN8sPII0cxUqs21KWZ-rmQ0pg=s396-c-no" alt="" class="com-img">
    <div class="comm-user-info">
        <div class="comm-header">
            <p class="user-name">You</p>
            <span>10s</span>
        </div>
        <p class="user-comments">${commentInput.value}</p>
        <div class="user-footer">
            <div class="user-like">
                <i class="fa-regular fa-thumbs-up icon"></i>
                <span class="like-count">0</span>
            </div>
            <i class="fa-regular fa-thumbs-down icon"></i>
        </div>
    </div>`;
    commentMain.prepend(commentDis);
    commentInput.value = ""
    }
})




let comments = [
    {
        userName : '@JessicaMorrison',
        userImg : 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
        userComment : 'Salute to such a Guru who has written the lives of millions of children Jai Hind😊',
        like : '100K'
    },
    {
        userName : '@Annie',
        userImg : 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
        userComment : 'Thank you sir for uploading informative vedios continuously in this week .Early waiting for your vedios ❤',
        like : '1K'
    },
    {
        userName : '@Maximus',
        userImg : 'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
        userComment : 'one of the best interviews i have ever heard ❤',
        like : '20'
    },
    {
        userName : '@Carmelo',
        userImg : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
        userComment : 'Is this much of DSA which she practiced on daily basis really required for a frontend role😶😶',
        like : '100'
    },
    {
        userName : '@Destiny',
        userImg : 'https://images.unsplash.com/photo-1625621435205-2d09ed661a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
        userComment : 'Pls Make videos on different technology apart from front end',
        like : '5K'
    },
    {
        userName : '@Amora',
        userImg : 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
        userComment : 'Ye to phir bhi talented girl hai hum jaisa low average walo k liye kuch nhi hai😢😢. I also want to go in tech background but the only thing i know that software tech me jane k liye degree ki zarurat hai me to B.pharma student hu',
        like : '10M'
    },
    {
        userName : '@Valeria',
        userImg : 'https://plus.unsplash.com/premium_photo-1671641797679-3b680a7d2109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
        userComment : 'Need more This type videos ✔️',
        like : '50'
    },
    
];


comments.forEach((current, i)=>{
    let commentDis = document.createElement("div");
    commentDis.classList.add("comments");
    commentDis.innerHTML = `<img src="${comments[i].userImg}" alt="" class="com-img">
    <div class="comm-user-info">
        <div class="comm-header">
            <p class="user-name">${comments[i].userName}</p>
            <span>17 hour ago</span>
        </div>
        <p class="user-comments">${comments[i].userComment}</p>
        <div class="user-footer">
            <div class="user-like">
                <i class="fa-regular fa-thumbs-up icon"></i>
                <span class="like-count">${comments[i].like}</span>
            </div>
            <i class="fa-regular fa-thumbs-down icon"></i>
        </div>
    </div>`;
    commentMain.appendChild(commentDis);

})


//  comments wrap

showIcon.addEventListener("click", ()=>{
    commentsCon.classList.toggle('comment-active')
})

let subscribeBtn = document.querySelector('.sub-btn');
subscribeBtn.addEventListener("click", ()=>{
    subscribeBtn.innerHTML = 'subscribed';
    subscribeBtn.style.backgroundColor = 'rgba( 48, 45, 44, 0.7 )'
    subscribeBtn.style.color = 'white'
})
let likedDis = document.querySelector(".like")
let likeBtn = document.querySelector(".liked");
likeBtn.addEventListener("click",()=>{
    likedDis.innerHTML = '101M'
})