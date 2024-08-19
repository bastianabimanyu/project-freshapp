function loadHTML(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  } 

  // Menyesuaikan path ke folder include
  loadHTML('navbar', 'navbar.html');
  loadHTML('footer', 'footer.html');    


 // Select elements
 const menuIcon = document.getElementById('menu-icon');
 const navLinks = document.getElementById('nav-links');

 function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}








