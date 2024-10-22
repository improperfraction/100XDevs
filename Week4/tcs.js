var value = decodeURIComponent(someValue);

// Validate the format of 'value' to ensure it matches a CSS file path or filename
if (/^css\/.*\.css$/.test(value)) {
  // Escape 'value' before using it in the DOM
  var escapedValue = escapeHtml(value);
  
  // Assign the sanitized and validated 'value' to 'cssUrl'
  cssUrl = escapedValue;
}

// Function to escape HTML entities
function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"'>]/g, function(match) {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#x27;'; // HTML5 single quote escape
      default:
        return match;
    }
  });
}
  