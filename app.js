import { RegisterFile} from "./cpu.js";

window.addEventListener("DOMContentLoaded", entry)

function entry() {
    const regFile = new RegisterFile();
    regFile.setAF(0x1234);
    regFile.log()
}