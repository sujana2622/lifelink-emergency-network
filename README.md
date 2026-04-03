# 🩸 LifeLink Emergency & Donation Network

> **Coordinating emergency response, donors, and care teams in real time.**

LifeLink is a web-based platform designed to bridge the critical gap between hospitals, blood donors, organ donors, and emergency response teams — enabling faster decisions that save lives.

---

## 🚨 Problem Statement

Every year, thousands of patients lose their lives because the right blood type, organ, or emergency resource couldn't be located in time. Hospitals operate in silos. Donors have no easy way to be found. Emergency responders lack a unified coordination layer.

**LifeLink solves this.**

---

## ✨ Features

### 🔐 Access Portal
- **Login** — Secure dashboard entry for registered medical personnel
- **Register** — Role-based account creation for Doctors, Volunteers, Transport Leads, and Coordinators

### 🏥 Patient Tracking
- Add and track patients with name, blood group, medical condition, and treatment notes
- Real-time patient table updated dynamically without page refresh
- Visual patient ward imagery for contextual UI

### 🤝 Donor Coordination
- Register blood and organ donors with availability windows and contact details
- Live donor table for quick lookup during emergencies
- Supports individuals, hospitals, and logistics corps (e.g., plasma transport fleets)

### 🫀 Organ Inventory & Blood Bank
- Visual card-based inventory for organs (kidney, heart, liver, corneas, bone marrow)
- Blood bank stock tracking with priority badges (Critical / High / Medium / Ready)
- Color-coded urgency indicators for instant triage assessment

### 🚨 Live Emergency Desk
- Real-time emergency alerts with location, resource requirements, and ETA
- One-click acknowledgement for coordinators
- Supports multi-vehicle incident coordination

---

## 🗂️ Project Structure


lifelink/
├── emergrncy.html      # Main application UI & layout
├── style.css           # Styling, theming, responsive grid
└── script.js           # Data, rendering logic, form handlers


---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, CSS Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Trebuchet MS (system font, zero dependencies) |
| Images | Unsplash CDN (patient ward context images) |

**No frameworks. No build tools. No dependencies.** Drop the three files in a folder and open emergrncy.html in any browser.

---

## 🚀 Getting Started

### Option 1 — Open directly
bash
# Clone the repo
git clone https://github.com/your-username/lifelink.git
cd lifelink

# Open in browser (no server needed)
open emergrncy.html        # macOS
start emergrncy.html       # Windows
xdg-open emergrncy.html    # Linux


### Option 2 — Serve locally (recommended for development)
bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then visit
http://localhost:8000/emergrncy.html


---

## 📸 Screenshots

| Section | Description |
|---|---|
| **Access Portal** | Login & role-based registration panel |
| **Patient Tracking** | Dynamic patient table with blood group & condition |
| **Donor Coordination** | Donor registry with organ/blood type & availability |
| **Organ Inventory** | Priority-badged organ & blood bank cards |
| **Emergency Desk** | Live alert banner with acknowledge action |

---

## 🧑‍💻 Usage Guide

### Adding a Patient
1. Navigate to the **Patients** section
2. Fill in Patient Name, Blood Group, and Condition
3. Optionally add a Treatment Plan in the notes field
4. Click **Add Patient** — the table updates instantly

### Registering a Donor
1. Navigate to the **Donors** section
2. Enter Donor Name, what they're offering (e.g., O+ Blood, Kidney (A+)), and availability
3. Add contact details in the Notes field
4. Click **Register Donor**

### Acknowledging an Emergency Alert
1. Navigate to the **Emergency** section
2. Review the live alert details (location, resources needed, ETA)
3. Click **Acknowledge** to confirm response

---

## 🌐 Deployment

Since LifeLink is a pure static site, it can be deployed for free on any static hosting platform:

| Platform | Steps |
|---|---|
| **GitHub Pages** | Push to main, enable Pages in repo Settings |
| **Netlify** | Drag & drop the project folder at netlify.com/drop |
| **Vercel** | npx vercel in the project directory |
| **Surge** | npx surge in the project directory |

---

## 🔮 Roadmap

- [ ] Backend API integration (Node.js / Django / Firebase)
- [ ] Real-time updates via WebSockets or Firebase Realtime DB
- [ ] SMS/push alerts to registered donors and coordinators
- [ ] Map view showing nearby donors and hospitals
- [ ] Authentication with role-based access control (RBAC)
- [ ] Export patient/donor records to PDF
- [ ] Multi-language support (Hindi, Tamil, Kannada, Telugu)
- [ ] Mobile app (React Native / Flutter)

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. Fork the repository
2. Create a feature branch: git checkout -b feature/your-feature-name
3. Commit your changes: git commit -m "Add: your feature description"
4. Push to your fork: git push origin feature/your-feature-name
5. Open a Pull Request

Please follow the existing code style (plain JS, no frameworks) and keep the zero-dependency philosophy.

---

## 📋 Code of Conduct

This project is built to save lives. All contributors are expected to engage respectfully and constructively. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) if present.

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute with attribution.

---



---

## 🙏 Acknowledgements

- Patient ward imagery via [Unsplash](https://unsplash.com)
- Inspired by real-world organ donation coordination challenges in India
- Built with the belief that **technology should be the fastest link in the chain**

---

*LifeLink © 2025 — Every second counts.*
