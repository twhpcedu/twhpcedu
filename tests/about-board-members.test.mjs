import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const aboutSource = readFileSync(
  new URL('../src/pages/about.astro', import.meta.url),
  'utf8'
);
const tableSource = readFileSync(
  new URL('../src/components/BoardMembersTable.astro', import.meta.url),
  'utf8'
);

assert.match(
  aboutSource,
  /BoardMembersTable members=\{boardMembers\}/,
  'Expected the about page to render the shared board members table component.'
);

assert.match(
  tableSource,
  /board-member-cell--indicator/,
  'Expected expandable rows to render a trailing indicator cell.'
);

assert.match(
  tableSource,
  /data-board-members-table/,
  'Expected the board members section to use the interactive table wrapper.'
);

assert.doesNotMatch(
  tableSource,
  /activateMember\(resolvedDefaultId\)/,
  'Expected the board members table to start fully collapsed.'
);
