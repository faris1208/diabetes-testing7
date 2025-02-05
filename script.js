

function scrollToSection() {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollSection() {
    document.getElementById('target-section-two').scrollIntoView({ behavior: 'smooth' });
  }

let openId = null;

function toggleAccordion(id) {
  if (openId === id) {
    openId = null;
  } else {
    openId = id;
  }

  renderAccordion();
}

function renderAccordion() {
  const accordionItems = document.querySelectorAll('.accordion_item');

  accordionItems.forEach(item => {
    const button = item.querySelector('.accordion_header');
    const content = item.querySelector('.accordion_content');

    const itemId = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);

    if (openId === itemId) {
      item.classList.add('open');
    } else {
      item.classList.remove('open');
    }
  });
}

renderAccordion();
