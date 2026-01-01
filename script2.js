

const verseAr = document.getElementById('verse-ar');
const verseEn = document.getElementById('verse-en');
const verseRef = document.getElementById('verse-ref');

// Load used verses from localStorage
let usedVerses = JSON.parse(localStorage.getItem('usedVerses')) || [];

// Function to pick a new verse that hasn't been used
function getNewVerse() {
  const availableVerses = verses.filter((v, index) => !usedVerses.includes(index));
  if (availableVerses.length === 0) {
    usedVerses = [];
    localStorage.removeItem('usedVerses');
    return getNewVerse();
  }
  const randomIndex = Math.floor(Math.random() * availableVerses.length);
  const verse = availableVerses[randomIndex];
  const realIndex = verses.indexOf(verse);
  usedVerses.push(realIndex);
  localStorage.setItem('usedVerses', JSON.stringify(usedVerses));
  return verse;
}

// Display verse
function displayVerse(verse) {
  verseAr.textContent = verse.ar;
  verseEn.textContent = verse.en;
  verseRef.textContent = verse.ref;
}

// Show today's verse
const todayVerse = getNewVerse();
displayVerse(todayVerse);

// Request notification permission
if ("Notification" in window) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    new Notification("آية اليوم", {
      body: todayVerse.ar + "\n" + todayVerse.en + "\n" + todayVerse.ref,
      icon: "bible-icon.png"
    });
  }
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}

// document.addEventListener("DOMContentLoaded", () => {
//   const verseAr = document.getElementById('verse-ar');
//   const verseEn = document.getElementById('verse-en');
//   const verseRef = document.getElementById('verse-ref');

//   let usedVerses = JSON.parse(localStorage.getItem('usedVerses')) || [];

//   function getNewVerse() {
//     const availableVerses = verses.filter((v, index) => !usedVerses.includes(index));
//     if (availableVerses.length === 0) {
//       usedVerses = [];
//       localStorage.removeItem('usedVerses');
//       return getNewVerse();
//     }
//     const randomIndex = Math.floor(Math.random() * availableVerses.length);
//     const verse = availableVerses[randomIndex];
//     const realIndex = verses.indexOf(verse);
//     usedVerses.push(realIndex);
//     localStorage.setItem('usedVerses', JSON.stringify(usedVerses));
//     return verse;
//   }

//   function displayVerse(verse) {
//     verseAr.textContent = verse.ar;
//     verseEn.textContent = verse.en;
//     verseRef.textContent = verse.ref;
//   }

//   const todayVerse = getNewVerse();
//   displayVerse(todayVerse);

//   // إشعارات
//   if ("Notification" in window && Notification.permission === "granted") {
//     new Notification("آية اليوم", {
//       body: todayVerse.ar + "\n" + todayVerse.en + "\n" + todayVerse.ref,
//       icon: "bible-icon.png"
//     });
//   } else if ("Notification" in window) {
//     Notification.requestPermission();
//   }
// });

