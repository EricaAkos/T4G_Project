let username = prompt("Please enter your name");
if (username){
    document.getElementById('message').innerHTML = `Welcome, ${username} 🤗🤗!!`
} 
window.onload = username;


// document.getElementById("quest1").addEventListener("click", function() {
//     const quest1 = document.getElementById('quest1');
//       quest1.innerHTML = 'I know now what the DOM is 🙌';
//       quest1.style.backgroundColor = "grey";
//       quest1.style.color = "black";
//   });
const homeimg1 = document.querySelectorAll('.homeimg1');

function addHoverEffects(homeimg1) { 
    homeimg1.addEventListener('mouseover', function() { 
        homeimg1.style.transform = 'scale(1.1)'; 
        homeimg1.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
 }); 
 homeimg1.addEventListener('mouseout', function () { 
    homeimg1.style.transform = 'scale(1)'; 
    homeimg1.style.boxShadow = 'none'; 
}); 
} 
homeimg1.forEach(homeimg1 => { 
    addHoverEffects(homeimg1); 
});
const home2 = document.getElementById('home2'); 
home2.style.width = '250px'; 
home2.style.height = 'auto';

const viewparaButton = document.getElementById('open'); 
const closeparaButton = document.getElementById('close'); 
const paraContainer = document.getElementById('para');

viewparaButton.addEventListener('click', function() { 
    paraContainer.classList.remove('hidden'); 
});

closeparaButton.addEventListener('click', function() { 
    paraContainer.classList.add('hidden'); 
});

const viewpara1Button = document.getElementById('open1'); 
const closepara1Button = document.getElementById('close1'); 
const para1Container = document.getElementById('para1');

viewpara1Button.addEventListener('click', function() { 
    para1Container.classList.remove('hidden'); 
});

closepara1Button.addEventListener('click', function() { 
    para1Container.classList.add('hidden'); 
});

const viewpara2Button = document.getElementById('open2'); 
const closepara2Button = document.getElementById('close2'); 
const para2Container = document.getElementById('para2');

viewpara2Button.addEventListener('click', function() { 
    para2Container.classList.remove('hidden'); 
});

closepara2Button.addEventListener('click', function() { 
    para2Container.classList.add('hidden'); 
});


const viewpara3Button = document.getElementById('open3'); 
const closepara3Button = document.getElementById('close3'); 
const para3Container = document.getElementById('para3');

viewpara3Button.addEventListener('click', function() { 
    para3Container.classList.remove('hidden'); 
});

closepara3Button.addEventListener('click', function() { 
    para3Container.classList.add('hidden'); 
});

const viewpara4Button = document.getElementById('open4'); 
const closepara4Button = document.getElementById('close4'); 
const para4Container = document.getElementById('para4');

viewpara4Button.addEventListener('click', function() { 
    para4Container.classList.remove('hidden'); 
});

closepara4Button.addEventListener('click', function() { 
    para4Container.classList.add('hidden'); 
});

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});