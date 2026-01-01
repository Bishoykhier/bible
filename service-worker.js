self.addEventListener('install', event => {
  console.log('Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker Activated');
});

self.addEventListener('push', event => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'bible-icon.png'
    })
  );
});
