docker pull muhsindolu/ping-tester:latest             -> DockerHUB üzerinden image çekebiliriz

docker build -t ping-tester .                         -> Dockerfile dosyasından image oluşturur (isteğe bağlı)
docker run muhsindolu/ping-tester:latest              -> Varsayılan web sitesine ping atar
docker run muhsindolu/ping-tester:latest google.com   -> google.com web sitesine ping atar
