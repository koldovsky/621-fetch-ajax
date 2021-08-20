(function() {
    const navBarButton = document.querySelector('.navbar-button');
    const navBarLinks = document.querySelector('.navbar-links');
    
    function showBurgerControls() {
        if (window.innerWidth < 700) {
            navBarButton.style.display = 'block'; 
            navBarLinks.style.display = 'none'; 
        } else {
            navBarButton.style.display = 'none'; 
            navBarLinks.style.display = 'block';            
        }
    }

    function navBarButtonClick() {
        navBarLinks.style.display = navBarLinks.style.display === 'block' ? 'none' : 'block';
    }

    navBarButton.addEventListener('click', navBarButtonClick);

    showBurgerControls();

    window.addEventListener('resize', showBurgerControls);

})();