/**
 * This is an abstract class
 */
class DataProviderBase {
    constructor() {
        this.data = [];
        this.processedData = new Map();
    }

    supply(data) {
        this.data = data;
        this.processDataSupplied();
    }

    processDataSupplied() {}

    provide() {
        return this.processedData;
    }
}
export default DataProviderBase;