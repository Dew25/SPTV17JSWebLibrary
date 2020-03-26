/*  fetch немножко параноик и по умолчанию не 
*   передаёт куки от сайта, на который 
*   отправляется запрос (а идентификатор 
*   сессии хранится в куке PHPSESSID). 
*   За передачу кук и заголовков авторизации 
*   отвечает опция credentials, которая может 
*   иметь одно из следующих значений:
*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;
*     'same-origin' — передавать, только если домен, на который 
*       отправляется запрос, совпадает с доменом текущего сайта 
*       (точнее, origin; сложный случай, но текущего вопроса не касается, 
*       так что не буду его подробно описывать);
*     'include' — передавать.
*/
//делаем доступными функции класса в других модулях

class HttpModule{
  
  status(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }
  json(response) {  
    return response.json()  
  }
  http(url,method,data){
        let options = {};
        if(method === 'POST'){
           options= {
                        method: 'POST',
                        headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                        },
                        credentials: 'include',
                        body: JSON.stringify(data)
                  }
        }else if(method === 'GET'){
           options = {
                        method: 'POST',
                        headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                        },
                        credentials: 'include'
                    }
        }
        return fetch(url, options)
              .then(httpModule.status)
              .then(httpModule.json)
              .catch((ex) => console.log("Fetch Exception", ex));
    }; 
  }
let httpModule = new HttpModule();

export {httpModule};


