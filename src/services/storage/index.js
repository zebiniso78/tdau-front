class ApiStorage {
    get(key) {
        if (!(key in localStorage)) return undefined;
        let savedData = localStorage.getItem(key);
        if (typeof savedData === 'object') return JSON.parse(savedData);
        return savedData;
    }

    set(key, savingData) {

        if (!savingData) return undefined

        if (typeof savingData === 'object') savingData = JSON.stringify(savingData);

        localStorage.setItem(key, savingData);
    }

    update(key, newData) {
        if (!(key in localStorage)) return 'key_not_avaible';
        localStorage.setItem(key, newData);

        return 'update_success'
    }

    remove(key) {
        if (key in localStorage) {
            localStorage.removeItem(key);
        }
    }
}

const browserStorage = new ApiStorage();


export default browserStorage;