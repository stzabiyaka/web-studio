(() => {
  const btnRefs = {
    all: document.querySelector('[data-filter-all]'),
    sites: document.querySelector('[data-filter-sites]'),
    applications: document.querySelector('[data-filter-applications]'),
    design: document.querySelector('[data-filter-design]'),
    marketing: document.querySelector('[data-filter-marketing]'),
  };

  const itemsRefs = {
    sites: document.querySelectorAll('[data-sites]'),
    applications: document.querySelectorAll('[data-applications]'),
    design: document.querySelectorAll('[data-design]'),
    marketing: document.querySelectorAll('[data-marketing]'),
  };
  const btnKeys = Object.keys(btnRefs);
  const itemsKeys = Object.keys(itemsRefs);

  btnRefs.all.addEventListener('click', showAll);
  btnRefs.sites.addEventListener('click', showOnly.bind(this, { name: 'sites' }));
  btnRefs.applications.addEventListener('click', showOnly.bind(this, { name: 'applications' }));
  btnRefs.design.addEventListener('click', showOnly.bind(this, { name: 'design' }));
  btnRefs.marketing.addEventListener('click', showOnly.bind(this, { name: 'marketing' }));

  function showAll() {
    itemsKeys.forEach(key => {
      itemsRefs[key].forEach(element => element.classList.remove('js-hidden'));
    });

    buttonToggle({ name: 'all' });
  }

  function showOnly({ name }) {
    classToggle({ name: name });
    buttonToggle({ name: name });
  }

  function classToggle({ name }) {
    itemsKeys.forEach(key => {
      if (key === name) {
        itemsRefs[key].forEach(element => element.classList.remove('js-hidden'));
      } else {
        itemsRefs[key].forEach(element => element.classList.add('js-hidden'));
      }
    });
  }

  function buttonToggle({ name }) {
    btnKeys.forEach(btn => {
      if (btn === name) {
        btnRefs[btn].disabled = true;
      } else {
        btnRefs[btn].disabled = false;
      }
    });
  }
})();
