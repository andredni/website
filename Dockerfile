FROM ghcr.io/anomalyco/opencode

# System packages (Alpine)
RUN apk add --no-cache curl github-cli jq bash

# Install Bun runtime
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Git config
RUN git config --global user.name "andredni ai-agent" && \
    git config --global user.email "ai-agent@daniel-andres.com"

# Working directory auf workspace
WORKDIR /workspace


# Copy rest
COPY . .