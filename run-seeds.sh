#!/bin/bash
# Migrations
echo "#################################";
echo "######## Run migrations... ######";
echo "#################################";
docker-compose exec bot-telegram-server node_modules/.bin/sequelize db:seed:all
echo "#################################";
echo "########### Finished ###########";
echo "#################################";