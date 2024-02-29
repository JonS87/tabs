const tabNavigation = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabNavigation.length; i++) {
  tabNavigation[i].onclick = () => {
    let classAvailability = tabNavigation[i].className.includes('tab_active');
    if (!classAvailability) {
      for (let j = 0; j < tabNavigation.length; j++) {
        if (tabNavigation[i].textContent === tabNavigation[j].textContent) {
          tabNavigation[j].classList.add('tab_active');
          tabContent[j].classList.add('tab__content_active');
        } else {
          tabNavigation[j].classList.remove('tab_active');
          tabContent[j].classList.remove('tab__content_active');
        }
      }
    }
  }
}