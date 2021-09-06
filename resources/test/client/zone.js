import alt from 'alt-client';
import { ZONE_CHECK_TIME, ZONE_POLYGON_LENGTH } from './config';
import Polygon from './polygon';
export default class ZoneHandler {
    _interval;
    _currentPolygonIdx = 0;
    start() {
        if (this._interval)
            clearInterval(this._interval);
        this._interval = setInterval(() => {
            const rowIdx = Math.trunc(alt.Player.local.pos.x / ZONE_POLYGON_LENGTH) + 1;
            const columnIdx = Math.trunc(alt.Player.local.pos.y / ZONE_POLYGON_LENGTH) + 1;
            const polygonIdx = columnIdx * TOTAL_POLYGONS_ON_MAP_ROW + rowIdx;
            if (this._currentPolygonIdx != polygonIdx) {
                this.onPlayerLeftPolygon(polygonIdx);
                this._currentPolygonIdx = polygonIdx;
            }
        }, ZONE_CHECK_TIME);
    }
    onPlayerLeftPolygon(polygonTo) {
        alt.emitServer('playerLeftZone', this._currentPolygonIdx, polygonTo);
    }
}
const GLOBAL_MAP = new Polygon(0, 10000, 0, 10000);
const TOTAL_POLYGONS_ON_MAP_ROW = Math.trunc(Math.abs(GLOBAL_MAP.x2 - GLOBAL_MAP.x1) / ZONE_POLYGON_LENGTH);
new ZoneHandler().start();
