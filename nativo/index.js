window.name = 'js'
const user = {
    name: 'Marcos'
};

const business = {
    name: 'Headbook'
};

function showInfo(likes, friends) {
    console.log(this)

    return `${likes.name} tiene ${likes} likes y ${friends} `
}

console.log(showInfo(10, 5));
