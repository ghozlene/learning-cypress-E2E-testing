describe('tasks management', () => {
	it('should open and close the task model', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('.backdrop').click({ force: true });

		cy.get('.backdrop').should('not.exist');
		cy.get('.modal').should('not.exist');
	});

	it('should close the task model when clicking cancel', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('.modal').contains('Cancel').click();
		cy.get('.backdrop').should('not.exist');
		cy.get('.modal').should('not.exist');
	});
});
