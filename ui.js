class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

//function that will create the alerts, using the api data//
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class"btn
                        btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">
                        Public Repos: ${user.public_repos}
                        </span>
                        <span class="badge badge-secondary">
                        Public Gists: ${user.public_gists}
                        </span>
                        <span class="badge badge-success">
                        Folowers: ${user.followers}
                        </span>
                        <span class="badge badge-danger">
                        Folowing: ${user.following}
                        </span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item>Company: ${user.company}</li>
                            <li class="list-group-item>Bio: ${user.bio}</li>
                            <li class="list-group-item>Location: ${user.location}</li>
                            <li class="list-group-item>Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos">
                 
            </div>
        `; 
    }

    //show repos
    showRepos(repos) {
        let output = ` `;

        repos.forEach(function (repo) {
            output +=
            `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>   

            `;

        });
        //repos output
        document.getElementById('repos').innerHTML = output;

    }


    //show alert//
    showAlert(message, className) {
        //remaining alert removal
        this.clearAlert();
        //creat div
        const div = document.createElement('div');
        //add class
        div.className = className;
        //text add
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get searchbox
        const search = document.querySelector('.search');
        //inser alert
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    
    //function to prevent several alerts from showing
    clearAlert() {
        const currentAllert = document.querySelector('.alert');
        if (currentAllert) {
            currentAllert.remove();
        }
    }


    //clear profile//
    clearProfile() {
        this.profile.innerHTML = '';
    }
}