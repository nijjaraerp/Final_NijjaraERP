/**
 * Deployment and Execution Flow Reporter
 * Generates detailed reports for all deployments and system interactions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPORTS_DIR = path.join(__dirname, '..', '..', 'logs', 'deployment-reports');

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

class DeploymentReporter {
  constructor() {
    this.deploymentId = this.generateDeploymentId();
    this.reportFile = path.join(REPORTS_DIR, `deployment-${this.deploymentId}.md`);
    this.startTime = new Date();
    this.steps = [];
  }

  generateDeploymentId() {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }

  addStep(step, details = '') {
    const timestamp = new Date().toISOString();
    this.steps.push({
      number: this.steps.length + 1,
      timestamp,
      step,
      details,
    });
    console.log(`[${timestamp}] Step ${this.steps.length}: ${step}`);
  }

  addError(error, context = '') {
    this.addStep(`❌ ERROR: ${error}`, context);
  }

  addSuccess(message, details = '') {
    this.addStep(`✅ SUCCESS: ${message}`, details);
  }

  generateReport() {
    const endTime = new Date();
    const duration = ((endTime - this.startTime) / 1000).toFixed(2);

    let report = `# Deployment Report
## Deployment ID: ${this.deploymentId}

### Timeline
- **Start Time:** ${this.startTime.toISOString()}
- **End Time:** ${endTime.toISOString()}
- **Duration:** ${duration}s

---

## Deployment Process

`;

    this.steps.forEach((step) => {
      report += `### Step ${step.number}: ${step.step}
**Timestamp:** ${step.timestamp}

${step.details ? `**Details:**\n${step.details}\n` : ''}

---

`;
    });

    report += `## Summary

- Total Steps: ${this.steps.length}
- Deployment Status: ${this.steps.some((s) => s.step.includes('ERROR')) ? '❌ Failed' : '✅ Success'}
- Report Generated: ${new Date().toISOString()}

`;

    fs.writeFileSync(this.reportFile, report);
    console.log(`\n📄 Deployment report saved: ${this.reportFile}`);
    return this.reportFile;
  }

  async getCLASPDeploymentInfo() {
    try {
      this.addStep('Fetching CLASP deployment info');
      const output = execSync('clasp deployments', { encoding: 'utf-8' });
      this.addSuccess('Retrieved CLASP deployments', `\`\`\`\n${output}\n\`\`\``);
      return output;
    } catch (error) {
      this.addError('Failed to fetch CLASP deployments', error.message);
      return null;
    }
  }

  async getGitStatus() {
    try {
      this.addStep('Checking Git status');
      const status = execSync('git status --short', { encoding: 'utf-8' });
      const branch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
      this.addSuccess('Git status retrieved', `Branch: ${branch}\n\`\`\`\n${status}\n\`\`\``);
      return { status, branch };
    } catch (error) {
      this.addError('Failed to get Git status', error.message);
      return null;
    }
  }
}

class ExecutionFlowTracker {
  constructor(flowId = null) {
    this.flowId = flowId || this.generateFlowId();
    this.logFile = path.join(REPORTS_DIR, `execution-flow-${this.flowId}.md`);
    this.events = [];
    this.startTime = new Date();
  }

  generateFlowId() {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }

  trackFrontend(event, element, data = {}) {
    this.events.push({
      timestamp: new Date().toISOString(),
      layer: 'FRONTEND',
      event,
      element,
      data,
    });
  }

  trackBackend(functionName, operation, data = {}) {
    this.events.push({
      timestamp: new Date().toISOString(),
      layer: 'BACKEND',
      functionName,
      operation,
      data,
    });
  }

  generateFlowReport() {
    let report = `# Execution Flow Report
## Flow ID: ${this.flowId}

### Timeline
- **Start:** ${this.startTime.toISOString()}
- **End:** ${new Date().toISOString()}
- **Total Events:** ${this.events.length}

---

## Event Sequence

`;

    this.events.forEach((event, index) => {
      if (event.layer === 'FRONTEND') {
        report += `### Event ${index + 1}: Frontend - ${event.event}
**Timestamp:** ${event.timestamp}
**Element:** \`${event.element}\`
**Data:**
\`\`\`json
${JSON.stringify(event.data, null, 2)}
\`\`\`

---

`;
      } else {
        report += `### Event ${index + 1}: Backend - ${event.operation}
**Timestamp:** ${event.timestamp}
**Function:** \`${event.functionName}\`
**Data:**
\`\`\`json
${JSON.stringify(event.data, null, 2)}
\`\`\`

---

`;
      }
    });

    fs.writeFileSync(this.logFile, report);
    console.log(`\n📊 Execution flow report saved: ${this.logFile}`);
    return this.logFile;
  }
}

// Export classes
module.exports = {
  DeploymentReporter,
  ExecutionFlowTracker,
  REPORTS_DIR,
};

// CLI usage
if (require.main === module) {
  const reporter = new DeploymentReporter();
  reporter.addStep('Deployment initiated by CLI');
  reporter.getGitStatus();
  reporter.getCLASPDeploymentInfo();
  reporter.generateReport();
}
