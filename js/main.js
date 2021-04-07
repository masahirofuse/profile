'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    targetNode.classList.toggle('my-color');
  });
}

{
  const img_src = ["img/DSC_1381.JPG", "img/DSC_1401.JPG", "img/DSC_1417.JPG", "img/DSC_1408.JPG"];
  let num = -1;

  function slide_time() {
    if(num === 3) {
      num = 0;
    } else {
      num ++;
    }
    document.getElementById("slide_img").src = img_src[num];
  }

  setInterval(slide_time, 2000);
}