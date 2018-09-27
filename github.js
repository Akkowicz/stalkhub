class GitHub {
    constructor() {
        // It's just a toy project, malicious actors could generate GitHub OAuth keys without any problems
        this.client_id = '5a2fff34f1afb27a7f5f';
        this.client_secret = '0fbee61486eb284306a03798da41da9a1a1aa4b3';
    }

    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?sort=created&direction=desc&per_page=5&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}