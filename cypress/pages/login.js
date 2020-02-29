import {getLoginPageURL} from "../resources/constants";

export default class LoginPage {
    constructor() {
        this.userName = '#username';
        this.password = '#password';
        this.loginButton = '.radius';
        this.loginMessage = '#flash';
    }

     login(userName, password) {
        cy.visit(getLoginPageURL());
        cy.get(this.userName).type(userName);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}



