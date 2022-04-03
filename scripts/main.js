async function fetchMapQuestConsumerKey(url) {
    const request = await fetch(url);
    if (!request.ok) {
        throw new Error(`HTTP Request Error: ${request.status}`);
    }
    return await request.text();
}

fetchMapQuestConsumerKey('keys/mapquest-consumer-key')
    .then(key => {
    initialMap(key);
}).catch(error => {
    console.error(error);
});

function initialMap(key) {
    L.mapquest.key = key;
    // 'map' refers to a <div> element with the ID map
    const map = L.mapquest.map('map', {
        center: [53.480759, -2.242631],
        layers: L.mapquest.tileLayer('hybrid'),
        zoom: 12
    });

    map.addControl(L.mapquest.control({
        position: 'bottomright'
    }));

    L.marker([53.480759, -2.242631], {
        icon: L.mapquest.icons.marker({
            primaryColor: '#22407F',
            secondaryColor: '#3B5998',
            shadow: true,
            size: 'md',
            symbol: 'A'
        })
    }).bindPopup('This is Manchester!').addTo(map);
}