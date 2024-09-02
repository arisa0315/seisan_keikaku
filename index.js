const express = require('express');
const app = express();
const db = require('./config/db');

// ミドルウェアの設定
app.use(express.json());

// サンプルのルート
app.get('/', (req, res) => {
  res.send('生産計画アプリへようこそ');
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
