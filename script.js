<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mırmır Savaşları - Kedi Kart Oyunu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1>🐾 Mırmır Savaşları 🐾</h1>
        
        <!-- Lobi Alanı -->
        <div id="lobby" class="card">
            <h2>Oda İşlemleri</h2>
            <button onclick="createRoom()">Oda Kur</button>
            <br><br>
            <input type="text" id="roomCodeInput" placeholder="Oda Kodu Gir">
            <button onclick="joinRoom()">Odaya Katıl</button>
        </div>

        <!-- Oyun Alanı (Başlangıçta gizli) -->
        <div id="game-area" class="hidden">
            <div class="stats-bar">
                <span>Oda Kodu: <strong id="display-room">-</strong></span>
                <br>
                <span>Rakip Canı (HP): <strong id="opponent-hp">100</strong></span> | 
                <span>Senin Canın (HP): <strong id="my-hp">100</strong></span>
            </div>

            <h3>Karatını Seç!</h3>
            <div class="battlefield">
                <div class="card-item" onclick="playCard('Kızgın Mırmır', 35, 10)">
                    <h3>Kızgın Mırmır</h3>
                    <p>Güç: 35</p>
                    <p>Öfke Tırnağı</p>
                </div>
                <div class="card-item" onclick="playCard('Tembel Tıfıl', 15, 30)">
                    <h3>Tembel Tıfıl</h3>
                    <p>Güç: 15</p>
                    <p>Sert Kabuk</p>
                </div>
            </div>

            <div id="log" class="card">Oda bekleniyor...</div>
        </div>
    </div>

    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>
    <script src="script.js"></script>
</body>
</html>
