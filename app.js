

alert("Please Scroll Down To Get Random Color Generator Button in Moblie Device.");

// Let's Start Our JavaScript 

// Getting the DOM elements from the HTML file

const btn = document.querySelector("#generateBtn");
const frames = document.querySelectorAll(".frame");
const colorCaptions = document.querySelectorAll(".code");
const toast = document.querySelector(".copy-toast");
const cCode = document.querySelector("#cCode");
const body = document.querySelector("body");



// Handling the events 
btn.addEventListener("click", show5color);




// Generating the Colors
function generateColors() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};



// Show the 5 color function
function show5color() {
    for (let i = 0; i < 6; i++) {
        frames[i].style.backgroundColor = generateColors();
        colorCaptions[i].innerText = generateColors();
    }

};


// Copy the ClipBoard functionality
frames.forEach((fr,ind)=>{
    fr.addEventListener("click",(e)=>{
        let code = colorCaptions[ind].innerText;
        let clip = document.createElement("input");
        body.appendChild(clip);
        clip.value = code;
        clip.select();
        document.execCommand("copy");
        cCode.innerText = clip.value;
        toast.classList.add("show-toast");
        setTimeout(() => {
            toast.classList.remove("show-toast");
        }, 3000); 
        body.removeChild(clip);
    })
})

