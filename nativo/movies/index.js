const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '40d9ae5b6dmshd8f34bdd86dacadp175a53jsn1d9934b16359',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

fetch('https://api.dailymotion.com/videos?page=1&limit=20')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));