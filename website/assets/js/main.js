const playersMeter = document.getElementById('metric-players');
const factionsMeter = document.getElementById('metric-factions');
const housesMeter = document.getElementById('metric-houses');
const mapTime = document.getElementById('mapTime');
const peakPlayers = document.getElementById('peakPlayers');
const panelUser = document.getElementById('panelUser');
const panelStatus = document.getElementById('panelStatus');
const panelBalance = document.getElementById('panelBalance');
const panelSkill = document.getElementById('panelSkill');
const panelTickets = document.getElementById('panelTickets');
const newsFeed = document.getElementById('newsFeed');
const yearSlot = document.getElementById('year');

const menuToggle = document.getElementById('menuToggle');
const header = document.querySelector('.site-header');

const modalToggles = document.querySelectorAll('[data-open]');
const modalClosers = document.querySelectorAll('[data-close]');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const fakeNews = [
  {
    title: 'District Expo November',
    body: 'Tiga fraksi baru membuka pendaftaran terbatas dengan quest storyline khusus untuk perekrutan pertama.',
    date: '30 Oct 2025',
  },
  {
    title: 'Update Ekonomi Kota',
    body: 'Pajak properti dinaikkan 3% untuk mendukung pembangunan lahan bisnis Vinewood. Pemerintah kota menyiapkan subsidi bagi UMKM.',
    date: '26 Oct 2025',
  },
  {
    title: 'Championship Week #12',
    body: 'Total hadiah Rp1.500.000 siap diperebutkan melalui turnamen street race dan tactical robbery.',
    date: '21 Oct 2025',
  },
  {
    title: 'Patch Anti-Cheat',
    body: 'Sistem behavior analytics menangkap 27 akun cheater dalam 48 jam. Pastikan gunakan launcher resmi.',
    date: '18 Oct 2025',
  },
];

function populateNews() {
  if (!newsFeed) return;

  newsFeed.innerHTML = '';
  fakeNews.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'news-card';
    article.innerHTML = `
      <span class="date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a class="btn ghost" href="#news">Baca selengkapnya</a>
    `;
    newsFeed.appendChild(article);
  });
}

function updateLiveStats() {
  if (playersMeter) {
    playersMeter.textContent = randomInt(95, 180);
  }
  if (factionsMeter) {
    factionsMeter.textContent = randomInt(18, 26);
  }
  if (housesMeter) {
    housesMeter.textContent = randomInt(280, 340);
  }
  if (mapTime) {
    const now = new Date();
    mapTime.textContent = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }
  if (peakPlayers) {
    peakPlayers.textContent = randomInt(190, 240);
  }
  if (panelUser) {
    panelUser.textContent = ['Cody Alvarez', 'Maya Santoso', 'Rio Pratama'][
      randomInt(0, 2)
    ];
  }
  if (panelStatus) {
    panelStatus.textContent = ['Active', 'On Duty', 'Rest'][
      randomInt(0, 2)
    ];
  }
  if (panelBalance) {
    panelBalance.textContent = `Rp ${
      randomInt(80, 190) * 1000
    }`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  if (panelSkill) {
    panelSkill.textContent = ['Mechanic Lv.5', 'Detective Lv.4', 'Medic Lv.6'][
      randomInt(0, 2)
    ];
  }
  if (panelTickets) {
    panelTickets.textContent = randomInt(1, 4);
  }
}

function toggleMobileNav() {
  header.classList.toggle('nav-open');
  if (header.classList.contains('nav-open')) {
    const nav = document.createElement('div');
    nav.className = 'mobile-nav';
    nav.innerHTML = `
      <nav>
        <a href="#features">Fitur</a>
        <a href="#community">Komunitas</a>
        <a href="#news">Berita</a>
        <a href="#panel">Panel</a>
        <a class="btn primary block" href="#login">Masuk</a>
      </nav>
    `;
    header.appendChild(nav);
    nav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        closeMobileNav();
      })
    );
  } else {
    closeMobileNav();
  }
}

function closeMobileNav() {
  header.classList.remove('nav-open');
  const nav = document.querySelector('.mobile-nav');
  if (nav) {
    nav.remove();
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function setupModals() {
  modalToggles.forEach((btn) =>
    btn.addEventListener('click', () => openModal(btn.dataset.open))
  );

  modalClosers.forEach((btn) =>
    btn.addEventListener('click', () => closeModal(btn.dataset.close))
  );
}

function initForms() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert(
        'Ini hanyalah demo UCP. Integrasikan form login dengan backend kamu.'
      );
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert(
        'Form pendaftaran siap dihubungkan dengan API registrasi District Roleplay.'
      );
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateNews();
  updateLiveStats();
  setupModals();
  initForms();

  if (yearSlot) {
    yearSlot.textContent = new Date().getFullYear();
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileNav);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      closeMobileNav();
    }
  });

  setInterval(updateLiveStats, 15000);
});
