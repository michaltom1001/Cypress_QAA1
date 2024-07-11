class HomePage {

    logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(8) > .next-bve2vl').click();
    }
};

export default new HomePage();