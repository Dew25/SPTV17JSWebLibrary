import {httpModule} from './HttpModule.js';
import {userModule} from './UserModule.js';

class AuthModule{
    
    printLoginForm(){
        document.getElementById('content').innerHTML = 
            ` <div class="row mt-5 w-100 d-flex justify-content-center">
               <div class="card border-primary p-2" style="max-width: 30rem;">
                  <div class="card-header text-center">Введите логин и пароль</div>
                  <div class="card-body">
                    <p class="card-text d-flex justify-content-between">Логин: <input class="ml-2" type="text" id="login"></p>
                    <p class="card-text d-flex justify-content-between">Пароль: <input class="ml-2" type="text" id="password"></p>
                    <p class="card-text"><button class="btn btn-light w-100" type="button" id="btnEnter">Войти</button</p>
                  </div>
                  <p class="w-100 text-center">Нет учетной записи?<br><a id="registration" href="#">Зарегистрироваться</a></p>
               </div>
             </div>;`;
        //старый способ навешивания события на элемент
        document.getElementById('btnEnter').onclick = function(){
            authModule.auth();
        }
        // новый, предпочтительный способ навешивания события на элемент
        document.getElementById('registration').addEventListener('click', userModule.printRegistrationForm);
    }
    auth(){
        console.log('отработал метода authModule.auth()');
    }
    
}
let authModule = new AuthModule();
export {authModule};

