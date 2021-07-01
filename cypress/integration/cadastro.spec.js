/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Cadastrar novo usuário', () => {
        
        cy.get('a.login').click();
        cy.get('input#email_create').type(chance.email());
        cy.get('div.submit').find('button').click();

        cy.get('input#id_gender1').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#passwd').type('123456');

        cy.get('select#days').select('1');
        cy.get('select#months').select('June');
        cy.get('select#years').select('1900');

        cy.get('input#address1').type(chance.address());
        cy.get('input#city').type(chance .city());
        cy.get('select#id_state').select('California');
        cy.get('input#postcode').type(chance.zip());
        cy.get('input#phone_mobile').type(chance.phone({formatted:false}));
        cy.get('input#alias').type('casa');
        cy.get('button#submitAccount').click();

        cy.url().should('contain', 'my-account');
        cy.get('p.info-account').should('contain', 'Welcome to your account');



        
        
    });
});

// elementos
// botão sign in                      --> a.login
// campo para inserir email           --> input#email_create
// campo create account               --> div.submit
// botão para selecionar Mr.          --> input#id_gender1
// campo para inserir o primeiro nome --> input#customer_firstname
// campo para inserir último nome     --> input#customer_lastname
// campo para inserir senha           --> input#passwd 
// campo para inserir data            --> select#days
// campo para inserir mês             --> select#months
// campo para inserir campo           --> select#years 
// campo para inserir endereço        --> input#address1
// campo para inserir cidade          --> input#city
// campo para selecionar estado       --> select#id_state
// campo para inserir cep             --> input#postcode
// campo para selecionar país         --> select#postcode
// campo para inserir telefone        --> input#phone_mobile
// campo nome p/ o endereço           --> input#alias
// botão para registrar               --> button#submitAccount