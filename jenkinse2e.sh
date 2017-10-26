#!/bin/bash

echo "0000"
webdriver-manager update --standalone false --gecko false
echo "111111"
nohup bash -c "webdriver-manager start 2>&1 &" && sleep 9s
echo "22222"
nohup bash -c "ionic serve --address localhost -b 2>&1 &" && sleep 9s
echo "333333"
protractor ./test-config/protractor.conf.js