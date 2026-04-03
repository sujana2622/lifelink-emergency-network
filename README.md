# 🩸 Emergency Response Blood & Organ Donation Network System

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)

> A real-time emergency coordination platform that connects blood donors, organ donors, hospitals, and transplant centers to save lives faster.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

The **Emergency Response Blood & Organ Donation Network System** is a mission-critical platform designed to minimize response time in life-threatening medical emergencies requiring blood transfusions or organ transplants. By digitizing and automating the matching, alerting, and logistics pipeline, the system bridges the gap between donors, hospitals, and patients in real time.

### Problem Statement

Every year, thousands of patients die due to:
- Delayed discovery of compatible blood or organ donors
- Poor coordination between hospitals and blood banks
- Lack of real-time inventory visibility
- Slow emergency notification chains

### Our Solution

A centralized, AI-assisted network that:
- Maintains a live registry of blood donors and organ donors
- Matches patients to compatible donors using medical criteria
- Sends instant multi-channel emergency alerts
- Tracks organ transport logistics end-to-end

---

## Key Features

### 🚨 Emergency Alert System
- Real-time SOS broadcast to nearby compatible donors
- Multi-channel notifications: SMS, push notification, email, phone call
- Priority triage queue for critical patients
- Geo-fenced alerts based on donor proximity

### 🩸 Blood Donation Module
- Complete blood type compatibility engine (ABO + Rh factor)
- Live blood bank inventory tracking across hospitals
- Donor eligibility checker (last donation date, health status)
- Scheduled vs. emergency donation management

### 🫀 Organ Donation Module
- Deceased and living donor registration
- HLA tissue typing and cross-match compatibility
- UNOS/NOTTO-compliant organ waitlist management
- Cold ischemia time tracker for organ viability windows
- Organ transport route optimization

### 🏥 Hospital & Blood Bank Portal
- Real-time inventory dashboard
- Inter-hospital resource sharing requests
- Patient waitlist management
- Transplant surgery scheduling

### 👤 Donor Management
- Secure donor profile with medical history
- Consent and opt-in/opt-out management
- Donation history and health certificates
- Anonymized donor-recipient linking

### 📊 Analytics & Reporting
- Response time metrics and SLA tracking
- Donation trends and regional demand heatmaps
- Life-saving outcomes dashboard
- Regulatory compliance reports

---

## System Architecture


┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│   Web App (React)    Mobile App (React Native)    Admin Panel   │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS / WebSocket
┌──────────────────────────▼──────────────────────────────────────┐
│                        API GATEWAY                              │
│            Rate Limiting | Auth | Load Balancing                │
└──────┬──────────┬──────────┬──────────┬───────────┬────────────┘
       │          │          │          │           │
  ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌──▼─────┐ ┌──▼──────┐
  │ Donor  │ │ Match  │ │ Alert  │ │Hospital│ │Logistics│
  │Service │ │Engine  │ │Service │ │Service │ │Service  │
  └────┬───┘ └───┬────┘ └───┬────┘ └──┬─────┘ └──┬──────┘
       │         │          │         │           │
┌──────▼─────────▼──────────▼─────────▼───────────▼────────────┐
│                      MESSAGE BROKER (Kafka / RabbitMQ)         │
└───────────────────────────┬───────────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                      DATA LAYER                               │
│   PostgreSQL (Core DB)   Redis (Cache)   MongoDB (Logs)       │
└───────────────────────────────────────────────────────────────┘


## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS, Socket.io Client |
| **Mobile** | React Native (iOS & Android) |
| **Backend** | Node.js + Express / Python FastAPI |
| **Database** | PostgreSQL, Redis, MongoDB |
| **Message Queue** | Apache Kafka / RabbitMQ |
| **Authentication** | JWT, OAuth 2.0, 2FA |
| **Notifications** | Twilio (SMS), Firebase (Push), SendGrid (Email) |
| **Maps & Routing** | Google Maps API / OpenStreetMap |
| **Containerization** | Docker, Kubernetes |
| **CI/CD** | GitHub Actions |
| **Cloud** | AWS / Azure (configurable) |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18+
- **Python** 3.10+ (if using FastAPI backend)
- **Docker** & Docker Compose
- **PostgreSQL** 14+
- **Redis** 7+
- **Git**

---

## Installation

### 1. Clone the Repository

bash
git clone https://github.com/your-org/emergency-donation-network.git
cd emergency-donation-network.

