import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('unverified donation page is not published', () => {
  assert.equal(
    existsSync(new URL('../src/pages/donate.astro', import.meta.url)),
    false,
    'The donation page must stay unpublished until its financial and legal details are approved.'
  );
});

test('contact details do not contain known placeholders or the misspelled domain', () => {
  const sources = [
    read('src/pages/contact.astro'),
    read('src/pages/join-us.astro'),
    read('src/components/Footer.astro'),
  ].join('\n');

  assert.doesNotMatch(sources, /twhcpedu\.org/);
  assert.doesNotMatch(sources, /XXXX/);
  assert.doesNotMatch(sources, /123-456-789012/);
  assert.doesNotMatch(sources, /donate@acal\.org\.tw/);
});

test('contact page offers a real email action instead of an inert form', () => {
  const source = read('src/pages/contact.astro');

  assert.match(source, /mailto:contact@twhpcedu\.org/);
  assert.doesNotMatch(source, /<form\b/);
});

test('site layout has localized metadata and a favicon', () => {
  const source = read('src/layouts/Layout.astro');

  assert.match(source, /lang="zh-Hant"/);
  assert.match(source, /name="description" content=\{description\}/);
  assert.equal(existsSync(new URL('../public/favicon.svg', import.meta.url)), true);
});
