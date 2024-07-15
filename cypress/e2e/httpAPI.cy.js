describe('httpbin tests', () => {
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
describe('httpbin tests', () => {
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

describe('httpbin tests', () => {
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
describe('httpbin tests', () => {
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

describe('httpbin tests', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        qs: {
            "user": "john"
        },
        failOnStatusCode: false
    };

    it('200 to be expected', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("john", response.body.args.user);
        })
    })
});

describe('httpbin tests', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "testHeader": "testHeaderValue"
        },
        failOnStatusCode: false
    };

    it('header test', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("testHeaderValue", response.requestHeaders.testHeader);
        })
    })
});

describe('httpbin tests', () => {
    const bodyData = {
        key: "value"
    };

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyData,
        failOnStatusCode: false
    };

    it('body data test', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.notStrictEqual(bodyData, response.body.data);
        })
    })
});

describe('httpbin tests', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/cookies/set/my_cookies/cookie_test',
        failOnStatusCode: false
    };

    it('cookie set test', () => {
        cy.setCookie('my_cookies', 'cookie_test');
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal('cookie_test', response.body.cookies.my_cookies);
        })
    })
});

describe('httpbin tests', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
        },
        failOnStatusCode: false
    };

    it('correct set of user-agent', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0", response.requestHeaders["user-agent"]);
        })
    })
});

describe('httpbin tests', () => {
    const request = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false
    };

    it('test duration', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.isTrue(response.duration <= 1000)
        })
    })
});

describe('httpbin tests', () => {

    it('randomized data test', () => {
        for(let i=0; i < 10; i++) {
            const randomId = getRandomInt(10000);

            const request = {
                url: 'https://httpbin.org/headers',
                id: randomId
            }
            cy.request(request).then(response => {
                assert.isTrue(response.status ==200)
            })
        }
    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};








  


