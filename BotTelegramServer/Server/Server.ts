import app from './App';
import { configServer } from './Config/Server/Server.config';

app.listen(configServer.get('PORT'), () => {
  console.log('%s running.', configServer.get('NAME'));
});
