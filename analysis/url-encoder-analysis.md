# URL Encoder/Decoder - Competition Analysis

**Analysis Date:** 2026-02-12
**Status:** Implemented (very basic, major gaps)
**Current File:** url-encoder.html (~390 lines)

---

## Current Implementation

### ✅ Core Features (6 features)
1. **Encode URL** - Convert text using encodeURIComponent()
2. **Decode URL** - Convert encoded strings using decodeURIComponent()
3. **UTF-8/Unicode Support** - Handles international characters and emoji
4. **Copy to Clipboard** - One-click copy of output
5. **Clear Function** - Reset both inputs
6. **Keyboard Shortcuts** - Ctrl+Enter (encode), Ctrl+Shift+Enter (decode)
7. **Error Handling** - Clear messages for invalid encoding
8. **Privacy-First** - 100% client-side processing

### 🎯 Strengths
- Clean, simple interface
- Fast, real-time processing
- Good educational content (comprehensive FAQ)
- No login required
- Privacy-focused

### ⚠️ Current Limitations
- **Very basic functionality** - Only text encoding/decoding
- **No URL parsing** - Can't extract URL components
- **No query string parser** - Can't parse parameters into table
- **No URL builder** - Can't build URLs from key-value pairs
- **No batch processing** - Can't encode multiple lines
- **No file encoding** - Can't encode file contents
- **No encoding options** - Only encodeURIComponent (no encodeURI option)
- **No character encoding selection** - Only UTF-8 (no ASCII, ISO-8859, etc.)
- **No live mode** - Must click button (not real-time)
- **No validation** - Beyond basic decode errors
- **No character reference** - No table showing encoded characters
- **No space encoding option** - Only %20 (no + option)

---

## Competitor Analysis

### Competitor 1: URLEncoder.org
- **URL:** https://www.urlencoder.org/
- **Market Position:** Popular, comprehensive encoding tool
- **Strengths:**
  - **40+ Character Encodings** - UTF-8, ASCII, ISO-8859 variants, Windows, Big-5, EUC-JP, GB18030, etc.
  - **File Encoding** - Upload files up to 100MB and encode contents
  - **Live Mode** - Real-time browser-based encoding (UTF-8 only, no server)
  - **Line-by-Line Processing** - Batch encode multiple entries
  - **MIME Chunking** - 76-character line breaks (RFC 2045)
  - **Newline Handling** - Unix (LF) and Windows (CRLF) options
  - **Educational Documentation** - RFC 3986, reserved/unreserved chars
  - **Multi-Language UI** - 11 language interfaces
  - **SSL Encryption** - Secure file uploads
  - **Auto-Delete Files** - Privacy-focused (15min or after download)
- **Unique Features:**
  - Comprehensive character set support (40+ encodings)
  - File encoding up to 100MB
  - Multi-language interface
  - MIME-compliant chunking
- **UX Patterns:**
  - Character set dropdown
  - File upload interface
  - Live mode toggle
  - Line breaking options
- **Limitations:**
  - Separate encode/decode URLs (not integrated)
  - File uploads touch server (privacy concern)

### Competitor 2: Eric Meyer's Dencoder
- **URL:** https://meyerweb.com/eric/tools/dencoder/
- **Market Position:** Classic, minimal, reliable tool by CSS expert
- **Strengths:**
  - **Offline Capability** - Can save and use locally without internet
  - **Single Textarea** - Minimalist one-box interface
  - **Special Quote Handling** - Encodes quotes and apostrophes
  - **Plus to Space** - Converts + to spaces in decoder
  - **Lightweight** - Extremely minimal code
  - **Approachable Tone** - Self-aware humor, experimental feel
- **Unique Features:**
  - Downloadable for offline use
  - Quote-specific encoding
  - Humorous, honest disclaimers
  - Single-textarea simplicity
- **UX Patterns:**
  - One textarea for input/output
  - Two buttons (encode/decode)
  - Light blue styling
  - Minimal interface
