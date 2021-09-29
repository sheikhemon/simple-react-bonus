const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] += 1;
    } else {
        db[item] = 1;
    }
    saveToDb(db)
}
const removeInDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db)
}
const saveToDb = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJson)
}

const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    savedDb = JSON.parse(savedDb);
    console.log(typeof savedDb, savedDb);
    return savedDb;
}