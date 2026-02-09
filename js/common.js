/* ==========================================================================
   Code Utils - Common JavaScript
   ========================================================================== */

// ==========================================================================
// Theme Management
// ==========================================================================

const Theme = {
    STORAGE_KEY: 'codeutils-theme',
    LIGHT_CLASS: 'light-mode',

    init() {
        // Default is DARK - only add light-mode class if explicitly saved
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        if (savedTheme === 'light') {
            document.body.classList.add(this.LIGHT_CLASS);
        }
    },

    toggle() {
        document.body.classList.toggle(this.LIGHT_CLASS);
        const isLight = document.body.classList.contains(this.LIGHT_CLASS);
        localStorage.setItem(this.STORAGE_KEY, isLight ? 'light' : 'dark');
        return !isLight; // Return isDark
    },

    isDark() {
        return !document.body.classList.contains(this.LIGHT_CLASS);
    }
};

// ==========================================================================
// Message / Toast Notifications
// ==========================================================================

const Message = {
    container: null,
    timeout: null,

    init(containerId = 'message') {
        this.container = document.getElementById(containerId);
    },

    show(text, type = 'info', duration = 5000) {
        if (!this.container) return;

        this.container.textContent = text;
        this.container.className = 'message ' + type;

        // Scroll message into view
        setTimeout(() => {
            this.container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        if (duration > 0) {
            this.timeout = setTimeout(() => {
                this.hide();
            }, duration);
        }
    },

    success(text, duration) {
        this.show(text, 'success', duration);
    },

    error(text, duration) {
        this.show(text, 'error', duration);
    },

    warning(text, duration) {
        this.show(text, 'warning', duration);
    },

    info(text, duration) {
        this.show(text, 'info', duration);
    },

    hide() {
        if (this.container) {
            this.container.className = 'message';
        }
    }
};

// ==========================================================================
// Clipboard Operations
// ==========================================================================

const Clipboard = {
    async copy(text) {
        if (!text) {
            throw new Error('Nothing to copy');
        }

        try {
            // Modern API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }

            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            return true;
        } catch (err) {
            throw new Error('Failed to copy to clipboard');
        }
    },

    async copyFromElement(elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error('Element not found');
        }
        return this.copy(element.value || element.textContent);
    }
};

// ==========================================================================
// File Operations
// ==========================================================================

const FileHandler = {
    // Read file as text
    readAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    },

    // Read file as data URL (for images, etc.)
    readAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    },

    // Download content as file
    download(content, filename, mimeType = 'text/plain') {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    // Check file size and return warning level
    checkSize(file) {
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > 10) {
            return { level: 'error', message: 'File is too large (>10MB). This may cause browser issues.' };
        } else if (sizeMB > 5) {
            return { level: 'warning', message: 'Large file detected (>5MB). Processing may be slow.' };
        }
        return { level: 'ok', message: null };
    },

    // Get file extension
    getExtension(filename) {
        return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    }
};

// ==========================================================================
// Drag and Drop Handler
// ==========================================================================

const DragDrop = {
    init(dropZoneId, onDrop) {
        const dropZone = document.getElementById(dropZoneId);
        if (!dropZone) return;

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0 && onDrop) {
                onDrop(files[0]);
            }
        });
    }
};

// ==========================================================================
// Recent Tools (localStorage)
// ==========================================================================

const RecentTools = {
    STORAGE_KEY: 'codeutils-recent',
    MAX_ITEMS: 10,

    get() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    add(tool) {
        const recent = this.get().filter(t => t.url !== tool.url);
        recent.unshift({
            ...tool,
            timestamp: Date.now()
        });
        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(recent.slice(0, this.MAX_ITEMS))
        );
    },

    clear() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// ==========================================================================
// Favorites (localStorage)
// ==========================================================================

