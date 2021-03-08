describe('Random Quotes', () => {
    it('Can refresh', () => {
        cy.get('.refreshQuote').click()
        cy.wait(1000)
        cy.get('.quoteCount').contains('2')
    })
})