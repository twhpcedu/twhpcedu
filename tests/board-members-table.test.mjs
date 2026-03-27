import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const source = readFileSync(
  new URL('../src/components/BoardMembersTable.astro', import.meta.url),
  'utf8'
);

assert.match(
  source,
  /board-member-cell--indicator/,
  'Expected expandable rows to render a trailing indicator cell.'
);

assert.match(
  source,
  /board-member-row--expandable/,
  'Expected expandable rows to expose a distinct row-level interactive state.'
);

assert.doesNotMatch(
  source,
  /board-member-toggle__label/,
  'Expected the name capsule styling to be removed.'
);

assert.doesNotMatch(
  source,
  /board-member-toggle__chevron/,
  'Expected the leading chevron indicator to be removed from the name button.'
);
