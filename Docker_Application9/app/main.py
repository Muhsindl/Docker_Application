from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

# Veritabanı bağlantısı
def get_db_connection():
    conn = psycopg2.connect(
        host="db",
        database="todo_db",
        user="postgres",
        password="postgres"
    )
    return conn

@app.route("/")
def home():
    return jsonify({"message": "Docker Compose ile Flask API çalışıyor!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
