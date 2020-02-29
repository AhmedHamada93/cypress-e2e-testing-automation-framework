//Environment URLS
const envURL = 'http://the-internet.herokuapp.com';

export function getEnvironmentURL() {
    return envURL;
}

export function getLoginPageURL() {
    return `${envURL}/login`;
}

export function getUserName() {
    return Cypress.env('ADMIN_USERNAME');
}

export function getPassword() {
    return Cypress.env('ADMIN_PASSWORD');
}