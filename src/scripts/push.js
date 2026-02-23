const { execSync } = require('child_process');

const message = process.argv.slice(2).join(' ') || 'update';

try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
} catch (err) {
    process.exit(1);
}