import LoginPage, {login} from '../pages/login';
import {getUserName, getPassword} from '../resources/constants';

const loginPage = new LoginPage();

describe('Login', () => {

    it('should be able to login with valid userName and password', () => {
        loginPage.login(getUserName(), getPassword());
        cy.get(loginPage.loginMessage).should('contains.text', 'You logged into a secure area!');
    });

    it('should not be able to login with invalid username', () => {
        loginPage.login('invalidUserName', getPassword());
        cy.get(loginPage.loginMessage).should('contains.text', 'Your username is invalid!');
    });

    it('should not be able to login with invalid password', () => {
        loginPage.login(getUserName(), 'invalidPassword');
        cy.get(loginPage.loginMessage).should('contains.text', 'Your password is invalid!');
    });

});




