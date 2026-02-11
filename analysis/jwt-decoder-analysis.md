# JWT Decoder - Competition Analysis

**Analysis Date:** 2026-02-11
**Status:** Phase 1 Implemented ✅ (2026-02-11)
**Implementation Time:** ~6 hours

---

## Current Implementation

**File:** jwt-decoder.html

### Features
- ✅ Decode header, payload, and signature
- ✅ Automatic expiration check (exp claim)
- ✅ Timestamp conversion (iat, exp, nbf) to human-readable dates
- ✅ Copy individual sections (header, payload, signature)
- ✅ Copy all decoded output
- ✅ Load sample JWT for learning
- ✅ Auto-decode on paste
- ✅ Keyboard shortcuts (Ctrl+Enter to decode, Ctrl+K to copy)
- ✅ 100% client-side processing (privacy-first)
- ✅ Dark mode support
- ✅ Color-coded sections (header/payload/signature)
- ✅ Comprehensive SEO with structured data
- ✅ Expiration status display (VALID/EXPIRED)

### Limitations
- ❌ No signature verification (decode-only)
- ❌ Cannot generate/encode new JWTs
- ❌ No algorithm selection or key input
- ❌ No visual warnings for expired tokens (text-only)
- ❌ No claim explanations/tooltips
- ❌ No token history or saved tokens
- ❌ No JWE (encrypted JWT) support
- ❌ No raw base64 view toggle
- ❌ No timing attack detection

---

## Competitor Analysis

### Competitor 1: jwt.io (Auth0)
**URL:** https://www.jwt.io/
**Market Position:** Industry standard, most popular

