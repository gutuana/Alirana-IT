// Editable text on the public page (index.html).
//
// Each `key` is both the field name saved in Firestore (site/content) and the
// data-field attribute of the element(s) it controls. The admin page reads the
// element's current text from index.html as the original value, so the text
// only lives in one place. A field left empty keeps that original text.
//
// Shared by index.html (site.js patches the page) and admin/index.html
// (builds the edit form).
window.SITE_FIELDS = [
  { key: 'companyName', group: 'Company', label: 'Company name (browser tab and footer)' },
  { key: 'metaDescription', group: 'Company', label: 'Description shown in search results', attr: 'content', multiline: true },

  { key: 'logoMain', group: 'Header', label: 'Logo, first part' },
  { key: 'logoAccent', group: 'Header', label: 'Logo, coloured part' },
  { key: 'navAbout', group: 'Header', label: '"About" link' },
  { key: 'navServices', group: 'Header', label: '"Services" link' },
  { key: 'navProjects', group: 'Header', label: '"Projects" link' },
  { key: 'navContact', group: 'Header', label: '"Contact" link' },

  { key: 'heroEyebrow', group: 'Top of page', label: 'Small line above the title' },
  { key: 'heroTitle', group: 'Top of page', label: 'Title', multiline: true },
  { key: 'heroLead', group: 'Top of page', label: 'Sentence under the title', multiline: true },
  { key: 'heroButton', group: 'Top of page', label: 'Button' },

  { key: 'aboutHeading', group: 'About section', label: 'Heading' },
  { key: 'aboutText', group: 'About section', label: 'Text', multiline: true },

  { key: 'servicesHeading', group: 'Services section', label: 'Heading' },
  { key: 'service1Title', group: 'Services section', label: 'Service 1, title' },
  { key: 'service1Text', group: 'Services section', label: 'Service 1, description', multiline: true },
  { key: 'service2Title', group: 'Services section', label: 'Service 2, title' },
  { key: 'service2Text', group: 'Services section', label: 'Service 2, description', multiline: true },
  { key: 'service3Title', group: 'Services section', label: 'Service 3, title' },
  { key: 'service3Text', group: 'Services section', label: 'Service 3, description', multiline: true },

  { key: 'projectsHeading', group: 'Projects section', label: 'Heading' },
  { key: 'projectsEmptyTitle', group: 'Projects section', label: 'Bold line' },
  { key: 'projectsEmptyText', group: 'Projects section', label: 'Text', multiline: true },

  { key: 'contactHeading', group: 'Contact section', label: 'Heading' },
  { key: 'contactText', group: 'Contact section', label: 'Text', multiline: true },
  { key: 'contactEmail', group: 'Contact section', label: 'Email address', type: 'email' }
];
