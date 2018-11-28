<script>
export default {
  name: 'learnform',
	fetch ({ params, redirect }) {
    redirect(301, `https://docs.google.com/forms/d/11UqHjflrXdxWouMLOv9K3WmxQo6GzbC7GBWLcqOwJVw/viewform?edit_requested=true`)
  }
}
</script>