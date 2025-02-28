# Base image olarak Alpine kullanılıyor
FROM alpine:3.14

# Ping komutu için gerekli paketleri kuruyoruz
RUN apk update && apk upgrade && apk add --no-cache iputils

# Ping komutunu çalıştırmak için ENTRYPOINT ve CMD ayarlanıyor
ENTRYPOINT [ "ping" ]
CMD ["mehmetakif.edu.tr"]
