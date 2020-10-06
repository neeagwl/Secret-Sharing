const {hash}=window.location;
const message=atob(hash.replace('#',''));
if(message){
    document.querySelector('#first-card').classList.add('hide');
    document.querySelector('#show-message').classList.remove('hide');

    document.querySelector('h1').innerHTML=message;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const input=document.querySelector('#message');
    const encrypted=btoa(input.value);

    document.querySelector('#first-card').classList.add('hide');
    document.querySelector('#second-card').classList.remove('hide');

    const link=document.querySelector('#link-input')
    link.value=`${window.location}#${encrypted}`;
    link.select();
})