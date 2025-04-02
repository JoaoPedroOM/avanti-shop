document.addEventListener('DOMContentLoaded', function() {
    const footerHeaders = document.querySelectorAll('.footer-col:not(:first-child) h4');
    
    footerHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const footerCol = this.parentElement;
        
        footerCol.classList.toggle('active');
        footerHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            otherHeader.parentElement.classList.remove('active');
          }
        });
      });
    });
  });