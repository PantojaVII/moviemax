// Importando o módulo 'axios' para fazer requisições HTTP.
import axios from "axios";
import { log } from "console";

// Criando uma instância do axios com configurações personalizadas.
const http = axios.create({
  // Definindo a URL base para todas as requisições.
  baseURL: "http://192.168.0.113:8000/",
  // Configurando cabeçalhos padrão para todas as requisições.
  headers: {
    Accept: "application/json", // Definindo o cabeçalho 'Accept' para 'application/json'.
    "Content-Type": "application/json", // Definindo o cabeçalho 'Content' para 'application/json'.
    /* 
        Os cabeçalhos padrão são configurados com 'Accept' e 'Content' definidos como 'application/json'. Isso indica que as requisições esperam receber e enviar dados no formato JSON.
        */
  },
});

http.interceptors.request.use(
  function (config) {
   
    /* http.interceptors.request.use(...): Isso está configurando um interceptor na instância do Axios chamada http. Este interceptor irá executar antes de qualquer solicitação ser enviada. */

    /* A função de callback passada como o primeiro argumento de .use é executada antes de cada solicitação. Essa função recebe o objeto de configuração da solicitação como seu primeiro argumento (config). */

    const token = sessionStorage.getItem("token");
    /* const token = sessionStorage.getItem('token'): Aqui, o código tenta obter um token de acesso da sessão do navegador usando sessionStorage. Isso presumivelmente é onde o token foi armazenado após o usuário fazer login com sucesso. O token é armazenado na variável token. */
    if (token && config.headers) {
      /* 
    if (token && config.headers) { ... }: Esta linha verifica se um token existe e se o objeto de configuração da solicitação (config) possui um objeto de cabeçalho (headers). A verificação é importante para garantir que o cabeçalho de autorização só seja adicionado se houver um token disponível e se a solicitação já tiver um objeto de cabeçalho.
     */
      config.headers.Authorization = `token ${token}`;
 
      
      /* 
    
    config.headers.Authorization = Bearer ${token}``: Se um token existir, ele é adicionado ao objeto de cabeçalho da solicitação. O token é enviado no cabeçalho de autorização no formato "Bearer {token}". Isso é um padrão comum para autenticação usando tokens de acesso.
    */
    }
    return config;
    /* 
    return config;: Após adicionar o cabeçalho de autorização (se necessário), o objeto de configuração da solicitação é retornado. Isso permite que a solicitação continue normalmente, agora com o cabeçalho de autorização.
    */
  },
  function (error) {
    /* 
    function (error) { ... }: Esta parte do código é um tratamento de erro. Se ocorrer algum erro durante o processo de interceptação, o Axios chama esta função. Nesse caso, a função apenas registra uma mensagem de erro no console e rejeita a promessa com o erro original (Promise.reject(error)).
     */
   
 
  }
);

// Exportando a instância do axios para uso em outros lugares do seu código.
export default http;

/* 

O código em questão configura um interceptor no Axios. Os interceptors são funções que podem ser executadas antes de uma solicitação ser enviada ou após uma resposta ser recebida. Nesse caso, o interceptor é definido para executar antes de enviar uma solicitação e tem o propósito de adicionar um cabeçalho de autorização com um token de acesso (se disponível) a todas as solicitações feitas com o Axios.

Resumindo, este interceptor é responsável por adicionar automaticamente um cabeçalho de autorização a todas as solicitações feitas com o Axios, se um token estiver disponível. Isso é útil para autenticar solicitações de API, garantindo que apenas usuários autenticados e autorizados possam acessar os recursos protegidos.
 
*/
