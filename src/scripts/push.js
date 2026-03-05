const { execSync } = require('child_process');

const args = process.argv.slice(2);

const branch = args.pop() || 'main';
const message = args.join(' ') || 'update';

try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
} catch (err) {
    process.exit(1);
}