- **Limitations:**
  - Very basic features
  - No batch processing
  - No advanced options

### Competitor 3: URL-Encode-Decode.com
- **URL:** https://www.url-encode-decode.com/
- **Market Position:** Simple tool with encoding options
- **Strengths:**
  - **ASCII vs UTF-8 Toggle** - Choose character encoding table
  - **RFC 3986 Compliant** - Standards-based encoding
  - **Reserved/Unreserved Distinction** - Proper character handling
  - **International Character Support** - Umlauts, accents, non-Latin
  - **Encoding Warnings** - Alerts for non-ASCII with ASCII mode
- **Unique Features:**
  - ASCII vs UTF-8 mode selection
  - Educational warnings about encoding mismatches
- **UX Patterns:**
  - Encoding mode selector
  - Warning messages for incompatible modes
- **Limitations:**
  - Basic text-only tool
  - No URL parsing
  - No batch processing

### Competitor 4: Jam.dev URL Encoder
- **URL:** https://jam.dev/utilities/url-encoder
- **Market Position:** Free, open-source, developer-focused
- **Strengths:**
  - **Tab Interface** - Clean encode/decode toggle
  - **Dark Mode** - Theme switcher with system preference
  - **One-Click Copy** - Easy clipboard integration
  - **Special Character Handling** - Proper percent encoding
  - **Query String Support** - Full key-value pair encoding
  - **Integration** - Part of Jam debugging ecosystem
- **Unique Features:**
  - System-aware theme switching
  - Browser extension integration
  - Open-source codebase
- **UX Patterns:**
  - Two-tab interface
  - Theme persistence via localStorage
  - Clear labeling
- **Limitations:**
  - Basic text-only
  - No advanced features
  - No URL parsing

### Competitor 5: FreeFormatter URL Parser
- **URL:** https://www.freeformatter.com/url-parser-query-string-splitter.html
- **Market Position:** Advanced URL analysis tool
- **Strengths:**
  - **Component Extraction** - Scheme, protocol, hostname, port, path, query, hash
  - **Query String Table** - Key-value pairs in human-readable format
  - **Array Parameter Handling** - Multiple values with index notation
  - **Authentication Parsing** - Username, password, userinfo extraction
  - **Domain Analysis** - Subdomain, domain, TLD separation
  - **Automatic Decoding** - Converts encoded characters to readable text
  - **Dynamic Display** - Shows/hides fields based on presence
  - **URI.js Integration** - Robust parsing library
- **Unique Features:**
  - **Complete URL breakdown** into all components
  - **Query parameter table view** with arrays
  - **Authentication extraction**
  - **Domain/subdomain parsing**
- **UX Patterns:**
  - Table display for parameters
  - Component-by-component breakdown
  - Dynamic field visibility
- **Limitations:**
  - Parsing only (no encoding)
  - Separate tool (not integrated)

---

## Gap Analysis

### Missing Features (High Priority)

1. **URL Parser & Component Extractor** (Found in: 1/5 competitors)
   - Extract scheme, protocol, hostname, port, path
   - Parse query string into key-value table
   - Show fragment/hash
   - Authentication (username, password)
   - Domain breakdown (subdomain, domain, TLD)
   - Essential for debugging URLs

2. **Query String Builder** (Found in: 1/5 competitors)
   - Build URLs from key-value pairs
   - Add/remove parameters dynamically
   - Auto-encode values
   - Copy full URL or just query string
   - Developer productivity tool

3. **Batch Processing (Line-by-Line)** (Found in: 1/5 competitors)
   - Encode/decode multiple URLs at once
   - Process each line independently
   - Show results for each entry
   - Bulk operations for efficiency

4. **Live Mode (Real-Time Encoding)** (Found in: 1/5 competitors)
   - Encode as user types (debounced)
   - No button click needed
   - Toggle option
   - Better UX for quick operations

5. **Encoding Mode Options** (Found in: 0/5 competitors explicitly)
   - encodeURI vs encodeURIComponent
   - + vs %20 for spaces
   - Explain differences
   - Mode selector