const Favorites = {
    STORAGE_KEY: 'codeutils-favorites',

    get() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    add(tool) {
        const favorites = this.get().filter(t => t.url !== tool.url);
        favorites.push(tool);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    },

    remove(url) {
        const favorites = this.get().filter(t => t.url !== url);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    },

    toggle(tool) {
        if (this.has(tool.url)) {
            this.remove(tool.url);
            return false;
        } else {
            this.add(tool);
            return true;
        }
    },

    has(url) {
        return this.get().some(t => t.url === url);
    },

    clear() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// ==========================================================================
// Keyboard Shortcuts
// ==========================================================================

const Shortcuts = {
    handlers: {},

    register(key, callback, ctrl = false, alt = false, shift = false) {
        const id = this._getId(key, ctrl, alt, shift);
        this.handlers[id] = callback;
    },

    _getId(key, ctrl, alt, shift) {
        return `${ctrl ? 'ctrl+' : ''}${alt ? 'alt+' : ''}${shift ? 'shift+' : ''}${key.toLowerCase()}`;
    },

    init() {
        document.addEventListener('keydown', (e) => {
            const id = this._getId(e.key, e.ctrlKey, e.altKey, e.shiftKey);
            const handler = this.handlers[id];

            if (handler) {
                e.preventDefault();
                handler(e);
            }
        });
    }
};

// ==========================================================================
// Search Functionality
// ==========================================================================

const Search = {
    tools: [],
    input: null,
    results: null,
    selectedIndex: -1,

    async init(inputId, resultsId) {
        this.input = document.getElementById(inputId);
        this.results = document.getElementById(resultsId);

        if (!this.input || !this.results) return;

        // Load tools data
        try {
            const response = await fetch('/data/tools.json');
            this.tools = await response.json();
        } catch (err) {
            console.warn('Could not load tools data:', err);
            return;
        }

        // Input event
        this.input.addEventListener('input', () => this.search());

        // Focus event
        this.input.addEventListener('focus', () => {
            if (this.input.value.trim()) {
                this.search();
            }
        });

        // Keyboard navigation
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectNext();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectPrev();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this.openSelected();
            } else if (e.key === 'Escape') {
                this.hide();
                this.input.blur();
            }
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!this.input.contains(e.target) && !this.results.contains(e.target)) {
                this.hide();
            }
        });

        // Global shortcut to focus search
        Shortcuts.register('/', () => {
            this.input.focus();
        });
    },

    search() {
        const query = this.input.value.trim().toLowerCase();

        if (!query) {
            this.hide();
            return;
        }

        const matches = this.tools.filter(tool => {
            return tool.name.toLowerCase().includes(query) ||
                   tool.description.toLowerCase().includes(query) ||
                   tool.keywords.some(k => k.toLowerCase().includes(query)) ||
                   tool.category.toLowerCase().includes(query);
        }).slice(0, 8);

        this.showResults(matches);
    },

    showResults(matches) {
        if (matches.length === 0) {
            this.results.innerHTML = '<div class="search-result-item"><p>No tools found</p></div>';
        } else {
            this.results.innerHTML = matches.map((tool, index) => `
                <a href="${tool.url}" class="search-result-item" data-index="${index}">
                    <h4>${this.highlight(tool.name)}<span class="category-tag">${tool.category}</span></h4>
                    <p>${tool.description}</p>
                </a>
            `).join('');
        }

        this.results.classList.add('show');
        this.selectedIndex = -1;
    },

    highlight(text) {
        const query = this.input.value.trim();
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    },

    hide() {
        this.results.classList.remove('show');
        this.selectedIndex = -1;
    },

    selectNext() {
        const items = this.results.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
        this.updateSelection(items);
    },

    selectPrev() {
        const items = this.results.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this.updateSelection(items);
    },

    updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.selectedIndex);
        });
    },

    openSelected() {
        const items = this.results.querySelectorAll('.search-result-item');
        if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
            window.location.href = items[this.selectedIndex].href;
        }
    }
};

// ==========================================================================
// Utility Functions
// ==========================================================================

const Utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format bytes to human readable
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    },

    // Format date
    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },

    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// ==========================================================================
// Initialize on DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Shortcuts.init();
});

// ==========================================================================
// Export for use in other scripts
// ==========================================================================

window.CodeUtils = {
    Theme,
    Message,
    Clipboard,
    FileHandler,
    DragDrop,
    RecentTools,
    Favorites,
    Shortcuts,
    Search,
    Utils
};
