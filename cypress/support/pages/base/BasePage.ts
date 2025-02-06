/// <reference types="cypress" />

class BasePage {

  /**
   * URL
   */
  acessarPagina(url: string): void {
    cy.visit(url)
  }


  /**
   * CLICK
   */

  /**
   * PREENCHER CAMPOS
   */
  preencherCampo(selector: string, valor: string): void {
    cy.get(selector).type(valor)
  }

}
export default BasePage