### UX Improvements

1. **Character Encoding Selection** (Found in: 2/5 competitors)
   - UTF-8 (default)
   - ASCII
   - ISO-8859-1 (Latin-1)
   - Dropdown selector
   - Educational tooltips

2. **Character Reference Table** (Found in: 1/5 competitors)
   - Show common characters and their encoding
   - Reserved vs unreserved characters
   - Quick reference guide
   - Educational value

3. **URL Validation** (Found in: 1/5 competitors)
   - Validate URL structure
   - Check for common errors
   - Suggest fixes
   - Color-coded feedback

4. **File Encoding** (Found in: 1/5 competitors)
   - Upload file and encode contents
   - Useful for data URIs
   - Max 10MB (client-side limit)
   - Show file size warning

5. **Auto-Detect Mode** (Found in: 0/5 competitors)
   - Automatically detect if input is encoded or plain
   - Smart mode switching
   - Reduce user decisions

### Opportunities

1. **All-in-One URL Tool**
   - Encode, decode, parse, build in one place
   - No need for multiple tools
   - Comprehensive URL manipulation

2. **Developer-Friendly**
   - Query string builder for API testing
   - URL parser for debugging
   - Code snippets for different languages

3. **Educational Content**
   - Character reference table
   - RFC explanations
   - Best practices guide

4. **Privacy Advantage**
   - 100% client-side (even file encoding)
   - Competitors upload files to servers
   - Major differentiator

---

## Impact Ranking

### 🔥 High Impact (Priority 1) - Quick Wins

1. **URL Parser & Component Extractor**
   - **Why:** Essential debugging tool, huge value-add, unique among basic encoders
   - **Effort:** Medium (URL parsing, component extraction, table display)
   - **Found in:** 1/5 competitors (FreeFormatter specializes in this)
   - **Feasibility:** Fully client-side feasible (URL API + regex)
   - **Implementation:** Use URL API for parsing, display components in sections
   - **Time:** ~6-8 hours

2. **Query String Builder**
   - **Why:** Developer productivity, API testing, unique feature
   - **Effort:** Medium (dynamic form, key-value pairs, auto-encode)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Dynamic add/remove param rows, build query string
   - **Time:** ~5-7 hours

3. **Live Mode (Real-Time)**
   - **Why:** Better UX, no button clicks, modern expectation
   - **Effort:** Low (debounce input event)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Listen to input, debounce 300ms, auto-encode
   - **Time:** ~2-3 hours

4. **Batch Processing (Line-by-Line)**
   - **Why:** Bulk operations, save time, efficiency
   - **Effort:** Low-Medium (split lines, encode each, join)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Split by \n, process each, display results
   - **Time:** ~3-4 hours

5. **Encoding Mode Options**
   - **Why:** Educational, covers different use cases (full URL vs component)
   - **Effort:** Low (add encodeURI option, explain difference)
   - **Found in:** Not explicit in competitors but important
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Radio buttons: encodeURI / encodeURIComponent
   - **Time:** ~2-3 hours

### ⚡ High Impact (Priority 2) - Major Features

6. **Character Reference Table**
   - **Why:** Educational, quick reference, reduces confusion
   - **Effort:** Low (static table with common characters)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Collapsible table showing char → encoding
   - **Time:** ~3-4 hours

7. **URL Validation**
   - **Why:** Catch errors early, helpful feedback
   - **Effort:** Medium (validation rules, error messages)
   - **Found in:** 1/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Validate URL structure, highlight errors
   - **Time:** ~4-5 hours

8. **Auto-Detect Mode**
   - **Why:** Smart UX, reduces user decisions
   - **Effort:** Low (regex check for % encoding)
   - **Found in:** Not in competitors (opportunity!)
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Detect if input contains %XX, auto-switch mode
   - **Time:** ~2-3 hours

