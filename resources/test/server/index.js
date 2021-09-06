import alt from 'alt-server';
alt.log('TEST started');
alt.onClient('playerLeftZone', (player, zoneFromIdx, zoneToIdx) => {
    alt.log(`Player ${player.id} left zone ${zoneFromIdx} to zone ${zoneToIdx}`);
});
alt.on('playerConnect', (player, _) => {
    player.spawn(0, 0, 72);
    player.model = alt.hash('FreemodeMale01');
});
