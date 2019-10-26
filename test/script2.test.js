const fetch = require('node-fetch');
const swapi = require('./script2');

// method 1: using done parameter
it('calls swapi to get people', (done) => {
    expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

// method 2: using return
it('calls swapi to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})

// using promise
it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

// using mock fetch
it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve(
            {
                json: () => Promise.resolve({
                    count: 87,
                    results: [0, 1, 2, 3, 4, 5]
                })
            }
        ))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})