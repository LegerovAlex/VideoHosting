import './slider';
import { initSwipers } from './slider';

let cachedVideoFeed = null;

export function initLinks() {
  const link = document.querySelector('.video-section__profile');
  link.addEventListener('click', onProfileClick);
}

function onProfileClick(e) {
  e.preventDefault();
  cachedVideoFeed = document.querySelector('.video-feed');
  history.pushState({}, '', '/channel');
  loadChannelFragment('/src/pages/channel.html');
}

async function loadChannelFragment(path) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const newMain = doc.querySelector('.channel-main');
    const currentMain = document.querySelector('.video-feed');

    if (newMain && currentMain) {
      currentMain.replaceWith(newMain);
      initSwipers();
    }
  } catch (err) {
    console.log('Ops, Sorry', err);
  }
}

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/') {
    history.replaceState({}, '', '/');
    const channelMain = document.querySelector('.channel-main');
    if (cachedVideoFeed && channelMain) {
      channelMain.replaceWith(cachedVideoFeed);
      initSwipers();
      initLinks();
    }
  }
});
