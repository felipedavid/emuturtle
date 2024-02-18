export class RegisterFile {
    constructor() {
        /** @type {Uint16Array} */
        this.registers = new Uint16Array(6);

        this.AF = 0;
        this.BC = 1;
        this.DE = 2;
        this.HL = 3;
        this.SP = 4;
        this.PC = 5;
    }

    /**
     * @param regIndex {(0|1|2|3|4|5)}
     * @returns {number} */
    getLowByte(regIndex) {
        return this.registers[regIndex] && 0xFF;
    }

    /**
     * @param value {number}
     * @returns {number} */
    getHighByte(value) {
        return value >> 8;
    }

    /**
     * @param regIndex {(0|1|2|3|4|5)}
     * @param value {number}
     * @returns {void}
     */
    setLowByte(regIndex, value) {
        let regValue = this.registers[regIndex];
        let highB = this.getHighByte(regValue);
        this.registers[regIndex] = (highB << 8) | value
    }

    /**
     * @param regIndex {(0|1|2|3|4|5)}
     * @param value {number}
     * @returns {void}
     */
    setHighByte(regIndex, value) {
        let regValue = this.registers[regIndex];
        let lowB = this.getLowByte(regValue);
        this.registers[regIndex] = (value << 8) | lowB
    }

    /** @returns {number} */
    getFlags() {
        return this.getLowByte(this.AF)
    }

    /**
     * @param value {number}
     * @returns {void} */
    setFlags(value) {
        this.setLowByte(this.AF, value)
    }

    /** @returns {number} */
    getAF() {
        return this.registers[this.AF];
    }

    setAF(value) {
        this.registers[this.AF] = value;
    }

    /** @returns {number} */
    getA() {
        return this.getHighByte(this.AF)
    }

    setA(value) {
        this.setHighByte(this.AF, value);
    }

    /** @returns {number} */
    getBC() {
        return this.registers[this.BC];
    }

    setBC(value) {
        this.registers[this.BC] = value;
    }

    /** @returns {number} */
    getB() {
        return this.getHighByte(this.BC)
    }

    setB(value) {
        this.setHighByte(this.BC, value);
    }

    /** @returns {number} */
    getC() {
        return this.getLowByte(this.BC)
    }

    setC(value) {
        this.setLowByte(this.BC, value);
    }

    /** @returns {number} */
    getDE() {
        return this.registers[this.DE];
    }

    setDE(value) {
        this.registers[this.DE] = value;
    }

    /** @returns {number} */
    getD() {
        return this.getHighByte(this.DE)
    }

    setD(value) {
        this.setHighByte(this.DE, value);
    }

    /** @returns {number} */
    getE() {
        return this.getLowByte(this.DE)
    }

    setE(value) {
        this.setLowByte(this.DE, value);
    }

    /** @returns {number} */
    getHL() {
        return this.registers[this.HL];
    }

    setHL(value) {
        this.registers[this.HL] = value;
    }

    /** @returns {number} */
    getH() {
        return this.getHighByte(this.HL)
    }

    setH(value) {
        this.setHighByte(this.HL, value);
    }

    /** @returns {number} */
    getL() {
        return this.getLowByte(this.HL)
    }

    setL(value) {
        this.setLowByte(this.HL, value);
    }

    /** @returns {number} */
    getSP() {
        return this.registers[this.SP];
    }

    setSP(value) {
        this.registers[this.SP] = value;
    }

    /** @returns {number} */
    getPC() {
        return this.registers[this.PC];
    }

    setPC(value) {
        this.registers[this.PC] = value;
    }

    log() {
        console.log(`AF: 0x${this.getAF().toString(16)}`);
        console.log(`BC: 0x${this.getBC().toString(16)}`);
        console.log(`DE: 0x${this.getDE().toString(16)}`);
        console.log(`HL: 0x${this.getHL().toString(16)}`);
        console.log(`SP: 0x${this.getSP().toString(16)}`);
        console.log(`PC: 0x${this.getPC().toString(16)}`);
    }
}