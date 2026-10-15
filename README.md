
🌤️ WeatherNow

WeatherNow is a full-stack weather application built with a PHP/MySQL backend and a modular JavaScript/CSS3 frontend. It delivers live atmospheric metrics, historical trends, and interactive mapping through a secure, user-managed portal.

🚀 Tech Stack

• Frontend: Semantic HTML5, Custom CSS3, Modern JavaScript (Asynchronous API Fetching)
• Backend: PHP (Session Tracking & Secure Endpoints)
• Database: MySQL relational database
• Environment: Optimized for local deployment on Apache servers via XAMPP

✨ Features

• Secure Access: Complete registration (register.php), session-validated login (login.php), and logout (logout.php) modules.
• User & Admin Dashboards: Personalized weather tracking layouts (dashboard.php) and a configuration control panel (adminpanel.php).
• Dynamic Data: Live weather analytics, historical trend tracking, and reusable multi-city comparison widgets.
• Interactive Mapping: Geographic radar maps (map.html) for real-time visual tracking of global weather conditions.
• Premium Upgrades: Functional payment module (pay2.php) to unlock advanced, high-frequency weather layers.

📂 Project Structure

```text
 codebase/                                      # Main application codebase directory
    ├── .github/
    │   └── appmod/
    │       └── appcat/
    ├── pics/                                      # UI Assets & Weather Icons
    │   ├── favicon.png
    │   ├── current.png
    │   └── [various images...]                    # UI graphics
    ├── db_connect.php                             # Database connection setup
    ├── register.php                               # User registration
    ├── login.php                                  # User login authentication
    ├── logout.php                                 # User logout handling
    ├── dashboard.php                              # Main user dashboard portal
    ├── adminpanel.php                             # Administrative management interface
    ├── Main.html                                  # Application landing page
    ├── Main.css                                   # Landing page styling
    ├── Main.js                                    # Landing page interactivity
    ├── page1.html                                 # Live weather feature module
    ├── page1.css                                  # Live weather styling
    ├── Page1.js                                   # Live weather logic & API fetch
    ├── page3.html                                 # Historical data module
    ├── page3.css                                  # Historical data styling
    ├── Page3.js                                   # Historical data logic
    ├── page7.html                                 # Advanced analytics module
    ├── page7.css                                  # Advanced analytics styling
    ├── Page7.js                                   # Advanced analytics charts/logic
    ├── card.html                                  # Weather widget components
    ├── card.css                                   # Widget styling
    ├── cards.js                                   # Dynamic widget renderer
    ├── map.html                                   # Weather radar & geographic maps
    ├── Map.js                                     # Mapbox/Leaflet map rendering script
    ├── pay2.php                                   # Premium feature & payment handling
    ├── feedback2.html                             # User reviews & feedback form
    ├── stopwatch.html                             # Built-in performance utility
    ├── stopwatch.css                              # Stopwatch styling
    └── Stopwatch.js                               # Stopwatch timer execution logic
```



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
