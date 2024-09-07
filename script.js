function updateSkillProgress(skill, percent) {
    const progressBar = document.getElementById(skill + 'Progress').querySelector('div');
    
    
    let currentWidth = parseInt(progressBar.style.width, 10) || 0;

   
    const targetWidth = percent;

   
    const animationSpeed = 10; 

    function animate() {
        if (currentWidth < targetWidth) {
            currentWidth++;
            progressBar.style.width = currentWidth + '%';
            setTimeout(animate, animationSpeed);
        }
    }

    animate();
}

// beceri puanları
updateSkillProgress('mysql', 100); 
updateSkillProgress('python', 90); 
updateSkillProgress('dotnetCore', 90); 
updateSkillProgress('csharp', 90); 
updateSkillProgress('html', 80); 
updateSkillProgress('javascript', 80); 
updateSkillProgress('nodejs', 75); 
updateSkillProgress('arduino', 75);
updateSkillProgress('c', 65); 
updateSkillProgress('java', 55); 


document.querySelectorAll('.container .left_side, .container .right_side').forEach(element => {
    element.addEventListener('mouseover', function() {
        // imleçle üstüne gelince 
        element.style.transform = 'scale(1.1)'; // büyüt
        element.style.transition = 'transform 0.3s ease'; // animasyon süresi
    });

    element.addEventListener('mouseout', function() {
        // imleç üzerinden çıkınca
        element.style.transform = 'scale(1)'; // boyutu normale çevir
    });
});

// arkaplan rengi değiştirme
let backgroundColors = ["rgb(161, 194, 205)", "#003147"]; 
let index = 0; 

function changeBackgroundAndBoxColor() {
    document.body.style.transition = "background-color 2s ease"; 
    document.body.style.backgroundColor = backgroundColors[index]; 

    let leftSide = document.querySelector('.container .left_side');
    leftSide.style.transition = "background-color 2s ease"; 

  
    index++;
    if (index >= backgroundColors.length) {
        index = 0; 
    }

    
    setTimeout(function() {
        leftSide.style.backgroundColor = backgroundColors[index];
    }, 0); 
}


setInterval(changeBackgroundAndBoxColor, 5000); 

 
