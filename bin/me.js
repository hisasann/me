#!/usr/bin/env node

'use strict';

import * as fs from 'fs';
import * as path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8');
console.log(output);
