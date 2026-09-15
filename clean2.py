import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix logo
html = html.replace('href="/logo.png"', 'href="images/logo.png"')

# Fix font
html = html.replace('href="/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2"', 'href="fonts/83afe278b6a6bb3c-s.p.3a6ba036.woff2"')

# In CSS, the font is referenced. We need to check if the CSS references it and replace it there as well.
html = re.sub(r'href="/_next/[^"]*\.js"', '', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
