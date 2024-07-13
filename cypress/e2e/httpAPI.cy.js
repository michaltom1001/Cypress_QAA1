describe('response status code tests', () => {
    const request = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false
    };

    it('200 to be expected', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
        })
    })
});

//Negative path
describe('response status code tests', () => {
    const request = {
        method: 'PATCH',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false
    };

    it('200 to be expected', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
        })
    })
});

describe('authorization GET methods', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/basic-auth/dx/1234',
        auth: {
            username: 'dx',
            password: '1234'
        },
        failOnStatusCode: false
    };

    it('login complex test', () => {
        cy.request(request).then((response) => {
            assert.equal(200, response.status);
            assert.deepEqual(response.body, {"authenticated": true, "user": "dx"});
        })
    })
});

//Negative path
describe('authorization with wrong user', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/basic-auth/dxu/1234',
        auth: {
            username: 'dx',
            password: '1234'
        },
        failOnStatusCode: false
    };

    it('login complex test', () => {
        cy.request(request).then((response) => {
            assert.equal(401, response.status);
            assert.deepEqual(response.body, {"authenticated": true, "user": "dx"});
        })
    })
});
