import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:application', 'ApplicationRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it can mock', function() {
    var mock = mock(Array);
    equal('', empty());
    assertThat('user@domain.com', emailAddress());
    assertThat(10, either(greaterThan(50)).or(even()));
    assertThat([1,2,3], everyItem(greaterThan(0)));
    assertThat([1,2,3], hasSize(lessThan(5)));

});
