# This is a front end project of a Tatras fan site being a part of the University of Lodz Frontend Technologies course.

# Tatrofan - a Tatras fan site

## 1. Project Objective
Creating an interactive website for discovering interesting facts and participating in discussions about the Tatras on the user side, and for viewing site statistics, and managing users, contact data, and discussions on the admin side.

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strona informacyjna</title>
    <meta name="description" content="Informacje o przeglądarce i użytkowniku">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Strona informacyjna</h1>
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
            <p>Nazwa i wersja przeglądarki: Wersja 121.0.6167.86 (Oficjalna wersja) (64-bitowa)</p>
            <p>Imię: Paweł</p>
            <p>Nazwisko: Żurawski</p>
            <p>Numer albumu: 371927</p>
            <p>Nazwa przedmiotu: Podstawy technologii internetowych</p>
            <p>Rok akademicki: 2023/2024.</p>
        </article>
        <article>
            <div class="box">
                <p>Specyfikacja Projektowa</p>
                <a href="SpecyfikacjaProjektowaŻurawski.docx" download="SpecyfikacjaProjektowaŻurawski.docx">Pobierz specyfikację projektową</a>
            </div>
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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tatry - Kontakt</title>
    <meta name="description" content="Skontaktuj się z nami, jeśli masz pytania lub uwagi dotyczące Tatr.">
    <meta name="keywords" content="Tatry, kontakt, e-mail, telefon">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Kontakt</h1>
        <p>Skontaktuj się z nami, jeśli masz pytania lub uwagi.</p>
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
        <article class="contact-info">
            <h2>Nasz e-mail:</h2>
            <p>kontakt@tatry.com</p>
        </article>
        <article class="contact-info">
            <h2>Numer telefonu:</h2>
            <p>123-456-789</p>
        </article>

        <article class="contact-form">
            <h2>Napisz do nas</h2>
            <form action="#" method="post">
                <label for="email">Twój e-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Twoja wiadomość:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Wyślij</button>
            </form>
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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tatry - Najwyższe Szczyty</title>
    <meta name="description" content="Lista najwyższych szczytów Polskich Tatr.">
    <meta name="keywords" content="Tatry, szczyty, Polskie Tatry">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>10 Najwyższych Szczytów polskich Tatr</h1>
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
        <table>
            <thead>
                <tr>
                    <th>Szczyt</th>
                    <th>Wysokość (m n.p.m.)</th>
                    <th>Czytaj więcej</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rysy</td>
                    <td>2499</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Rysy" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Mięguszowiecki Szczyt</td>
                    <td>2438</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Mi%C4%99guszowiecki_Szczyt" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Niżnie Rysy</td>
                    <td>2430</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Ni%C5%BCnie_Rysy" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Mięguszowiecki Szczyt Czarny</td>
                    <td>2410</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Mi%C4%99guszowiecki_Szczyt_Czarny" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Mięguszowiecki Szczyt Pośredni</td>
                    <td>2393</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Mi%C4%99guszowiecki_Szczyt_Po%C5%9Bredni" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Cubryna</td>
                    <td>2376</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Cubryna" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Wołowa Turnia</td>
                    <td>2373</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Wo%C5%82owa_Turnia" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Hińczowa Turnia</td>
                    <td>2372</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/Hi%C5%84czowa_Turnia" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Żabia Turnia Mięguszowiecka</td>
                    <td>2336</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/%C5%BBabia_Turnia_Mi%C4%99guszowiecka" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
                <tr>
                    <td>Świnica</td>
                    <td>2301</td>
                    <td>
                        <a href="https://pl.wikipedia.org/wiki/%C5%9Awinica" target="_blank" class="details-btn">&#10148;</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Tatrofan. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
    <script>
        function showDetails(szczyt) {
            alert('Szczegóły dla szczytu: ' + szczyt);
        }
    </script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tatry - Dyskusje</title>
    <meta name="description" content="Dyskusje na temat Tatr.">
    <meta name="keywords" content="Tatry, dyskusje, forum">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Forum</h1>
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
        <div id="discussion-modal" class="discussion-modal" style="display: none;">
            <div class="close-button" onclick="closeDiscussion()">×</div>
            <div class="discussion-content" id="discussion-content">
            </div>
            <textarea id="new-comment" rows="2" placeholder="Dodaj nowy komentarz"></textarea>
            <div class="comment-buttons">
                <button onclick="addComment()">Dodaj komentarz</button>
            </div>
        </div>

        <div class="discussion-topic" onclick="openDiscussion('discussion1')">
            <h3>Wspinaczka poza szlakiem - odwaga czy szaleństwo?</h3>
        </div>

        <div class="discussion-topic" onclick="openDiscussion('discussion2')">
            <h3>Zima w Tatrach - must have poniżej 0 st. Celsjusza!</h3>
        </div>

        <div class="discussion-topic" onclick="openDiscussion('discussion3')">
            <h3>Darmowa pomoc TOPR - czy należy zmienić status quo?</h3>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Tatrofan. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rejestracja</title>
    <meta name="description" content="Rejestracja nowego użytkownika">
    <meta name="keywords" content="rejestracja, użytkownik, formularz">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Rejestracja</h1>
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
    </nav>

    <section class="main-content">
        <form id="register-form">
            <label for="name">Imię:</label>
            <input type="text" id="name" name="name" required>

            <label for="surname">Nazwisko:</label>
            <input type="text" id="surname" name="surname" required>

            <label for="username">Nazwa użytkownika:</label>
            <input type="text" id="username" name="username" required>

            <label for="email">Adres email:</label>
            <input type="email" id="email" name="email" required>

            <label for="phone">Telefon:</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="photo">Zdjęcie:</label>
            <input type="file" id="photo" name="photo">

            <label for="bio">Sekcja "O mnie":</label>
            <textarea id="bio" name="bio" required></textarea>

            <label for="password">Nowe hasło:</label>
            <input type="password" id="password" name="password" required>

            <label for="confirm-password">Potwierdź nowe hasło:</label>
            <input type="password" id="confirm-password" name="confirm-password" required>

            <button type="submit">Zarejestruj się</button>
        </form>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <meta name="description" content="Logowanie użytkownika">
    <meta name="keywords" content="rejestracja, użytkownik, formularz">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="index.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Logowanie</h1>
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
    </nav>

    <section class="main-content">
        <form id="login-form" onsubmit="return login()">
            <label for="username">Nazwa użytkownika:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Hasło:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Zaloguj się</button>
        </form>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script>
        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username === '' || password === '') {
                alert('Wypełnij oba pola przed zalogowaniem.');
                return false;
            }

            window.location.replace('indexadmin.html');
            return false;
        }
    </script>

    <script src="script.js"></script>
