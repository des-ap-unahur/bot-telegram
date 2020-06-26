#!/bin/bash
# Migrations
echo "#################################";
echo "##### Corriendo migraciones #####";
echo "#################################";
docker-compose exec bot-telegram-server node_modules/.bin/sequelize db:migrate
echo "#################################";
echo "########### terminado ###########";
echo "#################################";