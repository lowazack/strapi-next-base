# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.231.2/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

ARG COMPOSE_PROJECT_NAME

RUN mkdir -p "/workspace/$COMPOSE_PROJECT_NAME/node_modules" && chown -R node "/workspace/$COMPOSE_PROJECT_NAME/node_modules" && \
    mkdir -p "/workspace/$COMPOSE_PROJECT_NAME/apps/frontend/node_modules" && chown -R node "/workspace/$COMPOSE_PROJECT_NAME/apps/frontend/node_modules" && \
    mkdir -p "/workspace/$COMPOSE_PROJECT_NAME/apps/backend/node_modules" && chown -R node "/workspace/$COMPOSE_PROJECT_NAME/apps/backend/node_modules"
