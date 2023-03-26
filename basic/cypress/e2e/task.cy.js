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

	it('should create a task', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('#title').type('new task');
		cy.get('#summary').type('some discription');
		cy.get('[type="submit"]').click();
		cy.get('.task').should('have.length', 1);
		cy.get('.task h2').contains('new task');
		cy.get('.task p').contains('some discription');
		cy.get('.backdrop').should('not.exist');
		cy.get('.modal').should('not.exist');
	});
	it('should validate user input', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('[type="submit"]').click();
		cy.get('.error-message').contains('Please provide values ');
	});

	it('should filter task', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('#title').type('new task');
		cy.get('#summary').type('some discription');
		cy.get('#category').select('urgent');
		cy.get('[type="submit"]').click();
		cy.get('.backdrop').should('not.exist');
		cy.get('.modal').should('not.exist');
		cy.get('.task').should('have.length', 1);
		cy.get('#filter').select('moderate');
		cy.get('.task').should('have.length', 0);
		cy.get('#filter').select('urgent');
		cy.get('.task').should('have.length', 1);
		cy.get('#filter').select('all');
		cy.get('.task').should('have.length', 1);
	});

	it('should add multiple tasks ', () => {
		cy.visit('http://localhost:5173/');
		cy.contains('Add Task').click();
		cy.get('#title').type('Task 1');
		cy.get('#summary').type('First task');
		cy.get('[type="submit"]').click();
		cy.get('.task').should('have.length', 1);

		cy.contains('Add Task').click();
		cy.get('#title').type('Task 2');
		cy.get('#summary').type('Second task');
		cy.get('[type="submit"]').click();
		cy.get('.task').should('have.length', 2);
		cy.get('.task').first().contains('First task');
		cy.get('.task').last().contains('Second task');
	});
});
