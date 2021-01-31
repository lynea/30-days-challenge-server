to start the app : npx ts-node src/index.ts

to start the db: docker-compose up -d

migration command : npx prisma migrate dev --name "init" --preview-feature

seed DB : npx ts-node prisma/seed.ts
# 30_days_challenges_server
