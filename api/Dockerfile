FROM php:8.2-cli

WORKDIR /app

# instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip

# instalar composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# copiar projeto
COPY . .

# instalar dependências do laravel
RUN composer install --no-dev --optimize-autoloader

# expor porta
EXPOSE 10000

# iniciar servidor
CMD php artisan serve --host=0.0.0.0 --port=10000