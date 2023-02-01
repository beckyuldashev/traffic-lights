let currentLightIndex = 0;

function switchLight(trafficLights) {
  trafficLights.forEach(light => {
    light.classList.remove('active');
  })

  currentLightIndex++;

  if (currentLightIndex > 2) {
    currentLightIndex = 0;
  }

  trafficLights[currentLightIndex].classList.add('active')

}

function initLight(node) {
  node.classList.add('active');
}