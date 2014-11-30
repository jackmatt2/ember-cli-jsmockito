# Ember-cli-jsmockito

(Note this is not yet ready, IN PROGRESS!!!)

Javascript Mocking Library for testing ember-cli applications

## Installing
```
npm install ember-cli-jsmockito --save-dev
```

Add the following to `tests/.jshintrc`

```
  "predef": [
    ...
    "mock",
    "when",
    "verify",
    "mockFunction",
    "spy"
  ],
  ```

## Features

### Rich and readable matching api - [docs](http://danielmartins.ninja/jshamcrest/modules/matchers.html)
```javascript
assertThat('', empty());
assertThat('user@domain.com', emailAddress());
assertThat(10, either(greaterThan(50)).or(even()));
assertThat([1,2,3], everyItem(greaterThan(0)));
assertThat([1,2,3], hasSize(lessThan(5)));
```

### Mock any object
```javascript
var modelMock = mock(DS.Model);
var controllerMock = mock(Ember.Controller);
```
### Mock functions
```javascript
var mockedFunc = mockFunction();
```
### Setup expectations on your mocks
```javascript
var employeeMock = mock(DS.Model);
when(employeeMock).get('name').thenReturn('jack');
equal('jack',employeeMock.get('name'));
```

### Verify function execution
```javascript
var mockedFunc = mockFunction();
mockedFunc('hello world');
verify(mockedFunc)('hello world');
```

## Mocking Objects

## Mocking Functions

## Mocking the ember-data store
TODO

## Mocking models
TODO

For more information on using jsmockito, visit [http://jsmockito.org/api/1.0.4/](http://jsmockito.org/api/1.0.4/).
