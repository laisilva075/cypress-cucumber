import LoginElements from "../../../elements/banking/login/LoginElements"
import { ILoginElements } from "../../../interfaces/ILoginElements"
import BasePage from "../../base/BasePage"

const basePage = new BasePage()
const el: ILoginElements = new LoginElements()

class LoginPage {

  /**
   * ACESSAR A PÁGINA DE LOGIN
   */
  acessarPaginaLogin(): void {
    basePage.acessarPagina('https://pagamentos.dev.grafeno.be/users/sign_in')
  }

  preencherLogin(): void {
    basePage.preencherCampo('lais.silva@grafeno.digital', '123456')
  
  }

}
export default LoginPage