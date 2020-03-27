//class creation
class GitHub{
    //constructor creation
    constructor(){
        this.client_id = 'ca55319b312dc59124a3';
        this.client_secret = '61f74c3b77a290aade64d4cfd4c5a5ac7da3efca';
    }
//profile info fetch//
    async getUser(user) {
        //fetch for api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //api response handling
        const profile = await profileResponse.json();
        //api data return
        return {
            profile
        };
    }
}