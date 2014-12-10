# Ember-cli-jsmockito

Javascript Mocking Library for testing ember-cli applications

IN PROGRESS ---- NOT YET READY!!

## Requirements 

ember-cli >= 0.1.4

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
    "spy",
    "verifyZeroInteractions",
    "verifyNoMoreInteractions",
    "isMock",
    "never",
    "zeroInteractions",
    "noMoreInteractions",
    "times",
    "once",
    
    "empty",
    "emailAddress",
    "greaterThan",
    "lessThan",
    "even",
    "everyItem",
    "hasSize"
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

### Mock any object - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.mock)
```javascript
var modelMock = mock(DS.Model);
var controllerMock = mock(Ember.Controller);
```
### Mock functions - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.mockFunction)
```javascript
var mockedFunc = mockFunction();
```
### Setup expectations on your mocks - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.when)
```javascript
var employeeMock = mock(DS.Model);
when(employeeMock).get('name').thenReturn('jack');
equal('jack',employeeMock.get('name'));
```

### Verify function execution - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.verify)
```javascript
var mockedFunc = mockFunction();
mockedFunc('hello world');
verify(mockedFunc)('hello world');
```

* Visit [JsMockito](http://jsmockito.org/api/1.0.4/) for more information about mocking.
* Visit [JsHamcrest](http://danielmartins.ninja/jshamcrest) for more information about the matching.
