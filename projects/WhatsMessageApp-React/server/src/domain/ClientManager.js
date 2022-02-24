class ClientManager {
    constructor() {
        this.clients = [];
    }

    registre(user) {        
        //this.clients.push(client);
        //client.sessionId = this.clients.push(user);
        this.clients[user.uid] = user;

        console.log('clients update');
        console.log(this.clients);
        console.log(`Client log-in: [${user.uid}]`);
    }

    unregistre(uid) {
        console.log(`Client log-out: [${uid}]`);
        this.clients.splice(uid, 1);
        console.log('clients update');
        console.log(this.clients);
    }

    getClient(uid) {
        return this.clients[uid];
    }

    getClients() {
        var result = [];
        for (const client in this.clients.values()) {
            result.push(client);
        }
        return this.clients;
    }
}

const clientManager = new ClientManager();
module.exports = clientManager;