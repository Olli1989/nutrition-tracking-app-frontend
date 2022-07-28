//cache aktivieren

const CACHE_NAME = 'version-1';

const urlsToCache = ['index.html', 'offline.html'];

//das ist der serviceworker

const self = this;

//event für die Installation des ServiceWorkers

self.addEventListener('install', (event)=>{

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then((cache)=>{

        console.log('Opened Cache');

        return cache.addAll(urlsToCache);

      })

  )

})

//auf Request horchen

self.addEventListener('fetch', (event) => {

  // Antwort mit angeforderter Ressource

  event.respondWith(

    //Request beispielsweise ein Image oder API-Call

    caches.match(event.request)

      .then(()=> {

        return fetch(event.request)

          .catch(()=> caches.match('offline.html'))

      })

  )

})

//aktivieren des SW

self.addEventListener('activate', (event) => {

  const cacheWhitelist = [];

  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(

    caches.keys().then((cacheNames) => Promise.all(

      cacheNames.map((cacheName) => {

        if(!cacheWhitelist.includes(cacheName)){

          return caches.delete(cacheName);

        }

      })

    )

  ))

})