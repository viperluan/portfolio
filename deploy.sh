#!/bin/bash

set -e

# Font Colors
RED="31"
GREEN="32"
NORMALRED="\e[31m"
NORMALGREEN="\e[32m"
BOLDGREEN="\e[1;${GREEN}m"
BOLDRED="\e[1;${RED}m"
ENDCOLOR="\e[0m"

# Docker Image
DOCKERHUB_USERNAME="viperluan"
DOCKER_IMAGE_NAME="portfolio-luan"
DOCKER_IMAGE_TAG="latest"

# Production credentials
SERVER_USER="root"
SERVER_HOST="185.173.110.126"
COMPOSE_FILE_PATH="/home/lcs-solucoes/portfolio/docker-compose.yml"

# Build the Docker image
build() {
  echo -e "${BOLDGREEN} Building the Docker image... ${ENDCOLOR}"

  docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} --build-arg BUILD_CMD=build . --no-cache
}

# Push the Docker image to Registry
image_push() {
  echo -e "${BOLDGREEN} Pushing the Docker image... ${ENDCOLOR}"

  docker push ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}
}

docker_compose() {
  echo -e "${BOLDGREEN} Down the docker compose stack ${ENDCOLOR}"
  ssh ${SERVER_USER}@${SERVER_HOST} "docker compose -f ${COMPOSE_FILE_PATH} down -v"

  echo -e "${BOLDGREEN} Remove the Docker image from the server ${ENDCOLOR}"
  ssh ${SERVER_USER}@${SERVER_HOST} "docker image rm ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"

  echo -e "${BOLDGREEN} Up the docker stack ${ENDCOLOR}"
  ssh ${SERVER_USER}@${SERVER_HOST} "docker compose -f ${COMPOSE_FILE_PATH} up -d"
}

# Deploy the Docker stack to Stage Server
deploy() {
  echo -e "${BOLDGREEN} Running deploy... ${ENDCOLOR}"

  build

  image_push

  docker_compose

  echo -e "${NORMALGREEN} Finished! ${ENDCOLOR}"
}

deploy