</body>

</html>
```

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

### 3.2 Admin

#### 3.2.1 indexadmin.html

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
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statystyki</title>
    <meta name="description" content="Statystyki strony">
    <meta name="keywords" content="statystyki, odwiedziny, użytkownicy, posty">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="indexadmin.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Statystyki serwisu</h1>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <div class="statistics-container">
            <canvas id="dailyVisitsChart"></canvas>
            <canvas id="userActivityChart"></canvas>
            <canvas id="userStatsChart"></canvas>
            <canvas id="postStatsChart"></canvas>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
    <script>
        var dailyVisitsData = [50, 120, 80, 150, 100, 200, 120];
        var userActivityData = [20, 40, 30, 60, 45, 80, 55];
        var userStatsData = [100, 150, 200, 180, 220, 250, 210];
        var postStatsData = [10, 15, 8, 12, 20, 18, 14];

        var dailyVisitsChart = new Chart(document.getElementById('dailyVisitsChart').getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                datasets: [{
                    label: 'Dzienna liczba odwiedzin',
                    data: dailyVisitsData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var userActivityChart = new Chart(document.getElementById('userActivityChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                datasets: [{
                    label: 'Aktywność użytkowników',
                    data: userActivityData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var userStatsChart = new Chart(document.getElementById('userStatsChart').getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                datasets: [{
                    label: 'Liczba użytkowników',
                    data: userStatsData,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        var postStatsChart = new Chart(document.getElementById('postStatsChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'],
                datasets: [{
                    label: 'Liczba postów',
                    data: postStatsData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edycja Profilu Użytkownika</title>
    <meta name="description" content="Edycja profilu użytkownika">
    <meta name="keywords" content="profil, użytkownik, edycja">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="indexadmin.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Edycja Profilu Użytkownika</h1>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <form id="edit-profile-form" enctype="multipart/form-data">
            <label for="new-name">Nowe Imię:</label>
            <input type="text" id="new-name" name="new-name" required>

            <label for="new-surname">Nowe nazwisko:</label>
            <input type="text" id="new-surname" name="new-surname" required>

            <label for="new-username">Nowa nazwa użytkownika:</label>
            <input type="text" id="new-username" name="new-username" required>

            <label for="new-email">Nowy adres email:</label>
            <input type="email" id="new-email" name="new-email" required>

            <label for="new-phone">Nowy telefon:</label>
            <input type="tel" id="new-phone" name="new-phone" required>

            <label for="new-photo">Nowe zdjęcie:</label>
            <input type="file" id="new-photo" name="new-photo">

            <label for="new-bio">Nowa sekcja "O mnie":</label>
            <textarea id="new-bio" name="new-bio" required></textarea>

            <label for="new-password">Nowe hasło:</label>
            <input type="password" id="new-password" name="new-password" required>

            <label for="confirm-new-password">Potwierdź nowe hasło:</label>
            <input type="password" id="confirm-new-password" name="confirm-new-password" required>

            <button type="submit">Zapisz zmiany</button>
        </form>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administracja</title>
    <meta name="description" content="Administracja użytkownikami">
    <meta name="keywords" content="użytkownicy, edycja, usuwanie">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">
    <link rel="stylesheet" type="text/css" href="usersadmin.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="indexadmin.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Administracja</h1>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <div class="user-list">
            <div class="user" id="user-1">
                <h3>MountainExplorer</h3>
                <p>Email: user1@example.com</p>
                <p>Telefon: 123-456-789</p>
                <button onclick="editUser(1)">Edytuj</button>
                <button onclick="deleteUser(1)">Usuń</button>
            </div>

            <div class="user" id="user-2">
                <h3>WinterAdventurer</h3>
                <p>Email: user2@example.com</p>
                <p>Telefon: 987-654-321</p>
                <button onclick="editUser(2)">Edytuj</button>
                <button onclick="deleteUser(2)">Usuń</button>
            </div>

            <div class="user" id="user-3">
                <h3>RescueSupporter</h3>
                <p>Email: user3@example.com</p>
                <p>Telefon: 231-421-022</p>
                <button onclick="editUser(3)">Edytuj</button>
                <button onclick="deleteUser(3)">Usuń</button>
            </div>
        </div>

        <div id="editUserModal" class="modal">
            <div class="modal-content">
                <h2>Edytuj użytkownika</h2>
                <form id="edit-user-form">
                    <label for="edit-name">Nowe Imię:</label>
                    <input type="text" id="edit-name" name="edit-name" required>
    
                    <label for="edit-surname">Nowe Nazwisko:</label>
                    <input type="text" id="edit-surname" name="edit-surname" required>
    
                    <label for="edit-email">Nowy Adres email:</label>
                    <input type="email" id="edit-email" name="edit-email" required>
    
                    <label for="edit-phone">Nowy Telefon:</label>
                    <input type="tel" id="edit-phone" name="edit-phone" required>
    
                    <label for="edit-photo">Nowe Zdjęcie (URL):</label>
                    <input type="text" id="edit-photo" name="edit-photo" required>
    
                    <label for="edit-bio">Nowa sekcja "O mnie":</label>
                    <textarea id="edit-bio" name="edit-bio" required></textarea>
    
                    <div class="modal-buttons">
                        <button type="button" onclick="saveEditUser()">Zapisz</button>
                        <button type="button" onclick="closeEditUserModal()">Anuluj</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
    <script src="usersadmin.js"></script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edycja Kontaktu</title>
    <meta name="description" content="Edycja danych kontaktowych">
    <meta name="keywords" content="kontakt, edycja, email, telefon">
    <meta name="author" content="Twoje Imię">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="indexadmin.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Edycja Kontaktu</h1>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <form id="edit-contact-form">
            <label for="new-email">Nowy Adres Email:</label>
            <input type="email" id="new-email" name="new-email" required>

            <label for="new-phone">Nowy Numer Telefonu:</label>
            <input type="tel" id="new-phone" name="new-phone" required>

            <button type="submit">Zapisz zmiany</button>
        </form>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Twoja Nazwa. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
    <script src="contactadmin.js"></script>
</body>

</html>
```

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

