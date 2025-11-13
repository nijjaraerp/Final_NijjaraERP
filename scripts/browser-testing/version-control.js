/**
 * Automated Version Control with Pre-push Validation
 * Ensures code quality before syncing with GitHub and Apps Script
 */

const { execSync } = require('child_process');
const path = require('path');
const { DeploymentReporter } = require('./deployment-reporter');

class VersionControlAutomation {
  constructor() {
    this.reporter = new DeploymentReporter();
    this.rootDir = path.join(__dirname, '..');
  }

  /**
   * Run pre-push validation
   */
  async runValidation() {
    this.reporter.addStep('Starting pre-push validation');

    try {
      // 1. Check for syntax errors
      this.reporter.addStep('Running ESLint');
      try {
        execSync('npm run lint', { cwd: this.rootDir, encoding: 'utf-8' });
        this.reporter.addSuccess('ESLint passed - no syntax errors');
      } catch (error) {
        this.reporter.addError('ESLint failed', error.stdout || error.message);
        return false;
      }

      // 2. Run health check
      this.reporter.addStep('Running health check');
      try {
        const healthOutput = execSync('npm run health', {
          cwd: this.rootDir,
          encoding: 'utf-8',
        });
        this.reporter.addSuccess('Health check passed', healthOutput);
      } catch (error) {
        this.reporter.addError('Health check failed', error.stdout || error.message);
        return false;
      }

      // 3. Verify Apps Script paths
      this.reporter.addStep('Verifying Apps Script paths');
      try {
        execSync('npm run verify:appscript-paths', { cwd: this.rootDir, encoding: 'utf-8' });
        this.reporter.addSuccess('Apps Script paths verified');
      } catch (error) {
        this.reporter.addError('Apps Script path verification failed', error.message);
        return false;
      }

      // 4. Check for uncommitted changes
      this.reporter.addStep('Checking Git status');
      const gitStatus = execSync('git status --porcelain', {
        cwd: this.rootDir,
        encoding: 'utf-8',
      });

      if (gitStatus.trim()) {
        this.reporter.addSuccess('Found uncommitted changes', gitStatus);
      } else {
        this.reporter.addSuccess('Working directory clean');
      }

      this.reporter.addSuccess('All validation checks passed');
      return true;
    } catch (error) {
      this.reporter.addError('Validation failed', error.message);
      return false;
    }
  }

  /**
   * Sync with GitHub
   */
  async syncGitHub() {
    this.reporter.addStep('Syncing with GitHub');

    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', {
        cwd: this.rootDir,
        encoding: 'utf-8',
      });

      if (!status.trim()) {
        this.reporter.addSuccess('No changes to commit');
        return true;
      }

      // Add all files
      this.reporter.addStep('Staging files');
      execSync('git add .', { cwd: this.rootDir });
      this.reporter.addSuccess('Files staged');

      // Commit
      const timestamp = new Date().toISOString();
      const commitMessage = 'Auto-sync: ' + timestamp;
      this.reporter.addStep('Creating commit');
      execSync('git commit -m "' + commitMessage + '"', {
        cwd: this.rootDir,
        encoding: 'utf-8',
      });
      this.reporter.addSuccess('Commit created', commitMessage);

      // Check for merge conflicts
      this.reporter.addStep('Pulling latest changes');
      try {
        const pullOutput = execSync('git pull origin main --no-rebase', {
          cwd: this.rootDir,
          encoding: 'utf-8',
        });
        this.reporter.addSuccess('Pulled latest changes', pullOutput);
      } catch (error) {
        if (error.message.includes('conflict')) {
          this.reporter.addError('Merge conflict detected', error.message);
          this.reporter.addStep('Attempting auto-resolution');

          // List conflicted files
          const conflicts = execSync('git diff --name-only --diff-filter=U', {
            cwd: this.rootDir,
            encoding: 'utf-8',
          });
          this.reporter.addError('Conflicted files', conflicts);

          return false;
        }
      }

      // Push to GitHub
      this.reporter.addStep('Pushing to GitHub');
      const pushOutput = execSync('git push origin main', {
        cwd: this.rootDir,
        encoding: 'utf-8',
      });
      this.reporter.addSuccess('Pushed to GitHub', pushOutput);

      return true;
    } catch (error) {
      this.reporter.addError('GitHub sync failed', error.message);
      return false;
    }
  }

  /**
   * Push to Apps Script (main folder only)
   */
  async syncAppsScript() {
    this.reporter.addStep('Pushing to Apps Script');

    try {
      const output = execSync('npm run push', {
        cwd: this.rootDir,
        encoding: 'utf-8',
      });
      this.reporter.addSuccess('Pushed to Apps Script', output);

      // Get deployment info
      await this.reporter.getCLASPDeploymentInfo();

      return true;
    } catch (error) {
      this.reporter.addError('Apps Script push failed', error.message);
      return false;
    }
  }

  /**
   * Full deployment workflow
   */
  async deploy() {
    console.log('\n===========================================');
    console.log('🚀 Starting Automated Deployment');
    console.log('===========================================\n');

    // Step 1: Validation
    const validationPassed = await this.runValidation();
    if (!validationPassed) {
      console.log('\n❌ Deployment aborted: Validation failed');
      this.reporter.generateReport();
      return false;
    }

    // Step 2: GitHub sync
    const githubSynced = await this.syncGitHub();
    if (!githubSynced) {
      console.log('\n❌ Deployment aborted: GitHub sync failed');
      this.reporter.generateReport();
      return false;
    }

    // Step 3: Apps Script push
    const appsScriptSynced = await this.syncAppsScript();
    if (!appsScriptSynced) {
      console.log('\n❌ Deployment aborted: Apps Script push failed');
      this.reporter.generateReport();
      return false;
    }

    console.log('\n✅ Deployment completed successfully');
    const reportFile = this.reporter.generateReport();
    console.log('📄 Report: ' + reportFile);
    console.log('===========================================\n');

    return true;
  }
}

// CLI usage
if (require.main === module) {
  const automation = new VersionControlAutomation();
  automation
    .deploy()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = { VersionControlAutomation };
