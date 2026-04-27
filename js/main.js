var locationModal = document.getElementById("locationModal");
var miniGameModal = document.getElementById("miniGameModal");
var canolaModal = document.getElementById("canolaModal");
var transitionModal = document.getElementById("changeSceneModal");
var transitionModalTwo = document.getElementById("changeSceneModalTwo");
var transitionModalThree = document.getElementById("changeSceneModalThree");
var carFactsModal = document.getElementById("carFacts");
var tutorialModal = document.getElementById("tutorialModal");
var DoorModal = document.getElementById("DoorModal");
var BinModal = document.getElementById("BinModal");
var ChairModal = document.getElementById("ChairModal");
var PizzaModal = document.getElementById("PizzaModal");
var game = document.getElementById("Tgame");


// History Modal
var BeginningModal = document.getElementById("BeginningModal");
var modalPageContent = document.getElementById("modalPageContent");
var modalPageTitle = document.getElementById("modalPageTitle");
var modalPageImage = document.getElementById("modalPageImage");

// Window Modal
var WindowModal = document.getElementById("WindowModal");
var modalPage2Content = document.getElementById("modalPage2Content");
var modalPage2Title = document.getElementById("modalPage2Title");
var modalPage2Image = document.getElementById("modalPage2Image");


// HVAC Modal
var HVACModal = document.getElementById("HVACModal");
var modalPage3Content = document.getElementById("modalPage3Content");
var modalPage3Title = document.getElementById("modalPage3Title");
var modalPage3Image = document.getElementById("modalPage3Image");

// Storm Modal
var StormModal = document.getElementById("StormModal");
var modalPage4Content = document.getElementById("modalPage4Content");
var modalPage4Title = document.getElementById("modalPage4Title");
var modalPage4Image = document.getElementById("modalPage4Image"); 


var captionsEnabled = false;
var captions = document.getElementById("captions");
var currentPageIndex = 0;
var currentPageIndex2 = 0;
var currentPageIndex3 = 0;
var Bmusic = true;


const tracks = [
  'audio/Background/Lofi 1.mp3',
  'audio/Background/Lofi 2.mp3',
  'audio/Background/Lofi 3.mp3',
  'audio/Background/Lofi 4.mp3'
];

const histroyTracks = [
    'audio/Narration/H1.m4a', 
    'audio/Narration/H2.m4a',
    'audio/Narration/H3.m4a',
    'audio/Narration/H4.m4a'
]

const windowTracks = [
    'audio/Narration/W1.m4a', 
    'audio/Narration/W2.m4a',
    'audio/Narration/W3.m4a'
]

const hvacTracks = [
    'audio/Narration/HVAC 1.m4a',
    'audio/Narration/HVAC 2.m4a'
]



const pages = [
{title:"The Beginning!",
 content: "The Engineering building has grown tremendously. In 1965 was the start of the engineering program at the University of Calgary. The school started with two faculty members and 59 students. As of 2025, there are 4,610 enrolled students, and over 150 faculty members. As the demand for engineers grew, there was an obvious need for expansion at the university.",
 image: "./img/History/First.jpg",
 link: ""},
{title: "The Expansion", 
 content: "The engineering building is made up of seven smaller buildings or blocks. Construction began with Block E in 1964, followed by Blocks A, B, C and D between 1965-1969. In 1982, Block F was added to increase capacity. The final expansion finished in 2016 with Block G, which connected all the buildings. In June of 2005, the Faculty of Engineering was renamed to the Schulich School of Engineering. But why was the name changed?",
 image: "./img/History/Construction Building Image 2.png" ,
 link: ""},
{ title: "Behind the Name", 
 content: "The University of Calgary is proud to call the engineering building, the Schulich School of Engineering. The building was named after Seymour Schulich, a businessman, investor, author, and philanthropist. Seymour Schulich is one of Canada’s most generous philanthropist donating hundreds of millions of dollars towards education and healthcare. In June of 2005, Seymour Schulich donated $25 million towards the Faculty of Engineering. This donation also helped establish the Seymour Schulich Scholarships, which became the largest pool of engineering entrance scholarships in Canada.",
 image: "./img/History/Seymour Schulich 3.jpg",
 link: ""
},
 {title: "Where are we currently?",
 content: "We are currently in the entrance of Block G which was the latest addition to the engineering building. This building was constructed from around 4,000 metric tons of waste from landfills. That the same as weight as 674 African Elephants. This meant that 89.92% of the project was constructed from recycled materials. The following video shows more about the expansion of Block G and some of the features that are going to be discussed later on in the tour.",
 image: "",
 link: 'https://www.youtube.com/watch?v=J_T7IBvqPjY'
}

]


