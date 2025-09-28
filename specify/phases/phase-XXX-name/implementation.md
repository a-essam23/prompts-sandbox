# Phase [XXX]: [Phase Name] Implementation

**Phase**: XXX - [Name]  
**Status**: Active  
**Started**: [Date]  
**Last Updated**: [Date]

## Implementation Context
**Current Commit**: [Hash] - [Message]  
**Working State**: [What's functional]  
**Known Issues**: [Current blockers or bugs]  
**Next Command**: `[specific command to run next]`

## Phase Progress
**Overall**: [X%] complete  
**Target Completion**: [Date]

### Task Status
- ✅ [Completed task] - [Completion date]
- 🚧 [Current task] - [Progress description]
- ⏳ [Pending task] - [Dependencies]

## Detailed Implementation Plan

### Stage 1: [Stage Name] [Status: ✅/🚧/⏳]
**Goal**: [What this stage achieves]  
**Duration**: [Estimate] | **Actual**: [If completed]

#### Tasks
1. **[Task 1]** - [Detailed description]
   - **Files**: `path/to/file.js`, `path/to/test.js`
   - **Acceptance**: [How to verify completion]
   - **Status**: [✅ Complete / 🚧 In Progress / ⏳ Pending]

2. **[Task 2]** - [Detailed description]  
   - **Files**: `path/to/another.js`
   - **Dependencies**: Task 1
   - **Status**: [Status]

#### Implementation Notes
- **[Date]**: [Key discovery or decision made]
- **[Date]**: [Issue encountered and resolution]

### Stage 2: [Stage Name] [Status: ✅/🚧/⏳]
**Goal**: [What this stage achieves]  
**Dependencies**: Stage 1 complete

#### Tasks
[Same format as Stage 1]

## Contract Definitions

### API Endpoints
```typescript
// POST /api/resource
interface CreateResourceRequest {
  name: string;
  type: 'A' | 'B' | 'C';
  metadata?: Record<string, any>;
}

interface CreateResourceResponse {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}
```

### Data Models
```typescript
interface Resource {
  id: string;
  name: string;
  type: 'A' | 'B' | 'C';
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
```

## Testing Strategy

### Manual Testing Checklist
- [ ] **[Test scenario 1]**: [Steps to verify]
- [ ] **[Test scenario 2]**: [Steps to verify]
- [ ] **[Error condition]**: [How to test error handling]

### Integration Tests
- `tests/integration/resource.test.js` - CRUD operations
- `tests/integration/auth.test.js` - Authentication flow

## Known Issues & Workarounds
- **[Issue 1]**: [Description] - **Workaround**: [Temporary solution]
- **[Issue 2]**: [Description] - **Resolution**: [Planned fix]

## Performance Tracking
- **API Response Time**: [Current measurement]
- **Memory Usage**: [Current measurement]  
- **Database Query Time**: [Current measurement]

## Phase Completion Checklist
- [ ] All stages completed
- [ ] Manual testing passed
- [ ] Integration tests green  
- [ ] Performance targets met
- [ ] Documentation updated
- [ ] Code committed with proper messages
- [ ] Phase spec acceptance criteria verified

---
**Next Phase**: [Brief description of what Phase XXX+1 will focus on]  
**Architecture Updates**: [Any architecture.md changes needed]
