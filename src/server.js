/* 
shift + alt + a    /* */ /* comenta textos 
 configuração do docker no terminal vscode  



para rodar a aplicação usar o  configurado no  packagejson com "dev": node src/server.js
node --watch src/server.js

isomeni é para ser nossa interface  abrir o app no desktop

usar  e rodar no terminal o comando

1-docker ps -a
2-docker start postgres-burger ou docker start dev-burger-api
3-pnpm dev ou node --watch src/server.js


*/

import app from './app.js'; /* app é o express que foi exportado do arquivo app.js */
import './database/index.js'; /* importando o banco de dados para que ele seja carregado e inicializado quando a aplicação for iniciada */

app.listen(3001, () =>
  console.log('server na porta 3001'),
); /* listem é responsalvel por roda a aplicação no terminal é essencial telo no código */
