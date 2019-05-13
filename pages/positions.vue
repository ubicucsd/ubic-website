<script>
//to be used as an example of link forwarding
export default {
  name: 'positions',
	fetch ({ params, redirect }) {
    redirect(301, `https://docs.google.com/document/d/1d8Py2R2xfmUVdw3wNL1Azy9b8NviyGYLavmsP_ZlEEw/edit?usp=sharing`)
  }
}
</script>