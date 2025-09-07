# ClaudeAgents - Homelab Development Agent Registry

A streamlined, homelab-focused agent registry for Claude Code, optimized for software development projects.

## 🚀 Features

- **237 Development-Focused Agents** across 29 specialized categories
- **10 Pre-configured Homelab Profiles** for common projects
- **100% Coverage** for all core development needs
- **Removed 390 Non-Development Agents** to maintain focus (62.2% reduction)

## 📊 Quick Stats

| Metric | Count |
|--------|-------|
| Total Development Agents | 237 |
| Agent Categories | 29 |
| Removed Non-Dev Agents | 390 |
| Homelab Project Profiles | 10 |

## 🏗️ Project Structure

```
claudeagents/
├── agents/
│   ├── config/              # Agent configurations
│   │   └── development-agents.json
│   ├── profiles/           # Homelab project profiles
│   │   └── homelab-profiles.yaml
│   └── docs/              # Documentation
│       └── removed-agents.md
├── scripts/
│   └── test-agent-filter.js  # Validation script
├── package.json
├── LICENSE
└── README.md
```

## 🎯 Homelab Project Profiles

Pre-configured agent teams for common homelab projects:

1. **Media Server Stack** - Build Plex/Jellyfin alternatives
2. **Home Automation Hub** - Create Home Assistant alternatives
3. **Network Monitoring Dashboard** - Build Grafana/Prometheus stacks
4. **Personal Cloud Storage** - Develop NextCloud alternatives
5. **Container Management Platform** - Create Portainer/Rancher alternatives
6. **Development Environment** - Build VSCode Server/Gitpod alternatives
7. **API Gateway** - Develop Kong/Traefik alternatives
8. **Backup Solution** - Create Restic/Borg alternatives
9. **Database Management UI** - Build phpMyAdmin alternatives
10. **Log Management System** - Develop ELK Stack alternatives

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/KingInYellow18/claudeagents.git
cd claudeagents

# Install dependencies (if any)
npm install

# Run validation tests
npm test
```

## 🔧 Usage

### Test Agent Filtering
```bash
node scripts/test-agent-filter.js
```

### Using with Claude Code

```javascript
// Example: Building a container management platform
Task("Backend Developer", "Build Kubernetes controller with Go", "go-specialist")
Task("Docker Expert", "Create container management API", "docker-containerization-specialist")
Task("Frontend Developer", "Design management UI with React", "react-19-specialist")
Task("DevOps Engineer", "Setup CI/CD pipelines", "cicd-engineer")
```

## 🗂️ Available Agent Categories

- **Core Development** (10 agents) - Essential development agents
- **Language Specialists** (19 agents) - Programming language experts
- **Framework Specialists** (24 agents) - Framework and library experts
- **Database Specialists** (16 agents) - Database management experts
- **Testing Specialists** (23 agents) - Testing and QA agents
- **DevOps/CI/CD** (23 agents) - Deployment and automation
- **Security & Compliance** (15 agents) - Security specialists
- **Architecture & Design** (15 agents) - System design experts
- **And 21 more categories...**

## ❌ Removed Agent Categories

To maintain focus on development tasks, we've removed:
- Personal Life & Wellness (42 agents)
- Sports & Game Prediction (11 agents)
- Entertainment & Media (8 agents)
- Financial/Investment (12 agents)
- Business/Sales/Marketing (28 agents)
- And more non-development categories...

See [agents/docs/removed-agents.md](agents/docs/removed-agents.md) for the complete list.

## 🛠️ Customization

To re-enable specific agents for specialized projects:

1. Edit `agents/config/development-agents.json`
2. Add agents to the appropriate category
3. Run tests to validate: `npm test`

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

**KingInYellow18**

---

Built for homelab enthusiasts who want focused, development-oriented AI agents without the clutter.