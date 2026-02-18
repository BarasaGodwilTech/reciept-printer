// =============================================
// STORE CONFIGURATION
// =============================================
const STORE_CONFIG = {
    // Store Information
    storeName: "Will's Tech Store",
    storePhone: "+256 751 924 844",
    storeEmail: "info@willstech.store",
    storeWebsite: "willstech.store",
    storeAddress: "Kampala, Uganda",
    
    // Store Tagline
    storeTagline: "Elevate Your Lifestyle With Authentic Tech",
    
    // Currency Configuration
    currency: {
        code: "UGX",
        symbol: "UGX",
        locale: "en-US"
    },
    
    // Receipt Configuration
    receipt: {
        prefix: "WTS",
        paperWidth: "58mm",
        maxItemNameLength: 22,
        deliveryFee: 5000,
        freeDeliveryThreshold: 0 // Set to amount above which delivery is free, or 0 to never auto-free
    },
    
    // Firebase Configuration
    firebase: {
        apiKey: "AIzaSyBTa8LsNopZ7CrJOKF05R8OU1L94toLP7I",
        authDomain: "willstechstore-reciept.firebaseapp.com",
        projectId: "willstechstore-reciept",
        storageBucket: "willstechstore-reciept.firebasestorage.app",
        messagingSenderId: "218930027222",
        appId: "1:218930027222:web:44a92a8c16eaff93b4c777",
        measurementId: "G-0K2H44N77D"
    },
    
    // Storage Keys
    storage: {
        receipts: "willstech_receipts",
        receiptCounter: "willstech_receipt_counter",
        currentUser: "currentUser",
        users: "willstech_users",
        settings: "willstech_settings"
    },
    
    // Application Settings
    app: {
        name: "Receipt Printer",
        version: "2.0",
        author: "Will's Tech Store",
        receiptsPerPage: 12,
        maxSearchResults: 10,
        bluetoothChunkSize: 100,
        bluetoothDelay: 20
    }
};

// =============================================
// HELPER FUNCTIONS
// =============================================

// Format currency based on configuration
function formatCurrency(amount) {
    return `${STORE_CONFIG.currency.code} ${amount.toLocaleString(STORE_CONFIG.currency.locale)}`;
}

// Generate receipt number based on configuration
function generateReceiptNumber() {
    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const timePart = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    const random = String(Math.floor(Math.random() * 100)).padStart(2, '0');
    
    return `${STORE_CONFIG.receipt.prefix}-${datePart}-${timePart}${milliseconds}${random}`;
}

// Generate transaction ID
function generateTransactionId() {
    const now = new Date();
    const timestamp = now.getTime().toString().slice(-8);
    const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `TXN${timestamp}${random}`;
}

// Validate configuration
function validateConfig() {
    const required = ['storeName', 'storePhone', 'currency'];
    const missing = required.filter(key => !STORE_CONFIG[key]);
    
    if (missing.length > 0) {
        console.error('Missing required configuration:', missing);
        return false;
    }
    
    return true;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORE_CONFIG, formatCurrency, generateReceiptNumber, generateTransactionId, validateConfig };
}
