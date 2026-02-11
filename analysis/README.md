# Feature Competition Analysis

This directory contains competition analysis reports for Code Utils features and tools.

## Purpose

Before implementing or improving a feature, we analyze competitors to:
- Identify what's already done well
- Find gaps and opportunities
- Prioritize features by impact
- Make data-driven implementation decisions

## How to Use

### Running an Analysis

Use the `/feature-analysis` skill with the feature name:

```bash
/feature-analysis JSON Formatter
/feature-analysis PDF Compressor
/feature-analysis Markdown Editor
```

### Analysis Output

Each analysis creates a markdown file named `{feature-slug}-analysis.md` containing:

1. **Current Implementation** - What we have now (if anything)
2. **Competitor Analysis** - Detailed review of 3-5 top competitors
3. **Gap Analysis** - What we're missing
4. **Impact Ranking** - Prioritized list (High/Medium/Low impact)
5. **Implementation Recommendations** - Phased approach
6. **Competitive Advantages** - How we can differentiate

## File Naming Convention

- **JSON Formatter** → `json-formatter-analysis.md`
- **PDF Compressor** → `pdf-compressor-analysis.md`
- **Image Optimizer** → `image-optimizer-analysis.md`

## Impact Ranking Criteria

### High Impact (Priority 1)
- Directly solves user pain points
- Common across all competitors (80%+)
- Low effort, high value
- Differentiates from competitors

### Medium Impact (Priority 2)
- Nice-to-have features
- Found in 50%+ of competitors
- Moderate implementation effort
- Improves UX but not critical

### Low Impact (Backlog)
- Rare features (< 50% of competitors)
- High implementation effort
- Minimal user value
- Edge cases only

## Implementation Workflow

1. Run analysis for feature: `/feature-analysis [Feature Name]`
2. Review the generated markdown file
3. Discuss high-impact findings
4. Plan implementation phases
5. Update the analysis file as features are implemented

## Example Analysis Files

- `json-formatter-analysis.md` - JSON formatting tool analysis
- `pdf-tools-analysis.md` - PDF manipulation tools analysis
- `image-optimizer-analysis.md` - Image optimization analysis

## Notes

- Analysis files should be updated when:
  - New competitors emerge
  - Our implementation changes significantly
  - Every 6-12 months for accuracy
- Focus on features feasible for client-side implementation
- Consider privacy and no-backend constraints
