const menu = {
   btn: document.querySelector('.navigation__menu'),
   navigation: document.querySelector('.navigation'),
   clickEvt: function () {
      this.btn.addEventListener('click', () => {
         this.navigation.classList.toggle('navigation--change');
      });
   },
};

const loading = {
   spinnerContainer: document.querySelector('.spinner'),
   contentContainer: document.querySelector('.container'),
   hide: function () {
      setTimeout(() => {
         this.spinnerContainer.classList.add('spinner--change');
         this.contentContainer.classList.add('container--change');
      }, 3000);
   },
};

menu.clickEvt();
window.addEventListener('DOMContentLoaded', () => {
   loading.hide();
});
