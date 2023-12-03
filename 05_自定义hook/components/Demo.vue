<template>
  X:{{ coordinate.x }}
  Y:{{ coordinate.y }}
</template>

<script>
import useCoordinate from '@/hooks/useCoordinate';
  export default {
    name:'Demo',
    setup() {
      let coordinate = useCoordinate()

      return {
        coordinate
      }
    }
  }
</script>
