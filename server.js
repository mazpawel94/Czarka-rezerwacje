const app = require('./app-express');
//http://178.33.68.130/
app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
}); 