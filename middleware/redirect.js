function fixRedirect (ctx) {
  const _redirect = ctx.redirect
  ctx.redirect = function (status, path, query) {
    // If only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || typeof path === 'object')) {
      query = path || {}
      path = status
      status = 302
    }
    path = addQuery(path, query)
    if (!isAbsolute(path)) {
      _redirect(status, path)
    } else if (ctx.isServer && ctx.res) {
      ctx.res.setHeader('Location', path)
      ctx.error({ statusCode: status, message: `Redirecting to ${path}` })
    } else if (ctx.isClient && window && window.location) {
      window.location.replace(path)
      // This doesn’t seem to be necessary in more recent builds of Nuxt
      // ctx.error({ statusCode: status, message: `Redirecting to ${path}` })
    }
  }
}