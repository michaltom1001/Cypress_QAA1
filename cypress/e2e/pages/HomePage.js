export class HomePage {

    logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
    }
}