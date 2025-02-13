document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const adminSection = document.getElementById('admin-section');
    const userSection = document.getElementById('user-section');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const noteForm = document.getElementById('note-form');
    const userList = document.getElementById('user-list');
    const noteList = document.getElementById('note-list');
    const userNoteList = document.getElementById('user-note-list');
    const adminCourseSelect = document.getElementById('admin-course-select');
    const userCourseSelect = document.getElementById('user-course-select');

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username ▋