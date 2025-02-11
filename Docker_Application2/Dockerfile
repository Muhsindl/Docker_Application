FROM ubuntu:latest
LABEL maintainer="Muhsin DOLU <muhsindolu06@gmail.com>"

# Paket listelerini güncelle ve Nginx yükle
RUN apt-get update && apt-get install -y nginx

# index.html dosyasını kopyala
COPY index.html /var/www/html/

EXPOSE 80

# Nginx'i foreground modda çalıştır
ENTRYPOINT ["nginx", "-g", "daemon off;"]
