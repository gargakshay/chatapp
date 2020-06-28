
(function (global) {
    /**
     * It stores the user chat data 
     */
    let chatData = [];

    const renderTopBar = () => {
        const html = `
                <img src="previous.png" class="icon-size">
                <input type="text" name="search" placeholder="Search.." onkeyup="searchValue(event)">
            `;

        document.getElementById('top-bar').innerHTML = html;
    }
    /**
     * Get status list data
     */
    const getStatusList = () => {
        const data = [
            { id: 1, name: 'Priyanka', imageUrl: 'https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/72873456_425339975028135_3038321055589466112_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=1R0IdARI18oAX-GLnCX&oh=edb251db1a2c284fe10c2dbd9e5ab9e7&oe=5F22502D' },
            { id: 2, name: 'Alia', imageUrl: 'https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/94459588_2569629759808036_4267454620265086976_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=Jg6taXK3CJUAX9boJ4E&oh=0df10286caaff472d4eb67b5f617fd1f&oe=5F22330A', active: true },
            { id: 3, name: 'alester', imageUrl: 'https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/105033464_926448037827239_7339203561108891676_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=ajppWqeqeMIAX_9tGbp&oh=ce352189131ab4f1055801221e17930a&oe=5F21B282' },
        ];

        return new Promise((res, rej) => {
            res(data);
        });
    }

    /**
     * Display status list data
     */
    const displayStatusList = () => {
        getStatusList().then(data => {
            let html = '';
            data.forEach(res => {
                const status = `
                <div class="photobarchild">
                    <img src="${res.imageUrl}" class="img ${res.active ? 'active-status' : ''}">
                    <figcaption class="status-name">${res.name}</figcaption>
                </div>`;

                html += status;
            });

            document.getElementById('notification-bar').innerHTML = html;
        });
    }

    /**
     * Get chat list data
     */
    const getChatList = () => {
        const data = [
            { id: 1, name: "Ileana DCruz", message: "how are you bro?😜", active: " just now", notification: 2, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/98137656_1701437416661637_6051447931804844032_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=LgiblngeNY0AX-US8mE&oh=2ab76e9ac0e9aab8b8da02194452ecb6&oe=5F236047" },
            { id: 2, name: "Priyanka", message: " good night bro😜", active: "5 minutes", notification: 1, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/72873456_425339975028135_3038321055589466112_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=1R0IdARI18oAX-GLnCX&oh=edb251db1a2c284fe10c2dbd9e5ab9e7&oe=5F22502D" },
            { id: 3, name: " Ajstyle", message: " whats goingon?😇", active: " 10:30 am ", notification: 4, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/73387420_2155661591394787_2221102320916103168_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=TYXbKlnqHBMAX-rjoVG&oh=d0fea6bf97dc61d4b550a0968f1ce90a&oe=5F21649A" },
            { id: 4, name: " Braun strowman", message: " i am fine", active: " 3:03pm", notification: 5, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/94459588_2569629759808036_4267454620265086976_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=Jg6taXK3CJUAX9boJ4E&oh=0df10286caaff472d4eb67b5f617fd1f&oe=5F22330A" },
            { id: 5, name: " Randy orton", message: " how are you bro?😆", active: " 24/06/2020", notification: 0, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/89702462_191665115458638_2454817716561772544_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=EVbtMTNg_30AX9dhcfY&oh=9ee08d75047eea77ce6fc3820c851ac0&oe=5F21D01C" },
            { id: 6, name: " Randy orton", message: " how are you bro?", active: " 24/06/2020", notification: 0, imageUrl: "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/105033464_926448037827239_7339203561108891676_n.jpg?_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_ohc=ajppWqeqeMIAX_9tGbp&oh=ce352189131ab4f1055801221e17930a&oe=5F21B282" },

        ];
        return new Promise((res, rej) => {
            res(data);
            chatData = data;
        });
    }

    /**
     * Display chat list data
     */
    const displayChatList = (data) => {
        let html = '';
        data.forEach(res => {
            const chat = `
                <chat-row data='${JSON.stringify(res)}'> </chat-row>
                <div class="divider"></div>`;

            html += chat;
        });

        document.getElementById('chat-container').innerHTML = html;

        if (data.length === 0) {
            document.getElementById('chat-container').innerHTML = `<div class="nouserfound-text">No user found</div>`;
        }
    }

    /**
     * Search by User name or message
     */
    global.searchValue = function searchValue(event) {
        const value = event.target.value.toLowerCase();
        const data = chatData.filter(val => val.name.toLowerCase().indexOf(value) > - 1 || val.message.toLowerCase().indexOf(value) > -1);
        displayChatList(data);
    };

    getChatList().then(data => {
        displayChatList(data);
    });

    renderTopBar();
    displayStatusList();


    /**
     * Create custom component for Chat-row
     */
    class ChatRow extends HTMLElement {
        constructor() {
            super();
        }

        get data() {
            return this.getAttribute('data');
        }

        connectedCallback() {
            const data = JSON.parse(this.data);
            this.innerHTML = `
                <div class="chat-row">
                    <div class="chat-photo">
                        <img class="chatimg" src="${data.imageUrl}">
                    </div>
                    <div class="chat-detail">
                        <div class="chat-username">
                            ${data.name}
                        </div>
                        <div class="chat-message">
                            ${data.message}
                        </div>
                    </div>
                    <div class="chat-notification">
                        <span class="chat-time">${data.active}</span>
                        ${data.notification ?
                        `<div class="notification">
                            ${data.notification}
                        </div>` : ''}
                    </div>
                </div>
            `;
        }
    }

    customElements.define('chat-row', ChatRow);
})(window);