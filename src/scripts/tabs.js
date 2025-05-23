export function initTabs() {
  const tabsContainer = document.querySelector('.channel-content__tabs');

  tabsContainer.addEventListener('click', (event) => {
    const tab = event.target.closest('.channel-content__tab');

    if (!tab) return;

    tabsContainer
      .querySelectorAll('.channel-content__tab')
      .forEach((tab) => tab.classList.remove('channel-content__tab--active'));

    tab.classList.add('channel-content__tab--active');
  });
}
