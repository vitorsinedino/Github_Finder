//github class init
const github = new GitHub;
const ui = new UI;

//DOM elements manipulation
const searchUser = document.getElementById('searchUser');
//search function implementation//
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                console.log(data);
                if (data.profile.message === 'Not Found') {
                    //Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                }
                else {
                    //show profile
                    ui.showProfile(data.profile);
                }
            });
    }
    else {
        //clear profile
        ui.clearProfile();
    }
})