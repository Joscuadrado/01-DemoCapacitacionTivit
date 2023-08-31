class LoginPage {
    elements = {
        txtUsuario: () => cy.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[1]/input"),
        txtPass: () => cy.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[2]/input"),
        btnIngresar: () => cy.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/input"),
        mensajeError: () => cy.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[3]/h3"),
        mensajeErrorUserPass: () => cy.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[3]/h3"),
    };
//metodos
    iniciarSesion(username, password) {
        this.elements.txtUsuario().type(username);
        this.elements.txtPass().type(password);
        this.elements.btnIngresar().click();
    };
}

export const loginPage = new LoginPage();