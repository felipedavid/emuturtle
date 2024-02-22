/**
 * @typedef {Object} RegisterIndex
 * @property {number} AF
 * @property {number} BC
 * @property {number} DE
 * @property {number} HL
 * @property {number} SP
 * @property {number} PC
 */
const RegisterIndex = {
    AF: 0,
    BC: 1,
    DE: 2,
    HL: 3,
    SP: 4,
    PC: 5,
};
Object.freeze(RegisterIndex);

class CPU {
    constructor() {
        this.registerFile = new Int16Array(6);
    }

    /**
     * @param regIndex {RegisterIndex}
     * @param value {number}
     * @returns {void}
     */
    setLowByteOfRegister(regIndex, value) {
        this.registerFile[regIndex] = (regIndex & 0xFF00) | value;
    }

    /**
     * @param regIndex {RegisterIndex}
     * @param value {number}
     * @returns {void}
     */
    setHighByteOfRegister(regIndex, value) {
    }
}