/* Aurelia Hospital — demo data and interaction layer */

(() => {
  'use strict';

  const services = [
    { icon: '❤️', title: 'Cardiology', copy: 'Heart rhythm, prevention, and advanced cardiac care.' },
    { icon: '🧠', title: 'Neurology', copy: 'Personalized support for brain and nervous-system health.' },
    { icon: '🦴', title: 'Orthopedics', copy: 'Movement, rehabilitation, and joint health under one roof.' },
    { icon: '🧸', title: 'Pediatrics', copy: 'Gentle, complete care for growing families.' },
    { icon: '🫁', title: 'Pulmonology', copy: 'Clear answers and treatment for respiratory conditions.' },
    { icon: '🧬', title: 'Oncology', copy: 'Coordinated, compassionate cancer-care pathways.' },
    { icon: '🧪', title: 'Diagnostics', copy: 'Reliable laboratory and imaging services, day and night.' },
    { icon: '✨', title: 'Wellness', copy: 'Preventive checkups that help you stay ahead of risk.' }
  ];

  const facilities = [
    {
      number: '01',
      type: 'FLAGSHIP HOSPITAL',
      title: 'Aurelia Central',
      location: 'Chennai · 24/7 campus',
      copy: 'Complex care, emergency response, and every major specialty in one calm, connected campus.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=88',
      stats: [['150+', 'specialists'], ['24/7', 'emergency']]
    },
    {
      number: '02',
      type: 'SPECIALIST OFFICES',
      title: 'Aurelia Clinics',
      location: 'Adyar · OMR · Anna Nagar',
      copy: 'Close-to-home consultation spaces for follow-ups, preventive care, and same-week specialist visits.',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=88',
      stats: [['12', 'city clinics'], ['48h', 'fast access']]
    },
    {
      number: '03',
      type: 'DIAGNOSTICS & IMAGING',
      title: 'Aurelia Precision Lab',
      location: 'Guindy · Digital reports',
      copy: 'Modern imaging and laboratory services with clear digital results shared directly with your care team.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=88',
      stats: [['30+', 'test pathways'], ['Same day', 'priority reports']]
    },
    {
      number: '04',
      type: 'VIRTUAL CARE STUDIO',
      title: 'Aurelia Connect',
      location: 'Secure · From anywhere',
      copy: 'Telehealth rooms and at-home coordination for check-ins, second opinions, and recovery support.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=88',
      stats: [['15 min', 'average wait'], ['7 days', 'care access']]
    }
  ];

  const doctors = [
    { name: 'Dr. Arun Kumar', specialty: 'Cardiology', rating: '4.9', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Priya Sharma', specialty: 'Neurology', rating: '4.8', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Meera Iyer', specialty: 'Pediatrics', rating: '4.9', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Rohan Menon', specialty: 'Orthopedics', rating: '4.7', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Ananya Rao', specialty: 'Pulmonology', rating: '4.8', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Vikram Shah', specialty: 'Oncology', rating: '4.9', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Kavya Nair', specialty: 'Diagnostics', rating: '4.8', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=85' },
    { name: 'Dr. Dev Malhotra', specialty: 'Wellness', rating: '4.7', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=900&q=85' }
  ];

  const beds = [
    { unit: 'ICU', floor: 'Level 4 · Critical Care', total: 24, available: 3, status: 'urgent' },
    { unit: 'Cardiac Care', floor: 'Level 3 · East Wing', total: 36, available: 8, status: 'limited' },
    { unit: 'General Ward', floor: 'Level 2 · North Wing', total: 80, available: 27, status: 'available' },
    { unit: 'Private Suites', floor: 'Level 5 · Quiet Wing', total: 28, available: 11, status: 'available' },
    { unit: 'Maternity', floor: 'Level 2 · Family Wing', total: 32, available: 9, status: 'available' },
    { unit: 'Pediatrics', floor: 'Level 3 · Rainbow Wing', total: 22, available: 6, status: 'limited' },
    { unit: 'Day Care', floor: 'Level 1 · Ambulatory', total: 18, available: 12, status: 'available' },
    { unit: 'Isolation', floor: 'Level 4 · West Wing', total: 12, available: 2, status: 'urgent' }
  ];

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function renderServices() {
    const target = $('#servicesGrid');
    if (!target) return;
    target.innerHTML = services.map((service) => `
      <article class="service-card" data-tilt data-tilt-strength="3">
        <div class="service-icon" aria-hidden="true">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.copy}</p>
      </article>
    `).join('');
  }

  function renderFacilities() {
    const target = $('#facilityGrid');
    if (!target) return;
    target.innerHTML = facilities.map((facility) => `
      <article class="facility-card" data-tilt data-tilt-strength="4">
        <div class="facility-image">
          <img src="${facility.image}" alt="${facility.title} facility" loading="lazy">
          <span class="facility-number">${facility.number}</span>
          <span class="facility-type">${facility.type}</span>
          <span class="facility-glass-icon" aria-hidden="true">↗</span>
        </div>
        <div class="facility-content">
          <p class="facility-location">${facility.location}</p>
          <h3>${facility.title}</h3>
          <p>${facility.copy}</p>
          <div class="facility-footer">
            <div class="facility-stats">${facility.stats.map(([value, label]) => `<span><strong>${value}</strong>${label}</span>`).join('')}</div>
            <button class="btn btn-outline btn-small" type="button" data-facility="${facility.title}">Explore</button>
          </div>
        </div>
      </article>
    `).join('');

    $$('#facilityGrid [data-facility]').forEach((button) => {
      button.addEventListener('click', () => showToast(`${button.dataset.facility} details are ready for your visit.`));
    });
    initTilt();
  }

  function renderDoctors() {
    const target = $('#doctorsGrid');
    if (!target) return;
    const query = ($('#doctorSearch')?.value || '').trim().toLowerCase();
    const specialty = $('#specialtyFilter')?.value || 'all';
    const filtered = doctors.filter((doctor) => {
      const matchesQuery = !query || `${doctor.name} ${doctor.specialty}`.toLowerCase().includes(query);
      const matchesSpecialty = specialty === 'all' || doctor.specialty === specialty;
      return matchesQuery && matchesSpecialty;
    });

    target.innerHTML = filtered.length ? filtered.map((doctor) => `
      <article class="doctor-card" data-tilt data-tilt-strength="3">
        <div class="doctor-image">
          <img src="${doctor.image}" alt="${doctor.name}, ${doctor.specialty}" loading="lazy">
          <span class="doctor-status">● Available today</span>
        </div>
        <div class="doctor-info">
          <h3>${doctor.name}</h3>
          <p class="specialty">${doctor.specialty}</p>
          <p class="rating">★★★★★ <span>${doctor.rating}</span></p>
          <button class="btn btn-outline btn-small" type="button" data-doctor="${doctor.name}">View profile →</button>
        </div>
      </article>
    `).join('') : '<p class="empty-state">No specialists match that search. Try another name or specialty.</p>';

    $$('#doctorsGrid [data-doctor]').forEach((button) => {
      button.addEventListener('click', () => showToast(`${button.dataset.doctor}'s profile is ready for your appointment.`));
    });
    initTilt();
  }

  function populateFilters() {
    const select = $('#specialtyFilter');
    const appointmentSelect = $('#appointmentSpecialty');
    const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];
    if (select) {
      select.innerHTML = '<option value="all">All Specialties</option>' + specialties.map((item) => `<option value="${item}">${item}</option>`).join('');
    }
    if (appointmentSelect) {
      appointmentSelect.innerHTML = '<option value="">Select specialty</option>' + specialties.map((item) => `<option value="${item}">${item}</option>`).join('');
      appointmentSelect.addEventListener('change', populateAppointmentDoctors);
    }
    populateAppointmentDoctors();
  }

  function populateAppointmentDoctors() {
    const specialty = $('#appointmentSpecialty')?.value || '';
    const select = $('#appointmentDoctor');
    if (!select) return;
    const options = doctors.filter((doctor) => !specialty || doctor.specialty === specialty);
    select.innerHTML = '<option value="">Select doctor</option>' + options.map((doctor) => `<option value="${doctor.name}">${doctor.name} · ${doctor.specialty}</option>`).join('');
  }

  function renderBeds() {
    const summary = $('#bedSummary');
    const target = $('#bedGrid');
    const adminTarget = $('#adminBedGrid');
    const available = beds.reduce((sum, bed) => sum + bed.available, 0);
    const total = beds.reduce((sum, bed) => sum + bed.total, 0);
    const occupied = total - available;
    const summaryItems = [
      ['86', 'beds available today'],
      [`${Math.round((occupied / total) * 100)}%`, 'hospital occupancy'],
      ['24/7', 'capacity updates']
    ];
    if (summary) summary.innerHTML = summaryItems.map(([value, label]) => `<div class="bed-summary-item"><strong>${value}</strong><span>${label}</span></div>`).join('');

    const cards = beds.map((bed) => {
      const used = Math.round(((bed.total - bed.available) / bed.total) * 100);
      const statusLabel = bed.status === 'urgent' ? 'Urgent' : bed.status === 'limited' ? 'Limited' : 'Available';
      return `<article class="bed-card" data-tilt data-tilt-strength="2">
        <div class="bed-card-top"><div><strong>${bed.unit}</strong><small>${bed.floor}</small></div><span class="bed-status ${bed.status}">${statusLabel}</span></div>
        <p class="bed-description">${bed.available} of ${bed.total} beds currently open for admission.</p>
        <div class="bed-head"><span>Occupancy</span><strong>${used}%</strong></div>
        <div class="progress" aria-label="${used}% occupied"><span style="width:${used}%"></span></div>
      </article>`;
    }).join('');
    if (target) target.innerHTML = cards;
    if (adminTarget) adminTarget.innerHTML = cards;
    initTilt();
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    const firstField = $('input, select, textarea, button', modal);
    if (firstField) window.setTimeout(() => firstField.focus(), 50);
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('active');
    if (!$('.modal.active')) document.body.classList.remove('modal-open');
  }

  function openAuth(mode = 'login') {
    switchAuth(mode);
    openModal('authModal');
  }

  function switchAuth(mode) {
    const isRegister = mode === 'register';
    const title = $('#authTitle');
    const nameGroup = $('#registerNameGroup');
    const roleGroup = $('#roleGroup');
    const loginTab = $('#loginTab');
    const registerTab = $('#registerTab');
    if (title) title.textContent = isRegister ? 'Create your account' : 'Welcome back';
    if (nameGroup) nameGroup.classList.toggle('hidden', !isRegister);
    if (roleGroup) roleGroup.classList.toggle('hidden', isRegister);
    if (loginTab) loginTab.classList.toggle('active', !isRegister);
    if (registerTab) registerTab.classList.toggle('active', isRegister);
    if ($('#authName')) $('#authName').required = isRegister;
  }

  function openAppointment() {
    openModal('appointmentModal');
  }

  function openPayment() {
    openModal('paymentModal');
  }

  function handleAuth(event) {
    event.preventDefault();
    const role = $('#authRole')?.value || 'patient';
    const name = $('#authName')?.value?.trim() || 'Aurelia member';
    closeModal('authModal');
    showDashboard(role);
    showToast(`Welcome${name !== 'Aurelia member' ? `, ${name}` : ''}. Your ${role} portal is ready.`);
  }

  function showDashboard(role) {
    $('#mainSite')?.classList.add('hidden');
    $$('.dashboard-section').forEach((section) => section.classList.remove('active'));
    const dashboard = document.getElementById(`${role}Dashboard`);
    if (dashboard) dashboard.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submitAppointment(event) {
    event.preventDefault();
    closeModal('appointmentModal');
    showToast('Appointment request received. Our care team will confirm your time shortly.');
    event.target.reset();
    populateAppointmentDoctors();
  }

  function processPayment(event) {
    event.preventDefault();
    closeModal('paymentModal');
    showToast('Payment submitted securely in this frontend demo.');
    event.target.reset();
  }

  function showDashPanel(role, panel, button) {
    const dashboard = document.getElementById(`${role}Dashboard`);
    if (!dashboard) return;
    $$('.dash-panel', dashboard).forEach((item) => item.classList.add('hidden'));
    document.getElementById(`${role}-${panel}`)?.classList.remove('hidden');
    $$('.dash-nav button', dashboard).forEach((item) => item.classList.remove('active'));
    button?.classList.add('active');
  }

  function logout() {
    $$('.dashboard-section').forEach((section) => section.classList.remove('active'));
    $('#mainSite')?.classList.remove('hidden');
    showToast('You have been safely logged out.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterDoctors() {
    renderDoctors();
  }

  function toggleMenu() {
    $('#navLinks')?.classList.toggle('open');
  }

  let toastTimer;
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4200);
  }

  function initTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
    $$('[data-tilt]').forEach((element) => {
      if (element.dataset.tiltReady) return;
      element.dataset.tiltReady = 'true';
      const strength = Number(element.dataset.tiltStrength || 4);
      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        element.style.setProperty('--tilt-x', `${(y * -strength).toFixed(2)}deg`);
        element.style.setProperty('--tilt-y', `${(x * strength).toFixed(2)}deg`);
        element.style.transform = `perspective(900px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateY(-5px)`;
      });
      element.addEventListener('pointerleave', () => {
        element.style.transform = '';
      });
    });
  }

  function initParallax() {
    const area = $('[data-parallax-area]');
    const scene = $('[data-tilt-area]');
    if (!area || !scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
    let frame = 0;
    area.addEventListener('pointermove', (event) => {
      const rect = area.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        scene.style.setProperty('--scene-rx', `${(y * -3.2).toFixed(2)}deg`);
        scene.style.setProperty('--scene-ry', `${(x * 4.4).toFixed(2)}deg`);
      });
    });
    area.addEventListener('pointerleave', () => {
      scene.style.setProperty('--scene-rx', '0deg');
      scene.style.setProperty('--scene-ry', '0deg');
    });
  }

  function initNavigation() {
    $$('#navLinks a').forEach((link) => link.addEventListener('click', () => $('#navLinks')?.classList.remove('open')));
    $$('.modal').forEach((modal) => modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modal.id);
    }));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        $$('.modal.active').forEach((modal) => closeModal(modal.id));
        $('#navLinks')?.classList.remove('open');
      }
    });
  }

  function boot() {
    renderServices();
    renderFacilities();
    populateFilters();
    renderDoctors();
    renderBeds();
    initTilt();
    initParallax();
    initNavigation();
    window.setTimeout(() => $('#loader')?.classList.add('hide'), 700);
  }

  window.openAuth = openAuth;
  window.switchAuth = switchAuth;
  window.openAppointment = openAppointment;
  window.openPayment = openPayment;
  window.closeModal = closeModal;
  window.handleAuth = handleAuth;
  window.submitAppointment = submitAppointment;
  window.processPayment = processPayment;
  window.showDashPanel = showDashPanel;
  window.logout = logout;
  window.filterDoctors = filterDoctors;
  window.toggleMenu = toggleMenu;
  window.showToast = showToast;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
