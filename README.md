# Hide Email
this package will find all elements with the class h-email and it will replace contents of that tag with a canvas that has the email

## Usage
First create an element that has a data-hea attribute containing a base64 encoded email and a class of h-email
```html
<a href="#"><span class="email-styles h-email" data-hea="ZW1haWxAZXhhbXBsZS5jb20="></span></a>
```
Then use the HideEmail() function
```javascript
document.addEventListener("DOMContentLoaded", function(event) {
    HideEmails();
});
```
An example of how it is used is in the example.html file.
