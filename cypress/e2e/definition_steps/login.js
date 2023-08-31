import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

//Aqui se instancia la pagina
import { loginPage } from "../../pages/LoginPage";


//Aqui van los pasos del cucumber
Given("Abre navegador e ingresa URL del aplicativo", () => {
    cy.visit("/");
});

When("Usuario ingresa su nombre de usuario {string}, y clave {string}, y da clic en el btn ingresar", (username, password) => {
    loginPage.iniciarSesion(username, password)
});

Then("Ingresa al home y la url debe contener el texto inventory", () => {
    cy.url().should("contains", "/inventory.html");
});

Then("Muestra mensaje de error {string}", (alerta) => {
    //Validamos que el string de error definido en el cucumber sea el correcto
    loginPage.elements.mensajeError().should("have.text", alerta);
});

Then("Muestra mensaje usuario o paswword incorrecto {string}", (alerta1) => {
    //Validamos que el string de error definido en el cucumber sea el correcto
    loginPage.elements.mensajeErrorUserPass().should("have.text", alerta1);
});