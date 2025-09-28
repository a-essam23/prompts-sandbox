# Project Constitution

## Core Principles

### I. Phase-First Development
Every feature is built incrementally through phases; Each phase delivers working, testable functionality; Phases are committed at completion with tagged releases; No work proceeds without clear phase definition and acceptance criteria.

### II. Contract-Driven Design
All interfaces defined before implementation; API contracts serve as documentation and validation; Data models explicitly defined with relationships; Integration points documented with examples.

### III. Context-Aware Documentation
Documentation stays current with implementation; Only active phase details consume AI context; Completed phases archived but searchable; Architecture decisions persist across phases.

### IV. Incremental Validation
Each phase must demonstrate user value; Working software over comprehensive documentation; Continuous integration and deployment; Manual validation required before phase completion.

### V. Simplicity and Clarity
Start simple, add complexity only when justified; Prefer explicit over implicit; Code and documentation must be maintainable; YAGNI principles apply to all decisions.

## Development Workflow

### Phase Lifecycle
1. **Define**: Create phase spec with clear deliverables
2. **Plan**: Generate implementation plan and contracts  
3. **Build**: Implement incrementally with frequent commits
4. **Validate**: Manual testing and acceptance criteria verification
5. **Complete**: Archive phase details and update roadmap
6. **Transition**: Update current context to next phase

### Commit Strategy
- Major implementation steps require commits
- Phase completion requires tagged commits (v0.1.0, v0.2.0, etc.)
- Current context reflects latest committed state
- No uncommitted work between AI sessions

### Quality Standards
- All code must compile/run without errors
- Manual testing required for user-facing changes
- API contracts must be validated
- Documentation updated with implementation

## Governance

Constitution supersedes all other practices; Phase transitions require validation checklist completion; Context files must stay under size limits; Use `.specify/context/current.md` for runtime guidance.

**Version**: 1.0.0 | **Ratified**: 2025-01-21 | **Last Amended**: 2025-01-21
