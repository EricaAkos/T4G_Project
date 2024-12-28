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