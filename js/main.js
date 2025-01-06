const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('.faq-header');
  header.addEventListener('click', () => {
    // Close all other FAQ items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    // Toggle the clicked FAQ item
    item.classList.toggle('active');
  });
});

//faq-footer
const footerFaqItems = document.querySelectorAll('.footer-faq-item');

    footerFaqItems.forEach(item => {
      const question = item.querySelector('.footer-faq-question');
      question.addEventListener('click', () => {
        // Close all other FAQ items
        footerFaqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle the clicked FAQ item
        item.classList.toggle('active');
      });
    });