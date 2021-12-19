import { test, testUpdate } from '@almaclaine/npm-scripts';
const { argv: { [2]: option } } = process;

if (option === 'update') {
    testUpdate();
} else {
    test();
}
