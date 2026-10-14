##🌤️ WeatherNow

WeatherNow is a full-stack weather application built with a PHP/MySQL backend and a modular JavaScript/CSS3 frontend. The platform delivers live atmospheric metrics, historical climate trends, and interactive weather radar mapping through a secure, user-managed portal.

🚀 Core Features

• Secure User Management: Features complete registration, login session tracking, and a dedicated Admin Panel (adminpanel.php) to manage platform configurations.
• Dynamic Data Modules: Delivers live weather analytics, historical trend tracking, and reusable UI widget cards for clean multi-city comparisons.
• Interactive Visual Mapping: Incorporates geographic radar maps (map.html) for real-time visual tracking of global weather conditions.
• Premium Upgrades: Integrates a functional payment module (pay2.php) to unlock advanced, high-frequency weather layers and analytics.

🛠️ Technology Stack

• Frontend: Semantic HTML5, Custom CSS3 Layouts, and Modern JavaScript (Asynchronous API Fetching).
• Backend & Database: PHP (Session Tracking & Secure Endpoints) paired with a MySQL relational database.
• Environment: Optimized for local deployment on Apache servers via XAMPP.

👤 User Authentication & Management

• Secure Access: Complete registration (register.php), session-validated login (login.php), and logout (logout.php) modules.
• User Dashboard: A central portal (dashboard.php) providing users with personalized weather tracking layouts.
• Admin Control Panel: Dedicated administrative interface (adminpanel.php) to manage platform configurations, user accounts, and system analytics.

WeatherNow/
├── .github/
│   └── appmod/
│       └── appcat/
├── pics/                                # UI Assets & Weather Icons
│   ├── favicon.png
│   ├── current.png
│   └── [various image files...]         # Visual elements and background graphics
├── db_connect.php                       # Database Connection Setup
├── register.php                         # User Registration Logic
├── login.php                            # User Login Authentication
├── logout.php                           # User Logout Handling
├── dashboard.php                        # Main User Dashboard Portal
├── adminpanel.php                       # Administrative Management Interface
├── Main.html                            # Application Landing Page
├── Main.css
├── Main.js
├── page1.html                           # Live Weather Feature Module
├── page1.css
├── Page1.js
├── page3.html                           # Historical Data Module
├── page3.css
├── Page3.js
├── page7.html                           # Advanced Analysis/Analytics Module
├── page7.css
├── Page7.js
├── card.html                            # Weather Widget Components
├── card.css
├── cards.js
├── map.html                             # Weather Radar & Geographic Maps
├── Map.js
├── pay2.php                             # Premium Feature / Payment Handling
├── feedback2.html                       # User Reviews & Feedback Form
├── stopwatch.html                       # Built-in Performance/Timer Utility
├── stopwatch.css
└── Stopwatch.js


Follow these steps to set up and run the project locally on your machine.

Prerequisites

You will need an API key from your weather data provider.
1. Sign up at OpenWeatherMap.
2. Generate a free API key from your account dashboard.

Installation

1. Clone the repository:bash
git clone https://github.com
Use code with caution.
2. Navigate to the project directory:bash
cd WeatherNow
Use code with caution.
3. Configure your API Key:
	• Create a configuration file (or .env file depending on your setup).
	• Add your API key:javascript
const API_KEY = "YOUR_API_KEY_HERE";
Use code with caution.
4. Launch the application:
	• For standard HTML/JS, open index.html directly in your browser or use a local server extension (like Live Server in VS Code).
	• For framework setups (React/Node):bash
npm install
npm start
