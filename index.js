const posts = [];

const titleValidationLimit = 10;
const textValidationLimit = 20;

const titleInputNode = document.querySelector('.js-post-title-input');
const textInputNode = document.querySelector('.js-post-text-input');
const publicationBtnNode = document.querySelector('.js-publication-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.getElementById('validationMessage');

publicationBtnNode.addEventListener('click', function() {
    const PostFromUser = getPostFromUser();
    
    addPost(PostFromUser);

    renderPosts();
});

titleInputNode.addEventListener('input', validation);

textInputNode.addEventListener('input', validation);

function validation() {
    const titleLen = titleInputNode.value.length;
    const textLen = textInputNode.value.length;

    if (titleLen > titleValidationLimit) {
        validationMessage.innerText = `Длина заголовка не должна превышать ${titleValidationLimit} символов`;
        validationMessage.classList.remove('validationMessage_hiden');
        return;
    }

    if (textLen > textValidationLimit) {
        validationMessage.innerText = `Длина текста не должна превышать ${textValidationLimit} символов`;
        validationMessage.classList.remove('validationMessage_hiden');
        return;
    }
}

function getPostFromUser() {
    const title = titleInputNode.value;
    const text = textInputNode.value;
    
    return {
        title: title,
        text: text
    };
}

function addPost({ title, text}) {
    const currentDate = new Date();
    const dt = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    posts.push({
        dt,
        title,
        text
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class ='post'>
                <p class='post__date'>${post.dt}</p>
                <p class='post__title'>${post.title}</p>
                <p class='post__text'>${post.text}</p>
            </div>
        `
    });


    postsNode.innerHTML = postsHTML;
}