const setLocalStorage = (property, value, date) => {
    const data = JSON.parse(localStorage.getItem(date));
    data[property] = value;
    localStorage.setItem(date, JSON.stringify(data));

    return data;
}