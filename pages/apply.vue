<script>
//to be used as an example of link forwarding
export default {
  name: 'apply',
	fetch ({ params, redirect }) {
    redirect(301, `https://docs.google.com/forms/d/e/1FAIpQLSebzNDbnObFLio9IGbmPhUt7xDxV6f42ODqkq5D0EltjDK7tQ/viewform?usp=sf_link`)
  }
}
</script>