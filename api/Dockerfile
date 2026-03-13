FROM php:8.2-cli

# diretório da aplicação
WORKDIR /var/www

# instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    sqlite3 \
    && docker-php-ext-install zip pdo pdo_sqlite

# instalar composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# copiar arquivos do projeto
COPY . .

# instalar dependências do laravel
RUN composer install --no-dev --optimize-autoloader

# garantir permissões necessárias
RUN chmod -R 775 storage bootstrap/cache

# criar banco sqlite se não existir
RUN mkdir -p database && touch database/database.sqlite

# otimizações do laravel
RUN php artisan config:clear
RUN php artisan route:clear
RUN php artisan config:cache

# rodar migrations
RUN php artisan migrate --force

# porta usada pelo render
EXPOSE 10000

# iniciar servidor
CMD php artisan serve --host=0.0.0.0 --port=10000