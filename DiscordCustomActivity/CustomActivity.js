// UWAGA MUSISZ MIEĆ ZAINSTALOWANE "środowisko uruchomieniowe" Node.js!!!.
// Strona NODE.JS - https://nodejs.org.

const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Cześć jestem pokczamp!',
        state: 'I love you',
        startTimestamp: new Date(),
        largeImageKey: 'nazwa-1',
        largeImageText: 'tutorial!',
        smallImageKey: 'nazwa-2',
        smallImageText: 'dobry jesteś!',
        buttons: [{
            label: 'Przycisk 1',
            url: 'https://example.com',
            
        }, {
            label: 'Przycisk 2',
            url: 'https://example2.com',
        }]
    });
    console.log('Custom Activity running');
});

rpc.login({
    // Znajdziesz go w zakładce OAuth2 na portalu developerskim discorda "https://discord.com/developers/".
    clientId: 'clientId'
});