window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; 
    const heroText = document.querySelectorAll('.fade-text'); 

   
    if (scrollPosition > 100) {
        heroText.forEach(text => text.classList.add('hidden'));
    } else {
        
        heroText.forEach(text => text.classList.remove('hidden'));
    }
});

