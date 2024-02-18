import { RegisterFile} from "./cpu.js";

window.addEventListener("DOMContentLoaded", entry)

function entry() {
    const cartridgeInput = document.getElementById("cartridge-input")
    cartridgeInput.addEventListener("change", loadCartridge)
}

function loadCartridge(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            console.log(arrayBuffer);
        }
        reader.onerror = function(e) {
            console.log(`Error reading file: ${e.target.error}`)
        }

        reader.readAsArrayBuffer(file);
    }
}