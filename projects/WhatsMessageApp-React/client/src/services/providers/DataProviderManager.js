/**
 * This is an Singleton
 */
class DataProviderManager {
    manage(context) {
        console.log(context.getProviderClass());
        let provider = context.getProviderClass();
        let data = context.getData();

        provider.supply(data);
    }
}
const instance = new DataProviderManager();
export { instance as DataProviderManager };