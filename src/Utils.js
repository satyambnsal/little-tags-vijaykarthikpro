export const SIZES = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL'
}

export const saveToLocalStorage = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
    localStorage.getItem(key);
}

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

