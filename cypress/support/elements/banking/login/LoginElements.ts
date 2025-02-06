import { ILoginElements } from "../../../interfaces/ILoginElements"

class LoginElements implements ILoginElements{

 /**
   * INPUTS
   */
 inputEmailId = 'user_email';
 inputEmailName = 'user[email]';
 inputEmailLabel = 'E-mail';

 inputSenhaId = 'user_password';
 inputSenhaName = 'user[password]';
 inputSenhaLabel = 'Senha';

 /**
  * BOTÕES
  */
 btnLoginName = 'commit';
 btnLoginValue = 'Login';

 btnEsqueceuSenhaValue = 'Esqueceu sua senha?';
 btnEsqueceuSenhaHref = '/users/password/new';

 /**
  * URN
  */
 urnLogin = '/users/sign_in';

}
export default LoginElements