## Overview

Let’s recap what you’ve done so far.

- **Homework 1:** You explored how websites work, modified and published a simple site, and began thinking about the people who use it.
- **Homework 2:** You built the foundation of your personal portfolio with semantic HTML, focusing on content and structure.
- **Homework 3:** You added the presentation layer with CSS, making deliberate choices about typography, color, spacing, and responsive layout.

Now in Homework 4, we’re going to introduce the behavior layer: JavaScript.

You will begin by building a contact form that works with HTML and CSS, then enhance it with JavaScript to provide clearer validation messages and feedback as users complete it. You will also add theme switching and explore view transitions.

The guiding idea is progressive enhancement: start with a usable foundation, then add features that improve the experience. JavaScript can make a site more helpful and interactive without making its basic functionality slow or fragile. Your goal is to make thoughtful additions while preserving the content, structure, and usability you’ve already built.

## Learning Outcomes

- Students will build accessible, responsive contact forms using semantic HTML, associated labels, and native form controls.
- Students will explain how form attributes and field values determine an HTTP request and verify successful submission.
- Students will apply HTML validation constraints and CSS validation states to help users identify and correct input errors without JavaScript.
- Students will use JavaScript variables, conditions, functions, arrays, objects, DOM methods, and events to enhance an existing form.
- Students will use the Constraint Validation API to provide accessible feedback, implement a character counter, and submit serialized error history.
- Students will implement theme switching with CSS custom properties and persistent preferences using `localStorage`.
- Students will integrate the View Transition API while preserving functional fallbacks and respecting reduced-motion preferences.
- Students will test keyboard operation and behavior with JavaScript disabled, and explain when native browser features are sufficient and when additional code adds value.

## Setup