const pages2 = [
{title:"What is Dynamic Window Glazing?",
 content: "Dynamic, or electrochromic, windows are a type of glass that changes their tint throughout the day. The south face of the engineering building has 200 dynamic window panels. They are connected to roof mounted sensors that detect sun light and adjust accordingly. A small amount of electricity is used to move ions and electrons to darken the glass. But why are these windows so important?",
 contentTwo: "",
 contentThree: "",
 image: "./img/Window/Glass from the outside.png",
 link: ""},
{title: "Why Use Dynamic Windows?", 
 content: "Comfort is a key element in any study area. It directly impacts focus and productivity. The first thing that people will notice when entering a room is the temperature and lighting. A way that the engineering building controls these elements is by using dynamic glazing windows. Here is a side by side comparison of what they look like before and after tinting.",
 contentTwo: "",
 contentThree: "",
 image: "./img/Window/Before and after.png" ,
 link: ""},
{ title: "Effects On Comfort", 
 content: "Calgary experiences extreme fluctuation in temperature and weather. The windows on the engineering building help combat the burning sun on a hot summer day while providing the sun’s warmth on a freezing winter day.", 
 contentTwo: "There is nothing better than studying using natural light. The windows on the engineering building allow the perfect amount of sun to shine within its halls. This creates an inviting space for students to gather and study.",
 contentThree: "While the glass does a great job at regulating temperature, in tougher conditions it would not be enough on its own. Continue on with the virtual tour to learn about the HVAC system!",
 image: "",
 link: ""
}
]


const HVAC = [
{
title: "The Importance of HVAC ",
content: "The dynamic windows would not be able to combat the extreme weather on their own without the heating, ventilation, and air conditioning (HVAC) system. The HVAC system is in charge of maintaining an appropriate temperature and excellent air quality. There are many factors that degrade the quality of air such as smoke, excess carbon dioxide, allergens and other air pollutents. During the wildfire season, there is a large amount of smoke particles that degrade the general air quality. The HVAC system is able to deal with these issues by using air filtration, air exchange and humidity control. There are two main types of HVAC systems used at the University of Calgary. The blended recirculated air system and the outdoor air system.",
contentTwo: "",
contentThree: "",
contentFour: "",
image: "./img/loung/HVA Vnt.jpg",
link: ""},

{
title: "The Two Types of HVAC Systems",
content: "Blended Recirculated Air System:",	
contentTwo: "The blended recirculated air system takes the air from the inside of the building and blends it with outdoor air.  This type of system is energy efficient and has great longevity. Outdoor air must be conditioned to the desired temperature, so when the system uses inside air that has already been conditioned, it saves energy. This also increases longevity because the system is often operating at less strain making the parts last longer. In the engineering building, this type of HVAC system is found in blocks A, B, C, E and F.",
contentThree: "Outdoor Air System:",
contentFour: "The outdoor air system only uses fresh air from the outside. This system excels in providing constant fresh air and prevention of cross-air mixing. While the other system still provides fresh air from the outside, this system provides the fresh air at a much faster rate. This system is also great for the prevention of recirculating odors and allergens into other rooms in the building.  This type of HVAC system is found in blocks C, D and G.",
image: "",
link: ""}

]



const storm = [
{
title: "Storm Water Management",
content: "At first glance, the plants in this area seem to only be for aesthetic purposes. While the plants are very visually appealing, they also act as a green solution for storm water management. The surrounding area is design to ensure that the water gets absorbed into the soil. The soil helps filtrate the rainwater from natural pollutants, sediments and nutrients. This ensures that the rainwater does not pollute natural bodies of water containing biodiverse ecosystems and aquatic life. In addition to environmental benefits, the plants help improve the air quality. The university places chairs nearby to allow students to relax, enjoy the scenery and the fresh air.",
image: "./img/Outsi/Grn ara.png",
link: ""}
]

window.addEventListener("load", () =>{
    document.body.style.visibility =  "visible";
})


