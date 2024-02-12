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


