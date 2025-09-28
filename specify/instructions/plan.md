# Step 2: Plan Project Phases

**Purpose**: Define project phases, create detailed roadmap, and establish contracts for successful implementation.

**When to use**: After completing Step 1 (Establish Foundation) and confirming project foundation with user.

**Prerequisites**:

- Foundation established (INSTRUCTIONS-01 completed)
- User confirmed technology stack and project requirements
- Architecture.md and constitution.md properly configured

## Execution Strategy

This is the most critical step. Take time to understand user requirements deeply and create a comprehensive plan that maximizes project success. **Ask probing questions and gather detailed requirements.**

### Phase 1: Understand Project Scope

#### Core Functionality Discovery

Ask the user these detailed questions:

**Primary Features**:

- What is the main problem this project solves?
- What are the 3 most important things users need to be able to do?
- What would make this project successful in your eyes?
- Are there any existing solutions you're trying to improve upon?

**User Journey Mapping**:

- Walk me through how a typical user would interact with this system
- What is the onboarding experience?
- What are the most common daily tasks users will perform?
- What error scenarios are most critical to handle well?

**Data & Integration Requirements**:

- What data does this project need to store or process?
- Does it need to integrate with external systems or APIs?
- Are there any data import/export requirements?
- What authentication/authorization is needed?

**Success Metrics**:

- How will you know this project is working correctly?
- Are there performance requirements I should know about?
- What would cause you to consider this project a failure?

### Phase 2: Define Project Phases

Based on user requirements, create **3-6 phases** that build incrementally toward the full solution.

#### Phase Sequencing Strategy

**Phase 001 - Foundation** (Always first):

- Development environment setup
- Basic project structure
- Core dependencies and tooling
- First "Hello World" or health check functionality
- Testing framework setup

**Phases 002-00X - Core Value** (2-4 phases):
Sequence phases to deliver user value as early as possible:

- Each phase should enable a complete user workflow
- Prioritize features by user impact and dependency relationships
- Consider technical complexity and learning curve

**Final Phase - Production Ready** (Usually last):

- Performance optimization
- Production deployment setup
- Monitoring and observability
- Documentation completion
- Security hardening

#### Example Phase Structures

**For Web Applications**:

- Phase 001: Foundation (setup, basic API)
- Phase 002: Authentication & User Management
- Phase 003: Core Business Logic
- Phase 004: Frontend Integration
- Phase 005: Production Ready

**For CLI Tools**:

- Phase 001: Foundation (basic CLI structure)
- Phase 002: Core Commands
- Phase 003: Data Processing Features
- Phase 004: Advanced Features & Error Handling
- Phase 005: Distribution & Documentation

**For APIs**:

- Phase 001: Foundation (basic server, health checks)
- Phase 002: Data Models & Database
- Phase 003: Core Endpoints
- Phase 004: Authentication & Security
- Phase 005: Performance & Production

### Phase 3: Create Detailed Phase Specifications

For each phase, create a complete spec using the `.specify/phases/phase-XXX-name/spec.md` template:

#### Phase Definition Process

1. **Create phase directory**: `mkdir .specify/phases/phase-XXX-name`
2. **Copy spec template**: Use the spec.md template
3. **Define clear deliverables**: What specific functionality will work?
4. **Set success criteria**: Measurable, testable outcomes
5. **Identify dependencies**: What must be complete first?

#### Success Criteria Guidelines

Make success criteria specific and testable:

**Bad example**: "User management works"
**Good example**:

- User can register with email/password
- User receives email confirmation
- User can log in and access protected routes
- User can update their profile information

**Bad example**: "API is fast"
**Good example**:

- API responds in <200ms for 95% of requests
- Database queries complete in <50ms average
- Memory usage stays below 256MB under normal load

### Phase 4: Design System Contracts

Create comprehensive contracts in `.specify/phases/phase-XXX-name/contracts/`:

#### API Contracts

For each phase that introduces APIs:

```typescript
// Define exact request/response formats
export interface CreateUserRequest {
  email: string; // Valid email format required
  password: string; // Min 8 chars, must contain number
  name?: string; // Optional display name
}

export interface CreateUserResponse {
  id: string; // UUID format
  email: string; // Confirmed valid email
  name: string | null; // Null if not provided
  createdAt: string; // ISO 8601 timestamp
}
```