```html
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administracja Dyskusjami</title>
    <meta name="description" content="Administracja dyskusjami na temat Tatr.">
    <meta name="keywords" content="Tatry, dyskusje, forum, administracja">
    <meta name="author" content="Paweł Żurawski">
    <link rel="stylesheet" type="text/css" href="common.css">
</head>

<body>
    <img src="mainFoto.jpg" alt="Główne zdjęcie" class="main-photo">

    <a href="indexadmin.html" class="home-icon">&#127968;</a>

    <header>
        <h1>Administracja Dyskusjami</h1>
    </header>

    <nav class="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">☰ Menu</button>
        <ul>
            <li><a href="postsadmin.html">Ogłoszenia</a></li>
            <li><a href="contactadmin.html">Kontakt</a></li>
            <li><a href="usersadmin.html">Użytkownicy</a></li>
            <li><a href="useradmin.html">Edycja profilu</a></li>
            <li><a href="statistics.html">Statystyki</a></li>
            <li><a href="index.html">Wyloguj</a></li>
        </ul>
    </nav>

    <section class="main-content">
        <div class="discussion-topic" id="discussion-1">
            <h3>Wspinaczka poza szlakiem - odwaga czy szaleństwo?</h3>
            <button class="edit-button" onclick="editDiscussion(1)">Zarządzaj komentarzami dyskusji</button>
            <button class="delete-button" onclick="deleteDiscussion(1)">Usuń dyskusję</button>
        </div>
    
        <div class="discussion-topic" id="discussion-2">
            <h3>Zima w Tatrach - must have poniżej 0 st. Celsjusza!</h3>
            <button class="edit-button" onclick="editDiscussion(2)">Zarządzaj komentarzami dyskusji</button>
            <button class="delete-button" onclick="deleteDiscussion(2)">Usuń dyskusję</button>
        </div>
    
        <div class="discussion-topic" id="discussion-3">
            <h3>Darmowa pomoc TOPR - czy należy zmienić status quo?</h3>
            <button class="edit-button" onclick="editDiscussion(3)">Zarządzaj komentarzami dyskusji</button>
            <button class="delete-button" onclick="deleteDiscussion(3)">Usuń dyskusję</button>
        </div>
    </section>
    
    <div id="discussion-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <h2>Edytuj dyskusję</h2>
            <div id="discussion-content"></div>
            <div class="comment-buttons">
                <button onclick="deleteComment()">Usuń komentarz</button>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2023 Tatrofan. Wszystkie prawa zastrzeżone.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```

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

