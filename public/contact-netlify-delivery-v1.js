export async function deliverContact(endpoint, payload, { fetchImpl = fetch, timeoutMs = 20000 } = {}) {
  if (endpoint !== '/') throw new Error('Unexpected form endpoint');
  if (!payload['form-name']) throw new Error('Missing form name');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(payload).toString(),
      signal: controller.signal
    });
    if (!response.ok) throw new Error('Submission rejected: HTTP ' + response.status);
    if (response.url && new URL(response.url).origin !== location.origin) {
      throw new Error('Submission redirected outside the site');
    }
    return 'accepted';
  } finally {
    clearTimeout(timeout);
  }
}
