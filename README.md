# This is a front end project of a Tatras fan site being a part of the University of Lodz Frontend Technologies course.

# Project Documentation for Tatrofan

## 1. Project Objective
Create an interactive website for discovering interesting facts and participating in discussions about the Tatras on the user side, and for viewing site statistics, and managing users, contact data, and discussions on the admin side.

## 2. Target Audience
People interested in discussions about the Tatras, including climbers, tourists, and mountain enthusiasts.

## 3. Functionalities

### 3.1 Frontend

#### 3.1.1 index.html

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tatry - Najwyższe Polskie Góry</title>
    <meta name="description" content="Tatry - Najwyższe Polskie Góry. Odkryj piękno górskich krajobrazów.">
    <meta name="keywords" content="Tatry, góry, szczyty, turystyka">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <header>
        <h1>Witaj w świecie Tatr</h1>
        <p>Odkryj piękno najwyższych gór Polski</p>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="login.html">Zaloguj się</a></li>
            <li><a href="register.html">Zarejestruj się</a></li>
            <li><a href="posts.html">Ogłoszenia</a></li>
            <li><a href="table.html">Najwyższe szczyty</a></li>
            <li><a href="contact.html">Kontakt</a></li>
            <li><a href="information.html">Strona informacyjna</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <article>
            <h2>Atrakcje Tatr</h2>
            <p>Tatry to jedno z najpiękniejszych miejsc w Polsce. Oferują niesamowite widoki, liczne szlaki turystyczne, a także unikalną florę i faunę.</p>
            <p>Zapraszamy do odkrywania piękna tych pięknych gór.</p>
        </article>

        <article>
            <h2>Najwyższe Szczyty</h2>
            <p>W Tatrach znajdują się liczne imponujące szczyty, takie jak Rysy czy Świnica. Każdy z nich ma swoje niepowtarzalne uroki i historię.</p>
            <p>Przeżyj niezapomniane chwile na szlakach wśród majestatycznych szczytów.</p>
        </article>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Tatrofan. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

1. **<head> Section:**
   - **Meta Tags:** Includes meta tags such as character encoding, viewport, page title, description, and keywords.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Provides a header welcoming the user to the world of the Tatras.
     - **Paragraph (`<p>`):** Gives a brief description of discovering the beauty of Poland's highest mountains.
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Articles (`<article>`):**
       - **Heading (`<h2>`):** Titles of articles such as "Tatras Attractions" and "Highest Peaks."
       - **Paragraphs (`<p>`):** Contains descriptions and information about Tatras attractions and highest peaks.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023.
   - **JavaScript Script (`<script>`):**
     - **Script File (src="script.js"):** Reference to the `script.js` file containing JavaScript scripts.

**Summary:**
- The `index.html` page serves as the main page of the Tatras-themed website.
- It includes information about Tatras attractions, highest peaks, and links to other sections.
- The sidebar menu allows easy navigation through various parts of the site.
- The page uses the `common.css` stylesheet and the `script.js` JavaScript file.

#### 3.1.2 information.html
1. **<head> Section:**
   - **Meta Tags:** Includes meta tags such as character encoding, viewport, page title, description, and author.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "Information Page."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Information Articles (`<article>`):**
       - **First Article:**
         - **Paragraphs (`<p>`):** Contains information about the browser and user, such as browser name and version, first name, last name, student number, course name, and academic year.
       - **Second Article:**
         - **Div (`<div class="box">`):** Container for the project specification.
         - **Paragraph (`<p>`):** Header "Project Specification."
         - **Link (`<a>`):** Link to download the specification file (`SpecyfikacjaProjektowaŻurawski.docx`) with a download attribute.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023.
   - **JavaScript Script (`<script>`):**
     - **Script File (src="script.js"):** Reference to the `script.js` file containing JavaScript scripts.

**Summary:**
- The `information.html` page contains information about the browser and user, as well as the project specification.
- The sidebar menu allows navigation through different sections of the site.
- There is a link to return to the main page (`index.html`) in the form of a home icon.
- The page uses the `common.css` stylesheet and the `script.js` JavaScript file.

