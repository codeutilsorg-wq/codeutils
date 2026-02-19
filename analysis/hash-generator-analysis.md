# Hash Generator - Competition Analysis

**Analysis Date:** 2026-02-12
**Status:** Implemented
**Current Features:** 8 features (basic text hashing)

---

## Current Implementation

**File:** `hash-generator.html` (465 lines)

### Features (10 total)
1. ✅ **4 Hash Algorithms** - MD5, SHA-1, SHA-256, SHA-512
2. ✅ **Auto-Hash on Input** - 500ms debounce for real-time generation
3. ✅ **Individual Copy Buttons** - Copy each hash independently
4. ✅ **Web Crypto API** - Modern browser API for SHA algorithms
5. ✅ **Inline MD5** - Custom implementation (~50 lines)
6. ✅ **UTF-8 Support** - TextEncoder for proper encoding
7. ✅ **Keyboard Shortcuts** - Ctrl+Enter to generate
8. ✅ **Educational Content** - Algorithm descriptions and use cases
9. ✅ **Hash Verification** - Compare against expected checksums with visual indicators (2026-02-16)
10. ✅ **Algorithm Selection** - Choose which algorithms to compute, saved preferences (2026-02-16) **UNIQUE**

### Strengths
- Clean, simple interface
- Real-time hash generation
- All hashes displayed simultaneously
- Client-side processing (privacy-focused)
- Recommends SHA-256, warns against MD5/SHA-1

### Limitations
- **Text input only** - No file hashing capability
- **Limited algorithms** - Only 4 algorithms vs 24-60+ in competitors
- **No HMAC support** - Can't generate keyed hashes
- **No output options** - Only lowercase hex format

---

## Competitor Analysis

### Competitor 1: Browserling All Hashes
- **URL:** https://www.browserling.com/tools/all-hashes
- **Strengths:**
  - **24+ algorithms** - MD2-6, SHA1-3 (224/256/384/512), SHA3 (all variants), RipeMD (128/160/256/320), CRC16/32, Adler32, NTLM, Whirlpool
  - All-in-one approach - Computes all hashes simultaneously
  - Live API access for developers
  - Clean, ad-free interface
- **Unique Features:**
  - Query parameter support (`?input=text`) for programmatic use
  - Displays all hashes at once for comparison
- **Limitations:**
  - Text input only (no file upload)
  - No HMAC or verification features
  - No output format options

### Competitor 2: Hash File Online
- **URL:** https://hash-file.online/
- **Strengths:**
  - **6 algorithms** - MD5, SHA-1, SHA-256, SHA-384, SHA-512, BLAKE2b
  - **File upload with drag & drop** - Single or multiple files
  - **Batch processing** - Process multiple files simultaneously
  - **5 export formats** - PDF, CSV, JSON, HTML, TXT reports
  - **File verification** - Compare against publisher checksums
  - **Duplicate detection** - Identify identical files by hash
  - 100% client-side (privacy-focused)
- **Unique Features:**
  - **Professional PDF reports** - With metadata, timestamps, verification status
  - **Custom metadata** - Add report title, operator name, organization
  - Chunked file reading for large files (any size)
- **Limitations:**
  - Smaller algorithm selection (6 vs 24+)
  - No HMAC support

### Competitor 3: Emn178 SHA256 Tool
- **URL:** https://emn178.github.io/online-tools/sha256.html
- **Strengths:**
  - **30+ algorithms** - SHA family (1/224/256/384/512 + variants), SHA3 (all), Keccak, SHAKE, cSHAKE, KMAC, BLAKE2b/2s, BLAKE3, RipeMD, CRC, MD2-5
  - **HMAC support** - Toggle with configurable key and encoding
  - **Multiple input encodings** - UTF-8, UTF-16, Hex, Base64, ISO-8859, Windows code pages, CJK
  - **File hashing** - Separate file tools for each algorithm
  - **Auto-update** - Real-time hash generation
  - Output options - Uppercase/lowercase hex, Base64
