<script>
export default {
  name: 'pubform',
	fetch ({ params, redirect }) {
    redirect(301, `https://docs.google.com/forms/d/e/1FAIpQLSd-W9Hyz7zIqq5g21U8aroLp2bGTA2EZvU8KsMU-bPpcuU0mQ/viewform?usp=sf_link`)
  }
}
</script>