window.onload = function() {  
    const car = document.getElementById('car');  

    // 使汽车缓慢移动  
    let position = -120; // 初始位置  
    function moveCar() {  
        position += 2; // 每次增加的位移  
        car.style.left = position + 'px'; // 更新汽车的位置  

        // 当汽车移出视图时，重置位置  
        if (position > window.innerWidth) {  
            position = -120; // 重置到左侧最外边  
        }  
        requestAnimationFrame(moveCar); // 继续下一帧动画  
    }  

    moveCar(); // 开始移动  
};