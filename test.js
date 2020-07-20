const URL = "https://raw.githubusercontent.com/nfcnepal/nfcnepaldata/master/test.json"
fetch(URL)
  .then(response => response.json())
  .then(data => {
    gwEle = document.getElementById("gw")
    pointsEle = document.getElementById("points")
    gwEle.innerHTML(data['Gameweek'])
    pointsEle.innerHTML(data['Points')
  })
  .catch(error => console.error(error))
