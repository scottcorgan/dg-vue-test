<script>
import search from './icons/search.vue'
import chevronUp from './icons/chevron-up.vue'
import chevronDown from './icons/chevron-down.vue'
import burger from './icons/burger.vue'

export default {
  props: ['type', 'open'],
  components: {
    'chevron-up': chevronUp,
    'chevron-down': chevronDown,
    burger,
    search
  },
  render(h) {
    return h(this.type, {
      props: this
    })
  }
}
</script>
