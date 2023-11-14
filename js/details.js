const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async() => {
    let uri = 'http://localhost:3000/posts/' + id;
    const res = await fetch(uri);
    const post = await res.json();

    container.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());