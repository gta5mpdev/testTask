import Polygon from "./polygon"

export const ZONE_CHECK_TIME = 100 // Переодичность проверки выхода игрока из зоны
export const ZONE_POLYGON_LENGTH = 10 // Длина стороны одного квадрата в зоне

export const GLOBAL_MAP = new Polygon(0, 10000, 0, 10000)// Вся карта как квадрат