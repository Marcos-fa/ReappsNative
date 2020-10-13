import firebase from 'firebase'

class Fire{
    constructor() {
        this.init()
        this.checkAuth();
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyAhCQHCfy5e0aqXcmqpMT3m8KrIZkNHbHE",
                authDomain: "chatapp-1e776.firebaseapp.com",
                databaseURL: "https://chatapp-1e776.firebaseio.com",
                projectId: "chatapp-1e776",
                storageBucket: "chatapp-1e776.appspot.com",
                messagingSenderId: "787250795873",
                appId: "1:787250795873:web:56595cc6a51b6233e72120",
                measurementId: "G-3HZ96VFNLB"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        });
    }

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();
