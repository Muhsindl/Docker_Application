const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;  // Portu 8080 olarak ayarlıyoruz
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongodb:27017/mydatabase";  // MongoDB URI

// MongoDB Bağlantısı
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Bağlantısı Başarılı"))
  .catch(err => console.error("❌ MongoDB Bağlantı Hatası:", err));

// Basit bir User Modeli
const User = mongoose.model("User", new mongoose.Schema({ name: String, age: Number }));

// Middleware: JSON verilerini alabilmek için
app.use(express.json());

// Kullanıcıları Listeleme
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu" });
  }
});

// Yeni Kullanıcı Ekleme
app.post("/users", async (req, res) => {
  try {
    const { name, age } = req.body;  // Post isteğiyle gelen veriler
    const newUser = new User({ name, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Yeni kullanıcı eklenirken bir hata oluştu" });
  }
});

// Anasayfa
app.get("/", (req, res) => {
  res.send("Merhaba, Docker API!");
});

// Sunucuyu Başlat
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda çalışıyor...`);
});