9. **Character Encoding Selection**
   - **Why:** Handle different encoding scenarios (ASCII, ISO-8859)
   - **Effort:** Medium (implement different encoding methods)
   - **Found in:** 2/5 competitors
   - **Feasibility:** Fully client-side feasible
   - **Implementation:** Dropdown selector, TextEncoder for different charsets
   - **Time:** ~4-5 hours

10. **Space Encoding Option (+ vs %20)**
    - **Why:** Different contexts use different encodings
    - **Effort:** Low (replace %20 with + in output)
    - **Found in:** Mentioned in competitors
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** Checkbox to convert %20 to + for form data
    - **Time:** ~1-2 hours

### 📊 Medium Impact (Priority 3) - Nice to Have

11. **File Encoding**
    - **Why:** Useful for data URIs, complete feature set
    - **Effort:** Medium (FileReader, encode contents)
    - **Found in:** 1/5 competitors (URLEncoder.org)
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** File upload, read as text, encode
    - **Time:** ~4-5 hours

12. **MIME Line Breaking**
    - **Why:** Email/MIME compatibility
    - **Effort:** Low (chunk output every 76 chars)
    - **Found in:** 1/5 competitors
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** Insert \n every 76 chars
    - **Time:** ~1-2 hours

13. **Copy Individual Components**
    - **Why:** Convenience for parsed URLs
    - **Effort:** Low (copy buttons for each component)
    - **Found in:** Not in competitors
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** Copy button next to each parsed component
    - **Time:** ~2-3 hours

14. **URL Builder from Components**
    - **Why:** Construct URLs from parts
    - **Effort:** Medium (form for each component, build URL)
    - **Found in:** Not in competitors
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** Inputs for protocol, host, path, query, build URL
    - **Time:** ~5-6 hours

15. **Preset Examples**
    - **Why:** Quick start, educational
    - **Effort:** Low (dropdown with sample URLs)
    - **Found in:** Not in competitors
    - **Feasibility:** Fully client-side feasible
    - **Implementation:** Dropdown with example URLs, populate input
    - **Time:** ~1-2 hours

### 💤 Low Impact (Backlog) - Future Consideration

16. **Multi-Language Interface**
    - **Why:** International accessibility
    - **Effort:** High (translations, i18n framework)
    - **Found in:** 1/5 competitors (URLEncoder.org)
    - **Feasibility:** Client-side feasible but extensive work
    - **Implementation:** i18n library, translation files
    - **Time:** ~20-30 hours

17. **Punycode Encoding (IDN)**
    - **Why:** International domain names
    - **Effort:** Medium (punycode library)
    - **Found in:** Not in competitors
    - **Feasibility:** Client-side feasible (punycode.js)
    - **Implementation:** Convert internationalized domains to ASCII
    - **Time:** ~4-6 hours

---

## Implementation Recommendations

### Phase 1: Core Advanced Features (2-3 weeks)
Essential features to transform from basic to comprehensive

- [ ] **URL Parser & Component Extractor** - Parse URLs into components (~6-8 hours)
- [ ] **Query String Builder** - Build URLs from key-value pairs (~5-7 hours)
- [ ] **Live Mode** - Real-time encoding (~2-3 hours)
- [ ] **Batch Processing** - Line-by-line operations (~3-4 hours)
- [ ] **Encoding Mode Options** - encodeURI vs encodeURIComponent (~2-3 hours)

**Total Effort:** ~20-25 hours (2-3 weeks part-time)

### Phase 2: UX & Educational (1-2 weeks)
Improve usability and learning

- [ ] **Character Reference Table** - Quick reference guide (~3-4 hours)
- [ ] **URL Validation** - Structure validation (~4-5 hours)
- [ ] **Auto-Detect Mode** - Smart encode/decode switching (~2-3 hours)
- [ ] **Space Encoding Option** - + vs %20 toggle (~1-2 hours)
- [ ] **Preset Examples** - Sample URLs dropdown (~1-2 hours)

**Total Effort:** ~12-16 hours (1-2 weeks part-time)

### Phase 3: Advanced & Polish (1-2 weeks)
Complete feature set

