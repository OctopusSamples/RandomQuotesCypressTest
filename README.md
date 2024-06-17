Run this script in a container image based on this `Dockerfile`:

```
FROM cypress/included:9.7.0
RUN apt-get update; \
    apt-get install -y libicu67
RUN npm install -g inline-assets
```

This script runs the test:

```bash
cd EndToEndTest
cypress run > output.txt
RESULT=$?

if [[ -f mochawesome.html ]]
then
    inline-assets \
        mochawesome.html selfcontained.html
    new_octopusartifact \
        "${PWD}/selfcontained.html" "selfcontained.html"
fi

if [[ -d cypress/screenshots/sample_spec.js ]]
then
    zip -r \
        screenshots.zip \
        cypress/screenshots/sample_spec.js
    new_octopusartifact \
        "${PWD}/screenshots.zip" "screenshots.zip"
fi

exit ${RESULT}
```
