export async function onRequest(context) {
  const { request, redirect } = context;
  const url = new URL(request.url);

  if (url.pathname !== '/') {
    return context.next();
  }

  const country = request.cf?.country || '';

  if (['DE', 'AT', 'CH', 'LI'].includes(country)) {
    return redirect('/de/', 302);
  }

  return redirect('/en/', 302);
}
