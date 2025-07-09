fetch ('data.json')
.then(response => response.json())
.then(data =>{
    const profileDiv =
    document.getElementById('profile');
    profileDiv.innerHTML =`
    <P>Name:${data.name}</p>
    <p>Email:${data.email}</p>
    <P>Age:${data.age}</p>
    `;
})
.catch(error => {
    console.error('Error loading JSON:', error);
});