- **Unique Features:**
  - **Share functionality** - Generate shareable links for results
  - **Remember Input** - Preserves previous entries
  - **Full-screen mode** - Expand input/output areas
  - Extensive encoding support (IBM866, KOI8, etc.)
- **Limitations:**
  - Single hash per page (separate tool for each algorithm)
  - No batch processing
  - No comparison/verification features

### Competitor 4: PeLock Hash Calculator
- **URL:** https://www.pelock.com/products/hash-calculator
- **Strengths:**
  - **50+ algorithms** - MD, SHA, SHA3, RipeMD, Whirlpool, Tiger, Snefru, GOST, Adler32, CRC32 variants, FNV, JOAAT, MurmurHash, xxHash, HAVAL
  - **3 input methods** - Text, hex bytes (0xDEADBEEF format), file upload
  - **Newline encoding** - Configure Windows CRLF vs Unix LF
  - Max 32 MB file size
- **Unique Features:**
  - Hex byte input support - Direct byte sequences
  - Educational links to Wikipedia for each algorithm
- **Limitations:**
  - No HMAC support
  - No batch processing
  - No comparison/verification
  - Single file only

### Competitor 5: Md5Calc.com
- **URL:** https://md5calc.com/hash/sha256
- **Strengths:**
  - **60+ algorithms** - MD, SHA (all variants), SHA3, RipeMD, Whirlpool, Tiger, Snefru, GOST, CRC32, FNV, MurmurHash, xxHash, HAVAL
  - **Programmatic access** - URL-based API (`/hash/<ALGO>/<PHRASE>`)
  - **Multiple output formats** - JSON, plain text, HTML
  - **CORS-enabled AJAX** - JavaScript/PHP integration examples
- **Unique Features:**
  - **Algorithm chaining** - Combine multiple algorithms (md5--sha512--sha1)
  - **Base64 decode chains** - Built-in b64d preprocessing
  - URL-based workflows for automation
- **Limitations:**
  - No file upload
  - No batch processing
  - No HMAC support
  - No visual interface for verification

---

## Gap Analysis

### Missing Features

1. **File Hashing (4/5 competitors)** - Upload file and compute hash for verification
   - Drag & drop support
   - File size validation (2MB warning, 10MB limit)
   - Large file support with chunked reading

2. **Additional Algorithms (5/5 competitors)** - Market expects 20-60+ algorithms
   - SHA-384 (between 256 and 512)
   - SHA3-256 (modern, more secure than SHA2)
   - BLAKE2b (faster than MD5, more secure than SHA-256)
   - CRC32 (checksums, not cryptographic)
   - RipeMD-160 (alternative to SHA)

3. **HMAC Support (1/5 competitors)** - Keyed hashing for message authentication
   - Key input field
   - HMAC-SHA256, HMAC-SHA512 variants
   - Hex/text key encoding options

4. **Hash Verification (2/5 competitors)** - Compare against known hash
   - Input field for expected hash
   - Visual match/mismatch indicator
   - Useful for file integrity checks

5. **Algorithm Selection (0/5 have this!)** - Let user choose which algorithms to compute
   - Checkboxes to show/hide algorithms
   - Reduces clutter for focused use
   - Performance optimization

6. **Output Format Options (2/5 competitors)** - Beyond lowercase hex
   - Uppercase/lowercase toggle
   - Base64 encoding option
   - Copy all hashes at once

7. **Export Capabilities (1/5 competitors)** - Save results
   - Export as TXT (all hashes in one file)
   - Export as JSON (structured data)
   - Export as CSV (spreadsheet format)

8. **Encoding Options (2/5 competitors)** - Input encoding variants
   - UTF-8 (default, already supported)
   - UTF-16 encoding
   - Hex input (interpret input as hex bytes)
   - Base64 input (decode then hash)

9. **Hash History (0/5 competitors)** - Save previous computations
   - LocalStorage tracking (like JWT Decoder)
   - Quick re-load of previous inputs
   - Label/name saved hashes