- [ ] **Character Encoding Selection** - UTF-8/ASCII/ISO-8859 (~4-5 hours)
- [ ] **File Encoding** - Encode file contents (~4-5 hours)
- [ ] **Copy Individual Components** - Copy each parsed part (~2-3 hours)
- [ ] **URL Builder from Components** - Construct URLs (~5-6 hours)
- [ ] **MIME Line Breaking** - 76-char chunks (~1-2 hours)

**Total Effort:** ~15-20 hours (1-2 weeks part-time)

---

## Competitive Advantages

How Code Utils URL Encoder can differentiate:

1. **All-in-One URL Tool**
   - Encode, decode, parse, build in one place
   - No need to visit 3 different tools
   - Complete URL manipulation suite
   - **Marketing:** "Every URL tool you need in one place"

2. **Developer-Friendly Features**
   - Query string builder for API testing
   - URL parser for debugging
   - Component extractor for analysis
   - **Marketing:** "Built for developers who work with URLs daily"

3. **Privacy-First Processing**
   - 100% client-side (even file encoding)
   - Competitors upload files to servers (privacy risk)
   - No data transmission whatsoever
   - **Marketing:** "Encode URLs privately - nothing leaves your browser"

4. **Educational & Helpful**
   - Character reference table
   - Encoding mode explanations
   - URL component breakdown
   - **Marketing:** "Learn while you encode"

5. **Smart & Efficient**
   - Auto-detect encode vs decode
   - Live mode (real-time)
   - Batch processing for multiple URLs
   - **Marketing:** "Work faster with smart features"

---

## Technical Considerations

### URL Parsing Implementation

**Native URL API:**
```javascript
function parseURL(urlString) {
    try {
        const url = new URL(urlString);

        return {
            protocol: url.protocol,    // "https:"
            hostname: url.hostname,    // "example.com"
            port: url.port,            // "8080" or ""
            pathname: url.pathname,    // "/path/to/page"
            search: url.search,        // "?key=value"
            hash: url.hash,            // "#section"
            origin: url.origin,        // "https://example.com:8080"
            href: url.href             // Full URL
        };
    } catch (error) {
        return null; // Invalid URL
    }
}

// Parse query string
function parseQueryString(search) {
    const params = new URLSearchParams(search);
    const result = [];

    for (const [key, value] of params.entries()) {
        result.push({ key, value });
    }

    return result;
}
```

### Query String Builder

```javascript
function buildQueryString(params) {
    const urlParams = new URLSearchParams();

    params.forEach(({ key, value }) => {
        if (key && value !== undefined) {
            urlParams.append(key, value);
        }
    });

    return urlParams.toString();
}
```

### Live Mode with Debouncing

```javascript
let debounceTimer;
function onInputChange() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (liveModeEnabled) {
            encodeURL();
        }
    }, 300); // 300ms debounce
}

input.addEventListener('input', onInputChange);
```

### Encoding Mode Options

```javascript
function encode(text, mode) {
    if (mode === 'encodeURI') {
        // Encode full URL, preserve :/?#[]@!$&'()*+,;=
        return encodeURI(text);
    } else {
        // Encode component, encode all special chars
        return encodeURIComponent(text);
    }
}
```

### Auto-Detect Encoding

```javascript
function isURLEncoded(str) {
    // Check if string contains % followed by two hex digits
    const encoded = /%[0-9A-Fa-f]{2}/.test(str);

    // Also check if decoding changes the string
    try {
        const decoded = decodeURIComponent(str);
        return encoded && str !== decoded;
    } catch {
        return false;
    }
}
```

### Browser Compatibility
- URL API: All modern browsers
- URLSearchParams: All modern browsers
- encodeURI/encodeURIComponent: Universal
- TextEncoder/TextDecoder: All modern browsers

### Performance Optimizations
- Debounce live mode (300ms)
- Limit batch processing (max 1000 lines)
- Progressive display for large batches
- Web Worker for very large operations (future)

### Libraries/Dependencies
**Current:** None (vanilla JS)

