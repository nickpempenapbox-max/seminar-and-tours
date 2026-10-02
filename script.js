// Carousel State Management
let currentSeminarIndex = 0;
let currentBadgeIndex = 0;

// Seminar Carousel Navigation
function changeSeminarSlide(direction) {
  const seminars = document.querySelectorAll('.seminar-card');
  const totalSeminars = seminars.length;

  if (totalSeminars === 0) return;

  seminars[currentSeminarIndex].classList.remove('active');
  
  currentSeminarIndex = (currentSeminarIndex + direction + totalSeminars) % totalSeminars;
  
  seminars[currentSeminarIndex].classList.add('active');
  
  const counter = document.getElementById('seminarSlideCounter');
  if (counter) {
    counter.textContent = `Webinar ${currentSeminarIndex + 1} of${totalSeminars}`;
  }
}

// Badge Carousel Navigation
function changeBadgeSlide(direction) {
  const badges = document.querySelectorAll('.badge-card-slide');
  const totalBadges = badges.length;

  if (totalBadges === 0) return;

  badges[currentBadgeIndex].classList.remove('active');
  
  currentBadgeIndex = (currentBadgeIndex + direction + totalBadges) % totalBadges;
  
  badges[currentBadgeIndex].classList.add('active');
  
  const counter = document.getElementById('badgeSlideCounter');
  if (counter) {
    counter.textContent = `Badge ${currentBadgeIndex + 1} of${totalBadges}`;
  }
}

// Lightbox Proof Modal Functionality
function openProofModal(imageArray) {
  const modal = document.getElementById('proofModal');
  const gallery = document.getElementById('proofGallery');
  
  if (!modal || !gallery) return;

  gallery.innerHTML = '';
  
  imageArray.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Proof Image';
    gallery.appendChild(img);
  });
  
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProofModal() {
  const modal = document.getElementById('proofModal');
  if (!modal) return;
  
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProofModal();
  }
});