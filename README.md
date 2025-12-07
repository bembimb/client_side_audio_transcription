# [Frontend Vite Template](https://github.com/europanite/frontend_vite_template "Frontend Vite Template")

[![CI](https://github.com/europanite/frontend_vite_template/actions/workflows/ci.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/ci.yml)
[![docker](https://github.com/europanite/frontend_vite_template/actions/workflows/docker.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/docker.yml)
[![pages](https://github.com/europanite/frontend_vite_template/actions/workflows/pages.yml/badge.svg)](https://github.com/europanite/frontend_vite_template/actions/workflows/pages.yml)

 [PlayGround](https://europanite.github.io/frontend_vite_template/)

A Client Side Vite Template.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash

# Build the image
docker compose build

# Run the container
docker compose up

```

### 3. Test:
```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

# License
- Apache License 2.0