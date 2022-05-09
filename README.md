# Lighouse ci bug report

https://github.com/GoogleChrome/lighthouse

issue: https://github.com/GoogleChrome/lighthouse-ci/issues/789

using puppeteer to intercept network request breaks lighthouse reports

# to test run `npm install` and `npm start`


full log

```
> rm -rf ./lhci_reports && lhci autorun --config=.lighthouserc.js || echo "LHCI failed!"

✅  .lighthouseci/ directory writable
✅  Configuration file found
✅  Chrome installation found
Healthcheck passed!

Running Lighthouse 1 time(s) on https://google.com
Run #1...failed!
Error: Lighthouse failed with exit code 1
    at ChildProcess.<anonymous> (/Users/ticaasd/Desktop/Workspace/lighthouse-ci-bad/node_modules/@lhci/cli/src/collect/node-runner.js:120:21)
    at ChildProcess.emit (node:events:520:28)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:291:12)
{
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/101.0.4951.54 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "hostUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/101.0.4951.54 Safari/537.36",
    "benchmarkIndex": 1310.5,
    "credits": {
      "axe-core": "4.2.1"
    }
  },
  "lighthouseVersion": "8.0.0",
  "fetchTime": "2022-05-09T06:30:36.732Z",
  "requestedUrl": "https://google.com/",
  "finalUrl": "https://www.google.com/",
  "runWarnings": [
    "The page may not be loading as expected because your test URL (https://google.com/) was redirected to https://www.google.com/. Try testing the second URL directly."
  ],
  "runtimeError": {
    "code": "PROTOCOL_TIMEOUT",
    "message": "Waiting for DevTools protocol response has exceeded the allotted time. (Method: CSS.enable)"
  },
  "audits": {
    "is-on-https": {
      "id": "is-on-https",
      "title": "Uses HTTPS",
      "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "redirects-http": {
      "id": "redirects-http",
      "title": "Redirects HTTP traffic to HTTPS",
      "description": "If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS in order to enable secure web features for all your users. [Learn more](https://web.dev/redirects-http/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "service-worker": {
      "id": "service-worker",
      "title": "Does not register a service worker that controls page and `start_url`",
      "description": "The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://web.dev/service-worker/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "Add a `<meta name=\"viewport\">` tag to optimize your app for mobile screens. [Learn more](https://web.dev/viewport/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      "score": 0.51,
      "scoreDisplayMode": "numeric",
      "numericValue": 2971.8109999999997,
      "numericUnit": "millisecond",
      "displayValue": "3.0 s"
    },
    "largest-contentful-paint": {
      "id": "largest-contentful-paint",
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": 0.7,
      "scoreDisplayMode": "numeric",
      "numericValue": 3290.1264999999994,
      "numericUnit": "millisecond",
      "displayValue": "3.3 s"
    
Mon, 09 May 2022 06:30:36 GMT config:warn IFrameElements gatherer requested, however no audit requires it.
Mon, 09 May 2022 06:30:36 GMT config:warn FormElements gatherer requested, however no audit requires it.
Mon, 09 May 2022 06:30:36 GMT status Connecting to browser
Mon, 09 May 2022 06:30:36 GMT status Resetting state with about:blank
Mon, 09 May 2022 06:30:36 GMT status Benchmarking machine
Mon, 09 May 2022 06:30:37 GMT status Initializing…
Mon, 09 May 2022 06:30:37 GMT status Running defaultPass pass CSSUsage, JsUsage, ViewportDimensions, ConsoleMessages, AnchorElements, ImageElements, LinkElements, MetaElements, ScriptElements, IFrameElements, FormElements, MainDocumentContent, GlobalListeners, AppCacheManifest, Doctype, DOMStats, OptimizedImages, PasswordInputsWithPreventedPaste, ResponseCompression, TagsBlockingFirstPaint, FontSize, EmbeddedContent, RobotsTxt, TapTargets, Accessibility, TraceElements, InspectorIssues, SourceMaps, FullPageScreenshot
Mon, 09 May 2022 06:30:37 GMT status Resetting state with about:blank
Mon, 09 May 2022 06:30:38 GMT status Cleaning browser cache
Mon, 09 May 2022 06:30:38 GMT status Preparing network conditions
Mon, 09 May 2022 06:30:38 GMT status Beginning devtoolsLog and trace
Mon, 09 May 2022 06:30:38 GMT status Loading page & waiting for onload
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: CSSUsage
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: JsUsage
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: ViewportDimensions
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: ConsoleMessages
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: AnchorElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: ImageElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: LinkElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: MetaElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: ScriptElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: IFrameElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: FormElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: MainDocumentContent
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: GlobalListeners
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: AppCacheManifest
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: Doctype
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: DOMStats
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: OptimizedImages
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: PasswordInputsWithPreventedPaste
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: ResponseCompression
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: TagsBlockingFirstPaint
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: FontSize
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: EmbeddedContent
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: RobotsTxt
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: TapTargets
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: Accessibility
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: TraceElements
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: InspectorIssues
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: SourceMaps
Mon, 09 May 2022 06:30:42 GMT status Gathering in-page: FullPageScreenshot
Mon, 09 May 2022 06:30:42 GMT status Gathering trace
Mon, 09 May 2022 06:30:42 GMT status Gathering devtoolsLog & network records
Mon, 09 May 2022 06:30:42 GMT status Gathering: CSSUsage
Mon, 09 May 2022 06:31:12 GMT status Gathering: JsUsage
Mon, 09 May 2022 06:31:12 GMT status Gathering: ViewportDimensions
Mon, 09 May 2022 06:31:12 GMT status Gathering: ConsoleMessages
Mon, 09 May 2022 06:31:12 GMT status Gathering: AnchorElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: ImageElements
Mon, 09 May 2022 06:31:12 GMT method <= browser ERR:error CSS.getMatchedStylesForNode 
Mon, 09 May 2022 06:31:12 GMT status Gathering: LinkElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: MetaElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: ScriptElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: IFrameElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: FormElements
Mon, 09 May 2022 06:31:12 GMT status Gathering: MainDocumentContent
Mon, 09 May 2022 06:31:12 GMT status Gathering: GlobalListeners
Mon, 09 May 2022 06:31:12 GMT status Gathering: AppCacheManifest
Mon, 09 May 2022 06:31:12 GMT status Gathering: Doctype
Mon, 09 May 2022 06:31:12 GMT status Gathering: DOMStats
Mon, 09 May 2022 06:31:12 GMT status Gathering: OptimizedImages
Mon, 09 May 2022 06:31:12 GMT status Gathering: PasswordInputsWithPreventedPaste
Mon, 09 May 2022 06:31:12 GMT status Gathering: ResponseCompression
Mon, 09 May 2022 06:31:12 GMT status Gathering: TagsBlockingFirstPaint
Mon, 09 May 2022 06:31:12 GMT status Gathering: FontSize
Mon, 09 May 2022 06:31:12 GMT status Gathering: EmbeddedContent
Mon, 09 May 2022 06:31:12 GMT status Gathering: RobotsTxt
Mon, 09 May 2022 06:31:12 GMT status Gathering: TapTargets
Mon, 09 May 2022 06:31:13 GMT status Gathering: Accessibility
Mon, 09 May 2022 06:31:16 GMT status Gathering: TraceElements
Mon, 09 May 2022 06:31:16 GMT status Gathering: InspectorIssues
Mon, 09 May 2022 06:31:16 GMT status Gathering: SourceMaps
Mon, 09 May 2022 06:31:16 GMT status Gathering: FullPageScreenshot
Mon, 09 May 2022 06:31:16 GMT status Populate base artifacts
Mon, 09 May 2022 06:31:16 GMT status Get webapp manifest
Mon, 09 May 2022 06:31:16 GMT status Get webapp installability errors
Mon, 09 May 2022 06:31:16 GMT status Collect stacks
Mon, 09 May 2022 06:31:16 GMT status Running offlinePass pass ServiceWorker
Mon, 09 May 2022 06:31:16 GMT status Resetting state with about:blank
Mon, 09 May 2022 06:31:16 GMT status Preparing network conditions
Mon, 09 May 2022 06:31:16 GMT status Beginning devtoolsLog and trace
Mon, 09 May 2022 06:31:16 GMT status Loading page & waiting for onload
Mon, 09 May 2022 06:31:17 GMT status Gathering in-page: ServiceWorker
Mon, 09 May 2022 06:31:17 GMT status Gathering devtoolsLog & network records
Mon, 09 May 2022 06:31:17 GMT status Gathering: ServiceWorker
Mon, 09 May 2022 06:31:17 GMT status Running redirectPass pass HTTPRedirect
Mon, 09 May 2022 06:31:17 GMT status Resetting state with about:blank
Mon, 09 May 2022 06:31:17 GMT status Preparing network conditions
Mon, 09 May 2022 06:31:17 GMT status Beginning devtoolsLog and trace
Mon, 09 May 2022 06:31:17 GMT status Loading page & waiting for onload
Mon, 09 May 2022 06:31:17 GMT status Gathering in-page: HTTPRedirect
Mon, 09 May 2022 06:31:17 GMT status Gathering devtoolsLog & network records
Mon, 09 May 2022 06:31:17 GMT status Gathering: HTTPRedirect
Mon, 09 May 2022 06:31:17 GMT status Disconnecting from browser...
Mon, 09 May 2022 06:31:17 GMT status Analyzing and running audits...
Mon, 09 May 2022 06:31:17 GMT status Auditing: Uses HTTPS
Mon, 09 May 2022 06:31:17 GMT status Auditing: Redirects HTTP traffic to HTTPS
Mon, 09 May 2022 06:31:17 GMT status Auditing: Registers a service worker that controls page and `start_url`
Mon, 09 May 2022 06:31:17 GMT status Auditing: Has a `<meta name="viewport">` tag with `width` or `initial-scale`
Mon, 09 May 2022 06:31:17 GMT status Auditing: First Contentful Paint
Mon, 09 May 2022 06:31:17 GMT status Auditing: Largest Contentful Paint
Mon, 09 May 2022 06:31:18 GMT status Auditing: First Meaningful Paint
Mon, 09 May 2022 06:31:18 GMT status Auditing: Speed Index
Mon, 09 May 2022 06:31:18 GMT status Auditing: Screenshot Thumbnails
Mon, 09 May 2022 06:31:18 GMT status Auditing: Final Screenshot
Mon, 09 May 2022 06:31:18 GMT status Auditing: Total Blocking Time
Mon, 09 May 2022 06:31:18 GMT status Auditing: Max Potential First Input Delay
Mon, 09 May 2022 06:31:18 GMT status Auditing: Cumulative Layout Shift
Mon, 09 May 2022 06:31:18 GMT status Auditing: No browser errors logged to the console
Mon, 09 May 2022 06:31:18 GMT status Auditing: Initial server response time was short
Mon, 09 May 2022 06:31:18 GMT status Auditing: Time to Interactive
Mon, 09 May 2022 06:31:18 GMT status Auditing: User Timing marks and measures
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid chaining critical requests
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid multiple page redirects
Mon, 09 May 2022 06:31:18 GMT status Auditing: Web app manifest and service worker meet the installability requirements
Mon, 09 May 2022 06:31:18 GMT status Auditing: Provides a valid `apple-touch-icon`
Mon, 09 May 2022 06:31:18 GMT status Auditing: Configured for a custom splash screen
Mon, 09 May 2022 06:31:18 GMT status Auditing: Sets a theme color for the address bar.
Mon, 09 May 2022 06:31:18 GMT status Auditing: Manifest has a maskable icon
Mon, 09 May 2022 06:31:18 GMT status Auditing: Content is sized correctly for the viewport
Mon, 09 May 2022 06:31:18 GMT status Auditing: Displays images with correct aspect ratio
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit image-aspect-ratio, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Serves images with appropriate resolution
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit image-size-responsive, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Fonts with `font-display: optional` are preloaded
Mon, 09 May 2022 06:31:18 GMT Runner:warn CSSUsage gatherer, required by audit preload-fonts, encountered an error: PROTOCOL_TIMEOUT
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids deprecated APIs
Mon, 09 May 2022 06:31:18 GMT status Auditing: Minimizes main-thread work
Mon, 09 May 2022 06:31:18 GMT status Auditing: JavaScript execution time
Mon, 09 May 2022 06:31:18 GMT status Auditing: Preload key requests
Mon, 09 May 2022 06:31:18 GMT status Auditing: Preconnect to required origins
Mon, 09 May 2022 06:31:18 GMT status Auditing: All text remains visible during webfont loads
Mon, 09 May 2022 06:31:18 GMT Runner:warn CSSUsage gatherer, required by audit font-display, encountered an error: PROTOCOL_TIMEOUT
Mon, 09 May 2022 06:31:18 GMT status Auditing: Diagnostics
Mon, 09 May 2022 06:31:18 GMT status Auditing: Network Requests
Mon, 09 May 2022 06:31:18 GMT status Auditing: Network Round Trip Times
Mon, 09 May 2022 06:31:18 GMT status Auditing: Server Backend Latencies
Mon, 09 May 2022 06:31:18 GMT status Auditing: Tasks
Mon, 09 May 2022 06:31:18 GMT status Auditing: Metrics
Mon, 09 May 2022 06:31:18 GMT status Auditing: Performance budget
Mon, 09 May 2022 06:31:18 GMT status Auditing: Timing budget
Mon, 09 May 2022 06:31:18 GMT status Auditing: Keep request counts low and transfer sizes small
Mon, 09 May 2022 06:31:18 GMT status Auditing: Minimize third-party usage
Mon, 09 May 2022 06:31:18 GMT status Auditing: Lazy load third-party resources with facades
Mon, 09 May 2022 06:31:18 GMT status Auditing: Largest Contentful Paint element
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid large layout shifts
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid long main-thread tasks
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids `unload` event listeners
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid non-composited animations
Mon, 09 May 2022 06:31:18 GMT status Auditing: Image elements have explicit `width` and `height`
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit unsized-images, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Page has valid source maps
Mon, 09 May 2022 06:31:18 GMT status Auditing: Preload Largest Contentful Paint image
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit preload-lcp-image, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Ensure CSP is effective against XSS attacks
Mon, 09 May 2022 06:31:18 GMT status Auditing: Full-page screenshot
Mon, 09 May 2022 06:31:18 GMT status Auditing: Script Treemap Data
Mon, 09 May 2022 06:31:18 GMT status Auditing: Site works cross-browser
Mon, 09 May 2022 06:31:18 GMT status Auditing: Page transitions don't feel like they block on the network
Mon, 09 May 2022 06:31:18 GMT status Auditing: Each page has a URL
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[accesskey]` values are unique
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[aria-*]` attributes match their roles
Mon, 09 May 2022 06:31:18 GMT status Auditing: `button`, `link`, and `menuitem` elements have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[aria-hidden="true"]` is not present on the document `<body>`
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[aria-hidden="true"]` elements do not contain focusable descendents
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA input fields have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA `meter` elements have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA `progressbar` elements have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[role]`s have all required `[aria-*]` attributes
Mon, 09 May 2022 06:31:18 GMT status Auditing: Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[role]`s are contained by their required parent element
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[role]` values are valid
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA toggle fields have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA `tooltip` elements have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA `treeitem` elements have accessible names
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[aria-*]` attributes have valid values
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[aria-*]` attributes are valid and not misspelled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Buttons have an accessible name
Mon, 09 May 2022 06:31:18 GMT status Auditing: The page contains a heading, skip link, or landmark region
Mon, 09 May 2022 06:31:18 GMT status Auditing: Background and foreground colors have a sufficient contrast ratio
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.
Mon, 09 May 2022 06:31:18 GMT status Auditing: Definition list items are wrapped in `<dl>` elements
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document has a `<title>` element
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[id]` attributes on active, focusable elements are unique
Mon, 09 May 2022 06:31:18 GMT status Auditing: ARIA IDs are unique
Mon, 09 May 2022 06:31:18 GMT status Auditing: No form fields have multiple labels
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<frame>` or `<iframe>` elements have a title
Mon, 09 May 2022 06:31:18 GMT status Auditing: Heading elements appear in a sequentially-descending order
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<html>` element has a `[lang]` attribute
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<html>` element has a valid value for its `[lang]` attribute
Mon, 09 May 2022 06:31:18 GMT status Auditing: Image elements have `[alt]` attributes
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<input type="image">` elements have `[alt]` text
Mon, 09 May 2022 06:31:18 GMT status Auditing: Form elements have associated labels
Mon, 09 May 2022 06:31:18 GMT status Auditing: Links have a discernible name
Mon, 09 May 2022 06:31:18 GMT status Auditing: Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).
Mon, 09 May 2022 06:31:18 GMT status Auditing: List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements
Mon, 09 May 2022 06:31:18 GMT status Auditing: The document does not use `<meta http-equiv="refresh">`
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5.
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<object>` elements have `[alt]` text
Mon, 09 May 2022 06:31:18 GMT status Auditing: No element has a `[tabindex]` value greater than 0
Mon, 09 May 2022 06:31:18 GMT status Auditing: Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<th>` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe.
Mon, 09 May 2022 06:31:18 GMT status Auditing: `[lang]` attributes have a valid value
Mon, 09 May 2022 06:31:18 GMT status Auditing: `<video>` elements contain a `<track>` element with `[kind="captions"]`
Mon, 09 May 2022 06:31:18 GMT status Auditing: Custom controls have associated labels
Mon, 09 May 2022 06:31:18 GMT status Auditing: Custom controls have ARIA roles
Mon, 09 May 2022 06:31:18 GMT status Auditing: User focus is not accidentally trapped in a region
Mon, 09 May 2022 06:31:18 GMT status Auditing: Interactive controls are keyboard focusable
Mon, 09 May 2022 06:31:18 GMT status Auditing: Interactive elements indicate their purpose and state
Mon, 09 May 2022 06:31:18 GMT status Auditing: The page has a logical tab order
Mon, 09 May 2022 06:31:18 GMT status Auditing: The user's focus is directed to new content added to the page
Mon, 09 May 2022 06:31:18 GMT status Auditing: Offscreen content is hidden from assistive technology
Mon, 09 May 2022 06:31:18 GMT status Auditing: HTML5 landmark elements are used to improve navigation
Mon, 09 May 2022 06:31:18 GMT status Auditing: Visual order on the page follows DOM order
Mon, 09 May 2022 06:31:18 GMT status Auditing: Uses efficient cache policy on static assets
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids enormous network payloads
Mon, 09 May 2022 06:31:18 GMT status Auditing: Defer offscreen images
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit offscreen-images, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Eliminate render-blocking resources
Mon, 09 May 2022 06:31:18 GMT Runner:warn CSSUsage gatherer, required by audit render-blocking-resources, encountered an error: PROTOCOL_TIMEOUT
Mon, 09 May 2022 06:31:18 GMT status Auditing: Minify CSS
Mon, 09 May 2022 06:31:18 GMT Runner:warn CSSUsage gatherer, required by audit unminified-css, encountered an error: PROTOCOL_TIMEOUT
Mon, 09 May 2022 06:31:18 GMT status Auditing: Minify JavaScript
Mon, 09 May 2022 06:31:18 GMT status Auditing: Reduce unused CSS
Mon, 09 May 2022 06:31:18 GMT Runner:warn CSSUsage gatherer, required by audit unused-css-rules, encountered an error: PROTOCOL_TIMEOUT
Mon, 09 May 2022 06:31:18 GMT status Auditing: Reduce unused JavaScript
Mon, 09 May 2022 06:31:18 GMT status Auditing: Serve images in next-gen formats
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit modern-image-formats, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Efficiently encode images
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit uses-optimized-images, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Enable text compression
Mon, 09 May 2022 06:31:18 GMT status Auditing: Properly size images
Mon, 09 May 2022 06:31:18 GMT Runner:warn ImageElements gatherer, required by audit uses-responsive-images, encountered an error: Protocol error (CSS.getMatchedStylesForNode): CSS agent was not enabled
Mon, 09 May 2022 06:31:18 GMT status Auditing: Use video formats for animated content
Mon, 09 May 2022 06:31:18 GMT status Auditing: Remove duplicate modules in JavaScript bundles
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoid serving legacy JavaScript to modern browsers
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids Application Cache
Mon, 09 May 2022 06:31:18 GMT status Auditing: Page has the HTML doctype
Mon, 09 May 2022 06:31:18 GMT status Auditing: Properly defines charset
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids an excessive DOM size
Mon, 09 May 2022 06:31:18 GMT status Auditing: Links to cross-origin destinations are safe
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids requesting the geolocation permission on page load
Mon, 09 May 2022 06:31:18 GMT status Auditing: No issues in the `Issues` panel in Chrome Devtools
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids `document.write()`
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids front-end JavaScript libraries with known security vulnerabilities
Mon, 09 May 2022 06:31:18 GMT status Auditing: Detected JavaScript libraries
Mon, 09 May 2022 06:31:18 GMT status Auditing: Avoids requesting the notification permission on page load
Mon, 09 May 2022 06:31:18 GMT status Auditing: Allows users to paste into password fields
Mon, 09 May 2022 06:31:18 GMT status Auditing: Use HTTP/2
Mon, 09 May 2022 06:31:18 GMT status Auditing: Uses passive listeners to improve scrolling performance
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document has a meta description
Mon, 09 May 2022 06:31:18 GMT status Auditing: Page has successful HTTP status code
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document uses legible font sizes
Mon, 09 May 2022 06:31:18 GMT status Auditing: Links have descriptive text
Mon, 09 May 2022 06:31:18 GMT status Auditing: Links are crawlable
Mon, 09 May 2022 06:31:18 GMT status Auditing: Page isn’t blocked from indexing
Mon, 09 May 2022 06:31:18 GMT status Auditing: robots.txt is valid
Mon, 09 May 2022 06:31:18 GMT status Auditing: Tap targets are sized appropriately
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document has a valid `hreflang`
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document avoids plugins
Mon, 09 May 2022 06:31:18 GMT status Auditing: Document has a valid `rel=canonical`
Mon, 09 May 2022 06:31:18 GMT status Auditing: Structured data is valid
Mon, 09 May 2022 06:31:18 GMT status Generating results...
Runtime error encountered: Waiting for DevTools protocol response has exceeded the allotted time. (Method: CSS.enable)

LHCI failed!

Process finished with exit code 0



```
