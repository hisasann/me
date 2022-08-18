import boxen from 'boxen';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
};
const data = {
    name: chalk.white('hisasann'),
};
const output = data.name;
console.log(chalk.green(boxen(output, options)));
fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)));
