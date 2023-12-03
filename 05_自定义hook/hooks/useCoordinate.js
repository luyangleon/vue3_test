import { onBeforeUnmount, onMounted, reactive } from 'vue'
export default function() {
  let coordinate = reactive({
    x: 0,
    y: 0
  })

  function getCoordinate(event) {
    coordinate.x = event.pageX
    coordinate.y = event.pageY
  }

  onMounted(() => {
    window.addEventListener('click', getCoordinate)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', getCoordinate)
  })

  return coordinate
}