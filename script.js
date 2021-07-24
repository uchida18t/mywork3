'use strict';

{

  // header-menu

  const headerBars = document.getElementById('headerBars');
  const headerMenu = document.querySelector('.header-menu');
  const menuBars = document.getElementById('menuBars');

  headerBars.addEventListener('click', () => {
    headerBars.classList.add('hide');
    headerMenu.classList.add('slide-in');
  });

  menuBars.addEventListener('click', () => {
    headerMenu.classList.remove('slide-in');
    headerBars.classList.remove('hide');
  });

  // topContainer

  const topImages = document.querySelectorAll('.top-image');
  let topImagesI = 0;
  
  function imgChange() {
    topImages[topImagesI].classList.remove('show');
    if (topImagesI <= 1) {
      topImagesI++;
    } else {
      topImagesI = 0;
    }
    topImages[topImagesI].classList.add('show');
  }

  setInterval(imgChange, 4000);

  // guestRoom

  const roomTitles = document.querySelectorAll('.room-title');
  
  roomTitles.forEach(roomTitle => {
    const roomContents = document.querySelectorAll('.room-content');

    if (roomTitle === roomTitles[0]) {
      roomTitle.addEventListener('click', () => {
        if (roomTitle.classList.contains('clicked') === false) {
          roomTitles[1].classList.remove('clicked');
          roomContents[1].classList.remove('slide-in');
          roomTitles[2].classList.remove('clicked');
          roomContents[2].classList.remove('slide-in');
          roomTitle.classList.add('clicked');
          roomContents[0].classList.add('slide-in');
        }
      });
    }

    if (roomTitle === roomTitles[1]) {
      roomTitle.addEventListener('click', () => {
        if (roomTitle.classList.contains('clicked') === false) {
          roomTitles[0].classList.remove('clicked');
          roomContents[0].classList.remove('slide-in');
          roomTitles[2].classList.remove('clicked');
          roomContents[2].classList.remove('slide-in');
          roomTitle.classList.add('clicked');
          roomContents[1].classList.add('slide-in');
        }
      });
    }

    if (roomTitle === roomTitles[2]) {
      roomTitle.addEventListener('click', () => {
        if (roomTitle.classList.contains('clicked') === false) {
          roomTitles[0].classList.remove('clicked');
          roomContents[0].classList.remove('slide-in');
          roomTitles[1].classList.remove('clicked');
          roomContents[1].classList.remove('slide-in');
          roomTitle.classList.add('clicked');
          roomContents[2].classList.add('slide-in');
        }
      });
    }
  });
}