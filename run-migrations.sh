#!/bin/bash
# Migrations
echo "#################################";
echo "######## Run migrations... ######";
echo "#################################";
docker-compose exec bot-telegram-server node_modules/.bin/sequelize db:migrate
echo "#################################";
echo "########### Finished ###########";
echo "#################################";