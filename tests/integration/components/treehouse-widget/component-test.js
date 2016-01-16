import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('treehouse-widget', 'Integration | Component | treehouse widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{treehouse-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#treehouse-widget}}
      template block text
    {{/treehouse-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