#### 3.1.3 contact.html
1. **<head> Section:**
   - **Meta Tags:** Includes meta tags such as character encoding, viewport, page title, description, and keywords.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "Contact."
     - **Paragraph (`<p>`):** Information encouraging contact in case of questions or comments.
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Contact Information Articles (`<article class="contact-info">`):**
       - **Heading (`<h2>`):** Titles of contact information, such as "Our Email" and "Phone Number."
       - **Paragraphs (`<p>`):** Contains specific information such as email address (`kontakt@tatry.com`) and phone number (`123-456-789`).
     - **Contact Form Article (`<article class="contact-form">`):**
       - **Heading (`<h2>`):** Contact form title - "Write to Us."
       - **Form (`<form>`):** Form containing fields for entering email and message.
       - **Labels (`<label>`):** Descriptions for form fields.
       - **Input (`<input>`):** Field for entering email.
       - **Textarea (`<textarea>`):** Field for entering message content.
       - **Submit Button (`<button>`):** Button to submit the form.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023.
   - **JavaScript Script (`<script>`):**
     - **Script File (src="script.js"):** Reference to the `script.js` file containing JavaScript scripts.

**Summary:**
- The `contact.html` page contains contact information, including email address, phone number, and a contact form.
- The sidebar menu allows navigation through different sections of the site.
- There is a link to return to the main page (`index.html`) in the form of a home icon.
- The page uses the `common.css` stylesheet and the `script.js` JavaScript file.

