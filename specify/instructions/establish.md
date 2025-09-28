# Step 1: Establish Project Foundation

**Purpose**: Set up the Phase-Based Implementation System and establish project fundamentals.

**When to use**: Starting a new project or converting an existing project to this system.

**Prerequisites**: User has described their project idea or requirements.

## Execution Checklist

### 1. Validate System Files
Before starting, verify these files exist in the project:
- [ ] `.specify/constitution.md`
- [ ] `.specify/context/current.md`
- [ ] `.specify/context/architecture.md` 
- [ ] `.specify/context/roadmap.md`

If missing, inform user to copy the system templates first.

### 2. Gather Project Context
Ask the user these questions systematically. **Do not proceed without clear answers**:

#### Technology Stack
- **Primary Language**: What programming language? (Include version: e.g., "Python 3.11", "TypeScript 5.3")
- **Framework/Runtime**: What framework or runtime? (e.g., "Express.js 4.18", "React 18", "FastAPI 0.104")
- **Database**: What data storage? (e.g., "PostgreSQL 15", "MongoDB 7", "SQLite", "File-based", or "None")
- **Package Manager**: Which package manager? (e.g., "npm", "yarn", "pip", "cargo", or "None")
- **Testing Framework**: Preferred testing approach? (e.g., "Jest", "pytest", "cargo test", or "Manual only")

#### Project Type & Scope
- **Project Type**: What are you building? (e.g., "Web application", "REST API", "CLI tool", "Library", "Mobile app")
- **Target Users**: Who will use this? (e.g., "Internal team", "Public users", "Developers", "Specific domain")
- **Scale Expectations**: How big will this get? (e.g., "Personal project", "Team tool", "Production service", "Enterprise system")

#### Development Environment
- **Operating System**: What OS for development? (e.g., "macOS", "Ubuntu 22.04", "Windows 11")
- **Deployment Target**: Where will this run? (e.g., "Local only", "Docker", "Cloud platform", "On-premises")
- **Build Requirements**: Any special build needs? (e.g., "Docker build", "CI/CD pipeline", "Manual deployment")

#### Performance & Quality Requirements
- **Performance Expectations**: What are your targets? (e.g., "Fast enough for personal use", "<200ms API response", "Handle 1000+ concurrent users")
- **Quality Standards**: What quality level? (e.g., "Working prototype", "Production-ready", "Enterprise-grade")
- **Security Needs**: Any security requirements? (e.g., "Basic security", "Authentication required", "Compliance standards")

### 3. Update Architecture File
Based on gathered information, update `.specify/context/architecture.md`:

```markdown
## Technology Stack
**Language**: [User's language + version]
**Runtime**: [User's runtime/framework + version]  
**Framework**: [Primary framework + version]
**Database**: [Database choice + version or "None"]
**Testing**: [Testing framework + version]
**Package Manager**: [Package manager or "None"]

## Project Structure
[Create appropriate structure based on project type]
# For web applications:
src/
├── models/      # Data models
├── services/    # Business logic  
├── controllers/ # API handlers
├── middleware/  # Request processing
└── utils/       # Shared utilities

# For CLI tools:
src/
├── commands/    # CLI command handlers
├── lib/         # Core library code
├── utils/       # Helper functions
└── types/       # Type definitions

# Adapt structure to project type
```

### 4. Update Constitution
Customize `.specify/constitution.md` based on project needs:

- **Performance Targets**: Update with user's performance requirements
- **Quality Standards**: Adjust based on user's quality expectations  
- **Technology Constraints**: Add any specific technology limitations
- **Security Requirements**: Include user's security needs

Example customizations:
```markdown
## Performance Targets
- **API Response**: p95 < [user target]ms
- **Memory Usage**: < [appropriate limit] MB
- **Concurrent Users**: Support [user requirement]

## Quality Standards
- **Testing**: [User's testing approach]
- **Documentation**: [User's documentation needs]
- **Error Handling**: [Appropriate error handling level]
```

### 5. Initialize Current Context
Update `.specify/context/current.md`:

```markdown
# Current Development Context

**Last Updated**: [Today's date]
**Project Status**: Phase 001 - Foundation Setup
**Context Size**: ~1.8KB

## Active Phase
**Phase 001**: Foundation Setup
**Goal**: Establish [project type] with [primary technology stack]
**Progress**: 🚧 Planning (0% complete)
**Target Completion**: [Estimate based on scope]

## Quick Context
**Tech Stack**: [Language] + [Framework]
**Project Type**: [Type from user input]
**Key Dependencies**: [Top 3 from user requirements]
**Architecture Pattern**: [Appropriate pattern for project type]

## Immediate Tasks
1. **Define project phases** - Create roadmap with [3-6] phases
2. **Set up development environment** - Install [specific tools needed]
3. **Create Phase 001 specification** - Foundation setup details

## Current State
**Last Commit**: None (new project)
**Working**: Project planning in progress
**Broken**: Nothing yet
**Next Command**: Define project phases and create roadmap

## Phase Roadmap (Planning)
- **Phase 001**: Foundation Setup (Current - Planning)
- **Phase 002**: [To be determined based on project needs]
- **Phase 003**: [To be determined based on project needs]
```

### 6. Validation Checklist
Before proceeding to Step 2 (Planning), verify:

- [ ] All technology questions answered clearly
- [ ] Architecture.md updated with specific versions and structure
- [ ] Constitution.md customized for project requirements
- [ ] Current.md reflects project type and immediate next steps
- [ ] User has confirmed the technical foundation is correct

### 7. Transition to Planning
Once foundation is established:

1. Confirm with user: "Project foundation established. Ready to plan phases?"
2. If user approves, proceed to INSTRUCTIONS-02-PLANNING.md
3. If user wants changes, iterate on the foundation before planning

## Common Issues & Solutions

**Issue**: User unsure about technology choices
**Solution**: Recommend proven combinations for their project type, explain trade-offs

**Issue**: User has existing codebase
**Solution**: Analyze existing code to determine current technology stack and structure

**Issue**: Requirements too vague
**Solution**: Ask specific follow-up questions, provide examples to help user decide

**Issue**: User wants to use unfamiliar technology
**Solution**: Note learning curve in project planning, suggest simpler alternatives if appropriate

## Success Criteria
Foundation is established when:
- All technology decisions documented with versions
- Project structure defined and appropriate for project type
- Performance and quality targets are clear and realistic
- User confirms foundation aligns with their vision
