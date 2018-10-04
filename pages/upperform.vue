<script>
export default {
  name: 'upperform',
  fetch ({ params, redirect }) {
    redirect(301, `https://docs.google.com/forms/d/e/1FAIpQLSdpgtDs6N6t7bmeHS2DnZMCzwdzUe_YLJxeXAejsZXk-Apkcg/viewform?usp=sf_link`)
  }
}
</script>