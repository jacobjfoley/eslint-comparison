#!/bin/bash

# Extract configuration for each eslint config.
(cd ./src/configs/airbnb && npx eslint --print-config .eslintrc.js > ../../data/airbnb.json)
(cd ./src/configs/eslint && npx eslint --print-config .eslintrc.js > ../../data/eslint.json)
(cd ./src/configs/react && npx eslint --print-config .eslintrc.js > ../../data/react.json)