window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; 
    const heroText = document.querySelectorAll('.fade-text'); 

   
    if (scrollPosition > 100) {
        heroText.forEach(text => text.classList.add('hidden'));
    } else {
        
        heroText.forEach(text => text.classList.remove('hidden'));
    }
});

// transisi popup
document.getElementById('profileButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup').classList.add('active');
});

// Close Popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

function handleadmin() {
   window.location.href='admin.html';
}

function handleuser(){
    window.location.href='profile.html'
}



