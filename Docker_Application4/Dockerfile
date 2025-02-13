FROM ubuntu:20.04

# Gerekli paketleri yükle
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y nginx

# Çalışma dizini olarak Nginx'in web root dizinini belirle
WORKDIR /usr/share/nginx/html/

# Mevcut dizindeki tüm dosyaları container içine kopyala
COPY . .

# Nginx servisinin başlamasını sağla
CMD ["nginx", "-g", "daemon off;"]