let currentTrack = 0;
let Music = null;
let history = null;
let windowAudio = null;
let hvacAudio = null;

function playMusic(index = 0){
    if (Music) {
        Music.stop();
    }

    Music = new Howl({
        src: [tracks[index]],
        volume: 0,
        onend: () => {
            currentTrack = (currentTrack + 1) % tracks.length;
            playMusic(currentTrack)
        }
    });
    Music.play();
    Music.fade(Music.volume(), 0.6, 3000);
}

function toggleMusic(){
    console.log("Toggling music");
    if (Bmusic){
        console.log("Stop Music");
        Bmusic = false;
        handleGuide("stopMusic");
    }
    else{
        Bmusic = true;
        handleGuide("music");
    }

}

function setCurrentTrack(index){
    currentTrack = index;
}

function getCurrentTrack(){
    return currentTrack;
}



function playHistory(index){
    if (history){
        history.stop();
    }

    history = new Howl({
        src: [histroyTracks[index]],
        volume: 1.0,
        onend: () => {
            if (Music){
                Music.fade(Music.volume(), 0.6, 3000);
            }
        }
    });
    if (Music){
        Music.fade(Music.volume(), 0.25, 1500);
    }
    history.play();
}


function playWindow(index){
    if (windowAudio){
        windowAudio.stop();
    }

    windowAudio = new Howl({
        src: [windowTracks[index]],
        volume: 1.0,
        onend: () => {
            if (Music){
                Music.fade(Music.volume(), 0.6, 3000);
            }
        }
    });
    if (Music){
        Music.fade(Music.volume(), 0.25, 1500);
    }
    windowAudio.play();
}


function playHVAC(index){
    if (hvacAudio){
        hvacAudio.stop();
    }

    hvacAudio = new Howl({
        src: [hvacTracks[index]],
        volume: 1.0,
        onend: () => {
            if (Music){
                Music.fade(Music.volume(), 0.6, 3000);
            }
        }
    });
    if (Music){
        Music.fade(Music.volume(), 0.25, 1500);
    }
    hvacAudio.play();
}

function changeCaptions(){

    if(captionsEnabled){
        captionsEnabled = false;
        captions.style.display = "none";
        return;
    }
    if(!captionsEnabled){
        captionsEnabled = true;
        captions.style.display = "block";
        return;
    }
}




function showCarModal(){
    carFactsModal.style.display = "flex";
}

function closeCarModal(){
    carFactsModal.style.display = "none";
}


function showLocationModal(){
    locationModal.style.display = "flex";
}

function closeLocationModal(){
    locationModal.style.display = "none";
}

function showDoorModal(){
    DoorModal.style.display = "flex";
    handleGuide("door")
}

function closeDoorModal(){
    DoorModal.style.display = "none";
    handleGuide("stopD")
}

function showBinModal(){
    BinModal.style.display = "flex";
    handleGuide("Bin")
}

function closeBinModal(){
    BinModal.style.display = "none";
    handleGuide("stopBin")
}

function showChairModal(){
    ChairModal.style.display = "flex";
    handleGuide("RC")
}

function closeChairModal(){
    ChairModal.style.display = "none";
    handleGuide("stopRC")
}

function showPizzaModal(){
    PizzaModal.style.display = "flex";
    handleGuide("pizza")
}

function closePizzaModal(){
    PizzaModal.style.display = "none";
    handleGuide("stopP")
}


