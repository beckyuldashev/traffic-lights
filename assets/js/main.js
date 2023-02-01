const btnSwitchLight = document.querySelector('.switch-lights');
const trafficLightsNode = document.querySelectorAll('.traffic-light');

initLight(trafficLightsNode[0]);

btnSwitchLight.addEventListener('click', () => {
  switchLight(trafficLightsNode);
});