10. **Hash Comparison (0/5 competitors)** - Side-by-side hash comparison
    - Compare two text inputs
    - Visual diff of results
    - Useful for debugging encoding issues

### UX Improvements

1. **Batch file processing** - Hash multiple files at once (1/5 competitors)
2. **Professional reports** - PDF/HTML export with metadata (1/5 competitors)
3. **Shareable links** - Save and share results (1/5 competitors)
4. **Full-screen mode** - Expand input/output areas (1/5 competitors)
5. **Algorithm info tooltips** - Hover to see use cases and security status

---

## Impact Ranking

### High Impact (Priority 1)

1. **File Hashing**
   - **Why:** 4/5 competitors support it, essential for file verification use case
   - **Effort:** Medium (~8-12 hours with drag & drop + chunked reading)
   - **Found in:** 4/5 competitors
   - **Feasibility:** Client-side with FileReader API + chunked processing
   - **User Value:** Unlocks new use case (download verification, file integrity)

2. **More Algorithms (SHA-384, SHA3, BLAKE2b, CRC32)**
   - **Why:** Market standard is 20-60+ algorithms, we have 4 (13% of average)
   - **Effort:** Medium (~6-10 hours, need to find libraries or inline implementations)
   - **Found in:** 5/5 competitors (all have more than us)
   - **Feasibility:** Client-side, use existing JS libraries or Web Crypto API extensions
   - **User Value:** Competitive parity, serves users needing modern/alternative algorithms

3. **Hash Verification/Comparison**
   - **Why:** Core use case is verifying downloads match publisher checksums
   - **Effort:** Low (~2-3 hours for input field + visual indicator)
   - **Found in:** 2/5 competitors
   - **Feasibility:** Simple string comparison with visual feedback
   - **User Value:** Completes the file verification workflow

4. **Algorithm Selection (Checkboxes)**
   - **Why:** UNIQUE feature - no competitor has this! Reduces clutter, improves UX
   - **Effort:** Low (~2-3 hours for show/hide logic)
   - **Found in:** 0/5 competitors (UNIQUE!)
   - **Feasibility:** Simple CSS display: none toggle
   - **User Value:** Cleaner interface, faster performance (only compute needed hashes)

5. **Output Format Options (Uppercase/Base64)**
   - **Why:** Users need different formats for different systems
   - **Effort:** Low (~1-2 hours for toggle + format conversion)
   - **Found in:** 2/5 competitors
   - **Feasibility:** Simple string manipulation
   - **User Value:** Flexibility for various use cases (Base64 for APIs, uppercase for some tools)

### Medium Impact (Priority 2)

1. **HMAC Support (Keyed Hashing)**
   - **Why:** Important for API authentication, JWT signing, webhooks
   - **Effort:** Medium (~4-6 hours with key input + multiple HMAC algorithms)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Web Crypto API supports HMAC-SHA256/512 natively
   - **User Value:** Enables message authentication code generation

2. **Export Capabilities (TXT/JSON/CSV)**
   - **Why:** Professional users need to save/archive results
   - **Effort:** Low (~2-3 hours using CodeUtils.FileHandler)
   - **Found in:** 1/5 competitors (Hash File Online with PDF/CSV/JSON/HTML/TXT)
   - **Feasibility:** Client-side file download, already have utility
   - **User Value:** Archive results, share with team, import to spreadsheets

3. **Encoding Options (UTF-16, Hex Input)**
   - **Why:** Edge cases where users need non-UTF-8 encoding
   - **Effort:** Medium (~3-5 hours for multiple encoding support)
   - **Found in:** 2/5 competitors
   - **Feasibility:** TextEncoder supports UTF-16, hex parsing is straightforward
   - **User Value:** Handles special cases (internationalization, binary data)

