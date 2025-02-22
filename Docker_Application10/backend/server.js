const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;  // Portu 8080 yapıyoruz
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

// MongoDB Bağlantısı
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Bağlantısı Başarılı"))
  .catch(err => console.error("❌ MongoDB Bağlantı Hatası:", err));

// Basit User Modeli
const User = mongoose.model("User", new mongoose.Schema({ name: String }));

// Anasayfa
app.get("/", (req, res) => {
  res.send("Merhaba, Docker!");
});

// Kullanıcıları Listeleme
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Sunucuyu Başlat
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda çalışıyor...`);
});