**Recommended:** NONE NEEDED
- All features implementable with native Web APIs
- URL API for parsing
- URLSearchParams for query strings
- No external dependencies required

---

## Competitive Feature Matrix

| Feature | Code Utils | URLEncoder.org | Eric Meyer | url-encode-decode | Jam.dev | FreeFormatter |
|---------|-----------|----------------|------------|-------------------|---------|---------------|
| **Core Features** |
| Encode Text | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Decode Text | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| UTF-8 Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Copy to Clipboard | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Advanced Encoding** |
| Live Mode | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Batch Processing | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| File Encoding | ❌ | ✅ (100MB) | ❌ | ❌ | ❌ | ❌ |
| Character Encoding | ❌ | ✅ (40+) | ❌ | ✅ (2) | ❌ | ❌ |
| MIME Chunking | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Encoding Options** |
| encodeURI option | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| encodeURIComponent | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| + for spaces option | ❌ | ❌ | Decode only | ❌ | ❌ | ❌ |
| **URL Parsing** |
| URL Parser | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Component Extract | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Query String Table | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Query Builder | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Domain Parsing | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **UX Features** |
| Dark Mode | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Keyboard Shortcuts | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Auto-Detect | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Character Reference | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Validation | ❌ | ❌ | ❌ | Warnings | ❌ | ❌ |
| Offline Use | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Education** |
| Documentation | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| RFC References | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Multi-Language | ❌ | ✅ (11) | ❌ | ❌ | ❌ | ❌ |
| **Privacy** |
| Client-Side Only | ✅ | ✅* | ✅ | ✅ | ✅ | ✅ |
| No File Upload | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| No Tracking | ✅ | ? | ? | ? | ? | ? |

**Summary:**
- **We have:** 6/35 features (17%)
- **Leading in:** Privacy, dark mode, keyboard shortcuts
- **Missing:** URL parsing, query builder, batch processing, live mode

---

## Key Findings & Next Steps

### Top 3 Insights

1. **URL Parser is Game-Changer** - FreeFormatter has this, it's incredibly useful for debugging
2. **Query String Builder is Unique** - Build URLs from key-value pairs, huge developer value
3. **Live Mode is Expected** - Real-time encoding without clicking is modern UX standard

### Quick Win Opportunities

**Phase 1 features** (URL parser, query builder, live mode, batch processing, encoding options) would take ~20-25 hours and transform this from a basic text encoder to a comprehensive URL manipulation suite. The URL parser alone is a massive differentiator.

### Differentiation Strategy

Focus marketing on:
1. **All-in-One** - Encode, decode, parse, build in one place
2. **Developer Tools** - Query builder and URL parser for debugging/testing
3. **Privacy** - 100% client-side, even file encoding
4. **Smart Features** - Auto-detect, live mode, batch processing
5. **Educational** - Character reference, explanations, RFC standards

### Recommended Immediate Actions

1. **Start Phase 1 this week** - URL parser (highest value, ~6-8 hours)
2. **Add live mode** - Quick win, better UX (~2-3 hours)
3. **Implement query builder** - Unique feature (~5-7 hours)
4. **Plan Phase 2** - Character reference, validation, auto-detect

---

## Sources

- [URLEncoder.org](https://www.urlencoder.org/)
- [URLDecoder.org](https://www.urldecoder.org/)
- [Eric Meyer's URL Decoder/Encoder](https://meyerweb.com/eric/tools/dencoder/)
- [URL-Encode-Decode.com](https://www.url-encode-decode.com/)
- [Jam.dev URL Encoder](https://jam.dev/utilities/url-encoder)
- [FreeFormatter URL Parser & Query String Splitter](https://www.freeformatter.com/url-parser-query-string-splitter.html)
- [Coders Tool Query String Encoder](https://www.coderstool.com/querystring-encode)
- [JSON to Table Query String Builder](https://jsontotable.org/query-string-builder)

---

**Last Updated:** 2026-02-12
**Next Review:** 2026-08-12 (6 months)