### styles.css

```css
body,
h1,
h2,
p,
ul,
li {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #333;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.toggle-btn {
    font-size: 20px;
    position: fixed;
    left: 20px;
    top: 20px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
}

.sidebar ul {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}

.sidebar li {
    padding: 15px;
}

.sidebar a {
    text-decoration: none;
    font-size: 18px;
    color: white;
    display: block;
    transition: 0.3s;
}

.sidebar a:hover {
    background-color: #ddd;
    color: black;
}

.main-photo {
    width: 100%;
    max-height: 400px;
    display: block;
    margin: 0 auto;
}

.main-content {
    padding: 20px;
    text-align: center;
}

article {
    margin-bottom: 20px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

@media screen and (max-width: 600px) {
    nav li {
        float: none;
        width: 100%;
    }
    nav a {
        width: 100%;
        box-sizing: border-box;
    }
    .sidebar li {
        text-align: left;
        padding-left: 20px;
    }
}

.contact-info,
.contact-form {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
}

.contact-info h2,
.contact-form h2 {
    text-align: left;
    margin-bottom: 10px;
    font-size: 24px;
}

.contact-info p,
.contact-form label,
.contact-form textarea,
.contact-form input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
}

.contact-info p {
    font-size: 16px;
}

.contact-form input[type="email"] {
    width: 50%;
    margin: 0 auto;
}

.contact-form input[type="email"] {
    width: 25%;
    margin: 0 auto;
}

.home-icon img {
    width: 40px;
    height: 40px;
}

.home-icon {
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #fff;
    text-decoration: none;
}

body {
    overflow-x: hidden;
}

.footer {
    position: sticky;
    bottom: 0;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    z-index: 100;
}

table {
    width: 80%;
    margin: 0 auto;
}

th,
td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #333;
    color: white;
}

.details-btn {
    color: #555;
    text-decoration: none;
    font-size: 20px;
}

.main-content {
    padding: 20px;
    text-align: center;
}

.discussion-topic {
    border: 2px solid #3366cc;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px;
}

.discussion-topic h3 {
    color: #3366cc;
    margin-bottom: 10px;
}

.discussion-topic img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.discussion-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 60px;
    box-sizing: border-box;
}

.discussion-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.comment {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.comment-author {
    font-weight: bold;
}

.comment-date {
    color: #888;
}

.comment-content {
    line-height: 1.5;
}

#new-comment {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
}

.comment-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comment-buttons button {
    margin-top: 10px;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #ff0000;
}

.discussion-topic {
    border: 2px solid #3366cc;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px;
    cursor: pointer;
}

.discussion-topic:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

#register-form {
    max-width: 400px;
    margin: auto;
}

#login-form {
    max-width: 400px;
    margin: auto;
}

#edit-profile-form {
    max-width: 400px;
    margin: auto;
}

#editUserModal {
    max-width: 400px;
    margin: auto;
}

#edit-contact-form {
    max-width: 400px;
    margin: auto;
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

button {
    background-color: #3366cc;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #254785;
}

.invalid {
    border: 2px solid red;
}

#bio {
    max-width: 400px;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
}

#new-bio {
    max-width: 400px;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
}

#edit-bio {
    max-width: 400px;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.user {
    width: 300px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
}

.user img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
}

button {
    background-color: #3366cc;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    margin-top: 5px;
}

button:hover {
    background-color: #254785;
}
```

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