function isMobileDevice() {
    return window.matchMedia("(pointer: coarse)").matches ||
        /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function getSceneElement() {
    return document.querySelector("a-scene");
}

function pauseSceneForGame() {
    const scene = getSceneElement();
    if (scene) {
        scene.pause();
    }
}

function resumeSceneAfterGame() {
    const scene = getSceneElement();
    if (scene) {
        scene.play();
    }
}




function showMemoryGame(){
    handleGuide("stopMusic");

    if (isMobileDevice()) {
        const gameUrl = new URL("Gam/AttemptTwo.html", window.location.href);
        gameUrl.searchParams.set("returnTo", window.location.href);

        window.location.href = (gameUrl.toString());
        return;
    }

    pauseSceneForGame();
    miniGameModal.style.display = "block";
    game.src = "Gam/AttemptTwo.html";
}

function closeMemoryGame(){
    miniGameModal.style.display = "none";
    handleGuide("music");
    game.removeAttribute("src");
    resumeSceneAfterGame();
}



// function showMemoryGame(){
//     // miniGameModal.style.display = "block";
//     window.open("/Gam/AttemptTwo.html", "_blank", "noopener,noreferrer");
//     handleGuide("stopMusic");
// }

// function closeMemoryGame(){
//     const scene = document.querySelector('a-scene');

//     miniGameModal.style.display = "none";
//     handleGuide("music")
//     game.removeAttribute("src");

//      if (scene) {
//         scene.play();
//     }
// }

function showCanolaModal(){
    canolaModal.style.display = "flex";
}

function closeCanolaModal(){    
    canolaModal.style.display = "none";
}

function showTutorialModal(){
    tutorialModal.style.display = "flex";
    handleGuide("tutorial")
}

function closeTutorialModal(){    
    tutorialModal.style.display = "none";
    handleGuide("stopT")
}

function showBeginningModal(){
    currentPageIndex = 0;
    updatePage();
    BeginningModal.style.display = "flex";    
}

function closeBeginningModal(){  
    handleGuide("stopH")
    BeginningModal.style.display = "none";
}

// History Tab

function updatePage(){
    modalPageTitle.innerText = pages[currentPageIndex].title;
    modalPageContent.innerText = pages[currentPageIndex].content;
    modalPageImage.src = pages[currentPageIndex].image;
    
    if (currentPageIndex == 0){
        handleGuide('H1');
    }
    if (currentPageIndex == 1){
        handleGuide('H2');
    }
    if (currentPageIndex == 2){
        handleGuide('H3');
    }
    if (currentPageIndex == 3){
        handleGuide('H4');
    }
    if (pages[currentPageIndex].link != "") {
        modalPageContent.innerHTML += `<br><br><br><br><p style="text-align: center;"><a href="${pages[currentPageIndex].link}" target="_blank"text-align="center">Watch Here!</a></p>`;
    }
}

function nextPage(){
    if(currentPageIndex < (pages.length - 1)){
        currentPageIndex = currentPageIndex + 1;
        updatePage();
    }

}

function prevPage(){
    if (currentPageIndex > 0){
        currentPageIndex = currentPageIndex - 1;
        updatePage();
    }

}





// Window Tab


function showWindowModal(){
    currentPageIndex2 = 0;
    updatePageWindow();
    WindowModal.style.display = "flex"; 
}

function closeWindowModal(){ 
    WindowModal.style.display = "none"
    WindowModal.style.zIndex = 9999;
    handleGuide("stopW")
}


function updatePageWindow(){
    modalPage2Title.innerText = pages2[currentPageIndex2].title;
    modalPage2Content.innerText = pages2[currentPageIndex2].content;
    modalPage2Image.src = pages2[currentPageIndex2].image;
    
    
    if (currentPageIndex2 == 0){
        handleGuide('W1');
    }
    if (currentPageIndex2 == 1){
        handleGuide('W2');
    }
    if (currentPageIndex2 == 2){
        handleGuide('W3');
    }
    

 
    if (pages2[currentPageIndex2].contentTwo != ""){
        modalPage2Content.innerHTML += `<br><br>${pages2[currentPageIndex2].contentTwo}`

    }

    if (pages2[currentPageIndex2].contentThree != ""){
        modalPage2Content.innerHTML += `<br><br>${pages2[currentPageIndex2].contentThree}`

    }

    if (pages2[currentPageIndex2].link != "") {
        modalPage2Content.innerHTML += `<br><br><br><br><p style="text-align: center;"><a href="${pages2[currentPageIndex2].link}" target="_blank"text-align="center">Learn More!</a></p>`;
    }
}

function nextPageWindow(){
    if(currentPageIndex2 < (pages2.length - 1)){
        currentPageIndex2 = currentPageIndex2 + 1;
        updatePageWindow();
    }

}

function prevPageWindow(){
    if (currentPageIndex2 > 0){
        currentPageIndex2 = currentPageIndex2 - 1;
        updatePageWindow();
    }
}







// HVAC


function showHVACModal(){
    currentPageIndex3 = 0;
    updatePageHVAC();
    HVACModal.style.display = "flex";
    
}

function closeHVACModal(){ 
    handleGuide("stopHVAC");
    HVACModal.style.display = "none";
}


function updatePageHVAC(){
    modalPage3Title.innerText = HVAC[currentPageIndex3].title;
    modalPage3Content.innerText = HVAC[currentPageIndex3].content;
    modalPage3Image.src = HVAC[currentPageIndex3].image;
    
    if (currentPageIndex3 == 0){
        handleGuide('HVAC1');
    }
    if (currentPageIndex3 == 1){
        handleGuide('HVAC2');
    }
 
    if (HVAC[currentPageIndex3].contentTwo != ""){
        modalPage3Content.innerHTML += `<br><br>${HVAC[currentPageIndex3].contentTwo}`

    }

    if (HVAC[currentPageIndex3].contentThree != ""){
        modalPage3Content.innerHTML += `<br><br>${HVAC[currentPageIndex3].contentThree}`

    }

    if (HVAC[currentPageIndex3].contentFour != ""){
        modalPage3Content.innerHTML += `<br><br>${HVAC[currentPageIndex3].contentFour}`

    }    

    if (HVAC[currentPageIndex3].link != "") {
        modalPage3Content.innerHTML += `<br><br><br><br><p style="text-align: center;"><a href="${HVAC[currentPageIndex3].link}" target="_blank"text-align="center">Learn More!</a></p>`;
    }
}


function nextPageHVAC(){
    if(currentPageIndex3 < (HVAC.length - 1)){
        currentPageIndex3 = currentPageIndex3 + 1;
        updatePageHVAC();
    }

}

function prevPageHVAC(){
    if (currentPageIndex3 > 0){
        currentPageIndex3 = currentPageIndex3 - 1;
        updatePageHVAC();
    }

}



// Storm Water Management

function showStormModal(){
    StormModal.style.display = "flex";
    updatePageStorm();
    handleGuide("SW")
}

function closeStormModal(){    
    StormModal.style.display = "none";
    handleGuide("stopSW")
}


function updatePageStorm(){
    modalPage4Title.innerText = storm[0].title;
    modalPage4Content.innerText = storm[0].content;
    modalPage4Image.src = storm[0].image;
    
    
    if (storm[0].link != "") {
        modalPage4Content.innerHTML += `<br><br><br><br><p style="text-align: center;"><a href="${pages[currentPageIndex].link}" target="_blank"text-align="center">Watch Here!</a></p>`;
    }
}



// Functions for Camera Rotations
// function MoveToEnteranceFromHall(event) {
//   event.preventDefault(); // stop instant navigation

//   const EnteranceCam = document.getElementById("cameraRigE")
//   EnteranceCam.setAttribute("rotation", { x: 0, y: 180, z: 0 });

//   setTimeout(() => {
//     window.location.href = "Enterance.html";
//   }, 500);
// }

window.addEventListener("DOMContentLoaded", () => {
  // check if user came from hall
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("from") === "hall") {
    const EnteranceCam = document.getElementById("cameraRigE");

    // apply rotation (example)
    EnteranceCam.setAttribute("rotation", { x: 0, y: -45, z: 0 });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // check if user came from hall
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("from") === "SOL") {
    const EnteranceHall = document.getElementById("cameraRigH");

    // apply rotation (example)
    EnteranceHall.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // check if user came from hall
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("from") === "L") {
    const EnteranceSOL = document.getElementById("cameraRigSOL");

    // apply rotation (example)
    EnteranceSOL.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  }
});


