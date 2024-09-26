//  membuat hamburger //
 
 const menuIcon = document.getElementById('menu-icon');
 const navLinks = document.getElementById('nav-links');

 function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// membuat accordion //

const accordion = document.getElementsByClassName('contentbx');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('active');
            let content = this.querySelector('.content');
            
            if (this.classList.contains('active')) {
                content.style.height = content.scrollHeight + 'px';
                content.style.transition = '0.90s';
                content.style.overflow = 'hidden';
            } else {
                content.style.height = '0';
                content.style.transition = '0.90s';
            }
        });
    }

// membuat accordion 2 //

let accordions = document.querySelectorAll('.accordionautama .accordion');
accordions.forEach((acco)=>{
    acco.onclick = () => {
        accordions.forEach((subcontent) => {
            subcontent.classList.remove('active');
        })
        acco.classList.add('active');
    }
})


    // membuat swiper gambar

        new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 20,
      
        // pagination bullets
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
      });









