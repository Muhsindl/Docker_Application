FROM php:8.1-apache

# Gerekli PHP eklentilerini yükle
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Çalışma dizini olarak /var/www/html'yi belirle
WORKDIR /var/www/html

# 8080 portunu kullan
EXPOSE 8080

# Apache'yi başlat
CMD ["apache2-foreground"]