window.addEventListener("DOMContentLoaded", () => {
  // check if user came from hall
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("from") === "O") {
    const EnteranceSOL = document.getElementById("cameraRigSOL");

    // apply rotation (example)
    EnteranceSOL.setAttribute("rotation", { x: 0, y: -150, z: 0 });
  }
});





function showTransition(){
    transitionModal.style.display = "block";
}

function closeTransition(){    
    transitionModal.style.display = "none";
}

function showTransitionTwo(){
    transitionModalTwo.style.display = "block";
}

function closeTransitionTwo(){    
    transitionModalTwo.style.display = "none";
}

function showTransitionThree(){
    transitionModalThree.style.display = "block";
}

function closeTransitionThree(){    
    transitionModalThree.style.display = "none";
}


function setGuideType(type){
    localStorage.setItem("guideType", String(type));
}

function guideType() {
    return localStorage.getItem("guideType");
}



function handleGuide(section) {
    // this function will play the respective audio for the portion of the tour we want, global=
    
    if(guideType() == "full"){
        switch(section){
            case "intro":
              // Loads audio
                introSound = new Howl({
                    src: ['audio/Narration/introTour.mp3']
                });
                
                
                captions.innerText = "Welcome to the Schulich School of Engineering! Click on the infomation icons to learn more about how the tour works!"
                // Play
                introSound.play();
                Music.volume(0.25);
                break;

            case "music":
                playMusic(0);
                setCurrentTrack(0);
                break;

            case "stopMusic":
                setTimeout(() =>{
                    if (Music){
                        Music.fade(Music.volume(), 0.0, 1500);
                        setTimeout(() => {
                            Music.stop();
                        }, 1500);

                    }
                },250);
                break;
            

            case "tutorial":
                tut = new Howl({
                    src: ['audio/Narration/Tutorial.m4a']
                });
                tut.play();
                introSound.stop();
                break;
                
            case "stopT":
                tut.stop();
                Music.volume(0.60);
                break;

            // History/Enterance
            case 'H1':
                playHistory(0);
                break;
            
            case "H2":
                playHistory(1)
                break;
            
            case "H3":
                playHistory(2)
                break;

            case "H4":
                playHistory(3)
                break;

            case "stopH":
                if (history) {
                    history.fade(history.volume(), 0.0, 500);
                    setTimeout(() =>{
                        history.stop();
                    }, 500);
                    
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;
            
            
            case "door":
                
                door = new Howl({
                    src: ['audio/Narration/Door.m4a'],
                    onend: () =>{
                        if (Music){
                            Music.fade(Music.volume(), 0.6, 3000)
                        }
                        
                    }
                });
                if (Music){
                    Music.fade(Music.volume(), 0.25, 1500);
                }
                door.play();

                break;

            case "stopD":
                if (door){
                    door.fade(door.volume(), 0.0, 500)
                    setTimeout(() => {
                        door.stop();
                    }, 500);
                    
                }
                if (Music){
                    Music.fade(Music.volume(), 0.60, 3000);
                }
                break;

            case 'W1':
                playWindow(0);
                break;
            
            case "W2":
                playWindow(1);
                break;
            
            case "W3":
                playWindow(2);
                break;

            case "stopW":
                if (windowAudio){
                    windowAudio.fade(windowAudio.volume(), 0.0, 500);
                    setTimeout(()=>{
                        windowAudio.stop();
                    }, 500);
                    
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;

            // HVAC/Lounge
            case "HVAC1":
                playHVAC(0);
                break;

            case "HVAC2":
                playHVAC(1);
                break;

            case "stopHVAC":
                if (hvacAudio){
                    hvacAudio.fade(hvacAudio.volume(), 0.0, 500);
                    setTimeout(()=>{
                        hvacAudio.stop();
                    }, 500);
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;

            case "pizza":
                Pizza = new Howl({
                    src: ['audio/Narration/Pizza.m4a']
                })
                if (Music){
                    Music.fade(Music.volume(), 0.25, 1500);
                }
                Pizza.play();
                break;

            case "stopP":
                if (Pizza){
                    Pizza.fade(Pizza.volume(), 0.0, 500);
                    setTimeout(() => {
                        Pizza.stop();
                    }, 500);
                }    
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }    
                break;

            // Outside
            case "SW":
                SW = new Howl({
                    src: ['audio/Narration/SW.m4a'],
                    volume: 1.0
                });

                if (Music){
                    Music.fade(Music.volume(), 0.25, 1500);
                }
                SW.play();
                break;

            case "stopSW":
                if (SW){
                    SW.fade(SW.volume(), 0.0, 500);
                    setTimeout(() => {
                        SW.stop();
                    }, 500);
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;



            case "RC":
                RC = new Howl({
                    src: ['audio/Narration/RC.m4a'],
                    volume: 1.0
                });

                if (Music){
                    Music.fade(Music.volume(), 0.25, 1500);
                }
                RC.play();
                break;
            
            case "stopRC":
                if (RC){
                    RC.fade(RC.volume(), 0.0, 500);
                    setTimeout(() => {
                        RC.stop();
                    }, 500);
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;


            case "Bin":
                Bin = new Howl({
                    src: ['audio/Narration/Bin.m4a'],
                    volume: 1.0
                });
                if (Music){
                    Music.fade(Music.volume(), 0.25, 1500);
                }
                Bin.play();
                break;

            case "stopBin":
                if (Bin){
                    Bin.fade(Bin.volume(), 0.0, 500);
                    setTimeout(() => {
                        Bin.stop();
                    }, 500);
                }
                if (Music){
                    Music.fade(Music.volume(), 0.6, 3000);
                }
                break;
        }
    } else if (guideType() == "silent") {
        switch(section){
            case "music":
                playMusic(0);
                break;

            case "stopMusic":
                setTimeout(() =>{
                    if (Music){
                        Music.fade(Music.volume(), 0.0, 1500);
                        setTimeout(() => {
                            Music.stop();
                        }, 1500);

                    }
                },250);
                
                break;
        }
    }

}

function getWorldPose(entity) {
  const obj = entity.object3D;
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const rotation = new THREE.Euler();

  obj.getWorldPosition(position);
  obj.getWorldQuaternion(quaternion);
  rotation.setFromQuaternion(quaternion);

  return {
    position: { x: position.x, y: position.y, z: position.z },
    rotation: {
      x: THREE.MathUtils.radToDeg(rotation.x),
      y: THREE.MathUtils.radToDeg(rotation.y),
      z: THREE.MathUtils.radToDeg(rotation.z)
    }
  };
}

function moveCameraRigTo(targetPos, targetRot, duration = 1000) {
  return new Promise((resolve) => {
    const rig = document.querySelector('#cameraRig');
    const camera = document.querySelector('#userCamera');
    const wrapper = document.querySelector('#cameraWrapper');

    // Get current world position & rotation of camera
    const currentWorld = getWorldPose(camera);

    // Reset camera local offset (but do it safely to not break look-controls)
    camera.setAttribute('position', '0 0 0');

    // Reset wrapper height and rotation if altered
    wrapper.setAttribute('position', '0 1.6 0');
    wrapper.setAttribute('rotation', '0 0 0');

    // Move the rig instantly to the user's world pose
    rig.setAttribute('position', `${currentWorld.position.x} ${currentWorld.position.y} ${currentWorld.position.z}`);
    rig.setAttribute('rotation', `${currentWorld.rotation.x} ${currentWorld.rotation.y} ${currentWorld.rotation.z}`);

    // Hard-reset look-controls internal state (mouse movement fix)
    const lookControls = camera.components['look-controls'];
    if (lookControls) {
      lookControls.pitchObject.rotation.set(0, 0, 0);
      lookControls.yawObject.rotation.set(0, 0, 0);
      camera.object3D.rotation.set(0, 0, 0);
      lookControls.enabled = true;
    }

    // Animate rig from current to target position/rotation
    const start = {
      px: currentWorld.position.x, py: currentWorld.position.y, pz: currentWorld.position.z,
      rx: currentWorld.rotation.x, ry: currentWorld.rotation.y, rz: currentWorld.rotation.z
    };

    const end = {
      px: targetPos.x, py: targetPos.y, pz: targetPos.z,
      rx: targetRot.x, ry: targetRot.y, rz: targetRot.z
    };

    new TWEEN.Tween(start)
      .to(end, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        rig.setAttribute('position', `${start.px} ${start.py} ${start.pz}`);
        rig.setAttribute('rotation', `${start.rx} ${start.ry} ${start.rz}`);
      })
      .onComplete(resolve)
      .start();
  });
}


const steps = [
  { pos: { x: -1.5, y: 0, z: 1.65 }, rot: { x: -1, y: 128, z: 0 } },
  { pos: { x: 0.0, y: 0, z: -0.0 }, rot: { x: 0, y: 90, z: 0 } },
  { pos: { x: -2.25, y: 0, z: 0.1}, rot: { x: 0, y: 90, z: 0 } },
];

let count = 0;
let isMoving = false;

async function mover() {
  if (isMoving || count >= steps.length) return;

  isMoving = true;
  const step = steps[count];
  await moveCameraRigTo(step.pos, step.rot, 1000);
  count++;
  isMoving = false;
}




// Call this on each frame
AFRAME.registerComponent('tween-loop', {
    tick: function () {
      TWEEN.update();
    }
});
