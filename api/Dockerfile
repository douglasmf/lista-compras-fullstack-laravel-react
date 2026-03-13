FROM php:8.2-cli

WORKDIR /app

# instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libsqlite3-dev \
    sqlite3 \
    && docker-php-ext-install zip pdo pdo_sqlite

# instalar composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# copiar projeto
COPY . .

# instalar dependências do laravel
RUN composer install --no-dev --optimize-autoloader

# garantir banco sqlite
RUN mkdir -p /app/database && touch /app/database/database.sqlite

# permissões necessárias
RUN chmod -R 775 storage bootstrap/cache database

# rodar migrations
RUN php artisan migrate --force

# limpar e gerar cache
RUN php artisan config:clear \
 && php artisan route:clear \
 && php artisan config:cache

# porta usada pelo Render
EXPOSE 10000

# iniciar servidor
CMD php artisan serve --host=0.0.0.0 --port=10000