const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'catpictures.com',
    'myfavouritecats.com',
    'myfavouritecats2.com',
    'google.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ?  matches.slice(0, 3) : matches;
}

// console.log(googleSearch('soup', googleDatabase));

module.exports = googleSearch;