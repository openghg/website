document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------
     Video Lightbox Modal
  -----------------------------*/
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <iframe src="" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(modal);

  const iframe = modal.querySelector('iframe');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-embed-url');
      iframe.src = url;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = '';
    }
  });

  /* ----------------------------
     Carousel Swipe
  -----------------------------*/
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    let isDown = false, startX, scrollLeft;

    carousel.addEventListener('mousedown', e => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);
    carousel.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

});
