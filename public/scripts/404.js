const backBtn = document.getElementById('back');

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
  });