**Strengths:**
- Decode, verify, AND generate JWTs (3-in-1)
- Signature verification with secret or public key
- Multi-algorithm support (HS256, RS256, ES256, etc.)
- Dual viewing modes: JSON format + claims table
- Theme support (Dark/Light/System)
- Multi-language support (English, Japanese)
- Educational resources (introduction, libraries, community)
- Auto-focus toggle for encoded input
- Public key format support (SPKI, PKCS #1, X.509, JWK)

**Unique Features:**
- Real-time signature validation with visual feedback
- Dual decoder/encoder interface with sync
- Claims table view (easier to read than raw JSON)
- Educational integration (links to JWT.io introduction)

**UX Patterns:**
- Live validation as you type
- Clear visual indicators for valid/invalid signatures
- Copy buttons for all sections

**Limitations:**
- Can be overwhelming for beginners (lots of options)
- Signature verification requires understanding key formats

---

### Competitor 2: token.dev (Okta)
**URL:** https://token.dev/
**Market Position:** Developer-focused alternative to jwt.io

**Strengths:**
- Decode, verify, and generate JWTs
- Base64 encoded toggle (view raw base64 data)
- Algorithm selector dropdown
- Paste-and-decode functionality
- Educational links to JWT fundamentals
- Integrated with Okta developer ecosystem

**Unique Features:**
- Base64 encoding/decoding toggle (see raw data)
- Warning messages about security best practices
- Okta community integration

**UX Patterns:**
- Interactive sections for each JWT component
- Real-time algorithm selection
- Security warnings displayed prominently

**Limitations:**
- Specific algorithm list not clear from interface
- Less educational content than jwt.io

---

### Competitor 3: Authgear JWT & JWE Debugger
**URL:** https://www.authgear.com/tools/jwt-jwe-debugger
**Market Position:** Most comprehensive tool (JWT + JWE)

**Strengths:**
- Decode, verify, sign, encrypt, decrypt (6 operations!)
- JWE (encrypted JWT) support
- Multiple key formats (JWK, JWKS, PEM)
- Visual warnings for expired/not-yet-valid tokens
- Algorithm support: RS256, ES256, HS256
- Verification status indicators (kid, alg, validity)
- Copy buttons for tokens and keys
- Open-source on GitHub

**Unique Features:**
- **JWE encryption/decryption** (UNIQUE - no other competitor has this!)
- Automatic expiration warnings with visual indicators
- Support for JWKS (JSON Web Key Set) format
- Part of broader developer toolkit (base64, HMAC, TOTP, UUID)

**UX Patterns:**
- Clear status indicators for token validity
- Automatic detection of expiration logic
- Multiple key format support

**Limitations:**
- More complex interface due to advanced features
- May overwhelm users who just need basic decoding

---

### Competitor 4: 8gwifi.org JWT Debugger
**URL:** https://8gwifi.org/jwt-debugger.jsp
**Market Position:** Feature-rich with security testing

**Strengths:**
- Decode, verify, and generate JWTs
- **All JWT algorithms supported:**
  - HMAC: HS256, HS384, HS512
  - RSA: RS256, RS384, RS512
  - ECDSA: ES256, ES384, ES512
  - RSA-PSS: PS256, PS384, PS512
- Signature verification (symmetric and asymmetric)
- **Timing attack detection** (security vulnerability testing)
- Claims inspector with standard claim names
- Expiration validation
- Algorithm auto-detection
- Pretty-print JSON with syntax highlighting
- RFC 7519 compliance

**Unique Features:**
- **Timing attack vulnerability testing** (UNIQUE!)
- Most comprehensive algorithm support (12+ algorithms)
- Security compliance indicators
- Algorithm auto-detection from header

**UX Patterns:**
- Formatted JSON with syntax highlighting
- Individual copy buttons for all parts
- Clear validity indicators

**Limitations:**
- Older-looking UI design
- May be overwhelming for casual users

---

### Competitor 5: Mockoon JWT Decoder
**URL:** https://mockoon.com/tools/jwt-decode/
**Market Position:** Simple decoder for API mocking workflow

**Strengths:**
- Real-time automatic decoding on paste
- Dual JSON editors (left input, right output)
- Standard claims recognition (iss, sub, aud, exp, nbf, iat, jti)
- Integrated with Mockoon API mocking ecosystem
- Clean, simple interface

**Unique Features:**
- Part of API mocking toolkit (integration with Mockoon)
- Automatic decoding without "Decode" button

**UX Patterns:**
- Instant decoding as you paste
- Dual-panel layout (input left, output right)

**Limitations:**
- Decode-only (no verify or generate)
- No signature verification
- No expiration checking
- Basic feature set

---

### Competitor 6: jwt.is (Next-Gen)
**URL:** https://jwt.is/
**Market Position:** Modern, minimal approach

**Strengths:**
- Quick decode of header, claims, and signature
- Focused on fast understanding

**Unique Features:**
- Minimal, "next-gen" interface (details limited)

**Limitations:**
- Limited information available from web fetch

---

## Gap Analysis

### Missing Features

1. **Signature Verification** (Found in: 5/6 competitors)
   - Verify JWT signatures using secret keys (HS256, HS384, HS512)
   - Verify JWT signatures using public keys (RS256, ES256, etc.)
   - Support for multiple key formats (PEM, JWK, JWKS)
   - Visual indicators for valid/invalid signatures
   - Algorithm detection from header

2. **JWT Generation/Encoding** (Found in: 4/6 competitors)
   - Create new JWTs from header and payload
   - Select signing algorithm
   - Input secret or private key
   - Generate signed tokens
   - Encode header and payload to JWT format

3. **Advanced Algorithm Support** (Found in: 3/6 competitors)
   - HS384, HS512 (HMAC variations)
   - RS256, RS384, RS512 (RSA)
   - ES256, ES384, ES512 (ECDSA)
   - PS256, PS384, PS512 (RSA-PSS)

4. **JWE (Encrypted JWT) Support** (Found in: 1/6 competitors - Authgear only)
   - Encrypt JWTs to JWE format
   - Decrypt JWE back to JWT
   - Support for JWE algorithms

5. **Enhanced UX Features** (Found in: 2-3/6 competitors)
   - Base64 raw view toggle
   - Dual viewing modes (JSON + table view)
   - Visual expiration warnings (not just text)
   - Claim tooltips/explanations
   - Syntax highlighting for JSON
   - Claims table with descriptions

6. **Token History** (Found in: 0/6 competitors - OPPORTUNITY!)
   - Save recently decoded tokens
   - Token naming/labeling
   - Quick access to previous tokens
   - Clear history option

7. **Security Features** (Found in: 1/6 competitors - 8gwifi only)
   - Timing attack detection
   - Security vulnerability scanning
   - Best practice recommendations

### UX Improvements

1. **Visual Expiration Indicators**
   - Red/green badges instead of text
   - Countdown timer for valid tokens
   - Visual warnings when token expires soon (< 5 min)

2. **Claim Explanations**
   - Tooltips for standard claims (sub, iss, aud, exp, etc.)
   - Human-readable descriptions
   - Learn more links for each claim

3. **Instant Decode**
   - Auto-decode on input (no button needed)
   - Real-time validation
   - Debounced for performance

4. **Better Token Management**
   - Token history in localStorage
   - Name/label tokens
   - Compare two tokens side-by-side

### Opportunities

1. **Token Comparison Tool** (UNIQUE - NO competitor has this!)
   - Paste two JWTs side-by-side
   - Highlight differences in claims
   - Useful for debugging token changes

2. **Token History with Labels** (NO competitor has this!)
   - Save up to 10 recent tokens
   - Add custom labels ("Production", "Staging", "Test User 1")
   - Quick load from history

3. **Claim Validator** (UNIQUE!)
   - Check if required claims are present
   - Validate claim formats (email format, UUID format, etc.)
   - Custom validation rules

4. **Educational Mode** (Better than jwt.io)
   - Inline explanations for each JWT part
   - Interactive tutorial for beginners
   - "What is this?" buttons throughout

5. **Privacy-First Marketing**
   - Emphasize 100% client-side processing
   - "Your tokens never leave your browser"
   - Compare vs competitors who may send tokens to servers

---

## Impact Ranking

### High Impact (Priority 1) - Implement First

1. **Signature Verification (HS256 only)**
   - **Why:** Universal feature across all major competitors (5/6 have it)
   - **Effort:** Medium (need crypto library for HMAC-SHA256)
   - **Found in:** 5/6 competitors
   - **Feasibility:** Client-side feasible using Web Crypto API
   - **User Value:** Critical for developers verifying tokens
   - **Quick Win:** Start with symmetric algorithms (HS256) only

2. **Visual Expiration Warnings**
   - **Why:** Improves UX significantly, makes expiration status obvious
   - **Effort:** Low (CSS + minor JS changes)
   - **Found in:** 3/6 competitors (Authgear has best implementation)
   - **Feasibility:** Easily client-side feasible
   - **User Value:** Instant visual feedback without reading text
   - **Quick Win:** Add badges/icons with colors (red=expired, green=valid)

3. **Claim Tooltips/Explanations**
   - **Why:** Makes tool more educational and user-friendly
   - **Effort:** Low (add tooltips to claim names)
   - **Found in:** 2/6 competitors (calebb.net mentioned)
   - **Feasibility:** Client-side feasible
   - **User Value:** Helps developers understand JWT structure
   - **Quick Win:** Add tooltips with claim descriptions

4. **Token History (localStorage)**
   - **Why:** UNIQUE feature - NO competitor has this! Huge differentiator
   - **Effort:** Low (we already have RecentTools pattern)
   - **Found in:** 0/6 competitors
   - **Feasibility:** Client-side feasible
   - **User Value:** Save time re-pasting tokens during debugging
   - **Quick Win:** Reuse existing RecentTools pattern, extend for labels

5. **Auto-Decode on Input**
   - **Why:** Better UX, reduces clicks (Mockoon does this well)
   - **Effort:** Low (already have paste listener, extend to all input)
   - **Found in:** 2/6 competitors
   - **Feasibility:** Client-side feasible with debouncing
   - **User Value:** Faster workflow, less clicking
   - **Quick Win:** Debounce existing decodeJWT() on input change

### Medium Impact (Priority 2) - Consider Next

6. **JWT Generation/Encoding**
   - **Why:** 4/6 competitors have it, but complex for client-side
   - **Effort:** High (need to implement base64url encoding + signing)
   - **Found in:** 4/6 competitors
   - **Feasibility:** Client-side feasible but requires crypto
   - **User Value:** Useful for testing, but decode is primary use case
   - **Implementation Note:** Start with unsigned tokens, add HS256 signing later

7. **Advanced Signature Verification (RS256, ES256)**
   - **Why:** Professional developers need asymmetric algorithms
   - **Effort:** High (need crypto library for RSA/ECDSA)
   - **Found in:** 4/6 competitors
   - **Feasibility:** Client-side feasible using Web Crypto API
   - **User Value:** Required for production tokens (most use RS256)
   - **Implementation Note:** Phase 2 after HS256 verification works

8. **Base64 Raw View Toggle**
   - **Why:** Advanced users want to see raw base64
   - **Effort:** Low (add toggle button, show base64 instead of JSON)
   - **Found in:** 2/6 competitors (token.dev)
   - **Feasibility:** Client-side feasible
   - **User Value:** Useful for debugging encoding issues

9. **Claims Table View** (Alternative to JSON)
   - **Why:** Easier to read for non-technical users
   - **Effort:** Medium (need to render claims as table)
   - **Found in:** 1/6 competitors (jwt.io)
   - **Feasibility:** Client-side feasible
   - **User Value:** Better readability for standard claims

10. **Token Comparison Tool**
    - **Why:** UNIQUE feature - no competitor has this!
    - **Effort:** Medium (need dual input/output + diff highlighting)
    - **Found in:** 0/6 competitors
    - **Feasibility:** Client-side feasible
    - **User Value:** Great for debugging token changes between environments

### Low Impact (Backlog) - Future Consideration

11. **JWE (Encrypted JWT) Support**
    - **Why:** Rare use case (only 1/6 competitors has it)
    - **Effort:** Very High (complex encryption/decryption)
    - **Found in:** 1/6 competitors (Authgear)
    - **Feasibility:** Client-side feasible but complex
    - **User Value:** Niche - most developers don't use JWE
    - **Note:** Only implement if users specifically request

12. **Timing Attack Detection**
    - **Why:** Very niche security testing feature
    - **Effort:** High (need security vulnerability testing)
    - **Found in:** 1/6 competitors (8gwifi.org)
    - **Feasibility:** Client-side feasible but complex
    - **User Value:** Limited - mainly for security researchers

13. **Multi-Language Support**
    - **Why:** Low value for developer tools (English is standard)
    - **Effort:** High (translation + maintenance)
    - **Found in:** 1/6 competitors (jwt.io)
    - **Feasibility:** Client-side feasible
    - **User Value:** Nice-to-have but not critical

14. **All Algorithm Support (12+ algorithms)**
    - **Why:** Rare algorithms (PS256, ES512) used infrequently
    - **Effort:** Very High (need multiple crypto implementations)
    - **Found in:** 1/6 competitors (8gwifi.org)
    - **Feasibility:** Client-side feasible but complex
    - **User Value:** Overkill - focus on HS256 and RS256 first

---

## Implementation Recommendations

### Phase 1 (Must Have - MVP Enhancement) ✅ COMPLETED
**Goal:** Match core competitor features, add unique differentiators
**Completion Date:** 2026-02-11

- [x] **Visual Expiration Badges** ✅ (Low effort, high impact)
  - Replace text "VALID/EXPIRED" with colored badges
  - Green badge: ✓ Valid (X hours remaining)
  - Red badge: ✗ Expired (Y hours ago)
  - Yellow badge: ⚠ Expires soon (< 5 min)
  - **Result:** Dark mode compatible, shows time remaining/elapsed

- [x] **Claim Explanations** ✅ (Low effort, high impact)
  - Implemented as "📖 Claim Explanations" section below payload
  - Automatically shows explanations for standard claims
  - Standard claims: sub, iss, aud, exp, iat, nbf, jti, scope, roles, email, name, username, admin
  - **Result:** More user-friendly than tooltip approach, educational

- [x] **Token History with Labels** ✅ (Medium effort, UNIQUE!)
  - Save last 10 decoded tokens in localStorage
  - Add "Save Token" button with custom label
  - Dropdown to load saved tokens with preview
  - "Clear History" button with confirmation
  - **Result:** Unique feature not found in competitors!

- [x] **Auto-Decode on Input** ✅ (Low effort, better UX)
  - Debounce input changes (500ms delay)
  - Auto-decode when JWT format detected (3 parts)
  - Keep manual "Decode" button for explicit action
  - **Result:** Instant feedback, faster workflow

- [x] **Signature Verification - HS256** ✅ (Medium effort, critical feature)
  - Add "Verify Signature" collapsible section
  - Input field for secret key with security warning
  - Use Web Crypto API for HMAC-SHA256
  - Show ✓ Valid or ✗ Invalid signature with visual indicators
  - **Result:** No external libraries needed, 100% client-side

**Actual Time:** ~6 hours for all Phase 1 features
**Status:** All features working correctly, tested and verified

---

### Phase 2 (Should Have - Professional Enhancement)
**Goal:** Advanced features for professional developers

- [ ] **JWT Generation/Encoding**
  - Create unsigned JWTs (base64url encoding only)
  - Create HS256-signed JWTs (with secret key)
  - Input header and payload as JSON
  - Generate button produces JWT string

- [ ] **Advanced Signature Verification (RS256, ES256)**
  - Add algorithm selector (HS256, RS256, ES256)
  - Support PEM public key format
  - Use Web Crypto API for RSA/ECDSA verification
  - Support JWK (JSON Web Key) format

- [ ] **Base64 Raw View Toggle**
  - Toggle button: "JSON View" / "Base64 View"
  - Show raw base64url-encoded strings
  - Useful for debugging encoding issues

- [ ] **Token Comparison Tool** (UNIQUE!)
  - "Compare Tokens" button opens dual editor
  - Paste two JWTs side-by-side
  - Highlight differences in claims (added/removed/changed)
  - Show diff in header, payload, signature

**Estimated Time:** 12-16 hours for all Phase 2 features

---

### Phase 3 (Nice to Have - Future)
**Goal:** Advanced security and educational features

- [ ] **Claims Table View**
  - Toggle between JSON view and table view
  - Table columns: Claim Name, Value, Description
  - Easier to read for non-technical users

- [ ] **Claim Validator**
  - Check if required claims are present (sub, exp, iss, aud)
  - Validate claim formats (email, UUID, URL)
  - Custom validation rules (e.g., "aud must be 'my-app'")

- [ ] **Educational Mode**
  - "Learn Mode" toggle
  - Inline explanations for each JWT section
  - Interactive tutorial for first-time users
  - "What is JWT?" info box

- [ ] **JWE Support** (if requested by users)
  - Decrypt JWE to JWT
  - Encrypt JWT to JWE
  - Advanced feature for niche use cases

**Estimated Time:** 16-20 hours for all Phase 3 features

---

## Competitive Advantages

How we can differentiate from competitors:

1. **Token History with Labels** (UNIQUE!)
   - Save and label tokens ("Production", "Staging", "Test User 1")
   - Quick switching between saved tokens
   - Compare tokens side-by-side

2. **Best Educational Experience**
   - Claim tooltips built-in
   - Inline explanations
   - More comprehensive FAQ than jwt.io

3. **Privacy-First Marketing**
   - Emphasize "100% client-side, tokens never leave your browser"
   - Security-conscious developers care about this
   - Add prominent privacy badge

4. **All-in-One Developer Tool Ecosystem**
   - Part of 59+ tools on Code Utils
   - Cross-link to related tools (Base64, Hash Generator, JSON Formatter)
   - Unified theme and UX across all tools

5. **Superior SEO and Structured Data**
   - Better FAQ schema than competitors
   - Comprehensive educational content
   - Long-tail keyword targeting

Suggested marketing angle:
**"The most privacy-focused, educational JWT decoder with token history and comparison features that jwt.io doesn't have"**

---

## Technical Considerations

### Client-Side Constraints

**Signature Verification:**
- Use Web Crypto API (built into modern browsers)
- HS256: `crypto.subtle.sign("HMAC", key, data)`
- RS256: `crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, signature, data)`
- ES256: `crypto.subtle.verify("ECDSA", key, signature, data)`
- No external libraries needed for basic verification

**Token History:**
- Use localStorage (already used for theme and recent tools)
- Store max 10 tokens with labels
- JSON format: `[{label, token, decoded, timestamp}]`
- Add "Export History" button (download JSON)

**Auto-Decode:**
- Debounce input changes (500ms)
- Validate JWT format before decoding (3 base64url parts)
- Cancel previous decode if new input arrives

### Browser Compatibility

**Web Crypto API:**
- Supported in all modern browsers (Chrome 37+, Firefox 34+, Safari 11+, Edge 12+)
- Fallback message for older browsers: "Signature verification requires a modern browser"

**LocalStorage:**
- Already used in the project
- 5-10MB limit (plenty for token history)

### Performance

**Token Decoding:**
- Current implementation is fast (< 10ms for typical JWT)
- Auto-decode with debouncing won't impact performance

**Signature Verification:**
- HS256: < 5ms (fast)
- RS256/ES256: < 50ms (acceptable)
- Add loading indicator for verification

### Libraries/Dependencies

**None required for Phase 1!**
- Web Crypto API is native
- No external JWT libraries needed
- Keep 100% vanilla JavaScript

**Optional for Phase 2:**
- Consider `jsrsasign` for advanced key format parsing (JWK, PEM)
- But Web Crypto API can handle most formats natively

---

## Notes

### Key Insights

1. **Signature verification is the #1 missing feature** - 5/6 competitors have it, and it's expected by professional developers

2. **Token history is a UNIQUE opportunity** - No competitor offers this, and it solves a real pain point (re-pasting tokens during debugging)

3. **JWE support is overkill** - Only 1/6 competitors has it, and it's a niche use case. Focus on JWT first.

4. **Visual improvements are quick wins** - Expiration badges, claim tooltips, and auto-decode are low effort but high impact

5. **Start with HS256** - Most common algorithm in development environments. Add RS256/ES256 later for production use cases.

6. **Educational content is a strength** - Our comprehensive FAQ and structured data are already better than most competitors

### Implementation Priority

**Focus on Phase 1 first:**
1. Visual improvements (badges, tooltips)
2. Token history (UNIQUE!)
3. Auto-decode
4. HS256 signature verification

**Phase 2 and 3 depend on user feedback:**
- If users request verification, prioritize Phase 2
- If users want generation/encoding, add after verification
- Monitor analytics to see which features get used most

### Competitive Positioning

**Primary Competitor:** jwt.io (Auth0)
- They have: Decode, verify, generate, multi-algorithm, theme support
- We have: Better educational content, better SEO, token history (unique)
- We're missing: Signature verification, generation, multi-algorithm

**Target Audience:** Developers debugging JWT authentication issues
- Primary use case: Decode token to see claims and check expiration
- Secondary use case: Verify token signature
- Tertiary use case: Generate test tokens

**Unique Value Prop:**
"JWT decoder with token history, comprehensive claim explanations, and 100% privacy-first approach. Save and label your tokens for faster debugging."

---

## Sources

This analysis was based on research of the following competitors:

1. [JWT.io - JSON Web Tokens](https://www.jwt.io/) - Industry standard decoder by Auth0
2. [Token.dev - JWT Debugger](https://token.dev/) - Okta's JWT debugging tool
3. [Authgear JWT & JWE Debugger](https://www.authgear.com/tools/jwt-jwe-debugger) - Most comprehensive tool with JWE support
4. [8gwifi.org JWT Debugger](https://8gwifi.org/jwt-debugger.jsp) - Feature-rich with timing attack detection
5. [Mockoon JWT Decoder](https://mockoon.com/tools/jwt-decode/) - Simple decoder for API mocking
6. [jwt.is - Next-Gen JWT Tool](https://jwt.is/) - Modern minimal approach

Additional research sources:
- [JWT.io Competitors - Similarweb](https://www.similarweb.com/website/jwt.io/competitors/)
- [JWT Security Tools Comparison 2024](https://jwtauditor.com/docs/jwt-tools-comparison.html)
