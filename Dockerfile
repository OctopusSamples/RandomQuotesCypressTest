FROM cypress/included:6.4.0
RUN apt-get update; apt-get install -y libicu63
RUN npm install -g inline-assets
ENTRYPOINT []