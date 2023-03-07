const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    console.log(e.target.elements[0].value);
    console.log(e.target.elements[1].value);

    const dataObj = {
        title: e.target.elements[0].value,
        content: e.target.elements[1].value,
        img: e.target.elements[2].value,
        identification: localStorage.getItem('identification')
    }

const users = await fetch('https://testapi.io/api/Lukoseviciene7/resource/newPosts');

const usernameJson = await users.json();

localStorage.setItem('identification', e.target.elements[0].value);


});


// const form = document.querySelector('form');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
   
//     const dataObj = {
//         title: e.target.elements[0].value,
//         content: e.target.elements[1].value,
//         img: e.target.elements[2].value,
//         identification: localStorage.getItem('identification')
//     }

//     const postUser = await fetch('https://testapi.io/api/Lukoseviciene7/resource/newPosts',{
//         method: 'POST',
//         header: {
//             'Content-Type': 'applocation/json'
//         },
//         body: JSON.stringify(dataObj)
//     })
// })