#### Data Model Contracts

Define all data structures:

```typescript
export interface User {
  id: string;
  email: string;
  passwordHash: string; // bcrypt hashed
  name: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Service Layer Contracts

Define business logic interfaces:

```typescript
export interface UserService {
  create(data: CreateUserRequest): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  authenticate(email: string, password: string): Promise<User | null>;
}
```

### Phase 5: Update System Context Files

#### Update Roadmap

Update `.specify/context/roadmap.md`:

```markdown
## Phase Details

### Phase 001: Foundation ⏳ PLANNED

**Goal**: [Specific goal from user requirements]
**Duration**: [Realistic estimate] | **Target**: [Date]
**Deliverables**:

- [Specific deliverable 1]
- [Specific deliverable 2]

**Acceptance Criteria**:

- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]

### Phase 002: [Name] ⏳ PLANNED

**Goal**: [Next logical step toward user value]
**Dependencies**: Phase 001 complete
**Duration**: [Estimate]
[Continue for all phases]
```

#### Update Current Context

Update `.specify/context/current.md`:

```markdown
## Active Phase

**Phase 001**: Foundation Setup
**Goal**: [Specific goal for this phase]
**Progress**: ⏳ Ready to Start (0% complete)
**Target Completion**: [Date estimate]

## Immediate Tasks

1. **Create Phase 001 implementation plan** - Define detailed tasks
2. **Set up development environment** - Install [specific tools]
3. **Create first contracts** - Define [specific interfaces]

## Phase Roadmap (Next 3)

- **Phase 001**: [Goal] (Ready to start)
- **Phase 002**: [Goal] (Awaiting Phase 001)
- **Phase 003**: [Goal] (Planned)
```

### Phase 6: Validation & User Confirmation

Before completing planning, validate with user:

#### Present Phase Overview

"I've planned your [project type] with [X] phases:

**Phase 001**: [Goal] - [Duration estimate]
**Phase 002**: [Goal] - [Duration estimate]
[List all phases]

Each phase delivers working functionality that you can test and use."

#### Ask Critical Questions

- Does this phase sequence make sense for your priorities?
- Are there any phases that seem too big or too small?
- What would you want to see working first?
- Are there any features or requirements I missed?
- Do the time estimates seem reasonable?

#### Iterate Based on Feedback

Be prepared to:

- Reorganize phase sequence
- Split large phases into smaller ones
- Combine small phases
- Add missing requirements
- Adjust scope based on user constraints

### Phase 7: Finalize Planning

#### Complete Documentation

Ensure all files are properly filled:

- [ ] All phase specs completed with clear success criteria
- [ ] Contracts defined for major interfaces
- [ ] Roadmap updated with realistic timeline
- [ ] Current context points to next actionable step

#### Set Expectations

Inform user:

- "Planning complete. You have [X] phases planned."
- "Phase 001 is ready to start. It should take [duration] and deliver [specific value]."
- "Ready to proceed to execution? See INSTRUCTIONS-03-EXECUTE.md for next steps."

## Critical Success Factors

### Ask Enough Questions

Don't guess at requirements. Better to ask too many clarifying questions than build the wrong thing.

### Sequence for Early Value

Each phase should deliver something the user can see, test, and get value from.

### Make Criteria Testable

Avoid vague success criteria. Everything should be objectively verifiable.

### Balance Phase Size

Phases should be 1-3 weeks of work. Split bigger phases, combine smaller ones.

### Consider Dependencies

Later phases should build naturally on earlier ones without requiring rework.

## Common Planning Mistakes

**Mistake**: Making Phase 001 too complex
**Fix**: Keep it simple - just get basic structure working

**Mistake**: Not defining clear success criteria
**Fix**: Every phase needs measurable, testable outcomes

**Mistake**: Phases that don't deliver user value
**Fix**: Each phase should have something user can interact with

**Mistake**: Assuming user requirements without asking
**Fix**: Ask detailed questions, provide examples to clarify

**Mistake**: Creating too many or too few phases
**Fix**: Aim for 3-6 phases, each 1-3 weeks of work

## Success Metrics

Planning is successful when:

- User confirms phase sequence aligns with their priorities
- Each phase has clear, testable success criteria
- Contracts define all major interfaces
- Timeline is realistic and achievable
- User understands what each phase will deliver
