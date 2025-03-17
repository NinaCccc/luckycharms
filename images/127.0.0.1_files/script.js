let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-qGaN6rt9f-qvonJvID88SKLs1Y1gq3Aw4ZdbLMH-YCbWRe7PJPA2wL_M-w858dl-LO9wyYgDcx6H/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
  component.classList.add("charm-component1")

  let name = document.createElement("div") 
  name.textContent = row.name
  name.classList.add("name")

  let image = document.createElement("img")
  image.src = "images/" + row.image
  image.classList.add("FourLeafClover")

  component.append(name)
  component.append(image)
  main.append(component)
}