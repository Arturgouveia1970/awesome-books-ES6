import { DateTime } from "./luxon.js";
const horaCurrente = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default horaCurrente; 