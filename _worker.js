export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const country = request.cf?.country || '';
      const target = ['DE', 'AT', 'CH', 'LI'].includes(country) ? '/de/' : '/en/';
      return Response.redirect(url.origin + target, 302);
    }

    return env.ASSETS.fetch(request);
  }
};
