# Step 3: Execute Project Phases

**Purpose**: Navigate and execute planned phases systematically, track progress, and manage phase transitions.

**When to use**: After completing Step 2 (Planning) with user-confirmed phase roadmap and specifications.

**Prerequisites**:

- Project foundation established
- Phase roadmap created and confirmed by user
- Phase specifications written with clear success criteria
- System context files properly configured

## Daily Execution Workflow

### 1. Determine Current Context

**Always start here** when resuming work or starting a new conversation:

#### Check Current Status

```bash
# Read these files in order:
1. .specify/context/current.md     # What phase, what task, what's next
2. .specify/phases/phase-XXX-name/implementation.md  # Detailed progress
3. .specify/context/roadmap.md     # Overall project status
```

#### Context Analysis

From `current.md`, identify:

- **Active Phase**: Which phase number and name
- **Current Task**: Specific task in progress
- **Next Command**: Exact next step to take
- **Known Issues**: Any blockers or problems
- **Last Commit**: Most recent committed state

### 2. Execute Current Task

#### Task Execution Process

1. **Load Implementation Plan**: Open `.specify/phases/phase-XXX-name/implementation.md`
2. **Find Current Stage**: Look for 🚧 (in progress) status
3. **Execute Next Task**: Follow the detailed task description
4. **Update Progress**: Mark task completion status as you work
5. **Commit Progress**: Commit working code at logical points

#### Task Status Management

Update `implementation.md` as you work:

```markdown
### Stage 1: Setup ✅ COMPLETE

**Completed**: [Date]

- ✅ Task 1 - Set up project structure
- ✅ Task 2 - Install dependencies

### Stage 2: Core Implementation 🚧 IN PROGRESS

**Started**: [Date]

- ✅ Task 1 - Create user model - [Completion date]
- 🚧 Task 2 - Implement authentication - [Current status/blocker]
- ⏳ Task 3 - Add validation - [Waiting on Task 2]
```

### 3. Progress Tracking

#### Update Current Context

After completing significant work, update `.specify/context/current.md`:

```markdown
## Current State

**Last Commit**: [New hash] - [Commit message]
**Working**: [What's now functional]
**Broken**: [Updated issues or "None"]
**Next Command**: [Specific next step]

## Immediate Tasks

1. **[Updated current task]** - [Progress/next step]
2. **[Next task]** - [Dependencies]
3. **[Following task]** - [Timeline]
```

#### Commit Strategy

Follow the constitution's commit requirements:

- **Feature Complete**: Commit when a logical feature works
- **Daily Progress**: Commit at end of each work session
- **Major Milestones**: Commit with descriptive messages
- **Broken State**: Avoid committing non-working code

Good commit messages:

```
feat: implement user registration endpoint
fix: resolve password validation edge case
docs: update API documentation for auth endpoints
refactor: extract validation logic to separate module
```

### 4. Handle Common Situations

#### When Task is Blocked

1. **Document the Blocker**: Update `implementation.md` with specific issue
2. **Update Current Context**: Note blocker in `current.md`
3. **Try Alternative Approach**: Look for workaround or different sequence
4. **Ask for Help**: If technical decision needed, engage user
5. **Skip if Possible**: Move to unblocked tasks, return later

Example blocker documentation:

```markdown
- 🚧 Task 2 - Implement authentication - BLOCKED
  **Issue**: Database connection failing with SSL error
  **Attempts**: Tried local connection, works fine
  **Next**: Need to configure SSL certificates or disable SSL for development
  **Workaround**: Using mock authentication for now
```

#### When Task is Larger Than Expected

1. **Break Down Task**: Split into smaller subtasks
2. **Update Implementation Plan**: Add substeps with clear completion criteria
3. **Commit Partial Progress**: Commit working subcomponents
4. **Reassess Timeline**: Update estimates in `current.md`

#### When Requirements are Unclear

1. **Document Assumptions**: Write what you're assuming in `implementation.md`
2. **Implement Simple Version**: Build basic version that can be expanded
3. **Mark for Review**: Flag for user confirmation
4. **Continue with Clear Tasks**: Don't let unclear tasks block clear ones

### 5. Phase Completion Process

