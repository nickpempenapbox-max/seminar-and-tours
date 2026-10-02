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


 
function openProofModal(images) {
  const gallery = document.getElementById('proofGallery');
  const modal = document.getElementById('proofModal');
  
  if (!gallery || !modal) return;
  
  // Clear previous content
  gallery.innerHTML = '';
  
  // Convert to array if passed as a string or array
  let imageList = Array.isArray(images) ? images : [images];

  imageList.forEach(src => {
    // Clean up quotes or brackets if passed awkwardly
    let cleanSrc = src.replace(/[\[\]']/g, '').trim();
    
    const img = document.createElement('img');
    img.src = cleanSrc;
    img.alt = "Proof Image";
    img.className = "proof-image";
    
    // Fallback error check
    img.onerror = function() {
      console.error("Failed to load image at:", cleanSrc);
    };

    gallery.appendChild(img);
  });

  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
}

function closeProofModal() {
  const modal = document.getElementById('proofModal');
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
}
// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProofModal();
  }
});
