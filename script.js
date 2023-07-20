window.onload = () => {
    let button = document.querySelector("#btn");
 
    
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    let height = parseInt(document
            .querySelector("#height").value);

    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let age = parseInt(document
            .querySelector("#age").value);
    
    let result = document.querySelector("#result");
 
    
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
  
    else if (age === "" || isNaN(age)) 
      result.innerHTML = 'Provide a valid age!';
 
    
    else {
   
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
 
        
      if (bmi < 18.5) result.innerHTML = `<b>Kekurangan berat badan : <span>${bmi}</span></b> <br> Anda berada dalam kategori kekurangan berat badan. 
      <br>
      Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan`; 
    
      else if (bmi >= 18.5 && bmi < 24.9)
            result.innerHTML =
                `<b>Normal (ideal) : <span>${bmi}</span></b> <br> Anda berada dalam kategori berat badan yang normal. <br>
Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.`;
 
      else if (bmi >= 25.0 && bmi < 29.9)
            result.innerHTML =
                `<b>Kelebihan berat badan : <span>${bmi}</span></b> <br> Anda berada dalam kategori overweight atau berat badan berlebih.
Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br>
Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`;
      
      else result.innerHTML =
            `<b>Kegemukan (obesitas) : <span>${bmi}</span></b> <br> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.
<br>
Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.`;
    }
}
