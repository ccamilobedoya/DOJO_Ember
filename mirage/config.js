export default function() {
  this.namespace = '/api';
  this.get('/msgs', function(){
    return {
      data: [{
        type: 'msg',
        id: 'msj001',
        attributes: {
          name: 'Brayan Maison',
          city: 'Medellín',
          typeofmsg: 'public',
          message: 'Hola'
        }
      }, {
        type: 'msg',
        id: 'msj002',
        attributes: {
          name: 'María Calamidades',
          city: 'Bogotá',
          typeofmsg: 'public',
          message: 'Hola coso'
        }
      }, {
        type: 'msg',
        id: 'msj003',
        attributes: {
          name: 'Otilio Benavidez Del Epitafio',
          city: 'Valle',
          typeofmsg: 'public',
          message: 'Hola mundo'
        }
      }]
    };
  });
  
}
