#!/bin/bash
set -e
docker-compose exec backend python /app/app/scripts/preseed_users.py
