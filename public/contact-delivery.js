// Provider-specific delivery is isolated from the dialog and form UI.
export async function deliverContact(endpoint, payload, {fetchImpl=fetch, timeoutMs=20000}={}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const result = await response.json();
    // An activation response is not confirmation that the visitor's email arrived.
    if (response.ok && /activat|confirm.*email|verify.*email/i.test(result.message || '')) return 'activation-required';
    if (!response.ok || !(result.success === true || result.success === 'true')) throw new Error('Submission rejected');
    return 'accepted';
  } finally {
    clearTimeout(timeout);
  }
}
