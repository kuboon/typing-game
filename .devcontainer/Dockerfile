ARG VARIANT=bookworm
FROM mcr.microsoft.com/devcontainers/base:${VARIANT}

USER vscode
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL=/home/vscode/.deno
ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
