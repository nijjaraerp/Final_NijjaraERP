/**
 * Browser Testing Environment - Setup Verification
 * Verifies all components are properly installed and configured
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..', '..');

class SetupVerifier {
  constructor() {
    this.checks = [];
    this.passed = 0;
    this.failed = 0;
  }

  check(name, testFn) {
    try {
      const result = testFn();
      if (result) {
        this.checks.push({ name, status: '✅ PASS', details: result });
        this.passed++;
      } else {
        this.checks.push({ name, status: '❌ FAIL', details: 'Check failed' });
        this.failed++;
      }
    } catch (error) {
      this.checks.push({ name, status: '❌ FAIL', details: error.message });
      this.failed++;
    }
  }

  verifyFile(filePath) {
    return fs.existsSync(filePath);
  }

  verifyDirectory(dirPath) {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  }

  run() {
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║   Browser Testing Environment - Setup Verification        ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    // Check core scripts
    this.check('launch-browser.js exists', () =>
      this.verifyFile(path.join(rootDir, 'scripts', 'browser-testing', 'launch-browser.js'))
    );

    this.check('agent-protocol.js exists', () =>
      this.verifyFile(path.join(rootDir, 'scripts', 'browser-testing', 'agent-protocol.js'))
    );

    this.check('deployment-reporter.js exists', () =>
      this.verifyFile(path.join(rootDir, 'scripts', 'browser-testing', 'deployment-reporter.js'))
    );

    this.check('version-control.js exists', () =>
      this.verifyFile(path.join(rootDir, 'scripts', 'browser-testing', 'version-control.js'))
    );

    this.check('test-cli.js exists', () =>
      this.verifyFile(path.join(rootDir, 'scripts', 'test-cli.js'))
    );

    // Check logs directory
    this.check('logs directory exists', () => {
      const logsDir = path.join(rootDir, 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
        return true;
      }
      return this.verifyDirectory(logsDir);
    });

    this.check('deployment-reports directory exists', () => {
      const reportsDir = path.join(rootDir, 'logs', 'deployment-reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
        return true;
      }
      return this.verifyDirectory(reportsDir);
    });

    // Check VS Code configuration
    this.check('.vscode/tasks.json configured', () => {
      const tasksFile = path.join(rootDir, '.vscode', 'tasks.json');
      if (this.verifyFile(tasksFile)) {
        const content = fs.readFileSync(tasksFile, 'utf-8');
        return content.includes('Start Browser Testing Server');
      }
      return false;
    });

    this.check('.vscode/extensions.json configured', () => {
      const extFile = path.join(rootDir, '.vscode', 'extensions.json');
      if (this.verifyFile(extFile)) {
        const content = fs.readFileSync(extFile, 'utf-8');
        return content.includes('ms-vscode.live-server') || content.includes('liveserver');
      }
      return false;
    });

    // Check package.json scripts
    this.check('package.json has test scripts', () => {
      const pkgFile = path.join(rootDir, 'package.json');
      if (this.verifyFile(pkgFile)) {
        const content = fs.readFileSync(pkgFile, 'utf-8');
        const pkg = JSON.parse(content);
        return (
          pkg.scripts['test:browser'] &&
          pkg.scripts['test:start'] &&
          pkg.scripts['test:deploy'] &&
          pkg.scripts['test:validate'] &&
          pkg.scripts['test:status']
        );
      }
      return false;
    });

    // Check documentation
    this.check('Browser testing documentation exists', () =>
      this.verifyFile(path.join(rootDir, 'docs', 'BROWSER_TESTING.md'))
    );

    this.check('Quick reference exists', () =>
      this.verifyFile(path.join(rootDir, 'docs', 'BROWSER_TESTING_QUICK_REFERENCE.md'))
    );

    // Check Git hooks
    this.check('Pre-push hook configured', () => {
      const hookFile = path.join(rootDir, '.husky', 'pre-push');
      if (this.verifyFile(hookFile)) {
        const content = fs.readFileSync(hookFile, 'utf-8');
        return content.includes('npm run lint') && content.includes('npm run health');
      }
      return false;
    });

    // Check Node.js and npm
    this.check('Node.js is installed', () => {
      try {
        const version = execSync('node --version', { encoding: 'utf-8' }).trim();
        return version;
      } catch {
        return false;
      }
    });

    this.check('npm is installed', () => {
      try {
        const version = execSync('npm --version', { encoding: 'utf-8' }).trim();
        return version;
      } catch {
        return false;
      }
    });

    // Check clasp
    this.check('clasp is installed', () => {
      try {
        const version = execSync('clasp --version', { encoding: 'utf-8' }).trim();
        return version;
      } catch {
        return false;
      }
    });

    // Check Git
    this.check('Git is installed', () => {
      try {
        const version = execSync('git --version', { encoding: 'utf-8' }).trim();
        return version;
      } catch {
        return false;
      }
    });

    // Print results
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('VERIFICATION RESULTS');
    console.log('═══════════════════════════════════════════════════════════\n');

    this.checks.forEach((check) => {
      console.log(check.status + ' ' + check.name);
      if (check.details && check.details !== 'Check failed') {
        console.log('     ' + check.details);
      }
    });

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('SUMMARY');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('Total Checks: ' + this.checks.length);
    console.log('Passed: ' + this.passed);
    console.log('Failed: ' + this.failed);
    console.log('═══════════════════════════════════════════════════════════\n');

    if (this.failed === 0) {
      console.log('🎉 All checks passed! Browser testing environment is ready.\n');
      console.log('Next steps:');
      console.log('1. Run: npm run test:start');
      console.log('2. Open: http://localhost:8080');
      console.log('3. Deploy: npm run test:deploy\n');
      return true;
    } else {
      console.log('⚠️  Some checks failed. Please review the errors above.\n');
      return false;
    }
  }
}

// Run verification
if (require.main === module) {
  const verifier = new SetupVerifier();
  const success = verifier.run();
  process.exit(success ? 0 : 1);
}

module.exports = { SetupVerifier };
