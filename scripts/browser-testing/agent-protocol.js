/**
 * Agent Communication Protocol
 * Standardizes task status reporting and testing recommendations
 */

const fs = require('fs');
const path = require('path');

const PROTOCOL_LOG = path.join(__dirname, '..', '..', 'logs', 'agent-protocol.log');

// Ensure logs directory exists
const logsDir = path.dirname(PROTOCOL_LOG);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

/**
 * Task Status Types
 */
const TaskStatus = {
  COMPLETE: 'complete',
  PARTIAL: 'partial',
  FAILED: 'failed',
  IN_PROGRESS: 'in-progress',
};

class AgentProtocol {
  constructor(agentId = 'default-agent') {
    this.agentId = agentId;
    this.tasks = [];
    this.sessionId = this.generateSessionId();
    this.log(`Agent protocol initialized for: ${agentId}`);
  }

  generateSessionId() {
    return `session-${new Date().toISOString().replace(/[:.]/g, '-')}`;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${this.agentId}] ${message}\n`;
    fs.appendFileSync(PROTOCOL_LOG, logEntry);
    console.log(logEntry.trim());
  }

  /**
   * Add a task to track
   * @param {string} taskId - Unique task identifier (e.g., 'task1', 'task2')
   * @param {string} description - Task description
   */
  addTask(taskId, description) {
    const task = {
      id: taskId,
      description,
      status: TaskStatus.IN_PROGRESS,
      startTime: new Date().toISOString(),
      endTime: null,
      error: null,
    };
    this.tasks.push(task);
    this.log(`Task added: ${taskId} - ${description}`);
    return task;
  }

  /**
   * Update task status
   * @param {string} taskId - Task identifier
   * @param {string} status - One of: complete, partial, failed
   * @param {string} error - Optional error message
   */
  updateTaskStatus(taskId, status, error = null) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) {
      this.log(`ERROR: Task not found: ${taskId}`);
      return null;
    }

    task.status = status;
    task.endTime = new Date().toISOString();
    if (error) {
      task.error = error;
    }

    this.log(`Task updated: ${taskId} - Status: ${status}${error ? ` - Error: ${error}` : ''}`);
    return task;
  }

  /**
   * Generate standardized status report
   * @param {string} nextSteps - Exactly one line describing next steps
   * @returns {string} Formatted status report
   */
  generateStatusReport(nextSteps = 'No further action required') {
    let report = '=== AGENT STATUS REPORT ===\n';
    report += `Agent: ${this.agentId}\n`;
    report += `Session: ${this.sessionId}\n`;
    report += `Timestamp: ${new Date().toISOString()}\n\n`;

    report += '--- Task Status ---\n';
    this.tasks.forEach((task) => {
      report += `${task.id}: ${task.status}`;
      if (task.error) {
        report += ` (${task.error})`;
      }
      report += '\n';
    });

    report += `\n--- Next Steps ---\n`;
    report += `${nextSteps}\n`;

    report += '\n===========================\n';

    this.log('Status report generated');
    console.log('\n' + report);
    return report;
  }

  /**
   * Generate plain English testing recommendations
   * @param {Array<string>} recommendations - List of testing steps
   * @returns {string} Formatted recommendations
   */
  generateTestingRecommendations(recommendations) {
    let output = '\n=== TESTING RECOMMENDATIONS ===\n';
    recommendations.forEach((rec, index) => {
      output += `${index + 1}. ${rec}\n`;
    });
    output += '================================\n';

    this.log('Testing recommendations generated');
    console.log(output);
    return output;
  }

  /**
   * Save session summary
   */
  saveSessionSummary() {
    const summaryFile = path.join(logsDir, `session-summary-${this.sessionId}.json`);
    const summary = {
      sessionId: this.sessionId,
      agentId: this.agentId,
      tasks: this.tasks,
      completedAt: new Date().toISOString(),
      statistics: {
        total: this.tasks.length,
        complete: this.tasks.filter((t) => t.status === TaskStatus.COMPLETE).length,
        partial: this.tasks.filter((t) => t.status === TaskStatus.PARTIAL).length,
        failed: this.tasks.filter((t) => t.status === TaskStatus.FAILED).length,
      },
    };

    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
    this.log(`Session summary saved: ${summaryFile}`);
    return summaryFile;
  }
}

// Example usage
function demonstrateProtocol() {
  const agent = new AgentProtocol('test-agent');

  // Add tasks
  agent.addTask('task1', 'Implement login functionality');
  agent.addTask('task2', 'Add form validation');
  agent.addTask('task3', 'Connect to backend API');

  // Update task statuses
  agent.updateTaskStatus('task1', TaskStatus.COMPLETE);
  agent.updateTaskStatus('task2', TaskStatus.PARTIAL);
  agent.updateTaskStatus('task3', TaskStatus.FAILED, 'API endpoint not responding');

  // Generate reports
  agent.generateStatusReport('Fix API connection and complete task2 validation');

  agent.generateTestingRecommendations([
    'Test login button response',
    'Verify data saves after form submission',
    'Check error handling for invalid inputs',
    'Validate session persistence across page reloads',
  ]);

  agent.saveSessionSummary();
}

// Export
module.exports = {
  AgentProtocol,
  TaskStatus,
};

// CLI demonstration
if (require.main === module) {
  demonstrateProtocol();
}
