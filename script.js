window.addEventListener('scroll', () => {
  const header = document.querySelector('.fixed-area');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = 'none';
  }
});

const items = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(20px)';
  item.style.transition = '0.6s';
  observer.observe(item);
});