### script.js

```js
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var toggleBtn = document.querySelector('.toggle-btn');

    if (sidebar.style.width === '250px' || sidebar.style.width === '') {
        sidebar.style.width = '0';
        toggleBtn.style.left = '20px';
    } else {
        sidebar.style.width = '250px';
        toggleBtn.style.left = '250px';
    }
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function redirectToRegister() {
    window.location.href = "register.html";
}

function showDetails(szczyt) {
    alert('Szczegóły dla szczytu: ' + szczyt);
}

function openDiscussion(topic) {
    var modal = document.getElementById('discussion-modal');
    var content = document.getElementById('discussion-content');

    var discussions = {
        discussion1: getSamplePosts()[0],
        discussion2: getSamplePosts()[1],
        discussion3: getSamplePosts()[2],
    };

    var discussionDetails = discussions[topic];

    var discussionHTML = `
        <div class="comment active">
            <div class="comment-header">
                <span class="comment-author">${discussionDetails.author}</span>
                <span class="comment-date">${discussionDetails.date}</span>
            </div>
            <div class="comment-content">${discussionDetails.content}</div>
        </div>
    `;

    content.innerHTML = discussionHTML;
    modal.style.display = 'block';
}

function addComment() {
    var comment = document.getElementById('new-comment').value;
    var content = document.getElementById('discussion-content');

    var newCommentHTML = `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">Użytkownik</span>
                <span class="comment-date">Data</span>
            </div>
            <div class="comment-content">${comment}</div>
        </div>
    `;

    content.innerHTML += newCommentHTML;

    document.getElementById('new-comment').value = '';
}

function closeDiscussion() {
    var modal = document.getElementById('discussion-modal');
    modal.style.display = 'none';
}

function getSamplePosts() {
    return [
        { author: 'MountainExplorer', date: '25 stycznia 2024', content: 'Tak, miałem okazję próbować wspinaczki poza oznaczonymi szlakami. To niesamowite doświadczenie, choć wymaga dużo większej ostrożności. Warto pamiętać o przygotowaniu i sprzęcie.' },
        { author: 'WinterAdventurer', date: '28 stycznia 2024', content: 'Zimą w Tatrach trzeba być dobrze przygotowanym. Dla mnie kluczowe są odpowiednie ubrania termoaktywne, ciepła kurtka oraz dobre buty z grubą podeszwą. Ochrona przed zimnem to podstawa.' },
        { author: 'RescueSupporter', date: '2 lutego 2024', content: 'TOPR robi niesamowitą robotę. Uważam, że darmowa pomoc TOPR powinna pozostać, ale zawsze można rozważyć, czy system wymaga jakichś ulepszeń, aby jeszcze skuteczniej chronić turystów.' },
    ];
}

function deleteUser(userId) {
    const userElement = document.getElementById(`user-${userId}`);

    if (userElement) {
        const confirmation = confirm("Czy na pewno chcesz usunąć użytkownika?");
        if (confirmation) {
            userElement.remove();
            console.log(`Usunięto użytkownika o identyfikatorze ${userId}`);
        } else {
            console.log(`Anulowano usunięcie użytkownika o identyfikatorze ${userId}`);
        }
    } else {
        console.log(`Nie znaleziono użytkownika o identyfikatorze ${userId}`);
    }
}


function editUser(userId) {
    document.getElementById('edit-name').value = 'Imię użytkownika';
    document.getElementById('edit-surname').value = 'Nazwisko użytkownika';
    document.getElementById('edit-email').value = 'email@example.com';
    document.getElementById('edit-phone').value = '123-456-789';
    document.getElementById('edit-photo').value = 'url_do_zdjecia.jpg';
    document.getElementById('edit-bio').value = 'Krótka notatka bio użytkownika';
    document.getElementById('editUserModal').style.display = 'block';
}

function closeEditUserModal() {
    document.getElementById('editUserModal').style.display = 'none';
}

function saveEditUser() {
    const newName = document.getElementById('edit-name').value;
    const newSurname = document.getElementById('edit-surname').value;
    const newEmail = document.getElementById('edit-email').value;
    const newPhone = document.getElementById('edit-phone').value;
    const newPhoto = document.getElementById('edit-photo').value;
    const newBio = document.getElementById('edit-bio').value;
    closeEditUserModal();
}

function deleteDiscussion(discussionId) {
    const discussionElement = document.getElementById(`discussion-${discussionId}`);

    if (discussionElement) {
        const confirmation = confirm("Czy na pewno chcesz usunąć dyskusję?");
        if (confirmation) {
            discussionElement.remove();
            console.log(`Usunięto dyskusję o identyfikatorze ${discussionId}`);
        } else {
            console.log(`Anulowano usunięcie dyskusji o identyfikatorze ${discussionId}`);
        }
    } else {
        console.log(`Nie znaleziono dyskusji o identyfikatorze ${discussionId}`);
    }
}

function editDiscussion(topicId) {
    openDiscussion(`discussion${topicId}`);
    document.getElementById('discussion-modal').style.display = 'block';
}

function deleteComment() {
    const commentToDelete = document.querySelector('.modal-content .comment.active');

    if (commentToDelete) {
        const confirmation = confirm("Czy na pewno chcesz usunąć ten komentarz?");
        if (confirmation) {
            commentToDelete.remove();
            console.log('Usunięto komentarz.');
        } else {
            console.log('Anulowano usunięcie komentarza.');
        }
    } else {
        console.log('Nie można usunąć komentarza - nie znaleziono aktywnego komentarza.');
    }
}
```