4. **Hash History (Save Previous)**
   - **Why:** UNIQUE feature (like JWT Decoder), improves workflow
   - **Effort:** Low (~2-3 hours, copy pattern from JWT Decoder)
   - **Found in:** 0/5 competitors (UNIQUE!)
   - **Feasibility:** LocalStorage with label/timestamp
   - **User Value:** Quick re-hash, compare against previous results

5. **Drag & Drop File Upload**
   - **Why:** Better UX than file picker, modern expectation
   - **Effort:** Low (~1-2 hours, use CodeUtils.DragDrop)
   - **Found in:** 1/5 competitors (Hash File Online)
   - **Feasibility:** Already have DragDrop utility
   - **User Value:** Faster, more intuitive file selection

### Low Impact (Backlog)

1. **Batch File Processing**
   - **Why:** Nice-to-have but niche use case
   - **Effort:** Medium (~4-6 hours for multiple file handling)
   - **Found in:** 1/5 competitors
   - **User Value:** Advanced users with multiple files to verify

2. **Professional PDF Reports**
   - **Why:** Very niche, only one competitor has it
   - **Effort:** High (~10-15 hours for PDF generation)
   - **Found in:** 1/5 competitors (Hash File Online)
   - **User Value:** Formal verification documentation

3. **Algorithm Chaining**
   - **Why:** Advanced feature with very limited demand
   - **Effort:** Medium (~3-5 hours)
   - **Found in:** 1/5 competitors (Md5Calc.com)
   - **User Value:** Obscure cryptographic use cases

4. **Shareable Links**
   - **Why:** Nice-to-have for collaboration
   - **Effort:** Medium (~3-5 hours with URL encoding)
   - **Found in:** 1/5 competitors
   - **User Value:** Share results with team

5. **Full-Screen Mode**
   - **Why:** UI polish, not critical functionality
   - **Effort:** Low (~1-2 hours)
   - **Found in:** 1/5 competitors
   - **User Value:** Better for large inputs

---

## Implementation Recommendations

### Phase 1 (Must Have - MVP Enhancement)
**Goal:** Match or exceed competitors on core features
**Estimated Effort:** 20-30 hours

- [ ] **File Hashing** (~8-12 hours)
  - FileReader API with drag & drop
  - Chunked reading for large files (10MB+)
  - File size warnings (2MB, 5MB, 10MB thresholds)
  - Progress indicator for large files

- [ ] **More Algorithms** (~6-10 hours)
  - SHA-384 (Web Crypto API)
  - SHA3-256 (use js-sha3 library ~5KB gzipped)
  - BLAKE2b (use blakejs library ~10KB gzipped)
  - CRC32 (inline implementation ~30 lines)
  - Total: 8 algorithms (double current count)

- [x] **Hash Verification** (~2-3 hours) ✅ **IMPLEMENTED 2026-02-16**
  - "Expected Hash" input field
  - Visual match indicator (green check ✓ / red X ✗)
  - Case-insensitive comparison
  - Auto-verify after hash generation
  - Highlighted matched algorithm with green border

- [ ] **Algorithm Selection** (~2-3 hours) - UNIQUE!
  - Checkboxes to show/hide each algorithm
  - "Select All" / "Deselect All" buttons
  - Only compute selected algorithms (performance)
  - Save selection to localStorage

- [ ] **Output Format Options** (~1-2 hours)
  - Toggle: lowercase / uppercase hex
  - Toggle: Base64 output
  - "Copy All" button (all hashes as JSON or text)

### Phase 2 (Should Have - Enhancement)
**Goal:** Differentiate with unique features
**Estimated Effort:** 12-18 hours

- [ ] **HMAC Support** (~4-6 hours)
  - Secret key input field
  - HMAC-SHA256, HMAC-SHA512 toggles
  - Key encoding options (text/hex)

- [ ] **Export Capabilities** (~2-3 hours)
  - Export as TXT (plain text with labels)
  - Export as JSON (structured data)
  - Export as CSV (algorithm, hash columns)

- [ ] **Hash History** (~2-3 hours) - UNIQUE!
  - Save last 10 hashes with labels
  - Quick load from history dropdown
  - LocalStorage persistence

