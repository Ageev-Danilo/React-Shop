const { execSync } = require('child_process');

const args = process.argv.slice(2);

let branch = 'main';
const messageParts = [];

for (const arg of args) {
    if (arg.startsWith('--')) {
        branch = arg.slice(2);
    } else {
        messageParts.push(arg);
    }
}

const message = messageParts.join(' ') || 'update';

try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
} catch {
    process.exit(1);
}