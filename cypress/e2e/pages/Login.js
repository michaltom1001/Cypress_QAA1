export class Login {
    visit() {
        cy.visit('https://www.edu.goit.global/account/login');
    }

    login(email, password) {
        cy.get('#user_email').type(email);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
}