function main() {
    const userId = localStorage.getItem('id');
    renderPosts(userId);
}
main();

function postHtml(post) {
    return `<div class="post">
        <div class="post__title">${post.title}</div>
        <p class="post__body">${post.body}</p>
    </div>`;
}

function onSearchChange(event) {
    const userId = event.target.value;
    renderPosts(userId);
}

async function renderPosts(userId) {
    const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await userPosts.json();

    document.querySelector('.post-list').innerHTML = postsData.map(post => postHtml(post)).join('');
}