- [ ] **Drag & Drop UX** (~1-2 hours)
  - Visual drop zone with dashed border
  - Hover state with "Drop file here" message
  - Use CodeUtils.DragDrop utility

- [ ] **Encoding Options** (~3-5 hours)
  - UTF-8 (default)
  - UTF-16LE / UTF-16BE
  - Hex input (interpret as hex bytes)
  - Base64 input (decode then hash)

### Phase 3 (Nice to Have - Future)
**Goal:** Advanced features for power users
**Estimated Effort:** 8-12 hours

- [ ] **Batch File Processing** (~4-6 hours)
  - Multiple file selection
  - Table display with filename, size, hashes
  - Export batch results

- [ ] **Hash Comparison Tool** (~2-3 hours) - UNIQUE!
  - Side-by-side input for two texts
  - Highlight differences in hashes
  - Useful for debugging encoding issues

- [ ] **Algorithm Info Tooltips** (~1-2 hours)
  - Hover to see use cases
  - Security status (secure/deprecated)
  - Performance characteristics

- [ ] **Shareable Links** (~2-3 hours)
  - Encode input in URL parameter
  - Auto-load and hash on page load
  - Privacy note (visible to anyone with link)

---

## Competitive Advantages

How we can differentiate from competitors:

1. **Algorithm Selection Toggle** - UNIQUE! No competitor has checkboxes to show/hide algorithms
   - Cleaner interface (only show what you need)
   - Performance optimization (don't compute unused hashes)
   - Personalized experience (save preferences)

2. **Hash History** - UNIQUE! Save and label previous hashes (like JWT Decoder feature)
   - Quick re-hash workflow
   - Compare against previous results
   - No competitor offers this

3. **All-in-One Approach** - Text + File hashing in one tool
   - Most competitors focus on text OR file, not both equally well
   - Hash File Online does files well but limited algorithms
   - Browserling does text well but no files

4. **Privacy-First with File Support** - 100% client-side file hashing
   - Hash File Online does this too, but we'll have more algorithms
   - Most competitors require server upload for files

5. **Educational Content** - Help users choose the right algorithm
   - Explain when to use SHA-256 vs SHA-512
   - Warn about deprecated algorithms (MD5, SHA-1)
   - Security best practices

6. **Modern Algorithm Selection** - Focus on secure, modern algorithms
   - SHA3 (NIST standard since 2015)
   - BLAKE2b (faster than SHA-256, more secure)
   - Deprecation warnings for MD5/SHA-1

**Suggested Marketing Angle:**
"The most flexible hash generator online - hash text or files with 8+ algorithms, toggle only the hashes you need, save your work, and verify file integrity. 100% private, no uploads."

---

## Feature Matrix

| Feature | Us (Current) | Browserling | Hash File Online | Emn178 | PeLock | Md5Calc |
|---------|--------------|-------------|------------------|--------|--------|---------|
| **Algorithms** | 4 | 24+ | 6 | 30+ | 50+ | 60+ |
| **Text Input** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **File Upload** | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Drag & Drop** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Batch Files** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **HMAC** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Hash Verify** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Export (TXT/JSON/CSV)** | ❌ | ❌ | ✅ (5 formats) | ❌ | ❌ | ✅ (JSON) |
| **Output Formats** | Hex (lower) | Hex (lower) | Hex (lower) | Hex/Base64 | Hex (lower) | Hex/JSON |
| **Algorithm Selection** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Hash History** | ❌ | ❌ | ❌ | ✅ (remember) | ❌ | ❌ |
| **Auto-Generate** | ✅ | ❌ | N/A | ✅ | ❌ | ❌ |
| **Individual Copy** | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Client-Side** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Encoding Options** | UTF-8 | UTF-8 | N/A | Many | UTF-8, Hex | UTF-8 |
| **API Access** | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |

**Feature Count:**
- **Our Implementation:** 10 features (+ 2 UNIQUE features)
- **Browserling:** 12 features
- **Hash File Online:** 18 features (most comprehensive file tool)
- **Emn178:** 14 features
- **PeLock:** 10 features
- **Md5Calc:** 11 features

**Our Position:** 10/18 features = **56% of best competitor** (+ Algorithm Selection is UNIQUE)

**After Phase 1:** Would have ~18 features = **100% competitive parity**

**After Phase 2:** Would have ~23 features = **Best-in-class** with unique features

---

## Technical Considerations

### Client-Side Constraints
- File hashing limited by browser memory (~100-200MB practical limit)
- Use chunked reading with FileReader for large files (1MB chunks)
- Web Crypto API supports SHA-1/256/384/512 natively
- Need libraries for SHA3 (js-sha3), BLAKE2 (blakejs)
- CRC32 can be implemented inline (~30 lines)

### Browser Compatibility
- Web Crypto API: All modern browsers (95%+ support)
- FileReader API: Universal support (99%+ browsers)
- TextEncoder: Modern browsers only (polyfill for IE11 if needed)
- localStorage: Universal support

### Performance
- Hashing 100MB file takes ~2-5 seconds (depends on algorithm + device)
- Show progress indicator for files > 10MB
- Use Web Workers for file hashing to avoid UI freeze (Phase 3 optimization)
- Debounce text input (already implemented: 500ms)

### Libraries/Dependencies
- **js-sha3** (~5KB gzipped) - For SHA3-256
- **blakejs** (~10KB gzipped) - For BLAKE2b
- **CRC32** - Inline implementation (~30 lines, no library needed)
- Total added size: ~15KB gzipped

### Algorithm Implementation Notes
- **SHA-384**: Already in Web Crypto API (`crypto.subtle.digest('SHA-384', data)`)
- **SHA3-256**: Use js-sha3 library (https://github.com/emn178/js-sha3)
- **BLAKE2b**: Use blakejs library (https://github.com/dcposch/blakejs)
- **CRC32**: Inline implementation with lookup table
- **HMAC**: Web Crypto API supports HMAC-SHA256/512 natively

---

## Key Findings

### Current Status
- **Feature-rich foundation** - Auto-generation, individual copy, educational content
- **Modern implementation** - Web Crypto API, UTF-8 support
- **Privacy-focused** - 100% client-side processing
- **Missing critical features** - File hashing, algorithm variety, verification

### Competitive Position
- **Below average** - 8 features vs 12-18 average (44-67% of competitors)
- **Limited algorithm selection** - 4 algorithms vs 6-60+ in competitors
- **Text-only focus** - 4/5 competitors support file hashing
- **Strong foundation** - Good UX patterns to build upon

### Biggest Opportunities
1. **File Hashing** - Unlock entire new use case (download verification)
2. **More Algorithms** - Achieve competitive parity (6-8 algorithms minimum)
3. **Algorithm Selection Toggle** - UNIQUE differentiator, no competitor has this
4. **Hash History** - UNIQUE differentiator (proven success in JWT Decoder)
5. **Hash Verification** - Complete the file integrity workflow

### Quick Wins
1. **Hash Verification** (~2-3 hours, HIGH impact) - Input field + visual indicator
2. **Algorithm Selection** (~2-3 hours, HIGH impact, UNIQUE) - Checkboxes + localStorage
3. **Output Format Toggle** (~1-2 hours, MEDIUM impact) - Uppercase/Base64 options
4. **SHA-384** (~1 hour, MEDIUM impact) - Already in Web Crypto API
5. **"Copy All" Button** (~1 hour, LOW effort) - Copy all hashes as JSON

### Implementation Priority
**Phase 1 is CRITICAL** - Without file hashing and more algorithms, we're significantly behind competitors. Phase 1 would take us from 44% competitive (8/18 features) to 100% competitive (18/18 features).

**Phase 2 adds differentiation** - Hash history and algorithm selection are UNIQUE features that no competitor offers.

---

## Recommended Next Steps

1. **Implement Phase 1 MVP** - Focus on file hashing + more algorithms
   - Start with file hashing foundation (FileReader + drag & drop)
   - Add SHA-384 (quick win, already in Web Crypto API)
   - Add SHA3-256 and BLAKE2b (use libraries)
   - Add hash verification input field
   - Add algorithm selection checkboxes

2. **User Testing** - Validate file hashing workflow
   - Test with various file sizes (1KB, 1MB, 10MB, 100MB)
   - Verify progress indicators work well
   - Ensure chunked reading prevents browser freeze

3. **Phase 2 Differentiation** - Add unique features
   - Hash history (copy pattern from JWT Decoder)
   - HMAC support (Web Crypto API)
   - Export capabilities (TXT/JSON/CSV)

4. **Marketing Update** - Update tool description and meta tags
   - Emphasize "text AND file hashing"
   - Highlight "8+ algorithms including modern SHA3 and BLAKE2"
   - Mention "save and label your hashes" (unique feature)
   - Call out "100% private, no uploads"

---

## Implementation Changelog

### 2026-02-16 - Algorithm Selection Checkboxes ✅
**Implemented:**

**Algorithm Selection Features:**
- ✅ Checkbox UI for each algorithm (MD5, SHA-1, SHA-256, SHA-512)
- ✅ `getSelectedAlgorithms()` - returns array of selected algorithms
- ✅ `saveAlgorithmPreferences()` - saves selection to localStorage
- ✅ `loadAlgorithmPreferences()` - loads saved preferences on page load
- ✅ `updateHashVisibility()` - shows/hides hash result divs based on selection
- ✅ Modified `generateHashes()` to only compute selected algorithms
- ✅ Warning message if no algorithms selected
- ✅ Custom success message showing which algorithms were computed

**Content Updates:**
- ✅ Added "Algorithm Selection" to Key Features section
- ✅ Added FAQ entry: "Can I choose which algorithms to compute?"
- ✅ Added structured data FAQ schema entry for algorithm selection
- ✅ CSS styles for checkboxes with accent color

**Highlights:**
- **UNIQUE feature**: 0/5 competitors offer algorithm selection
- **Persistent preferences**: Selection saved in localStorage
- **Performance optimization**: Skip computing unneeded algorithms
- **Cleaner UX**: Hide irrelevant results
- **Improved messaging**: Shows only selected algorithms in success message

**Result:** Hash Generator now offers algorithm selection with persistent preferences - a UNIQUE differentiator vs competitors

---

### 2026-02-16 - Hash Verification Feature ✅
**Implemented:**
- ✅ Hash Verification input field in UI
- ✅ `verifyHash()` function with case-insensitive comparison
- ✅ Visual match indicators:
  - Green checkmark (✓) for matches
  - Red X (✗) for no matches
  - Info icon (ℹ️) when no hashes generated yet
- ✅ Auto-verification after hash generation
- ✅ Highlighted matched algorithm with green border (`.matched` class)
- ✅ CSS styles for verification result states (match, no-match, partial-match)
- ✅ Updated Key Features section
- ✅ Added FAQ entry for hash verification
- ✅ Added structured data FAQ schema entry
- ✅ Updated clearAll() to reset verification state

**Features:**
- Compares expected hash against MD5, SHA-1, SHA-256, SHA-512
- Automatically highlights which algorithm matches
- Real-time verification as user types
- Perfect for verifying file downloads and checksums

**Result:** Completes the verification workflow - users can now verify downloaded files match publisher checksums

---

## Sources
- [Browserling All Hashes Generator](https://www.browserling.com/tools/all-hashes)
- [Hash File Online](https://hash-file.online/)
- [Emn178 SHA256 Tool](https://emn178.github.io/online-tools/sha256.html)
- [PeLock Hash Calculator](https://www.pelock.com/products/hash-calculator)
- [Md5Calc SHA256 Generator](https://md5calc.com/hash/sha256)