### 4.31 `toggleSidebar()`
Toggles the visibility of the sidebar by adjusting its width and repositioning the toggle button.
- **Sidebar Width:** Changes between `250px` and `0`.
- **Toggle Button Position:** Adjusts between `20px` and `250px`.

### 4.32 `redirectToLogin()`
Redirects the user to the login page (`login.html`).

### 4.33 `redirectToRegister()`
Redirects the user to the registration page (`register.html`).

### 4.34 `showDetails(szczyt)`
Displays an alert with details for a specified summit (`szczyt`).
- **Alert Message:** Includes the summit name provided as the `szczyt` argument.

### 4.35 `openDiscussion(topic)`
Opens a discussion modal with details for a specified topic.
- **Modal Display:** Sets the display style of the discussion modal to `block`.
- **Discussion Content:** Populates the modal with content based on the `topic` argument, using a predefined set of sample posts.
- **Sample Posts:** Retrieved from the `getSamplePosts()` function.

### 4.36 `addComment()`
Adds a new comment to the discussion.
- **Comment Source:** Retrieved from the text area with id `new-comment`.
- **Comment HTML:** Appends a new comment HTML block to the discussion content.

### 4.37 `closeDiscussion()`
Closes the discussion modal by setting its display style to `none`.

### 4.38 `getSamplePosts()`
Returns an array of sample posts for discussion.
- **Post Structure:**
  - `author`: The author of the post.
  - `date`: The date of the post.
  - `content`: The content of the post.
