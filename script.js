


// when menu button clicked slide nav will be toogle
let menuBtn = document.querySelector(".fa-bars");
let slideNav = document.querySelector(".slide-nav");
let videoDisplayArea = document.querySelector(".video-display-area");

menuBtn.addEventListener("click",()=>{
   slideNav.classList.toggle("slide-bar-active");
   videoDisplayArea.classList.toggle("video-display-area-active")
})



// category section added dynnimaclly from here


let categorySection = document.querySelector(".category-section");

let category = [
    'all',
    'Javascript',
    'Data Structures',
    'Music',
    'indian',
    'Marvel',
    'live',
    'lofinally',
    'movies',
    'presen tations',
    'asain',
    'recently',
    'watchlist',
    'newv',
    'html',
    'css',
    'Javascript',
    'c++',
    'rubey',
    'tmkoc',
    'cricket',
    'timeline'
]

category.forEach((e)=>{
    let div = document.createElement("div");
    div.classList.add("category");
    div.innerHTML = `<p class="category-title">${e}</p>`
    categorySection.appendChild(div)
})



// all videos lists

let videos = [
    {   
        title :'Why FedEx Use Missile Defense System on its Airplanes',
        link : '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MHzExnLmeU8?si=FgIdwGwr3rr5REUO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay></iframe>',
        thumbnail : 'https://img.youtube.com/vi/MHzExnLmeU8/sddefault.jpg',
        view : '4M',
        channel : 'Zem TV',
        channelLogo : 'https://yt3.ggpht.com/ytc/APkrFKYsqYPmL6-JEgs2rErwydteLMmNzQG9qV0Q8a0oxw=s68-c-k-c0x00ffffff-no-rj'
    },
    {
        title :'JavaScript Full Course ❤️ | Variables & Data Types | Lecture',
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
        title :'How She Hired as Frontend Developer in Microsoft - Step by Step to Crack Product',
        link : '<iframe width="560" height="315" src="https://www.youtube.com/embed/nU-TNks8bbs?si=JaKIiW_neFByTHYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay ></iframe>',
        thumbnail : 'https://img.youtube.com/vi/nU-TNks8bbs/sddefault.jpg',
        view : '1000',
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
        view : '4000',
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
    }

]
// exporting the data into new js file
// export default videos;



//  creating the videos from arrays


let videoContainer = document.querySelector(".videos");
videos.forEach((video, index) => {
    let div = document.createElement("div");
    div.classList.add("vid");
    div.innerHTML = `
        <img src="${video.thumbnail}" alt="" class="yt-thumbnail">
        <div class="profile-details">
            <img src="${video.channelLogo}" alt="">
            <div class="video-info">
                <p class="video-title">${video.title}</p>
                <p class="channel-name">${video.channel}</p>
            </div>
        </div>`;
    videoContainer.appendChild(div);

    // adding clickevent listner when video clicked then those data are save in local storage


    div.addEventListener("click", () => {
        let dataClickedUrl = video.link;
        let dataTitle = video.title;
        let channelLogo = video.channelLogo;
        let channelName = video.channel;
        videoPlay(dataClickedUrl, dataTitle, channelLogo, channelName);
    });



});

function videoPlay(url, title, channelLogo, channelName){
    

    // save the data into local when divs clicked
    localStorage.setItem('videoUrl', url);
    localStorage.setItem('videoTitle', title);
    localStorage.setItem('channelLogo', channelLogo);
    localStorage.setItem('channelName', channelName);

   

    // open new html settimoout used for loading the data 

    setTimeout(() => {
        window.location.href = 'video.html';
    }, 100);
}





