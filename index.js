// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await users.json();

    let userCardHtml = '';
    userData.map(user => {
        userCardHtml += userHtml(user);
    }).join('');

    document.querySelector('.user-list').innerHTML = userCardHtml;
}
main();

function showUserPosts(id) {
    localStorage.setItem('id', id);
    window.location.href = `${window.location.origin}/user.html`;
}

function userHtml(user) {
    return `<div class="user" onclick="showUserPosts(${user.id})">
        <div class="user-card">
            <div class="user-card__container">
                <h3>${user.name}</h4>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            </div>
        </div>
    </div>`;
}