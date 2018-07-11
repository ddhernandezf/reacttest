module.exports = function(app){
    var MySQL = require('mysql');

    var Connection = MySQL.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Letmein1.',
        database: 'ChapinaKitchen',
        typeCast: function castField(field, useDefaultTypeCasting){
            if((field.type === 'BIT') && (field.length === 1)){
                var bytes = field.buffer();
                return(bytes[0] === 1);
            }

            return(useDefaultTypeCasting());
        }
    });

    app.post('/Role', function(request, response){
        var model = JSON.parse(request.body);
        var params = [model.Id, model.Name, model.Active]
        
        Connection.query('call sp_Role_Q(?, ?, ?)', params, function(error, results, fields){
            response.set('Content-Type', 'application/json;charset=utf-8');
            response.status(200);
            response.send(JSON.stringify(results[0]));
        });
    });

    app.post('/Role/New', function(req, res){
        res.send('new item');
    });

    app.put('/Role/Update', function(req, res){
        res.send('update item');
    });

    app.delete('/Role/Delete', function(req, res){
        res.send('delete item');
    });
};