#### 3.1.4 table.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags such as character encoding, viewport, page title, description, and author.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "10 Highest Peaks of the Polish Tatras."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Table (`<table>`):** Table containing information about the 10 highest peaks of the Polish Tatras.
       - **Table Head (`<thead>`):** Header of the table containing column names.
       - **Table Body (`<tbody>`):** Body of the table containing data.
       - **Table Rows (`<tr>`):** Individual rows of the table.
       - **Table Data (`<td>`):** Data cells.
       - **Details Link (`<a>`):** Link to external websites (Wikipedia) with information about each peak.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023.
   - **JavaScript Scripts (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file containing JavaScript scripts.
     - **Inline Script:** Function `showDetails(peak)` displays an alert with information about the peak when clicking on the link.

**Summary:**
- The `table.html` page displays a list of the 10 highest peaks of the Polish Tatras in table format.
- The sidebar menu allows navigation through different sections of the site.
- There is a link to return to the main page (`index.html`) in the form of a home icon.
- The page uses the `common.css` stylesheet and JavaScript scripts from the `script.js` file, including inline functions.

#### 3.1.5 posts.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags such as character encoding, viewport, page title, description, and author.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "Forum."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Discussion Modals (`<div id="discussion-modal" class="discussion-modal" style="display: none;">`):**
       - **Close Button (`<div class="close-button">`):** Button to close the modal.
       - **Discussion Content (`<div class="discussion-content">`):** Area to display discussion content.
       - **Textarea (`<textarea id="new-comment">`):** Field for adding new comments.
       - **Comment Buttons (`<div class="comment-buttons">`):** Button to add a comment.
     - **Discussion Topics (`<div class="discussion-topic">`):**
       - **Heading (`<h3>`):** Title of the discussion topic.
       - **Onclick Event (onclick="openDiscussion('discussion1')"):** Opens the modal with discussion for the selected topic.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023.
   - **JavaScript Scripts (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file containing JavaScript scripts.

**Summary:**
- The `posts.html` page represents a forum with various discussion topics.
- The sidebar menu allows navigation through different sections of the site.
- The modal allows adding comments and displaying discussion content.
- The page uses the `common.css` stylesheet and JavaScript scripts from the `script.js` file, including inline functions.

#### 3.1.6 register.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags such as character encoding, viewport, page title, description, and author.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "Registration."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Registration Form (`<form id="register-form">`):**
       - **Label and Input Fields:**
         - **Name (`<label for="name">` / `<input type="text">`):** Field for entering first name.
         - **Surname (`<label for="surname">` / `<input type="text">`):** Field for entering surname.
         - **Username (`<label for="username">` / `<input type="text">`):** Field for entering username.
         - **Email (`<label for="email">` / `<input type="email">`):** Field for entering email address.
         - **Phone (`<label for="phone">` / `<input type="tel">`):** Field for entering phone number.
         - **Photo (`<label for="photo">` / `<input type="file">`):** Field for uploading a photo.
         - **Bio Section (`<label for="bio">` / `<textarea>`):** Section for a brief biography.
         - **New Password (`<label for="password">` / `<input type="password">`):** Field for entering a new password.
         - **Confirm New Password (`<label for="confirm-password">` / `<input type="password">`):** Field for confirming the new password.
       - **Submit Button (`<button type="submit">`):** Button to submit the form.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author's name.
   - **JavaScript Scripts (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file containing JavaScript scripts.

**Summary:**
- The `register.html` page represents a registration form for new users.
- The sidebar menu allows navigation through different sections of the site.
- The form includes fields for personal information, photo, bio section, and new password.
- After filling out the form, users can submit it, and the data will be handled by JavaScript scripts.

#### 3.1.7 login.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags such as character encoding, viewport, page title, description, and author.
   - **Stylesheet Link:** Refers to the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Home icon for returning to the main page (`index.html`).
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Page title - "Login."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch for hiding/showing the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirect to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Login Form (`<form id="login-form" onsubmit="return login()">`):**
       - **Label and Input Fields:**
         - **Username (`<label for="username">` / `<input type="text">`):** Field for entering username.
         - **Password (`<label for="password">` / `<input type="password">`):** Field for entering password.
       - **Submit Button (`<button type="submit">`):** Button to submit the form.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author's name.
   - **JavaScript Scripts (`<script>`):**
     - **Inline Script for Login (`<script>`):** The `login()` function verifies that both fields (username and password) are filled. If either field is empty, an alert is shown; otherwise, the user is redirected to `indexadmin.html`.
     - **External Script (src="script.js"):** Reference to the external `script.js` file containing additional JavaScript scripts.

**Summary:**
- The `login.html` page represents a user login form.
- The sidebar menu allows navigation through different sections of the site.
- After filling out the login form, users can submit their data, and the JavaScript `login()` function will redirect to `indexadmin.html` if the data is correct.

### 3.2 Backend

#### 3.2.1 indexadmin.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Link:** References the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title welcoming the user to the world of the Tatras.
     - **Paragraph (`<p>`):** Brief description encouraging exploration of the beauty of Poland’s highest mountains.
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Announcements, Contact, Users, Profile Edit, Statistics, Logout.
   - **Main Content (`<section class="main-content">`):**
     - **Articles (`<article>`):**
       - **Heading (`<h2>`):** Titles of sections "Tatras Attractions" and "Highest Peaks."
       - **Paragraphs (`<p>`):** Descriptions related to Tatras attractions and highest peaks.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Script (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file containing additional JavaScript scripts.

**Summary:**
- The `indexadmin.html` page presents information about the Tatras, inviting exploration of their beauty.
- The sidebar menu is tailored for admin roles, providing access to various administrative functions.
- The content is divided into "Tatras Attractions" and "Highest Peaks" sections with brief descriptions.

#### 3.2.2 statistics.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Link:** References the common stylesheet `common.css`.
   - **Chart.js Script:** Loads the Chart.js library from CDN for creating interactive charts.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Redirects to the admin's main page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title - "Service Statistics."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Announcements, Contact, Users, Profile Edit, Statistics, Logout.
   - **Main Content (`<section class="main-content">`):**
     - **Statistics Container (`<div class="statistics-container">`):**
       - **Canvas Elements (`<canvas>`):** Elements for rendering various types of charts (visits, user activity, number of users, number of posts).
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Script (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file.
     - **Chart.js Script:** Scripts to create various types of charts (line, bar) based on data representing statistics (daily visits, user activity, number of users, number of posts).

**Summary:**
- The `statistics.html` page presents service statistics using interactive charts.
- The sidebar menu provides access to various sections, including statistics.
- Utilizes the Chart.js library to generate charts based on provided data.

#### 3.2.3 useradmin.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Link:** References the common stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Redirects to the admin's main page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title - "Edit User Profile."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Announcements, Contact, Users, Profile Edit, Statistics, Logout.
   - **Main Content (`<section class="main-content">`):**
     - **Form (`<form>`):** User profile edit form.
       - **Form Fields (`<label> + <input> or <textarea>`):** Fields for entering new user data such as name, surname, username, email, phone, photo, bio section, password, and password confirmation.
       - **Submit Button (`<button>`):** Button to save changes.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Script (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file.

**Summary:**
- The `useradmin.html` page allows the admin to edit user profiles.
- The form includes fields for updating user data, including photo and password.
- Utilizes JavaScript for additional functionality, implemented in the `script.js` file.

#### 3.2.4 usersadmin.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Links:** References `common.css` and `usersadmin.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Redirects to the admin's main page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title - "Administration."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Announcements, Contact, Users, Profile Edit, Statistics, Logout.
   - **Main Content (`<section class="main-content">`):**
     - **User List (`<div class="user-list">`):**
       - **User (`<div class="user">`):** User card containing information about name, surname, email, phone, and buttons for editing and deleting the user.
       - **Edit User Modal (`<div id="editUserModal" class="modal">`):** Modal for editing user information.
         - **Form (`<form>`):** Form with fields for entering new user data such as name, surname, email, phone, photo, bio section.
         - **Modal Buttons (`<div class="modal-buttons">`):** Buttons for saving changes and canceling.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Scripts (`<script>`):**
     - **External Scripts (src="script.js", src="usersadmin.js"):** References to external `script.js` and `usersadmin.js` files.

**Summary:**
- The `usersadmin.html` page is for managing users.
- Displays a list of users with options to edit or delete each user.
- Includes a modal for editing user details.
- Features a sidebar navigation menu and footer with copyright information.

#### 3.2.5 contactadmin.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Links:** References `common.css` and `contactadmin.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Redirects to the admin's main page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title - "Edit Contact."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Announcements, Contact, Users, Profile Edit, Statistics, Logout.
   - **Main Content (`<section class="main-content">`):**
     - **Edit Contact Form (`<form id="edit-contact-form">`):**
       - **Form Inputs (`<input>`):** Fields for entering a new email address and phone number.
       - **Submit Button (`<button>`):** Button to save changes.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Scripts (`<script>`):**
     - **External Scripts (src="script.js", src="contactadmin.js"):** References to external `script.js` and `contactadmin.js` files.

**Summary:**
- The `contactadmin.html` page allows the admin to edit contact information.
- Includes a form with fields for updating the email address and phone number.
- Features a sidebar navigation menu and footer with copyright information.

#### 3.2.6 postsadmin.html
1. **<head> Section:**
   - **Meta Tags:** Contains meta tags for character encoding, viewport, page title, description, keywords, and author.
   - **Stylesheet Link:** References the stylesheet `common.css`.

2. **<body> Section:**
   - **Main Photo (`<img>`):** Displays the main photo of the page.
   - **Home Icon Link (`<a>`):** Redirects to the main page.
   - **Header (`<header>`):**
     - **Heading (`<h1>`):** Title - "Forum."
   - **Sidebar Navigation (`<nav class="sidebar">`):**
     - **Toggle Button (`<button>`):** Switch to hide/show the sidebar menu.
     - **Unordered List (`<ul>`):** List of links to various sections of the site.
     - **List Items (`<li>`):** Individual menu items.
     - **Links (`<a>`):** Redirects to pages such as Log In, Register, Announcements, Highest Peaks, Contact, Information Page.
   - **Main Content (`<section class="main-content">`):**
     - **Discussion Modal (`<div id="discussion-modal" class="discussion-modal" style="display: none;">`):**
       - **Close Button (`<div class="close-button" onclick="closeDiscussion()">`):** Button to close the modal.
       - **Discussion Content (`<div class="discussion-content" id="discussion-content">`):** Area for discussion content.
       - **Text Area (`<textarea id="new-comment" rows="2" placeholder="Add new comment">`):** Area for adding new comments.
       - **Comment Buttons (`<div class="comment-buttons">`):** Button to add a comment.
       - **Discussion Topics (`<div class="discussion-topic" onclick="openDiscussion('discussion1')">`):** Topics that open discussion modals.
         - **Heading (`<h3>`):** Title of the discussion topic.
         - **Onclick Event (onclick="openDiscussion('discussion1')"):** Opens a modal with the discussion of the selected topic.
   - **Footer (`<footer class="footer">`):**
     - **Paragraph (`<p>`):** Copyright information and year 2023, with the author’s name.
   - **JavaScript Script (`<script>`):**
     - **External Script (src="script.js"):** Reference to the external `script.js` file.

**Summary:**
- The `postsadmin.html` page lists discussion topics.
- Clicking on a topic opens a modal with the discussion.
- Includes options for deleting and editing discussions.
- Features a sidebar navigation menu and footer with copyright information.

## 4. Appearance and Responsiveness

### 4.1 Resetting Margins and Padding
- **Reset:** Applied resetting of margins and padding for elements such as `body`, `h1`, `h2`, `p`, `ul`, `li`.

### 4.2 Body (`body`)
- **Font:** Arial for the entire `body`.
- **Background:** #f4f4f4.
- **Overflow:** Disabled horizontal overflow.

### 4.3 Header (`header`)
- **Background:** #333, Text color: #fff.
- **Alignment:** Centered text, padding 20px.

### 4.4 Sidebar (`sidebar`)
- **Position:** Fixed on the left side.
- **Background:** #333, Text color: #fff.
- **Animation:** Transition animation of 0.5s.
- **Offset:** Top 60px to avoid overlap with the top bar.

### 4.5 Toggle Button (`toggle-btn`)
- **Position:** Fixed in the top left corner.
- **Animation:** Transition animation of 0.5s.

### 4.6 Links in Sidebar (`sidebar a`)
- **Effects:** Transition effects (0.3s) and color change on hover.

### 4.7 Main Photo (`main-photo`)
- **Responsiveness:** 100% width, maximum height 400px.

### 4.8 Main Content (`main-content`)
- **Padding:** 20px, text alignment centered.

### 4.9 Footer (`footer`)
- **Position:** Fixed at the bottom, background: #333, text color: #fff.
- **Sticky:** Width up to 100vw, preventing horizontal overflow.

### 4.10 Media Queries (max-width: 600px)
- **Navigation:** Style change for smaller screens (navbar becomes a full-width list).
- **Adjustments:** Width and box-sizing for better responsiveness.

### 4.11 Contact Page (`contact-info`, `contact-form`)
- **Background:** #fff, padding: 20px, bottom margin: 20px.
- **Style:** Header and labels.

### 4.12 Home Icon (`home-icon`)
- **Position:** Fixed in the top right corner, size: 40x40px.

### 4.13 Table (`table`)
- **Width:** 80%, centered.

### 4.14 Discussion Topics (`discussion-topic`)
- **Style:** Discussion topics with border, rounded corners, and margin.

### 4.15 Discussion Modal (`discussion-modal`)
- **Position:** Fixed fullscreen with transition effect.
- **Content:** Comments, add comment button, close button.

### 4.16 Comments (`comment`)
- **Style:** Comments with header, author, date, and content.

### 4.17 Buttons (`button`)
- **Style:** Background #3366cc, text color #fff, transition effect, color change on hover.

### 4.18 Forms (`label`, `input`, `textarea`)
- **Style:** 100% width, padding, margin, font size for uniform style.
- **Additional Style:** For `input[type="email"]` for various widths.

### 4.19 User Edit Modal (`editUserModal`)
- **Style:** Styled modal for user editing with fields for new data.

### 4.20 User List (`user-list`)
- **Layout:** Flexbox for responsive user list layout.

### 4.21 Buttons in Modal (`comment-buttons button`)
- **Style:** Styling for buttons in the comment modal.

### 4.22 Error Validation (`invalid`)
- **Style:** Styling for classes indicating invalid input fields.

### 4.23 Styles for Login, Registration, and Profile Edit Pages (`login`, `register`, `edit-profile`)
- **Style:** Maximum width 400px, auto margin, padding 10px.

### 4.24 Bio Section (`bio`)
- **Style:** Maximum width 400px, padding 10px.

### 4.25 Discussion Topic Tiles (`discussion-topic`)
- **Style:** Border, rounded corners, background and text color change on hover.

### 4.26 Active Comment Style (`comment.active`)
- **Style:** Styling for active comments.

### 4.27 New Comment Window Style (`new-comment`)
- **Style:** Width 80%, padding 10px, bottom margin 10px.

### 4.28 Close Button (`close-button`)
- **Position:** Fixed in the top right corner, red color.

### 4.29 Last Comment Indicator (`comment-buttons button`)
- **Style:** Maximum top margin for responsiveness.

### 4.30 Icons (`home-icon img`, `discussion-topic img`)
- **Style:** Adjusted size and margin for responsiveness.

**Summary:**
- The page has a cohesive and responsive design, adapted for various devices.
- Transition effects and color changes are used for interactivity.
- Styling for forms, buttons, tables, comments, modals, and other elements.

## 5. Security
- **Confirmations:** Before deleting discussions and comments.
- **Sessions:** User sessions after logging in.

## 6. Extensions
- **Backend:** Integration with a database and a complete backend created in a high-level language, e.g., Java.

## 7. Version
- **Website Version:** 1.0

## 8. Author
- **Author:** Paweł Żurawski

## 9. Specification Creation Date
- **Date:** January 30, 2024

## 10. Last Updated Date
- **Date:** January 30, 2024

