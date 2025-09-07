#!/usr/bin/env node

/**
 * Test script to validate agent filtering for homelab development
 */

const fs = require('fs');
const path = require('path');

// Load the development agents configuration
const configPath = path.join(__dirname, '..', 'agents', 'config', 'development-agents.json');
const agentConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Define test cases
const testCases = [
  {
    name: 'Should include development agents',
    agents: ['coder', 'tester', 'react-19-specialist', 'docker-containerization-specialist'],
    expected: true
  },
  {
    name: 'Should exclude personal life agents',
    agents: ['relationship-harmony-agent', 'parenting-excellence-child-development-agent'],
    expected: false
  },
  {
    name: 'Should exclude sports prediction agents',
    agents: ['football-soccer-match-predictor', 'basketball-game-prediction-agent'],
    expected: false
  },
  {
    name: 'Should include all swarm coordination agents',
    agents: ['swarm-init', 'mesh-coordinator', 'consensus-builder'],
    expected: true
  },
  {
    name: 'Should include database specialists',
    agents: ['postgresql-specialist', 'mongodb-specialist', 'redis-specialist'],
    expected: true
  }
];

// Helper function to check if agent exists in config
function isAgentIncluded(agentName) {
  for (const category of Object.values(agentConfig.categories)) {
    if (category.agents && category.agents.includes(agentName)) {
      return true;
    }
  }
  return false;
}

// Run tests
console.log('🧪 Testing Agent Filter Implementation\n');
console.log('=' .repeat(50));

let passed = 0;
let failed = 0;

testCases.forEach(test => {
  console.log(`\n📋 Test: ${test.name}`);
  
  let testPassed = true;
  test.agents.forEach(agent => {
    const isIncluded = isAgentIncluded(agent);
    const shouldBeIncluded = test.expected;
    
    if (isIncluded === shouldBeIncluded) {
      console.log(`  ✅ ${agent}: ${isIncluded ? 'Included' : 'Excluded'} (correct)`);
    } else {
      console.log(`  ❌ ${agent}: ${isIncluded ? 'Included' : 'Excluded'} (should be ${shouldBeIncluded ? 'included' : 'excluded'})`);
      testPassed = false;
    }
  });
  
  if (testPassed) {
    passed++;
  } else {
    failed++;
  }
});

// Summary statistics
console.log('\n' + '=' .repeat(50));
console.log('\n📊 Test Summary:');
console.log(`  Total Tests: ${testCases.length}`);
console.log(`  ✅ Passed: ${passed}`);
console.log(`  ❌ Failed: ${failed}`);

// Validate agent counts
console.log('\n📈 Agent Statistics:');
console.log(`  Total Agent Categories: ${Object.keys(agentConfig.categories).length}`);
console.log(`  Development-Focused Agents: ${agentConfig.metadata.development_focused}`);
console.log(`  Removed Agents: ${agentConfig.metadata.removed_agents}`);

// List all categories
console.log('\n📁 Available Categories:');
Object.entries(agentConfig.categories).forEach(([key, category]) => {
  console.log(`  • ${key}: ${category.agents.length} agents`);
});

// Check for specific homelab use cases
console.log('\n🏠 Homelab Development Coverage:');
const homelabChecks = [
  { category: 'Container Management', required: ['docker-containerization-specialist', 'kubernetes-orchestration-specialist'] },
  { category: 'Web Development', required: ['react-19-specialist', 'nodejs-specialist', 'nextjs-15-specialist'] },
  { category: 'Database Systems', required: ['postgresql-specialist', 'mysql-specialist', 'redis-specialist'] },
  { category: 'API Development', required: ['api-docs', 'graphql-query-language-specialist', 'rest-api-specialist'] },
  { category: 'DevOps/CI/CD', required: ['cicd-engineer', 'terraform-automation-expert', 'github-modes'] }
];

homelabChecks.forEach(check => {
  const available = check.required.filter(agent => isAgentIncluded(agent));
  const coverage = (available.length / check.required.length) * 100;
  console.log(`  ${check.category}: ${coverage.toFixed(0)}% coverage (${available.length}/${check.required.length} agents)`);
});

// Exit with appropriate code
if (failed > 0) {
  console.log('\n⚠️  Some tests failed. Please review the configuration.');
  process.exit(1);
} else {
  console.log('\n✨ All tests passed! Agent filtering is working correctly.');
  process.exit(0);
}