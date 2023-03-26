describe('tasks management', () => {
	it('should open and close the task model', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('.backdrop').click({ force: true });
	});
});
