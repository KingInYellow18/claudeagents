# Homelab Development Agent System

## Overview
Optimized agent registry for homelab software development projects. Removed 178 non-development agents to maintain focus on technical tasks.

## Quick Stats
- **Total Development Agents**: 272
- **Categories**: 29 specialized groups
- **Removed Agents**: 178 (personal, entertainment, financial, etc.)
- **Coverage**: 100% for all core development needs

## Directory Structure
```
agents/
├── config/              # Agent configurations
│   └── development-agents.json
├── profiles/           # Homelab project profiles
│   └── homelab-profiles.yaml
├── docs/              # Documentation
│   └── removed-agents.md
└── README.md
```

## Usage

### 1. Check Available Agents
```bash
node scripts/test-agent-filter.js
```

### 2. Use Homelab Profiles
Select pre-configured agent teams for common projects:
- Media Server Stack
- Home Automation Hub
- Network Monitoring Dashboard
- Personal Cloud Storage
- Container Management Platform
- Development Environment
- API Gateway
- Backup Solution
- Database Management UI
- Log Management System

### 3. Spawn Agents for Development
```javascript
// Example: Building a container management platform
Task("Backend Developer", "Build Kubernetes controller with Go", "go-specialist")
Task("Docker Expert", "Create container management API", "docker-containerization-specialist")
Task("Frontend Developer", "Design management UI with React", "react-19-specialist")
Task("DevOps Engineer", "Setup CI/CD pipelines", "cicd-engineer")
```

## Available Agent Categories

### Core Development (10 agents)
`coder`, `reviewer`, `tester`, `planner`, `researcher`, etc.

### Language Specialists (19 agents)
JavaScript, Python, Java, Go, Rust, C#, PHP, Ruby, and more

### Framework Specialists (24 agents)
React, Angular, Vue, Next.js, Django, Spring Boot, Laravel, etc.

### Database Specialists (16 agents)
PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and more

### Testing Specialists (23 agents)
Jest, Playwright, Cypress, TDD, BDD, integration, performance, etc.

### DevOps/CI/CD (23 agents)
Docker, Kubernetes, Terraform, GitHub Actions, ArgoCD, etc.

### Security & Compliance (15 agents)
Zero-trust, vulnerability scanning, GDPR, penetration testing, etc.

## Removed Agent Categories
- Personal Life & Wellness (42 agents)
- Sports & Game Prediction (11 agents)
- Entertainment & Media (8 agents)
- Financial/Investment (12 agents)
- Political/Social (6 agents)
- Healthcare/Medical (5 agents)
- Business/Sales/Marketing (28 agents)
- Psychology/Influence (45 agents)
- Personal Challenges (8 agents)
- Environmental/Climate (3 agents)
- Industry Predictions (10 agents)

## Testing
Run the validation script to ensure agent filtering works:
```bash
npm test # or
node scripts/test-agent-filter.js
```

## Customization
To re-enable specific agents for specialized projects:
1. Edit `agents/config/development-agents.json`
2. Add agents to appropriate category
3. Run tests to validate

## Best Practices
1. Use specialized agents over general-purpose ones
2. Spawn agents in parallel for independent tasks
3. Enable memory sharing for cross-agent communication
4. Follow homelab profiles for common project types
5. Keep focus on development-related agents only

## Support
- Configuration: `agents/config/development-agents.json`
- Profiles: `agents/profiles/homelab-profiles.yaml`
- Removed list: `agents/docs/removed-agents.md`
- Testing: `scripts/test-agent-filter.js`