const db = {};
console.log('hello');

// ['manna', 'sakib', 'manna', 'kancon', 'rubel', 'manna', 'sakib'];
// { manna: 1, sani: 1, sakib: 3, kancon: 4 }

const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] += 1;
    } else {
        db[item] = 1;
    }
    console.log(db);
}
const removeInDb = item => {
    const db = getDb();
    delete db[item];
}
const getDb = () => {
    return db;
}