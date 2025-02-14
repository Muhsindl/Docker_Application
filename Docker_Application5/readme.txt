docker pull muhsindolu/node-app:0.1                 -> 0.1 versiyonunu çeker
docker pull muhsindolu/node-app:0.2                 -> 0.2 versiyonunu çeker

docker run -d -p 3000:3000 muhsindolu/node-app:0.2  -> Çalıştırmak için eğer image çekmediysen hem çeker hem çalıştırır

*Not: latest versiyonu bulunmamaktadır bu sebeple versiyon bildirmeniz zorunludur