#### Pre-Completion Checklist

Before marking a phase complete, verify:

**Functional Requirements**:

- [ ] All acceptance criteria from `spec.md` are met
- [ ] Manual testing completed and documented
- [ ] No critical bugs or broken functionality

**Technical Requirements**:

- [ ] All code committed with proper messages
- [ ] Integration tests pass (if applicable)
- [ ] Performance targets met (if specified)
- [ ] Documentation updated

**Quality Requirements**:

- [ ] Code follows established patterns from `architecture.md`
- [ ] Error handling implemented where needed
- [ ] Security considerations addressed

#### Phase Completion Steps

1. **Final Testing**: Complete manual test of all phase functionality
2. **Update Implementation**: Mark all tasks ✅ complete with completion dates
3. **Create Completion Archive**: Fill out `completed.md` template:

```markdown
# Phase XXX: [Name] - COMPLETED

**Completed**: [Today's date]
**Duration**: [Actual time taken]
**Final Commit**: [Hash] - [Message]

## Phase Summary

[2-3 sentences of what was accomplished]

## Deliverables Completed

- ✅ [List specific deliverables from spec.md]

## Success Criteria Met

- ✅ [Each criterion from spec.md with confirmation]

## Key Achievements

1. **[Achievement 1]**: [Technical details and impact]
2. **[Achievement 2]**: [Technical details and impact]

[Continue with full template...]
```

4. **Tag Release**: Create git tag for phase completion:

```bash
git tag -a v0.1.0 -m "Phase 001: Foundation Complete"
git push origin v0.1.0
```

5. **Update Roadmap**: Mark phase complete in `.specify/context/roadmap.md`

### 6. Phase Transition Process

#### Transition Steps

1. **Archive Current Phase**: Move `implementation.md` details to `completed.md`
2. **Update Current Context**: Point to next phase
3. **Create Next Phase Implementation**: Set up new `implementation.md`
4. **Load Next Contracts**: Review contracts for upcoming phase

#### Update Current Context for Next Phase

```markdown
# Current Development Context

**Last Updated**: [Date]
**Project Status**: Phase 002 - [Next Phase Name]
**Context Size**: ~1.8KB

## Active Phase

**Phase 002**: [Next Phase Name]
**Goal**: [Goal from next phase spec.md]
**Progress**: ⏳ Ready to Start (0% complete)
**Target Completion**: [Estimate from roadmap]

## Immediate Tasks

1. **Review Phase 002 specification** - Understand deliverables
2. **Set up implementation plan** - Create detailed task breakdown
3. **Begin first stage** - [Specific first task]

## Current State

**Last Commit**: [Hash] - Phase 001 completion
**Working**: [What's functional from Phase 001]
**Broken**: Nothing (fresh phase start)
**Next Command**: Create Phase 002 implementation plan

[Update other sections accordingly...]
```

### 7. Project Completion

#### When All Phases Complete

1. **Final Validation**: Ensure entire project meets original user requirements
2. **Complete Documentation**: Update all documentation for final state
3. **Create Release**: Tag final version (v1.0.0)
4. **Archive Project**: Mark project complete in roadmap
5. **Handoff Documentation**: Ensure user can maintain and extend project

## Navigation Quick Reference

**Find Current Task**: `.specify/context/current.md`
**Get Task Details**: `.specify/phases/phase-XXX-name/implementation.md`
**Check Overall Progress**: `.specify/context/roadmap.md`
**Review Architecture**: `.specify/context/architecture.md`
**See Completed Work**: `.specify/phases/phase-XXX-name/completed.md`

## Troubleshooting

**Can't Find Current Phase**: Check `roadmap.md` for phase status, look for 🚧
**Tasks Unclear**: Review `spec.md` for phase, check success criteria
**Technical Questions**: Reference `architecture.md`, check constitution
**Progress Seems Slow**: Break tasks smaller, commit more frequently
**Lost Context**: Start with `current.md`, it should point to everything needed

## Success Indicators

You're executing well when:

- Current context always reflects actual state
- Progress is committed regularly
- Tasks have clear completion criteria
- Blockers are documented and addressed
- Phase transitions are clean and complete
- User can see working functionality after each phase
