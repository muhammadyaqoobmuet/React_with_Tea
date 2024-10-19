1. document.body.scrollTop
What it is: This property returns the number of pixels that the document's body element is currently scrolled vertically.
When to use it: Historically, this was commonly used to get the vertical scroll position of the page, but it’s now less reliable due to cross-browser inconsistencies. Modern browsers prefer using document.documentElement.scrollTop.
2. document.documentElement.scrollTop
What it is: This property returns the number of pixels that the document is scrolled vertically within the viewport. The documentElement typically refers to the root element of the document (usually the <html> element).
When to use it: This is the most common and reliable way to get the vertical scroll position of a page in modern browsers. It tells you how far the top of the content has been scrolled out of view.
3. document.documentElement.scrollHeight
What it is: This property returns the total height of the content, including content not visible on the screen due to overflow. Essentially, it represents the full height of the document (including parts hidden by scrolling).
When to use it: Use this when you need to know the total height of the document, including the portion that might be scrolled off-screen. It's useful for calculating things like the total scrollable area or determining if you've reached the bottom of the page.
4. document.documentElement.clientHeight
What it is: This property returns the height of the visible part of the document (the viewport height). It excludes the scrollbar, if present, and any borders, padding, or margins.
When to use it: Use this when you need to know the height of the viewport, i.e., the area of the page currently visible to the user without scrolling. It’s often used in conjunction with scrollTop and scrollHeight to calculate how far down the page the user has scrolled or to determine if they've reached the bottom of the page.