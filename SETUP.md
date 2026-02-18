# Receipt Printer Application Setup Guide

## Overview
This is a self-contained receipt printing web application that can be customized for any business. It supports both guest mode and authenticated user mode with cloud sync via Firebase.

## Features
- 🖨️  Bluetooth and System Printing
- 📱 Mobile Responsive Design
- ☁️ Cloud Sync (Firebase)
- 📊 Receipt History Management
- 🔍 Product Search
- 👥 Multi-user Support
- 🎨 Customizable Store Branding

## Quick Setup for New Businesses

### 1. Basic Configuration (5 minutes)

Edit `config.js` file to customize for your business:

```javascript
const STORE_CONFIG = {
    // Store Information
    storeName: "YOUR BUSINESS NAME",
    storePhone: "+YOUR_PHONE_NUMBER",
    storeEmail: "info@yourbusiness.com",
    storeWebsite: "yourbusiness.com",
    storeAddress: "Your City, Country",
    
    // Store Tagline
    storeTagline: "Your Business Tagline",
    
    // Currency Configuration
    currency: {
        code: "USD", // Change to your currency code
        symbol: "$",   // Change to your currency symbol
        locale: "en-US"
    },
    
    // Receipt Configuration
    receipt: {
        prefix: "YBN", // Your business initials
        paperWidth: "58mm",
        deliveryFee: 1000, // Default delivery fee in your currency
        freeDeliveryThreshold: 0 // Set to amount for free delivery
    }
};
```

### 2. Firebase Setup (Optional, for cloud sync)

If you want cloud sync and multi-device support:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password and Google providers)
4. Enable Firestore Database
5. Copy your Firebase configuration
6. Update the `firebase` section in `config.js`:

```javascript
firebase: {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
}
```

### 3. Product Data Setup

Create a `data/site-config.json` file with your products:

```json
{
    "products": [
        {
            "id": 1,
            "name": "Product Name",
            "sku": "SKU123",
            "price": 10000,
            "category": "Category Name"
        }
    ]
}
```

## File Structure

```
reciept-printer/
├── config.js              # 📝 Main configuration file
├── auth.html              # 🔐 Login/Registration page
├── Recieptprinter.html    # 🖨️ Main receipt printing interface
├── receipts.html          # 📊 Receipt history viewer
├── SETUP.md              # 📖 This setup guide
└── data/
    └── site-config.json   # 📦 Product catalog (optional)
```

## Customization Options

### Store Branding
- Update `storeName`, `storePhone`, `storeEmail` in `config.js`
- Change colors by modifying CSS in each HTML file
- Add your logo by updating the header section

### Currency Changes
1. Update `currency` object in `config.js`
2. Change all "UGX" references in the code to your currency
3. Update delivery fees and other amounts

### Receipt Customization
- Modify receipt format in the `updateReceiptPreview()` function
- Change paper size in `receipt.paperWidth` configuration
- Customize receipt number prefix in `receipt.prefix`

## Deployment Options

### Option 1: Local File System
1. Copy all files to a folder
2. Open `auth.html` in a web browser
3. Works immediately for testing

### Option 2: Web Server
1. Upload files to any web server
2. Access via `https://yourdomain.com/auth.html`
3. Works with HTTPS required for Bluetooth

### Option 3: GitHub Pages (Free)
1. Push files to a GitHub repository
2. Enable GitHub Pages
3. Access via `https://username.github.io/repository/auth.html`

## Testing Checklist

After setup, test these features:

- [ ] User registration and login
- [ ] Guest mode functionality
- [ ] Adding items to receipt
- [ ] Receipt preview
- [ ] System printing
- [ ] Bluetooth printing (requires HTTPS)
- [ ] Receipt history
- [ ] Cloud sync (if Firebase configured)
- [ ] Mobile responsiveness
- [ ] Product search

## Troubleshooting

### Common Issues

**Bluetooth not working**
- Ensure you're using HTTPS or localhost
- Check browser compatibility (Chrome/Edge recommended)
- Verify printer is paired with device

**Firebase sync errors**
- Check Firebase configuration in `config.js`
- Ensure Firestore rules allow read/write access
- Verify user email is verified

**Print formatting issues**
- Adjust `receipt.paperWidth` in config
- Modify CSS in receipt preview section
- Test with different paper sizes

**Product search not working**
- Verify `data/site-config.json` exists and is valid JSON
- Check browser console for errors
- Ensure file path is correct

## Security Notes

- Firebase rules should be configured for production
- Consider adding rate limiting for user registration
- Regular backups recommended for local storage data
- HTTPS required for Bluetooth printing

## Support

For issues or questions:
1. Check browser console for error messages
2. Verify all configuration values are correct
3. Test with different browsers if needed
4. Ensure all files are in the same directory

## Advanced Customization

### Adding New Payment Methods
Edit the payment method dropdown in `Recieptprinter.html`:
```html
<option value="NewMethod">New Payment Method</option>
```

### Custom Receipt Fields
Add new fields to the receipt data structure in `prepareReceiptData()` function.

### Integration with POS Systems
The application can be integrated with external POS systems by:
1. Using the `addProductToReceipt()` function
2. Listening for custom events
3. Modifying the product data structure

## License

This application is provided as-is for customization. You can modify it for your business needs.
