import { test } from 'qunit';
import moduleForAcceptance from 'dojo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | flujo');

test('Visita / y debe redireccionar a mensajes', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/listamsg', 'redirecciona a mensajes');
  });
});

test('Tiene lista de mensajes', function(assert){
	visit('/');
	andThen(function () {
		assert.equal(find('#lista').length, 3, 'Se lista algo');
	});

});
