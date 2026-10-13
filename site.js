(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  // No Firebase set up yet (or the SDK failed to load): keep the built-in text.
  if (!window.FIREBASE_CONFIG || !window.firebase) return;

  firebase.initializeApp(window.FIREBASE_CONFIG);
  firebase.firestore().collection('site').doc('content').get()
    .then(function (doc) {
      if (doc.exists) applyContent(doc.data());
    })
    .catch(function (err) {
      console.warn('Could not load edited site text, showing the original.', err);
    });

  function applyContent(data) {
    window.SITE_FIELDS.forEach(function (field) {
      var value = data[field.key];
      if (typeof value !== 'string' || value.trim() === '') return;

      document.querySelectorAll('[data-field="' + field.key + '"]').forEach(function (el) {
        if (field.attr) {
          el.setAttribute(field.attr, value);
        } else {
          el.textContent = value;
        }
        if (field.type === 'email') el.setAttribute('href', 'mailto:' + value);
      });
    });
  }
})();
