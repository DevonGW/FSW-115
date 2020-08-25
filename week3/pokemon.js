
const xhr = new XMLHttpRequest();


xhr.onload = () => {
    
    if (xhr.status == 200) {
        
        console.log(JSON.parse(xhr.response));
    } else {
        console.error('Error!');
    }
};


xhr.open('GET', 'https://api.vschool.io/pokemon', true);


xhr.send();

xhr.open("GET", "https://api.vschool.io/pokemon", [true, user, password])

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.jsonbin.io/b/5d5076e01ec3937ed4d05eab/1');


xhr.responseType = 'json';

xhr.send();


