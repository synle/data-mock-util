# data-mock-util
This util provide basic functionality to mock basic entity


## Install
```
  npm install --save git+https://github.com/synle/data-mock-util.git

  npm install --save data-mock-util@1.0.0
```

## Use
```
  // include
  const mockDataUtil = require('data-mock-util');


  // to use
  mockDataUtil.getItem(list)
  mockDataUtil.getPositiveInteger(max)
  mockDataUtil.getInteger(min, max)
  mockDataUtil.getPhoneNumber()
  mockDataUtil.getZipCode()
  mockDataUtil.getDateObject(dayDelta, hourDelta)
  mockDataUtil.getNameWord()
  mockDataUtil.getPersonFullName()
  mockDataUtil.getCity()
  mockDataUtil.getEmail()
```