### 2. Set Up Environment Variables

bash
cp .env.example .env


Edit .env with your configuration values (see [Configuration](#configuration)).

### 3. Install Dependencies

bash
# Backend
cd backend
npm install        # or: pip install -r requirements.txt

# Frontend
cd ../frontend
npm install


### 4. Run with Docker Compose (Recommended)

bash
docker-compose up --build

### 5. Run Database Migrations

bash
cd backend
npm run migrate     # or: alembic upgrade head


### 6. Seed Initial Data (Optional)
bash
npm run seed


The app will be available at:
- **Frontend:** `http://localhost:3000`
- **API:** `http://localhost:8000`
- **Admin Panel:** `http://localhost:3001`

---

## Configuration

Key environment variables in `.env`:

env
# App
APP_NAME=EmergencyDonationNetwork
PORT=8000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/donation_db
REDIS_URL=redis://localhost:6379

# Auth
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRY=24h

# Notifications
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890

SENDGRID_API_KEY=your_sendgrid_key
FIREBASE_SERVER_KEY=your_firebase_key

# Maps
GOOGLE_MAPS_API_KEY=your_google_maps_key

# Alert Radius (km)
DEFAULT_ALERT_RADIUS_KM=50
EMERGENCY_ALERT_RADIUS_KM=200


---

## Usage

### Registering as a Donor

1. Create an account on the web or mobile app
2. Complete your medical profile (blood type, health history, consent forms)
3. Opt in for emergency notifications
4. Stay active — your status is shown to hospitals in real time

### Posting an Emergency Request (Hospitals)

1. Log in with hospital credentials
2. Navigate to **Emergency Request → New Request**
3. Enter patient details, required blood type or organ type
4. Submit — the matching engine broadcasts to eligible donors instantly

### Tracking an Organ Transfer

1. Go to **Logistics → Active Transfers**
2. View real-time GPS tracking of the organ courier
3. Monitor cold ischemia time countdown
4. Receive automated alerts at each handoff checkpoint

---

## API Documentation

Full API docs are available at `/api/docs` (Swagger UI) when the server is running.

### Core Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register new donor/hospital |
| POST | /api/auth/login | Authenticate and get token |
| GET | /api/donors | List available donors |
| POST | /api/emergency/blood | Create blood emergency request |
| POST | /api/emergency/organ | Create organ emergency request |
| GET | /api/match/:requestId | Get compatible donor matches |
| GET | /api/inventory/:hospitalId | Get hospital blood inventory |
| PUT | /api/inventory/:hospitalId | Update blood inventory |
| GET | /api/logistics/:organId | Track organ transport |
| GET | /api/analytics/dashboard | System-wide analytics |


## Database Schema

### Core Tables

sql
donors           -- Donor profiles, blood type, consent, location
organ_donors     -- Registered organ donor details
hospitals        -- Hospital and blood bank registry
blood_inventory  -- Real-time blood stock per hospital
patients         -- Anonymized patient waitlist
emergency_requests -- Active emergency cases
organ_matches    -- Compatibility match records
transport_logs   -- Organ courier tracking events
notifications    -- Alert delivery logs



## Contributing

We welcome contributions from developers, healthcare professionals, and open-source enthusiasts.

1. **Fork** the repository
2. Create a feature branch: git checkout -b feature/your-feature-name
3. Commit your changes: git commit -m 'Add: description of change'
4. Push to the branch: git push origin feature/your-feature-name
5. Open a **Pull Request** with a clear description

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

### Reporting Issues

Use GitHub Issues to report bugs or request features. Please use the appropriate issue template.

---

## Roadmap

- [x] Core donor registry and matching engine
- [x] Real-time emergency alerting
- [x] Blood bank inventory management
- [ ] AI-powered demand forecasting
- [ ] Blockchain-based consent and audit trail
- [ ] Integration with national health registries (NOTTO, UNOS)
- [ ] Wearable device integration for donor health monitoring
- [ ] Multi-language support

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Contact

| Role | Contact |
|---|---|
| **Project Lead** | project-lead@yourorg.com |
| **Technical Support** | support@yourorg.com |
| **Emergency Helpline** | +91-XXXX-XXXXXX |

> ⚠️ **This system is intended to supplement, not replace, official medical emergency services. Always contact emergency services (112 / 108 in India) for life-threatening situations.**

---

<div align="center">
  Made with ❤️ to save lives
</div>
