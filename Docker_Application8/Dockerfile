# Apache ve PHP'nin yüklü olduğu resmi Docker imajı
FROM php:8.2-apache

# MySQL bağlantısı için gerekli PHP eklentisini yükle
RUN docker-php-ext-install mysqli

# Uygulama dosyalarını Apache'nin root dizinine kopyala
COPY app/ /var/www/html/

# Apache’nin çalışacağı portu bildir
EXPOSE 80
