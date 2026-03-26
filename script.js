// Initial Data
const patients = [
  {
    name: "Kavya Sharma",
    blood: "O+",
    condition: "Internal bleeding, critical",
    treatment: "Emergency surgery underway"
  },
  {
    name: "Sunil Rao",
    blood: "A-",
    condition: "Cardiac arrest stabilized",
    treatment: "Stent placement, ICU observation"
  }
];

const donors = [
  {
    name: "Rahul Verma",
    offer: "O+ Blood",
    availability: "Within 45 min · Bengaluru",
    notes: "Mobile 98XXXXXX24"
  },
  {
    name: "Sara Iyer",
    offer: "Kidney (A+)",
    availability: "Evaluation complete · Chennai",
    notes: "Cross-match pending"
  },
  {
    name: "AirMed Corps",
    offer: "Plasma units",
    availability: "24/7 · Statewide",
    notes: "Cold chain ensured"
  }
];

const organs = [
  { type: "Kidney (Left)", status: "Viable in 8 hrs", priority: "High", color: "green" },
  { type: "Heart", status: "Transport from Pune, 3 hrs left", priority: "Critical", color: "red" },
  { type: "Liver Segment", status: "Stored at 4°C", priority: "Medium", color: "orange" },
  { type: "Corneas", status: "Ready · 24 hrs window", priority: "Ready", color: "blue" },
  { type: "Bone Marrow", status: "HLA match pending", priority: "Medium", color: "orange" },
  { type: "Blood O-", status: "2 units remaining", priority: "Critical", color: "red" }
];

// Toast Notification
const toast = document.createElement("div");
toast.style.cssText = "position:fixed;bottom:24px;right:24px;background:#1b1b32;color:#fff;padding:14px 22px;border-radius:12px;opacity:0;transition:all .4s;box-shadow:0 16px 32px rgba(0,0,0,0.25);z-index:1000;";
document.body.appendChild(toast);

function showToast(message) {
  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
  }, 2600);
}

// Render Functions
function renderPatients() {
  const tbody = document.querySelector("#patientTable tbody");
  tbody.innerHTML = "";
  patients.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.blood}</td>
      <td>${p.condition}</td>
      <td>${p.treatment || "—"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderDonors() {
  const tbody = document.querySelector("#donorTable tbody");
  tbody.innerHTML = "";
  donors.forEach(d => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.name}</td>
      <td>${d.offer}</td>
      <td>${d.availability}</td>
      <td>${d.notes || "—"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderOrgans() {
  const container = document.getElementById("organCards");
  container.innerHTML = "";
  organs.forEach(o => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="badge ${o.color}">${o.priority}</span>
      <h3>${o.type}</h3>
      <p class="mini">${o.status}</p>
    `;
    container.appendChild(card);
  });
}

// Form Handlers
function addPatient(e) {
  e.preventDefault();
  const form = e.target;

  const [name, blood, condition] = Array.from(
    form.querySelectorAll("input,select")
  ).map(i => i.value.trim());

  const treatment = form.querySelector("textarea").value.trim();

  patients.unshift({ name, blood, condition, treatment });
  renderPatients();
  showToast("Patient registered: " + name);
  form.reset();
}

function addDonor(e) {
  e.preventDefault();
  const form = e.target;

  const [name, offer, availability] = Array.from(
    form.querySelectorAll("input")
  ).map(i => i.value.trim());

  const notes = form.querySelector("textarea").value.trim();

  donors.unshift({ name, offer, availability, notes });
  renderDonors();
  showToast("Donor added: " + name);
  form.reset();
}

function registerUser(e) {
  e.preventDefault();
  const form = e.target;

  const name = form.querySelector("input").value.trim();
  const email = form.querySelector("input[type=email]").value.trim();
  const role = form.querySelector("select").value;

  showToast("Registered " + name + " as " + role);

  document.getElementById("registeredUsers").textContent =
    "Latest registration: " + name + " (" + role + ") · " + email;

  form.reset();
}

// Navigation
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Initial Render
renderPatients();
renderDonors();
renderOrgans();