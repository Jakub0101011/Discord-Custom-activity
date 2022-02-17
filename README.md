# General info
This project is simple. In this "application" you can configure "custom activity" in your profile yourself.
Just download the "Node.js" runtime, follow the steps in [Installation](#Installation) and use my code.

# Installation
To run this project, install locally npm:
```
npm init -y
npm install discord-rpc
```
# Runner
For the program to work, you need to change the base name in the program to the local file name you named, or name the local file to "CustomActivity".
# Code
largeImageKey, smallImageKey - you need to enter the name of the image you want to insert from the "Rich Presence" tab, you can find everything on the Discord development portal "https://discord.com/developers/".
```javascript
const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Hey!',
        state: 'I love you',
        startTimestamp: new Date(),
        largeImageKey: 'image name',
        largeImageText: 'text',
        smallImageKey: 'image name',
        smallImageText: 'text',
        //IF YOU WANT THE "CUSTOM ACTIVITY" BUTTONS, USE THE PATTERN AT THE BOTTOM!
        // buttons: [{
        //     label: 'Button 1',
        //     url: 'https://example.com',
        // }, {
        //     label: 'Button 2',
        //     url: 'https://example.com',
        // }]
    });
    console.log('Custom Activity running');
});

rpc.login({
    // You will find it in the OAuth2 tab on the discord developer portal "https://discord.com/developers/".
    clientId: 'your clientId'
});
```

Na szybko napisane readme :>