- Create a new repository for Homework 4 using a copy of your Homework 3 personal portfolio. Make all Homework 4 changes in this new repository.
- If you clone your Homework 3 repository, make sure your local copy is connected to your new Homework 4 repository before pushing changes. This prevents you from accidentally updating your Homework 3 submission.
- Create a separate deployment for Homework 4. Options include Netlify, [Cloudflare Workers](https://cloudflare.com/products/workers), [Vercel](https://vercel.com), and [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). If you use Netlify, check that your account has enough credits to keep the site available for grading.
- Keep your Homework 2 and Homework 3 repositories and deployed sites unchanged and accessible so they remain available for grading.

## Part 1 - Implement a Contact Form with HTML and CSS (20 pts)

Before adding JavaScript, build a contact form using **only** the browser’s native HTML features. This will help you understand how form controls, labels, and submission work together, including how the browser packages user input into an HTTP request.

This working form will be your foundation for progressive enhancement. In later parts, you will add validation and richer feedback while keeping the form usable without JavaScript.

At the root of your Homework 4 repository, create a page named `form-no-js.html`. Link to this page from your portfolio’s navigation and use your shared stylesheet to maintain a consistent appearance.

Your form must include:

- A name field using `<input type="text">`.
- An email field using `<input type="email">`.
- A comments field using `<textarea>`.
- A hidden field named `possible_bot` with the default value `true`.
- A submit button using `<button type="submit">`.

The hidden `possible_bot` field is included to demonstrate submission of a hidden value. It is not a working bot-detection mechanism.

Give each submitted field a `name` attribute. Associate each visible field with a descriptive `<label>` using matching `for` and `id` values. Use `autocomplete="name"` and `autocomplete="email"` on the corresponding fields. Place any instructions where users can read them before completing the field; placeholders must not replace labels.

Configure the form to submit using `method="post"` to `https://httpbin.org/post`. This testing endpoint returns the submitted data so you can inspect the request and confirm that your form works. Use sample contact information when testing.

Keep the markup semantic and minimal, and place your styling in an external stylesheet. Do not add JavaScript or inline event handlers.

| Requirement | Details | Points |
| --- | --- | --- |
| Form submission configuration | Set the form’s action to `https://httpbin.org/post` and its method to `post`. Give each submitted field a `name` attribute and include the hidden `possible_bot` field with the default value `true`. | 5 |
| Working submission | The form must submit successfully with JavaScript disabled. Test with sample contact information and verify that the response contains the name, email, comments, and hidden field values. | 5 |
| Structure, accessibility, and styling | Implement the fields and labels described above. Use Flexbox or Grid to place labels above their controls. Match your portfolio’s styling, provide readable text and sufficient contrast, preserve visible keyboard focus, and keep the form usable on narrow screens without page-wide horizontal scrolling. | 10 |
| **Total** | | **20** |

Test the form using only the keyboard: you should be able to reach each visible control, enter information, and submit it. You do not need to send an email or store messages for this part.

## Part 2 - Form Validation with HTML and CSS (20 pts)

Continue working in `form-no-js.html`. The completed version of this file will be graded for both Parts 1 and 2; you do not need to preserve a separate Part 1 version.

Now that your form can submit data, use HTML validation attributes and CSS to help users identify and correct mistakes before submitting.

The browser already provides validation for required fields, email formats, and text length. Your job is to configure these features and present clear instructions and visual feedback.

Do not add JavaScript.

- Make the name, email, and comments fields required using `required`. Clearly identify required fields in their visible labels.
- Keep `type="email"` on the email field so the browser checks its format. You do not need to write an additional email pattern.
- Set `minlength` and `maxlength` values for the name and comments fields. Suggested limits are 1–100 for the name and 10–1,000 for comments. Accept one-character names. You may choose different maximum lengths or a different comments minimum greater than 1 if they suit your form; explain those choices in the form’s visible instructions. Keep each maximum greater than or equal to its minimum.
- Do not restrict names to English letters or exclude legitimate punctuation such as apostrophes and hyphens. You do not need to use every available validation attribute.

Use CSS pseudo-classes such as `:required`, `:user-invalid`, and `:user-valid` to style the form’s validation states. Avoid showing every empty field as an error when the page first loads. Keep visible keyboard focus, and ensure that validation styling does not cause controls or surrounding content to shift.

Do not rely on color alone to communicate errors. Combine styling with clear instructions and the browser’s built-in validation messages. You do not need to create custom error messages for this part.

| Requirement | Details | Points |
| --- | --- | --- |
| Required fields and length limits | Implement the required fields and length limits described above. With JavaScript disabled, attempt to submit the form with a required field empty and verify that the browser blocks submission. The browser’s validation message and your CSS styling must identify the invalid field. | 10 |
| Email validation and visual feedback | Enter a clearly invalid email value, such as `not-an-email`, while completing the other fields correctly. Verify that submission is blocked and that the browser’s validation message and your CSS styling identify the invalid email field. Correct the value and verify that the form can submit successfully. | 10 |
| **Total** | | **20** |

Test all validation behavior with JavaScript disabled. Preserve the labels, keyboard accessibility, responsive layout, and working submission from Part 1.

Test minimum-length validation by typing a nonempty value shorter than the comments minimum and attempting submission. Do not test only by assigning `.value` through JavaScript: native length validation depends on user editing. Also test the empty required fields and invalid email separately so you can identify each result.

For reference, see MDN’s [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) guide.

## What's the point of all this so far?

You now have a styled contact form that accepts input, checks required fields and email formatting, enforces length limits, and submits data—all without JavaScript.

Before moving on, it's important to consider what this tells us about choosing tools:

- **Start with what the browser provides.** HTML forms already support common interactions and validation. Understanding these features helps you avoid rebuilding behavior that is available with a few well-chosen attributes.
- **Semantic HTML provides a useful foundation.** Native controls and associated labels support keyboard interaction and assistive technology. You still need to test accessibility, but you have less custom behavior to implement and maintain.
- **Every dependency should serve a purpose.** Adding JavaScript or a library can introduce downloads, execution time, setup, and maintenance. For a simple form, those costs may bring little benefit if the browser already meets your needs.
- **A working baseline makes enhancements more resilient.** When submission works without JavaScript, users can still complete the form if an enhancement fails to load or encounters an error.
- **Choose tools based on the experience you need.** JavaScript and libraries are useful when they solve a concrete problem. First identify what the existing implementation cannot do well, then decide what to add. This is what separates a junior developer from a more experienced software engineer. **Just because you *can*, doesn't mean you *should.***

In Part 3, you will use JavaScript to provide more specific feedback and richer interactions. Keep the working HTML form as your foundation, and make each addition improve the experience for the person using it.

## Introducing JavaScript

So far, you have used HTML to describe your content and CSS to control its presentation. JavaScript lets you add behavior: responding to input, updating messages, and changing the page as someone uses it.

The lecture slides introduce the language in more depth. Before starting Part 3, review the basics below. You do not need to master the entire language to make a useful enhancement, but you should understand the code you write. If you feel comfortable with the syntax, feel free to skip to the next part to get to the implementation.

### Variables and values

Variables give names to values. Use `const` when you will not reassign the variable, and `let` when its value will change.

```js
const characterLimit = 500;
let remaining = 500;
```

Common values include strings, numbers, and booleans:

```js
const fieldName = "comments"; // String: text inside quotes
const minimumLength = 10;    // Number: no quotes
const isRequired = true;     // Boolean: true or false
```

JavaScript is case-sensitive: `fieldName` and `fieldname` are different names. Use descriptive names, consistent indentation, and semicolons to end statements. Use `//` for a single-line comment or `/* ... */` for a longer comment.

### Operators and conditions

Use operators to calculate values and compare them. An `if` statement runs a block of code when its condition is true.

```js
const characterLimit = 500;
const message = "Hello!";
const remaining = characterLimit - message.length;

if (remaining <= 20) {
    console.log("You are approaching the character limit.");
}
```

Here, `.length` gives the number of string code units, which is how HTML text-length limits are measured. Curly braces `{ }` group statements into a block.

| Syntax | Meaning |
| --- | --- |
| `=` | Assign a value |
| `===` / `!==` | Compare values without automatic type conversion |
| `<`, `>`, `<=`, `>=` | Compare size or order |
| `&&` / `\|\|` / `!` | AND, OR, and NOT |
| `+`, `-`, `*`, `/` | Addition, subtraction, multiplication, and division |

Types matter: `5 === "5"` is false because a number and a string are different types. Be aware that `+` can also join strings.

### Functions

A function groups instructions so you can reuse them. Parameters supply inputs, and `return` provides a result.

```js
function charactersRemaining(text, limit) {
    return limit - text.length;
}

const remaining = charactersRemaining("Hello!", 500);
console.log(remaining); // 494
```

Defining a function does not run it. The parentheses in `charactersRemaining("Hello!", 500)` call the function with those arguments.

### Arrays and objects

An array holds an ordered collection of values. An object groups related information into named properties.

```js
const formErrors = [];

const error = {
    field: "email",
    message: "Enter an email address."
};

formErrors.push(error);
console.log(formErrors[0].field); // "email"
```

Arrays use square brackets `[ ]`, and their indexes start at `0`. Objects use curly braces `{ }`, with colons separating property names from values.

A `const` array can still have items added or removed. `const` prevents reassignment of the variable; it does not make the contents unchangeable.

### JavaScript and the browser

The language provides variables, conditions, functions, arrays, and objects. The browser provides additional interfaces for interacting with your page.

The **Document Object Model (DOM)** represents the page as objects that JavaScript can read and update. For example:

```js
const comments = document.querySelector("#comments");
```

This selects the element with `id="comments"`. The selector follows CSS selector syntax. If no matching element exists, the result is `null`.

Use `.value` to read a form control’s current value and `.textContent` to update an element’s text. Use `addEventListener()` to respond to events:

```js
comments.addEventListener("input", function () {
    console.log(comments.value);
});
```

The function passed to `addEventListener()` is a **callback**: the browser runs it whenever the `input` event occurs. You may also see callbacks written using arrow syntax, such as `() => { ... }`.

### Loading and debugging your code

Keep your JavaScript in an external file. When you begin Part 3, load it using a deferred script:

```html
<script src="form.js" defer></script>
```

For this external script, `defer` allows the HTML to finish parsing before the script runs, so your form elements are available to select.

Use your browser’s DevTools Console to inspect values with `console.log()` and read error messages. Check errors before adding more code: a misspelled variable or an incorrect selector can prevent an enhancement from working.

Before continuing, make sure you can explain how to declare a variable, write a condition, call a function, add an object to an array, and respond to an event. These are the building blocks you will use to enhance your form.

### Handling errors with `try` and `catch`

Some browser operations can throw an exception, interrupting the current code. A `try`/`catch` statement lets you handle that failure and continue with a usable fallback. For example, saving a preference can fail if browser storage is blocked:

```js
const selectedTheme = "dark";

try {
    localStorage.setItem("theme", selectedTheme);
} catch (error) {
    console.warn("The theme preference could not be saved.");
}
```

Code inside `try` is attempted first. If it throws, the `catch` block runs. In Part 4, apply the theme to the page independently of saving it, and handle failures when both reading and writing storage.

### Resources To Practice

The Week 6 discussion slides introduce the following resources. Use them to practice unfamiliar syntax before applying it to your form. These practice activities are optional and ungraded.

- **[Exercism - JavaScript Track](https://exercism.org/tracks/javascript):** Practice with focused exercises and automated feedback. Start with introductory exercises covering variables, strings, conditions, functions, arrays, and objects.
- **[MDN - A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash):** Follow a guided number-guessing game tutorial to see variables, functions, conditions, and events working together. Type the examples, predict what they will do, and try small changes.
- **An LLM as a practice partner:** Ask for short syntax exercises, hints, and feedback on your own attempts. Run the code yourself and check explanations against the lecture material and MDN. For example: “Give me one beginner JavaScript exercise at a time on strings, conditions, functions, arrays, or objects. Wait for my attempt before giving feedback. Offer a hint before showing a solution, and ask me to explain the result.”

Practice actively: predict the result, run the code, and explain any difference. Pay particular attention to automatic type conversion, the difference between `==` and `===`, and the distinct values `undefined`, `null`, `""`, and `0`. 

You will be asked JS syntax on the final so get in the habit of doing this!

## Part 3 - Enhance Your Contact Form with JavaScript (40 pts)

Your form already works without JavaScript. Now add enhancements that help users understand errors, monitor the length of their message, and successfully complete the form.

Copy your completed `form-no-js.html` to a new file named `form-with-js.html` at the repository root. Preserve the original page for grading. Link to both versions from your portfolio.

Write your JavaScript in an external file named `form.js`, loaded with `defer`. Use native browser APIs without a JavaScript framework or form-validation library.

### Validation and feedback

Build on the HTML constraints from Part 2 using the Constraint Validation API. Inspect each field’s `validity` state and use `setCustomValidity()` to provide specific guidance for missing required values, an invalid email format, and text below the minimum length.

Clear custom validity messages with `setCustomValidity("")` when rechecking a field so an old error does not prevent a corrected form from submitting.

Add two clearly identified message areas below the fields:

- An error area that identifies the affected field and explains how to correct the problem.
- An information area that displays the comments field’s remaining character count and any length warning.

Show errors after a user attempts to submit or leaves a field they have edited. Update or remove an error when it is corrected. Keep unresolved errors available until they are corrected; do not make them disappear on a timer.

Associate field-specific guidance with its control using `aria-describedby`. Make new error feedback available to assistive technology, for example through a polite live region. Do not rely on color alone, flash fields, or move keyboard focus while someone is typing.

### Character count

Display the number of characters remaining in the comments field, using its existing `maxlength` as the limit. Update the count as users type, paste, or delete text.

Choose a warning threshold and change both the message and its styling when the remaining count reaches that threshold. At the limit, display a clear message. Reaching the limit is not itself an error. Preserve the native `maxlength` attribute to prevent further entry; you do not need to bypass it or demonstrate an over-limit value. Native enforcement, an accurate counter, a near-limit warning, and an at-limit message satisfy this requirement.

### Error history

Create an array named `form_errors` to record validation errors encountered during unsuccessful submission attempts. Each entry must identify the field and describe the error. You may include additional information, but do not record the user’s name, email address, or message text in this history.

At minimum, record each invalid field once per failed submission attempt, whether the user activates the submit button or submits using the keyboard. A later failed attempt may add a new entry for the same field. Checking a field while someone types or leaves it should update feedback without adding duplicate history entries for that attempt.

Keep previous entries when the user corrects the form. Immediately before a successful submission, serialize the array with `JSON.stringify()` and place it in a hidden field named `form-errors`. Submit it along with the other fields to `https://httpbin.org/post`.

The history only needs to remain available while the current page is open. You do not need to use browser storage.

**Implementation note:** Native validation can block submission before the form’s `submit` event fires. Account for this when recording failed attempts—for example, by listening for `invalid` events on the controls. Do not assume a `submit` listener alone will capture invalid submissions. Calling `checkValidity()` or `reportValidity()` can also trigger `invalid` events, so distinguish submission attempts from other checks. One approach is to inspect `.validity` during editing and reserve validation-triggering methods for submission-related checks. If you listen for `invalid` on the form rather than individual controls, use a capturing listener because the event does not bubble.

| Requirement | Details | Points |
| --- | --- | --- |
| Validation and accessible feedback | Use the Constraint Validation API to provide specific messages for missing required values, invalid email formatting, and text below the minimum length. Display errors in the page, identify the affected fields, and clear stale errors after correction. | 12 |
| Character count and information messages | Show an accurate remaining-character count that updates as the comments change. Provide a visible warning near the limit and a message at the limit. | 8 |
| Error history and submission | Record each invalid field once per failed submission attempt in `form_errors`, including keyboard submission. Avoid duplicate history entries from editing checks. Correct the form and submit it successfully. Verify that the response contains the serialized history in `form-errors` alongside the submitted form fields. | 10 |
| Progressive enhancement | With JavaScript disabled, the enhanced page must retain its HTML validation and normal form submission. Hide JavaScript-dependent information that would otherwise be empty or misleading. Verify keyboard operation and preserve the responsive layout from Parts 1 and 2. | 10 |
| **Total** | | **40** |

Keep the standard POST submission for this part. Your JavaScript should improve the form’s feedback while preserving its working HTML foundation.

For reference, see MDN’s documentation on [`setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity) and the [`invalid` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).

## Part 4 - Themes and View Transitions (20 pts)

Extend your portfolio with two enhancements: a persistent theme preference and a view transition.

Apply the same progressive enhancement approach you used for the form: establish a usable default, then add behavior that improves the experience.

### 4.1 - Theme Switching (10 pts)

Add a clearly labeled control that switches between light and dark themes. It isn't a good idea to assume that a user's theme preferences for their computer are what they want on their webpages.

Use CSS custom properties to manage shared colors, including page backgrounds, text, links, and form controls.

Use `localStorage` to save the selected theme. Restore that preference when users reload the page or navigate to another page on the same deployment.

The control must work with a keyboard and communicate either the current theme or the action it performs. Check that text, links, controls, and focus indicators remain readable in both themes.

Keep `form-no-js.html` free of JavaScript. It must use a readable default theme, but it does not need to restore the saved preference or provide a JavaScript theme switch. On other pages, hide any theme control that requires JavaScript until its functionality is available.

If storage is unavailable, the theme control should still work for the current page. The site must also remain readable and usable with JavaScript disabled.

Handle failures when reading and writing `localStorage` using `try`/`catch`. Apply the selected theme even if saving fails. Test through your deployed website or a local web server rather than opening HTML files directly with a `file:` URL, where storage behavior can differ between browsers. Persistence is required when storage is available; when it is blocked, switching must still work on the current page.

| Requirement | Details | Points |
| --- | --- | --- |
| Themes and control | Implement distinct light and dark themes using shared CSS custom properties. Provide a clearly labeled, keyboard-accessible control. Preserve readable content and visible focus indicators in both themes. | 6 |
| Persistence and fallback | Save and restore the theme using `localStorage`. Verify persistence after reloading and navigating between pages that support the control. Keep the site usable without JavaScript and preserve the script-free version of the form. | 4 |
| **Total** | | **10** |

For reference, see MDN’s [`localStorage` documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### 4.2 - View Transitions (10 pts)

Use the View Transition API to add one visible transition to your portfolio. Choose an interaction where the transition helps users follow a change, such as switching themes, replacing displayed content, or navigating between pages.

You may use either approach:

- **Same-document transition:** Update content or state within the current page, sometimes described as an SPA-style approach. You do not need to build a single-page application.
- **Cross-document transition:** Animate navigation between separate pages, also called an MPA approach.

Use the browser’s View Transition API rather than only a regular CSS transition or animation. Keep the underlying interaction functional when view transitions are unsupported. Respect `prefers-reduced-motion` by removing or substantially reducing the animation for users who request it.

View transitions will be graded in the latest stable desktop Google Chrome. Test your deployed implementation there. The API’s default cross-fade is sufficient; custom animation is optional. With reduced motion enabled, the underlying interaction must still work even if the animation is removed.

For cross-document transitions, both pages must share the same origin (scheme, hostname, and port), and both must opt in through their CSS using `@view-transition { navigation: auto; }`. Trigger the transition through a normal link between those pages, rather than by typing a URL or reloading. The external httpbin response cannot participate in a same-origin transition with your portfolio.

You may use JavaScript for a same-document transition or supported CSS features for a cross-document transition. Do not add scripts to `form-no-js.html`.

| Requirement | Details | Points |
| --- | --- | --- |
| Working view transition | Implement a visible transition using the View Transition API on the deployed portfolio. The underlying content change or navigation must remain functional without API support. Respect the user’s reduced-motion preference. | 7 |
| Integration and usability | Integrate the transition into an existing portfolio interaction. Use a clearly labeled, keyboard-accessible control or navigation link so users can find and activate it through the site’s normal interface. | 3 |
| **Total** | | **10** |

For reference, see MDN’s [View Transition API guide](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

## Deliverables

Submit only these two links through Gradescope:

1. **Repository:** Your Homework 4 GitHub repository URL, containing the completed source code and required assets for Parts 1–4.
2. **Website:** Your deployed Homework 4 website URL, with both contact form versions, theme switching, and the view transition available for grading.

The repository must contain the HTML, CSS, JavaScript, and assets needed for Parts 1–4. Keep `form-no-js.html` and `form-with-js.html` at the repository root and link to both from your portfolio’s navigation. Make the theme control and view transition accessible through the site’s normal interface.

Make sure the repository and deployed website are accessible to the graders and that the committed files match the deployed version. Grading will be based on the source code and working website.

## Conclusion

You have built a working contact form with HTML and CSS, then used JavaScript to improve feedback, remember preferences, and add transitions. Each enhancement builds on a foundation that remains usable without it.

The lesson is to choose tools deliberately. Start with what the browser provides, identify where the experience needs improvement, and add code that serves a clear purpose. Test both the enhanced experience and its fallback—you should be able to explain how each works and why you chose it.

