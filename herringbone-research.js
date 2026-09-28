const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mixingDiagrams = document.getElementById('mixing-diagrams');
const mixingToggle = document.getElementById('mixingToggle');
const mixingStatus = document.getElementById('mixingStatus');

function setMixingPlayback(playing) {
  mixingDiagrams.classList.toggle('is-playing', playing);
  mixingToggle.textContent = playing ? 'Pause schematic' : 'Play schematic';
  mixingStatus.textContent = reducedMotion.matches
    ? 'Static view. Animation is disabled by your reduced-motion preference.'
    : playing ? 'Playing illustrative flow and mixing; not simulation data.' : 'Paused. Static paths remain visible.';
}
function updateMixingPreference() {
  mixingToggle.disabled = reducedMotion.matches;
  setMixingPlayback(false);
}
mixingToggle.addEventListener('click', () => {
  setMixingPlayback(!reducedMotion.matches && !mixingDiagrams.classList.contains('is-playing'));
});
reducedMotion.addEventListener('change', updateMixingPreference);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) setMixingPlayback(false);
});
updateMixingPreference();
