# 🇲🇦 Smart Tourism Platform – Tangier

### AR Virtual Guide | AI Features | Certified Local Guides

A **smart tourism platform** designed for **Tangier, Morocco**, merging a **mobile Augmented Reality (AR) application** for tourists with a **web management platform** tailored for guides, administrators, and partner institutions.  
Using **AR**, **AI**, and **verified local guides**, the platform delivers a **secure**, **immersive**, and **authentic tourism experience** in the lead-up to **AFCON 2025** and the **FIFA World Cup 2030**.

---

## 🌍 Global Vision

Tourists visiting Morocco frequently encounter:
- Unreliable or inaccurate cultural information  
- The risk of scams from unverified guides  
- Language and cultural barriers  
- Overcrowding at a limited selection of tourist sites  

Our solution serves as a **real-time digital companion** that:
- Ensures tourists explore safely and interactively
- Highlights Morocco's rich cultural heritage
- Links visitors to **trusted and certified local guides**
- Encourages **sustainable and culturally inclusive tourism**

---

## 🧱 Platform Architecture Overview

The project comprises two **complementary platforms** connected to a shared backend:

| Platform | Purpose | Target Users |
|----------|---------|--------------|
| 📱 Mobile App | Immersive on-site experience | Tourists |
| 💻 Web Platform | Administration & management | Guides, Admins, Institutions |

---

# 📱 Mobile Application for Tourists

## 🎯 Purpose

The mobile app is the **core product for tourists**, delivering:
- Comprehensive cultural guidance
- Built-in safety & scam prevention features
- Easy access to verified local guides

---

## 👤 Target Users

Targeted at:
- International and domestic tourists  
- Families, solo travelers, and event attendees  
- Seniors requiring additional support  

---

## 🧩 Key Mobile Features

### 🧠 AI-Powered 3D Virtual Guide
- Interactive **3D avatar** in **Augmented Reality**
- Context-aware explanations based on GPS location
- **Multilingual** support: AR / FR / EN / ES
- Voice and text-based interactions

### 🌍 Augmented Reality Exploration
- **Live cultural overlays** through the camera view
- Interactive information cards for landmarks
- Practical tips and cultural etiquette guidance

### 🧑‍🏫 Certified Local Guide Marketplace
- Access to **verified local guides**
- Transparent pricing structure
- User filters based on language, price, and availability
- Integrated secure booking system

### 💬 Cultural Exchange Community
- Submit questions about traditions, food, and customs
- Receive answers from real certified local guides
- Promotes cross-cultural understanding and respect

### 🧭 Discover Hidden Gems
- Curated recommendations for lesser-known attractions
- Supports sustainable tourism by preventing overcrowding
- Offers personalized travel suggestions

---

## 📱 Core Mobile Screens Overview

| **Screen**           | **Description**                      |
|-----------------------|--------------------------------------|
| **Splash & Onboarding** | Introduction and user permissions setup |
| **Home (AR Ready)**    | Camera with virtual guide access     |
| **AR Experience**       | Real-time cultural overlays         |
| **Chatbot**            | AI-powered cultural assistant        |
| **Guides Marketplace** | Browse and connect with verified guides |
| **Guide Profile**      | Reviews, credentials, and bookings  |
| **Discover**           | Interactive map with recommendations |
| **Profile & Settings** | User preferences and history         |

---

### 📸 Mobile Screenshots Directory Structure

```
screenshots/mobile/
├── splash.png
├── onboarding.png
├── home.png
├── ar_guide.png
├── chatbot.png
├── discover.png
├── guides_list.png
├── guide_profile.png
└── profile.png
```

---

# 💻 Web Platform for Guides & Administrators

## 🎯 Purpose

The web platform acts as the **control hub** for the ecosystem:  
- Management of guides and content  
- Enhanced analytics and monitoring tools  
- Fostering collaborations with institutions  

---

## 👤 Web Platform Users

Designed for:
- Certified local guides  
- Administrators and platform managers  
- Tourism institutions and event organizers  
- Private partners  

---

## 🧩 Key Web Features

### 🧑‍🏫 Guide Dashboard
- Profile management  
- Real-time availability and pricing adjustments  
- Notifications for booking requests  
- Reviews and ratings overview  
- Certification status  

### 🗂️ Cultural Content Management
- Create and manage cultural content  
- Multilingual editor for inclusivity  
- Geo-tagging for location-specific details  

### 📊 Analytics & Monitoring
- Insights on tourist engagement and app usage  
- Data on most visited locations  
- AR feature interaction statistics  
- Booking and revenue tracking  

### 🔐 Admin Panel
- Approve guide certifications  
- Moderate content submissions  
- Fraud prevention and security management  

---

### 🖥️ Web Screenshots Directory Structure

```
screenshots/web/
├── landing.png
├── dashboard.png
├── guides_admin.png
├── content_manager.png
├── analytics.png
└── partners.png
```

---

# 🧑‍💻 Project Code Structure

```
Smart-Tourism-Mobile-App/
├── .github/
├── public/
│   ├── images/
│   ├── icons/
│   └── ar-assets/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── routes.tsx
│   ├── components/
│   │   ├── ARViewer.tsx
│   │   ├── VirtualGuide3D.tsx
│   │   ├── Navbar.tsx
│   │   └── InfoCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Explore.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Guides.tsx
│   │   ├── GuideProfile.tsx
│   │   └── Profile.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── guideService.ts
│   │   └── chatbotService.ts
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── LanguageContext.tsx
│   ├── utils/
│   │   ├── geolocation.ts
│   │   └── helpers.ts
│   ├── styles/
│   │   └── global.css
│   └── assets/
│       ├── images/
│       └── models/
├── tests/
├── .env
├── package.json
├── tsconfig.json
├── index.html
├── LICENSE
└── README.md
```

---

# 🔁 Interaction Flow

1. **Tourist Mobile App**  
   ↓  
2. **AR + AI Virtual Guide Experience**  
   ↓  
3. **Guide Booking**  
   ↓  
4. **Guide Management via Dashboard**  
   ↓  
5. **Administrative Oversight & Analytics**

---

## 🌱 Sustainability & Social Impact

- Reduced reliance on printed materials  
- Balanced tourist flows to prevent site degradation  
- Enhanced heritage protection through education  
- Fair revenue distribution to certified guides  
- Improved trust, safety, and cultural exchange  

---

## 📅 Project Status

- **Phase**: Prototype / MVP  
- **Pilot City**: Tangier, Morocco  
- **Scalability**: National & International Expansion  

---

## ✍️ Author

**Taha Taidi Laamiri**  
Robotics & Intelligent Systems Engineer  
Specialist in Smart Tourism | AI | AR
