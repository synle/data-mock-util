# data-mock-util
This util provide basic functionality to mock basic entity


## Install
```
  npm install --save git+https://github.com/synle/data-mock-util.git
```

## Use
```
  const dataMockUtil = require('data-mock-util');
  
  dataMockUtil.getRandomItem(list)
  dataMockUtil.getRandomPosInteger(max)
  dataMockUtil.getRandomFromRange(min, max)
  dataMockUtil.getRandomPhoneNumber()
  dataMockUtil.getRandomZipCode()
  dataMockUtil.getRandomDateObject(dayDelta, hourDelta)
```
