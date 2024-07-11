import Login from './pages/Login'
import HomePage from './pages/HomePage'



describe('Testing the login page', () => {

    it('Test 1: login and logout with user888@gmail.com', ()=>{
        Login.visit();
        Login.login('user888@gmail.com', '1234567890');
        HomePage.logout();

    });
});

describe('Testing the login page', () => {

    it('Test 2: login and logout with testowyqa@qa.team', ()=>{
        Login.visit();
        Login.login('testowyqa@qa.team', 'QA!automation-1');
        HomePage.logout();

    });
});