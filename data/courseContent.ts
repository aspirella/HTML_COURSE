import { Syllabus } from '../types.ts';

export const courseData: Syllabus = {
  phases: [
    {
      id: 1,
      title: "Phase 1: The Foundation",
      subtitle: "Beginner",
      description: "Master the fundamental syntax, document structure, and basic tags that form the skeleton of every website.",
      isLocked: false,
      lessons: [
        {
          id: "1.1",
          title: "HTML Syntax & Elements",
          concept: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It uses 'tags' to annotate text, images, and other content. An element usually consists of a start tag, content, and an end tag.",
          syntax: `<tagname>Content goes here...</tagname>`,
          example: `<!-- A simple paragraph element -->\n<p>Hello, World!</p>\n\n<!-- A nested element -->\n<p>HTML is <strong>awesome</strong>!</p>`,
          proTip: "Always close your tags! While some browsers 'fix' unclosed tags, it leads to unpredictable layouts and poor performance. Professional code is always explicit.",
          miniExercise: "Create a paragraph tag that contains your name, with your surname wrapped in a <strong> tag."
        },
        {
          id: "1.2",
          title: "The Skeleton: Document Structure",
          concept: "Every HTML document follows a strict boilerplate. This tells the browser which version of HTML you're using (DOCTYPE), sets the language, and divides the code into two main sections: the <head> (metadata) and the <body> (visible content).",
          syntax: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    Content...\n  </body>\n</html>`,
          example: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome to my site!</h1>\n</body>\n</html>`,
          proTip: "The <title> tag isn't just for browser tabs; it's the primary factor for SEO search result headlines. Make it descriptive!",
          miniExercise: "Write out the basic boilerplate for a website titled 'Portfolio' from memory."
        },
        {
          id: "1.3",
          title: "Text Formatting & Headings",
          concept: "Headings (h1 through h6) represent the hierarchy of your content. h1 is the most important, h6 the least. Paragraphs (p) hold your bulk text.",
          syntax: `<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<p>Body text...</p>`,
          example: `<h1>Cooking with Gas</h1>\n<p>Learning to cook is a vital life skill.</p>\n<h2>Breakfast Recipes</h2>\n<p>Scrambled eggs are a great place to start.</p>`,
          proTip: "Never use heading tags just to make text 'bigger'. Use them for structure. Accessibility tools use headings to navigate a page for visually impaired users.",
          miniExercise: "Create a page structure with one H1, two H2s, and one paragraph under each H2."
        },
        {
          id: "1.4",
          title: "Lists (Ordered & Unordered)",
          concept: "Lists help group related items. Use <ul> for bullet points (unordered) and <ol> for numbered lists (ordered). Every list item must be wrapped in an <li> tag.",
          syntax: `<ul>\n  <li>Item</li>\n</ul>\n\n<ol>\n  <li>Step 1</li>\n</ol>`,
          example: `<h3>Shopping List</h3>\n<ul>\n  <li>Apples</li>\n  <li>Bread</li>\n</ul>\n\n<h3>To-Do</h3>\n<ol>\n  <li>Buy groceries</li>\n  <li>Cook dinner</li>\n</ol>`,
          proTip: "You can nest lists! A <ul> can contain an <li> which itself contains another <ul> to create sub-menus.",
          miniExercise: "Create a numbered list of your 3 favorite movies."
        },
        {
          id: "1.5",
          title: "Hyperlinks: The Web's Glue",
          concept: "The <a> (anchor) tag creates links. The 'href' attribute specifies the destination URL. Without links, the web would just be isolated documents.",
          syntax: `<a href="https://example.com">Link Text</a>`,
          example: `<p>Learn more on <a href="https://google.com" target="_blank">Google</a>.</p>`,
          proTip: "When using 'target=\"_blank\"' (to open in a new tab), always add 'rel=\"noopener\"' for security reasons.",
          miniExercise: "Create a link that points to your favorite website and opens it in a new tab."
        },
        {
          id: "1.6",
          title: "Images & Visual Media",
          concept: "The <img> tag embeds images. It is an 'empty' element (no closing tag). It requires 'src' (source) and 'alt' (alternative text) attributes.",
          syntax: `<img src="image.jpg" alt="Description of image">`,
          example: `<img src="https://picsum.photos/400/200" alt="A beautiful landscape">\n<p>Above is a random image.</p>`,
          proTip: "The 'alt' attribute is mandatory for accessibility. If the image fails to load, the alt text appears. Screen readers also read it aloud.",
          miniExercise: "Add an image from 'https://picsum.photos/200' with descriptive alt text."
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Data & Interaction",
      subtitle: "Intermediate",
      description: "Dive into complex data display and user input using tables and advanced form controls.",
      isLocked: false,
      lessons: [
        {
          id: "2.1",
          title: "Modern Tables",
          concept: "Tables are used only for tabular data (like pricing lists, schedules, or sports scores). Never use tables for page layout; today we use CSS Grid/Flexbox for that. Semantic table elements help structure rows, headers, and bodies.",
          syntax: `<table>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</table>`,
          example: `<table>\n  <thead>\n    <tr>\n      <th scope="col">Product</th>\n      <th scope="col">Price</th>\n      <th scope="col">Stock</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Mechanical Keyboard</td>\n      <td>$120.00</td>\n      <td>In Stock</td>\n    </tr>\n    <tr>\n      <td>Gaming Mouse</td>\n      <td>$60.00</td>\n      <td>Out of Stock</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">Total items: 2</td>\n    </tr>\n  </tfoot>\n</table>`,
          proTip: "Always use the scope='col' or scope='row' attribute on your <th> tags. This tells screen readers exactly which cells the header applies to, making your table accessible.",
          miniExercise: "Create a table showing a weekly weather forecast with columns for Day, High Temp, and Low Temp."
        },
        {
          id: "2.2",
          title: "Forms & Labels",
          concept: "Forms are how users send data to a server. The most critical part of a form is the relationship between the Input (where they type) and the Label (what explains the input).",
          syntax: `<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n</form>`,
          example: `<form>\n  <!-- The 'for' attribute MUST match the 'id' of the input -->\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username">\n\n  <label for="user-pass">Password:</label>\n  <input type="password" id="user-pass" name="password">\n  \n  <button type="submit">Login</button>\n</form>`,
          proTip: "Never use just a placeholder instead of a <label>. Placeholders disappear when the user starts typing, causing accessibility and usability issues.",
          miniExercise: "Create a simple 'Newsletter Sign-up' form with a First Name field and an Email field."
        },
        {
          id: "2.3",
          title: "Advanced Input Types & Validation",
          concept: "HTML5 introduced specific input types that optimize mobile keyboards (e.g., email vs number pad) and provide automatic browser-side validation.",
          syntax: `<input type="email" required>\n<input type="number" min="1" max="10">\n<input type="date">`,
          example: `<form>\n  <label for="age">Age (18+):</label>\n  <input type="number" id="age" name="age" min="18" max="99" required>\n\n  <fieldset>\n    <legend>Choose your Plan:</legend>\n    <input type="radio" id="free" name="plan" value="free" checked>\n    <label for="free">Free Tier</label>\n    \n    <input type="radio" id="pro" name="plan" value="pro">\n    <label for="pro">Pro Tier</label>\n  </fieldset>\n\n  <button type="submit">Join</button>\n</form>`,
          proTip: "The 'name' attribute is what the server reads (e.g., plan=pro). If you forget the name, the data is never sent even if the input is filled!",
          miniExercise: "Create a 'Booking Form' asking for: Date of arrival, Number of Guests, and a 'Room Type' (Standard vs. Deluxe) using radio buttons."
        },
        {
          id: "2.4",
          title: "Dropdowns & Text Areas",
          concept: "When you need the user to select from a long list or type a long message, use <select> and <textarea> elements.",
          syntax: `<select name="choice">\n  <option value="1">One</option>\n</select>\n<textarea name="message"></textarea>`,
          example: `<label for="country">Select Country:</label>\n<select id="country" name="country">\n  <option value="">--Please choose an option--</option>\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n  <option value="uk">United Kingdom</option>\n</select>\n\n<label for="bio">Biography:</label>\n<textarea id="bio" name="bio" rows="5" cols="33"></textarea>`,
          proTip: "For the <select> tag, the first option should usually be a disabled or empty 'prompt' so the user is forced to make a conscious selection.",
          miniExercise: "Add a 'How did you hear about us?' dropdown to your previous form."
        },
        {
          id: "2.5",
          title: "Media (Audio & Video)",
          concept: "HTML5 allows embedding rich media directly into the browser using native tags without needing third-party plugins.",
          syntax: `<video controls>\n  <source src="vid.mp4" type="video/mp4">\n</video>`,
          example: `<video controls poster="https://picsum.photos/400/225" width="400">\n  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n  <!-- Caption track for Accessibility -->\n  <track kind="captions" src="captions_en.vtt" srclang="en" label="English">\n  Your browser does not support the video tag.\n</video>`,
          proTip: "Never auto-play video with sound. Most browsers block it automatically, and it creates a poor user experience. If you must autoplay, add the 'muted' attribute.",
          miniExercise: "Find a sample MP4 link and embed it with controls and a width of 300px."
        }
      ]
    },
    {
      id: 3,
      title: "Phase 3: Architecture & Semantics",
      subtitle: "Advanced",
      description: "Learn how to structure professional-grade websites using semantic markup and proper metadata.",
      isLocked: false,
      lessons: [
        {
          id: "3.1",
          title: "The 'Holy Grail' Layout",
          concept: "In the past, developers used <div id='header'>. HTML5 introduced specific tags for common areas, allowing browsers and assistive tech to understand exactly what each part of the page does.",
          syntax: `<header>Logo/Nav</header>\n<nav>Links</nav>\n<main>Content</main>\n<footer>Info</footer>`,
          example: `<body>\n  <header>\n    <h1>TechDaily Blog</h1>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n\n  <main>\n    <h2>Top 5 HTML Tips</h2>\n    <p>Semantic HTML is the future...</p>\n  </main>\n\n  <footer>\n    <p>&copy; 2023 TechDaily. All rights reserved.</p>\n  </footer>\n</body>`,
          proTip: "The <main> tag is crucial for accessibility. It allows screen readers to use a 'Skip to Content' feature, bypassing repetitive navigation menus.",
          miniExercise: "Rewrite a basic layout that uses <div class='nav'> and <div class='footer'> using correct semantic HTML5 tags."
        },
        {
          id: "3.2",
          title: "Grouping: Article, Section, Aside",
          concept: "Inside the <main> tag, we divide content into logical groups. <article> is for self-contained items, <section> for thematic groups, and <aside> for sidebars.",
          syntax: `<article>\n  <section>Part 1</section>\n</article>\n<aside>Ads/Links</aside>`,
          example: `<main>\n  <article>\n    <h2>Review: The New iPhone</h2>\n    <p>It is faster than ever.</p>\n    \n    <section>\n      <h3>Camera Specs</h3>\n      <p>The lens is 48MP...</p>\n    </section>\n  </article>\n\n  <aside>\n    <h3>Related Reviews</h3>\n    <a href="/samsung">Samsung S23 Review</a>\n  </aside>\n</main>`,
          proTip: "Deciding between <section> and <div>? If the grouping needs a heading (h1-h6), use <section>. If it's just for CSS styling, use <div>.",
          miniExercise: "Think of a news site. Identify which parts are <nav>, <article>, and <aside>."
        },
        {
          id: "3.3",
          title: "The <head>: The Page's Brain",
          concept: "The <head> contains metadata that isn't displayed but tells the browser and search engines how to handle the page.",
          syntax: `<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width'>\n<meta name='description' content='...'>`,
          example: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Best Pizza in NYC | Joe's Pizza</title>\n  <meta name="description" content="Rated #1 Pizza in New York. Fresh ingredients. Order now.">\n  <link rel="stylesheet" href="styles.css">\n</head>`,
          proTip: "Your <title> tag is the single most important element for SEO ranking. Keep it under 60 characters and make it descriptive.",
          miniExercise: "Create a <head> section for a portfolio website with a catchy meta description under 160 characters."
        },
        {
          id: "3.4",
          title: "Social Media Meta (Open Graph)",
          concept: "Open Graph (OG) tags control how your website looks when shared on platforms like iMessage, Slack, or Twitter/X.",
          syntax: `<meta property="og:title" content="...">\n<meta property="og:image" content="...">`,
          example: `<meta property="og:title" content="My Amazing Portfolio">\n<meta property="og:description" content="Check out my web development projects.">\n<meta property="og:image" content="https://mysite.com/thumbnail.jpg">\n<meta property="og:type" content="website">`,
          proTip: "Without og:image, platforms grab a random image from your page. Always define a specific 1200x630 thumbnail for professional sharing.",
          miniExercise: "Find a 'Meta Tags' preview tool online to visualize how your tags would appear on social media."
        },
        {
          id: "3.5",
          title: "Div vs. Span",
          concept: "When semantic tags don't fit, use generic containers. <div> is for blocks (new line), <span> is for inline text styling.",
          syntax: `<div>Block</div>\n<span>Inline</span>`,
          example: `<div class="card-container">\n  <p>Price: <span style="color: red; font-weight: bold;">$19.99</span></p>\n</div>`,
          proTip: "Treat <div> and <span> as last resorts. Always look for a semantic tag (<p>, <article>, <button>) first.",
          miniExercise: "Write a paragraph and wrap three words in <span> tags. Style them with red, blue, and bold font respectively."
        }
      ]
    },
    {
      id: 4,
      title: "Phase 4: Professional Standards",
      subtitle: "Expert",
      description: "Accessibility (ARIA), SEO, Performance, and the elite habits of top frontend engineers.",
      isLocked: false,
      lessons: [
        {
          id: "4.1",
          title: "Advanced Accessibility (ARIA & Alt)",
          concept: "HTML is accessible by default, but complex UI needs ARIA (Accessible Rich Internet Applications) attributes to bridge the gap for assistive technology.",
          syntax: `<img src="..." alt="Description">\n<button aria-label="Close">X</button>`,
          example: `<!-- GOOD: Screen reader says 'Visit our Facebook Page' -->\n<a href="https://facebook.com" aria-label="Visit our Facebook Page">\n  <img src="fb-icon.png" alt="" aria-hidden="true">\n</a>`,
          proTip: "If an image is purely decorative (like a background pattern), use alt='' (empty string). This tells screen readers to ignore it entirely instead of reading the filename.",
          miniExercise: "Find an icon-only button on a popular site. Inspect it to see if they use an aria-label."
        },
        {
          id: "4.2",
          title: "Performance Images (srcset & Lazy)",
          concept: "Images are heavy. Lazy loading defers off-screen images, while srcset delivers the right size based on the user's screen resolution.",
          syntax: `<img src="lo-res.jpg" srcset="hi-res.jpg 2x" loading="lazy">`,
          example: `<!-- Browser picks the best image based on width -->\n<img src="dog-500.jpg"\n     srcset="dog-500.jpg 500w, dog-1000.jpg 1000w"\n     sizes="(max-width: 600px) 480px, 800px"\n     alt="A happy golden retriever"\n     loading="lazy"\n     width="500" height="300">`,
          proTip: "Always include 'width' and 'height' attributes to prevent 'Layout Shift'. If you don't, text will jump around as images load, which hurts SEO.",
          miniExercise: "Write an img tag for a blog post footer that only loads when scrolled into view."
        },
        {
          id: "4.3",
          title: "The <picture> Tag",
          concept: "While srcset is for same-image resolution switching, <picture> is for 'Art Direction'—changing the image entirely for different screens (e.g. landscape vs square).",
          syntax: `<picture>\n  <source media="(min-width: 800px)" srcset="large.jpg">\n  <img src="small.jpg" alt="...">\n</picture>`,
          example: `<picture>\n  <source media="(min-width: 800px)" srcset="desktop-landscape.jpg">\n  <source media="(min-width: 400px)" srcset="tablet-portrait.jpg">\n  <img src="mobile-fallback.jpg" alt="Our new smart watch featured against a vibrant background.">\n</picture>`,
          proTip: "E-commerce sites use this to show close-up product details on mobile where a wide desktop shot would be too small to see.",
          miniExercise: "Define a <picture> element that uses a 'night-mode.jpg' source if the user's screen is small."
        },
        {
          id: "4.4",
          title: "Favicons & Manifests",
          concept: "Favicons aren't just one file anymore. We provide icons for browser tabs, mobile home screens (Apple/Android), and OS-level integration via manifests.",
          syntax: `<link rel="icon" href="/favicon.png">\n<link rel="manifest" href="/site.webmanifest">`,
          example: `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n<link rel="manifest" href="/site.webmanifest">`,
          proTip: "Don't craft these manually! Use a 'Favicon Generator' tool to output all 10+ required sizes and the JSON manifest file.",
          miniExercise: "Check the source code of your favorite web app (e.g. Slack or Spotify) to see their manifest link."
        },
        {
          id: "4.5",
          title: "Pro 'Anti-Patterns' to Avoid",
          concept: "Senior devs follow standards that improve the experience for everyone. Avoid 'Click Here' links, skipping heading levels, and using <div> for buttons.",
          syntax: `<!-- BAD --> <div onclick="...">Submit</div>\n<!-- GOOD --> <button>Submit</button>`,
          example: `<!-- BAD SEO/A11y -->\n<a href="/blog">Click here</a> to read about dogs.\n\n<!-- GOOD SEO/A11y -->\n<a href="/blog">Read our expert guide on dog training</a>.`,
          proTip: "Div buttons are a disaster for accessibility. They can't be reached via Tab key and don't respond to Enter/Space without complex custom JS.",
          miniExercise: "Audit a local business website. Can you find any 'Click Here' links? How would you fix them?"
        }
      ]
    }
  ],
  capstone: {
    title: "Project 'ChronoFit': Product Landing Page",
    description: "Build a professional, high-performance, and fully accessible landing page for the fictional 'ChronoFit' smart-watch.",
    requirements: [
      "Strict HTML5 Boilerplate with full <head> metadata (SEO & Social)",
      "Semantic 'Holy Grail' Layout (header, nav, main, section, article, aside, footer)",
      "Interactive pre-order <form> with Type validation, Radio buttons, and Number inputs",
      "Technical Specs <table> using semantic <thead> and scope attributes",
      "Art Direction using <picture> for the Hero image",
      "Performance optimization with lazy-loading and explicit image dimensions",
      "Expert Accessibility: ARIA labels on social icons and correct heading hierarchy"
    ]
  }
};