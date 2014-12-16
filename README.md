# Ember-cli-jsmockito

Javascript Mocking and Matching Library for unit testing ember-cli applications.

## Requirements 

ember-cli >= 0.1.4

## Installing
```
npm install ember-cli-jsmockito --save-dev
```

Add the following to `tests/.jshintrc` inside the `predef` array.

```
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
    "everyItem",
    "hasItem",
    "hasItems",
    "hasSize",
    "isIn",
    "oneOf",
    "allOf",
    "anyOf",
    "anything",
    "both",
    "either",
    "equalTo",
    "is",
    "nil",
    "not",
    "raises",
    "raisesAnything",
    "sameAs",
    "truth",
    "equivalentMap",
    "equivalentArray",
    "between",
    "closeTo",
    "divisibleBy",
    "even",
    "greaterThan",
    "greaterThanOrEqualTo",
    "lessThan",
    "lessThanOrEqualTo",
    "notANumber",
    "odd",
    "zero",
    "bool",
    "func",
    "hasFunction",
    "hasMember",
    "instanceOf",
    "number",
    "object",
    "string",
    "typeOf",
    "containsString",
    "emailAddress",
    "endsWith",
    "equalIgnoringCase",
    "matches",
    "startsWith"
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

### Setup expectations on your mocks - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.when)
```javascript
var employeeMock = mock(DS.Model);
when(employeeMock).get('name').thenReturn('jack');
equal('jack',employeeMock.get('name'));
```

### Mock functions - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.mockFunction)
```javascript
var mockedFunc = mockFunction();
```

### Verify function execution - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.verify)
var employeeMock = mock(DS.Model);
employeeMock.get('name');
verify(employeeMock).get("name");

### Verify function execution - [docs](http://jsmockito.org/api/1.0.4/symbols/JsMockito.html#.verify)
```javascript
var mockedFunc = mockFunction();
mockedFunc('hello world');
verify(mockedFunc)('hello world');
```

* Visit [JsMockito](http://jsmockito.org/api/1.0.4/) for more information about mocking.
* Visit [JsHamcrest](http://danielmartins.ninja/jshamcrest) for more information about the matching.
