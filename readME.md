# tablelarni yaratish uchun

npx knex migrate:latest

# tablelarni ochrisih uchun

npx knex migrate:rollback

#uuid shunaqa qilib qo'yilar
table.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary()
