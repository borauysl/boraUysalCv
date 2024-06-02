function updateSkillProgress(skill, percent) {
    const progressBar = document.getElementById(skill + 'Progress').querySelector('div');
    
    // Mevcut genişlik
    let currentWidth = parseInt(progressBar.style.width, 10) || 0;

    // Hedef genişlik
    const targetWidth = percent;

    // Animasyon hızı (milisaniye cinsinden)
    const animationSpeed = 10; 

    // Hedef genişliğe ulaşana kadar animasyonla genişliği artır
    function animate() {
        if (currentWidth < targetWidth) {
            currentWidth++;
            progressBar.style.width = currentWidth + '%';
            setTimeout(animate, animationSpeed);
        }
    }

    animate();
}

// Her beceri için belirli beceri seviyelerini belirli aralıklarla güncelleyin
updateSkillProgress('html', 80); // Html becerisi için yüzde 80'lik bir seviye
updateSkillProgress('css', 60);
updateSkillProgress('csharp', 85);
updateSkillProgress('c', 75);
updateSkillProgress('python', 90);
updateSkillProgress('mysql', 85);


document.querySelectorAll('.container .left_side, .container .right_side').forEach(element => {
    element.addEventListener('mouseover', function() {
        // Fare öğenin üzerine geldiğinde boyutunu veya rengini değiştirin
        element.style.transform = 'scale(1.1)'; // Öğe boyutunu büyüt
        element.style.transition = 'transform 0.3s ease'; // Animasyon süresi ve geçiş türü
    });

    element.addEventListener('mouseout', function() {
        // Fare öğenin üzerinden çıktığında boyutunu veya rengini eski haline getirin
        element.style.transform = 'scale(1)'; // Öğe boyutunu normal boyuta döndür
    });
});

// Arka plan rengini ve sol kutunun rengini değiştiren bir animasyon
let backgroundColors = ["rgb(161, 194, 205)", "#003147"]; // Arka planın geçiş yapacağı renkler
let index = 0; // Başlangıç renk indeksi

function changeBackgroundAndBoxColor() {
    // Arka plan rengini değiştir
    document.body.style.transition = "background-color 2s ease"; // Animasyon süresi ve geçiş türü
    document.body.style.backgroundColor = backgroundColors[index]; // Arka plan rengini değiştir

    let leftSide = document.querySelector('.container .left_side');
    leftSide.style.transition = "background-color 2s ease"; // Animasyon süresi ve geçiş türü

    // Sonraki renge geçmek için indeksi arttır
    index++;
    if (index >= backgroundColors.length) {
        index = 0; // Renklerin sonuna gelindiğinde başa dön
    }

    // Sol kutunun rengini aynı anda arka plan rengiyle değiştir
    setTimeout(function() {
        leftSide.style.backgroundColor = backgroundColors[index]; // Sol kutunun rengini değiştir
    }, 0); // Sol kutunun rengini 0 milisaniye geciktirerek aynı anda değiştirmek için
}

// Belirli bir süre aralığıyla arka plan rengini ve sol kutunun rengini değiştirmek için bir zamanlayıcı kullan
setInterval(changeBackgroundAndBoxColor, 5000); 
// Belirli bir süre aralığıyla arka plan rengini ve sol kutunun rengini değiştirmek için bir zamanlayıcı kullan
 // 10000 milisaniye (10 saniye) aralıklarla arka plan rengini ve sol kutunun rengini değiştir