- **Sample Data:**
  - Three predefined posts with authors, dates, and content.

### 4.39 `deleteUser(userId)`
Deletes a user element from the DOM based on the user ID.
- **Confirmation:** Prompts the user for confirmation before deletion.
- **Logging:** Logs a message to the console indicating whether the deletion was successful or cancelled.

### 4.40 `editUser(userId)`
Populates the user edit form with sample values and displays the edit modal.
- **Form Fields:** Sets values for name, surname, email, phone, photo URL, and bio.
- **Modal Display:** Sets the display style of the edit user modal to `block`.

### 4.41 `closeEditUserModal()`
Closes the user edit modal by setting its display style to `none`.

### 4.42 `saveEditUser()`
Saves the edited user information from the form fields.
- **Form Fields:** Retrieves values for name, surname, email, phone, photo URL, and bio.
- **Modal Closure:** Closes the edit user modal.

### 4.43 `deleteDiscussion(discussionId)`
Deletes a discussion element from the DOM based on the discussion ID.
- **Confirmation:** Prompts the user for confirmation before deletion.
- **Logging:** Logs a message to the console indicating whether the deletion was successful or cancelled.

### 4.44 `editDiscussion(topicId)`
Opens the discussion modal for editing based on the topic ID.
- **Modal Display:** Sets the display style of the discussion modal to `block`.

### 4.45 `deleteComment()`
Deletes an active comment from the discussion.
- **Active Comment:** Identified by the class `active`.
- **Confirmation:** Prompts the user for confirmation before deletion.
- **Logging:** Logs a message to the console indicating whether the deletion was successful or cancelled.

**Summary:**
- **`toggleSidebar()`**: Manages sidebar visibility and button positioning.
- **`redirectToLogin()`** and **`redirectToRegister()`**: Redirect users to login and registration pages.
- **`showDetails(szczyt)`**: Displays alert with summit details.
- **`openDiscussion(topic)`**: Opens and populates discussion modal.
- **`addComment()`**: Adds new comment to the discussion.
- **`closeDiscussion()`**: Closes discussion modal.
- **`getSamplePosts()`**: Provides sample posts for discussion.
- **`deleteUser(userId)`**: Deletes user with confirmation.
- **`editUser(userId)`**: Pre-fills user edit form and opens modal.
- **`closeEditUserModal()`**: Closes user edit modal.
- **`saveEditUser()`**: Saves edited user data.
- **`deleteDiscussion(discussionId)`**: Deletes discussion with confirmation.
- **`editDiscussion(topicId)`**: Opens discussion modal for editing.
- **`deleteComment()`**: Deletes active comment with confirmation.

These functions provide core functionalities for managing sidebar, user profiles, discussions, and comments within the application.

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

