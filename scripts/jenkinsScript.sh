#!/bin/bash

ionic-app-scripts build
karma start ./test-config/karma.conf.js --debug
